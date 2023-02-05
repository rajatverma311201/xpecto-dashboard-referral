import React, { useState, useEffect } from "react";
import styles from "./Registrations.module.css";
import axios from "axios";
const Registrations = () => {
    const [usersData, setUsersData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get("/api/dashboard/users");
                console.log(data.data);
                setUsersData((prev) => data.data.data.allUsers);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <div>
            {usersData ? (
                <>
                    <h1>Total registrations - {usersData.length}</h1>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Referral</th>
                                <th>College</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((data) => {
                                return (
                                    <tr key={data._id}>
                                        <td>{data.displayName}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            {data.referralCode
                                                .toLowerCase()
                                                .trim()}
                                        </td>
                                        <td>{data.collegeName}</td>
                                        <td>{data.phoneNumber}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    );
};

export default Registrations;
