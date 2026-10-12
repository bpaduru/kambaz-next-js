export default function People() {
    const people = [
        { first: "Tony", last: "Stark", login: "001234561S", section: "S101", role: "STUDENT", lastActivity: "2020-10-01", totalActivity: "10:21:32" },
        { first: "Alice", last: "Wonderland", login: "001234562S", section: "S101", role: "STUDENT", lastActivity: "2020-10-02", totalActivity: "08:15:10" },
        { first: "Jose", last: "Annunziato", login: "001234001F", section: "S101", role: "FACULTY", lastActivity: "2020-10-03", totalActivity: "22:40:00" },
    ];
    return (
        <div id="wd-people-table">
            <h3 className="mb-3 text-xl font-semibold">People</h3>
            <table className="w-full border-collapse text-left text-sm">
                <thead>
                <tr className="border-b border-gray-300">
                    <th className="p-2">Name</th>
                    <th className="p-2">Login ID</th>
                    <th className="p-2">Section</th>
                    <th className="p-2">Role</th>
                    <th className="p-2">Last Activity</th>
                    <th className="p-2">Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {people.map((p) => (
                    <tr key={p.login} className="border-b border-gray-200">
                        <td className="wd-full-name p-2">
                            <span className="wd-first-name">{p.first}</span>{" "}
                            <span className="wd-last-name">{p.last}</span>
                        </td>
                        <td className="wd-login-id p-2">{p.login}</td>
                        <td className="wd-section p-2">{p.section}</td>
                        <td className="wd-role p-2">{p.role}</td>
                        <td className="wd-last-activity p-2">{p.lastActivity}</td>
                        <td className="wd-total-activity p-2">{p.totalActivity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}