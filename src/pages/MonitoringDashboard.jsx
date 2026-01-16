import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockStudents as initialStudents } from '../data/students';
import { coursesData } from '../data/courses';
import {
    FaUsers, FaMoneyBillWave, FaBookOpen, FaChartPie,
    FaSignOutAlt, FaShieldAlt, FaDatabase, FaHome
} from 'react-icons/fa';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';

const MonitoringDashboard = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalStudents: 0,
        totalRevenue: 0,
        activeCourses: 0,
        paidCount: 0,


        unpaidCount: 0,
        courseDistribution: {},
        groupPerformance: [],
        paymentHistory: [],
        students: [], // Added raw students
        groups: []    // Added raw groups
    });

    const [selectedMonth, setSelectedMonth] = useState('Dekabr');
    const monthsList = ['Dekabr', 'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr'];

    useEffect(() => {
        const session = localStorage.getItem('monitorSession');
        if (!session) { navigate('/monitoring'); return; }

        const studentsRef = ref(db, 'students');
        const groupsRef = ref(db, 'groups');

        onValue(studentsRef, (studentSnapshot) => {
            const data = studentSnapshot.val() || initialStudents;
            const students = Array.isArray(data) ? data : Object.values(data);

            onValue(groupsRef, (groupSnapshot) => {
                const gData = groupSnapshot.val() || coursesData.map(c => ({
                    id: `GRP${c.id}`,
                    name: `${c.title} - ${c.instructor}`,
                    courseId: c.id,
                    courseTitle: c.title,
                    teacherName: c.instructor,
                    revenue: 0
                }));
                const groups = Array.isArray(gData) ? gData : Object.values(gData);

                const paid = students.filter(s => s.status === 'paid');
                const dist = {};
                students.forEach(s => { dist[s.course] = (dist[s.course] || 0) + 1; });

                const totalRev = students.reduce((acc, s) => acc + (parseInt(s.totalPaid) || 0), 0);

                // Fetch History for Monthly Stats
                const historyRef = ref(db, 'history');
                onValue(historyRef, (historySnapshot) => {
                    const hData = historySnapshot.val();
                    const historyList = hData ? Object.values(hData) : [];

                    setStats({
                        totalStudents: students.length,
                        totalRevenue: totalRev,
                        activeCourses: coursesData.length,
                        paidCount: paid.length,
                        unpaidCount: students.length - paid.length,
                        courseDistribution: dist,
                        unpaidCount: students.length - paid.length,
                        courseDistribution: dist,
                        groupPerformance: groups, // Store raw groups, we'll calc revenue in render
                        paymentHistory: historyList.sort((a, b) => b.timestamp - a.timestamp),
                        students: students,
                        groups: groups
                    });
                });
            });
        });
    }, [navigate]);

    const monthlyPayments = stats.paymentHistory.filter(h => h.month === selectedMonth);
    const monthlyTotal = monthlyPayments.reduce((acc, curr) => acc + (parseInt(curr.amount) || 0), 0);
    const allTimeTotal = stats.paymentHistory.reduce((acc, curr) => acc + (parseInt(curr.amount) || 0), 0);

    // Calculate Dynamic Monthly Group Revenue
    const monthlyGroupStats = stats.groups.map(g => {
        // Find revenue for this group in this month
        // 1. Find students in this group
        // 2. Find payments by these students in this month
        const groupRevenue = monthlyPayments.reduce((acc, pay) => {
            const student = stats.students.find(s => s.id === pay.studentId);
            if (student && student.groupId === g.id) {
                return acc + (parseInt(pay.amount) || 0);
            }
            return acc;
        }, 0);

        return { ...g, monthlyRevenue: groupRevenue };
    }).sort((a, b) => b.monthlyRevenue - a.monthlyRevenue);

    return (
        <div className="monitoring-page" style={pageStyle}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <header style={headerStyle}>
                    <div>
                        <h1 style={titleStyle}>{t.monitoring.title.toUpperCase()}</h1>
                        <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem' }}>{t.monitoring.subtitle}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <select
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            style={{
                                backgroundColor: '#1e293b',
                                color: 'white',
                                border: '1px solid #334155',
                                padding: '0.6rem 1rem',
                                borderRadius: '4px',
                                outline: 'none',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '0.85rem'
                            }}
                        >
                            {monthsList.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                        <button style={logoutBtn} onClick={() => navigate('/')}>
                            <FaHome /> {t.nav.home}
                        </button>
                        <button style={logoutBtn} onClick={() => { localStorage.removeItem('monitorSession'); navigate('/monitoring'); }}>
                            <FaSignOutAlt /> {t.admin.close}
                        </button>
                    </div>
                </header>

                <div style={topGrid}>
                    <QuickStat label={t.monitoring.stats.totalStudents} value={stats.totalStudents} color="#f1f5f9" icon={<FaUsers />} />
                    <QuickStat label={`${t.monitoring.stats.monthlyRevenue || 'Oylik Tushum'} (${selectedMonth})`} value={new Intl.NumberFormat('uz-UZ').format(monthlyTotal)} sub="UZS" color="#10b981" icon={<FaMoneyBillWave />} />
                    <QuickStat label={t.monitoring.stats.totalRevenue} value={new Intl.NumberFormat('uz-UZ').format(allTimeTotal)} sub="UZS" color="#3b82f6" icon={<FaDatabase />} />
                    <QuickStat label={t.monitoring.stats.paidStudents} value={stats.paidCount} color="#10b981" icon={<FaChartPie />} />
                    <QuickStat label={t.monitoring.stats.unpaidStudents} value={stats.unpaidCount} color="#ef4444" icon={<FaShieldAlt />} />
                </div>


                <div style={panel}>
                    <h3 style={panelTitle}><FaMoneyBillWave /> {t.admin?.monthlyReport || 'Oylik Hisobot'} ({selectedMonth})</h3>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8', textAlign: 'left' }}>
                                    <th style={{ padding: '0.75rem' }}>Guruh / O'quvchi</th>
                                    <th style={{ padding: '0.75rem' }}>To'lov Foizi / Kurs</th>
                                    <th style={{ padding: '0.75rem' }}>Sana</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'right' }}>Summa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(() => {
                                    // Group payments by Group ID
                                    const paymentsByGroup = {};

                                    // 1. Initialize groups including "No Group"
                                    // We need to know ALL students distribution first to get total counts correct
                                    const studentsByGroup = {};
                                    stats.students.forEach(s => {
                                        const gId = s.groupId || 'nogroup';
                                        if (!studentsByGroup[gId]) studentsByGroup[gId] = 0;
                                        studentsByGroup[gId]++;
                                    });

                                    // 2. Initialize paymentsByGroup with ALL active groups
                                    stats.groups.forEach(g => {
                                        const gId = g.id;
                                        paymentsByGroup[gId] = {
                                            id: gId,
                                            name: g.name,
                                            payments: [],
                                            totalAmount: 0,
                                            totalStudents: studentsByGroup[gId] || 0,
                                            paidCount: 0,
                                            paidStudentIds: new Set()
                                        };
                                    });

                                    monthlyPayments.forEach(p => {
                                        const student = stats.students.find(s => s.id === p.studentId);

                                        let groupId = 'nogroup';
                                        let groupName = 'Guruhsiz (Unassigned)';
                                        let isDeleted = false;

                                        // Resolve Student Name if missing in payment (e.g. old record)
                                        if (!p.studentName && student) {
                                            p.studentName = student.name;
                                        }

                                        if (!student) {
                                            groupId = 'deleted';
                                            groupName = 'O\'chirilgan O\'quvchilar';
                                            isDeleted = true;
                                        } else if (student.groupId) {
                                            groupId = student.groupId;
                                            const gInfo = stats.groups.find(g => g.id === groupId);

                                            if (!gInfo) {
                                                // Group is deleted. Try to get name from student record if available, else generic.
                                                const oldName = student.groupName ? `${student.groupName} (O'chirilgan)` : 'O\'chirilgan Guruh';
                                                groupName = oldName;
                                            }
                                        }

                                        if (!paymentsByGroup[groupId]) {
                                            let totalStuds = studentsByGroup[groupId] || 0;

                                            paymentsByGroup[groupId] = {
                                                id: groupId,
                                                name: groupName,
                                                payments: [],
                                                totalAmount: 0,
                                                totalStudents: totalStuds,
                                                paidCount: 0,
                                                paidStudentIds: new Set()
                                            };
                                        }

                                        paymentsByGroup[groupId].payments.push(p);
                                        paymentsByGroup[groupId].totalAmount += (parseInt(p.amount) || 0);

                                        if (!paymentsByGroup[groupId].paidStudentIds.has(p.studentId)) {
                                            paymentsByGroup[groupId].paidCount += 1;
                                            paymentsByGroup[groupId].paidStudentIds.add(p.studentId);

                                            if (isDeleted) {
                                                paymentsByGroup[groupId].totalStudents += 1;
                                            }
                                        }
                                    });

                                    const sortedGroups = Object.values(paymentsByGroup).sort((a, b) => b.totalAmount - a.totalAmount);

                                    return sortedGroups.length > 0 ? sortedGroups.map((group) => (
                                        <React.Fragment key={group.id}>
                                            <tr
                                                style={{ borderBottom: '1px solid #1e293b', cursor: 'pointer', backgroundColor: '#1e293b' }}
                                                onClick={() => {
                                                    const el = document.getElementById(`group-details-${group.id}`);
                                                    if (el) el.style.display = el.style.display === 'none' ? 'table-row' : 'none';
                                                }}
                                            >
                                                <td style={{ padding: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>▶</span> {group.name}
                                                </td>
                                                <td style={{ padding: '1rem', color: '#cbd5e1' }}>
                                                    {group.paidCount} / {group.totalStudents} ({group.totalStudents > 0 ? Math.round((group.paidCount / group.totalStudents) * 100) : 0}%)
                                                </td>
                                                <td style={{ padding: '1rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                                                    {/* Date column placeholder or empty for group row */}
                                                </td>
                                                <td style={{ padding: '1rem', textAlign: 'right', color: '#10b981', fontWeight: 'bold' }}>
                                                    {new Intl.NumberFormat('uz-UZ').format(group.totalAmount)}
                                                </td>
                                            </tr>
                                            <tr id={`group-details-${group.id}`} style={{ display: 'none', backgroundColor: '#0f172a' }}>
                                                <td colSpan="4" style={{ padding: 0 }}>
                                                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                                        <tbody>
                                                            {group.payments.map((p, idx) => (
                                                                <tr key={idx} style={{ borderBottom: '1px dashed #334155' }}>
                                                                    <td style={{ padding: '0.75rem 0.75rem 0.75rem 2rem', fontWeight: '500', fontSize: '0.8rem' }}>
                                                                        {p.studentName || <span style={{ color: '#ef4444', fontStyle: 'italic' }}>O'chirilgan (ID: {p.studentId})</span>}
                                                                    </td>
                                                                    <td style={{ padding: '0.75rem', color: '#64748b', fontSize: '0.75rem' }}>{p.course || '-'}</td>
                                                                    <td style={{ padding: '0.75rem', color: '#64748b', fontSize: '0.75rem' }}>{p.date}</td>
                                                                    <td style={{ padding: '0.75rem', textAlign: 'right', color: '#10b981', fontSize: '0.8rem' }}>
                                                                        {new Intl.NumberFormat('uz-UZ').format(p.amount)}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
                                                Ushbu oy uchun to'lovlar mavjud emas
                                            </td>
                                        </tr>
                                    );
                                })()}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={mainLayout}>
                    <div style={panel}>
                        <h3 style={panelTitle}><FaDatabase /> {t.admin.groupRevenue}</h3>
                        <div style={distList}>
                            {monthlyGroupStats.map((group) => (
                                <div key={group.id} style={distItem}>
                                    <div style={distHeader}>
                                        <span style={distName}>{group.name}</span>
                                        <span style={{ ...distValue, color: '#10b981' }}>{new Intl.NumberFormat('uz-UZ').format(group.monthlyRevenue || 0)} UZS</span>
                                    </div>
                                    <div style={progBarBg}>
                                        <div style={{ ...progBar, width: `${stats.totalRevenue > 0 ? ((group.monthlyRevenue || 0) / (monthlyTotal || 1)) * 100 : 0}%`, backgroundColor: '#10b981' }}></div>
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '4px' }}>{t.admin.teacher}: {group.teacherName}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={panel}>
                        <h3 style={panelTitle}><FaBookOpen /> {t.monitoring.charts.studentDist}</h3>
                        <div style={distList}>
                            {Object.entries(stats.courseDistribution).map(([course, count]) => (
                                <div key={course} style={distItem}>
                                    <div style={distHeader}>
                                        <span style={distName}>{course}</span>
                                        <span style={distValue}>{count} {t.admin.groupStudents}</span>
                                    </div>
                                    <div style={progBarBg}>
                                        <div style={{ ...progBar, width: `${stats.totalStudents > 0 ? (count / stats.totalStudents) * 100 : 0}%`, backgroundColor: 'var(--primary)' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

// Sub-components
const QuickStat = ({ label, value, sub, color, icon }) => (
    <div style={card}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={cardLabel}>{label}</div>
            <div style={{ color: color || '#64748b', fontSize: '1.25rem' }}>{icon}</div>
        </div>
        <div style={{ ...cardValue, color: color || '#f8fafc' }}>{value} <span style={cardSub}>{sub}</span></div>
    </div>
);

// Styles
const pageStyle = {
    backgroundColor: '#0a0a0a',
    color: '#e2e8f0',
    minHeight: '100vh',
    padding: '2rem 0',
    fontFamily: "'Inter', 'JetBrains Mono', monospace",
    letterSpacing: '-0.2px'
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2.5rem',
    borderBottom: '1px solid #1e293b',
    paddingBottom: '1.5rem'
};

const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#f1f5f9',
    margin: 0
};

const logoutBtn = {
    backgroundColor: '#1e293b',
    border: 'none',
    color: '#94a3b8',
    padding: '0.6rem 1.25rem',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
};

const topGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '1.5rem'
};

const card = {
    backgroundColor: '#111827',
    border: '1px solid #1e293b',
    padding: '1.5rem',
    borderRadius: '4px'
};

const cardLabel = {
    fontSize: '0.7rem',
    color: '#64748b',
    fontWeight: 800,
    marginBottom: '0.5rem'
};

const cardValue = {
    fontSize: '1.75rem',
    fontWeight: 700,
    color: '#f8fafc'
};

const cardSub = {
    fontSize: '0.8rem',
    color: '#475569',
    fontWeight: 400
};

const mainLayout = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem'
};

const panel = {
    backgroundColor: '#111827',
    border: '1px solid #1e293b',
    padding: '1.5rem',
    borderRadius: '4px'
};

const panelTitle = {
    fontSize: '0.85rem',
    fontWeight: 800,
    color: '#94a3b8',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid #1e293b',
    paddingBottom: '0.75rem'
};

const distList = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem'
};

const distItem = {};

const distHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem'
};

const distName = {
    fontSize: '0.7rem',
    fontWeight: 700,
    color: '#cbd5e1'
};

const distValue = {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#10b981'
};

const progBarBg = {
    height: '4px',
    backgroundColor: '#1e293b',
    borderRadius: '2px',
    overflow: 'hidden'
};

const progBar = {
    height: '100%',
    backgroundColor: '#334155'
};

export default MonitoringDashboard;
