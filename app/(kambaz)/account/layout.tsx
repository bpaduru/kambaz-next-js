import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
                                          children,
                                      }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex">
            <div className="w-40 shrink-0">
                <AccountNavigation />
            </div>
            <div className="flex-1 p-3">{children}</div>
        </div>
    );
}