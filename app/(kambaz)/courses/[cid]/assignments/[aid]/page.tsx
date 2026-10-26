import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
                                                   params,
                                               }: {
    params: Promise<{ cid: string; aid: string }>;
}) {
    const { cid, aid } = await params;
    const assignment = db.assignments.find((a) => a._id === aid);
    return (
        <div id="wd-assignments-editor" className="max-w-2xl">
            <label htmlFor="wd-name" className="mb-1 block text-sm font-medium">
                Assignment Name
            </label>
            <input
                id="wd-name"
                defaultValue={assignment?.title ?? ""}
                className="mb-4 w-full rounded border border-gray-300 p-2"
            />
            <p className="mb-4 text-sm text-neutral-500">Assignment id: {aid}</p>
            <label className="mb-1 block text-sm font-medium">Description</label>
            <textarea
                id="wd-description"
                rows={5}
                defaultValue={assignment?.description ?? ""}
                className="mb-4 w-full rounded border border-gray-300 p-2"
            />
            <table>
                <tbody>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input
                            id="wd-points"
                            defaultValue={assignment?.points ?? 100}
                            className="w-24 rounded border border-gray-300 p-2"
                        />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                    <td>
                        <input
                            type="date"
                            id="wd-due-date"
                            defaultValue={assignment?.due}
                            className="w-40