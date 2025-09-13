import React, { useEffect, useState } from 'react';
import { fetchHonorData, updateHonorData } from '../services/dbService';

const AdminPanel = () => {
    const [honorData, setHonorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchHonorData();
                setHonorData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const handleUpdate = async (id, updatedData) => {
        try {
            await updateHonorData(id, updatedData);
            setHonorData(prevData => prevData.map(item => (item.id === id ? updatedData : item)));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Admin Panel</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {honorData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.points}</td>
                            <td>
                                <button onClick={() => handleUpdate(item.id, { ...item, points: item.points + 10 })}>
                                    Add Points
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;