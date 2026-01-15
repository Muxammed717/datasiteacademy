import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import Maintenance from '../pages/Maintenance';
import Preloader from './Preloader';

const MaintenanceGuard = ({ children }) => {
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

    useEffect(() => {
        // Check Admin Session
        const session = localStorage.getItem('adminSession');
        if (session) {
            const parsed = JSON.parse(session);
            if (parsed.authenticated && parsed.expiry > Date.now()) {
                setIsAdmin(true);
                if (parsed.role === 'superadmin') {
                    setIsSuperAdmin(true);
                }
            }
        }

        // Check Maintenance Status from Firebase
        const maintenanceRef = ref(db, 'settings/maintenance');
        const unsubscribe = onValue(maintenanceRef, (snapshot) => {
            setMaintenanceMode(snapshot.val() === true);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) return <Preloader />;

    // Logic:
    // If Maintenance is OFF -> Show Site
    // If Maintenance is ON:
    //    If User is SUPER ADMIN -> Show Site (Bypass)
    //    Else -> Show Maintenance Page
    if (maintenanceMode && !isSuperAdmin) {
        return <Maintenance />;
    }

    return children;
};

export default MaintenanceGuard;
