import React from "react";

import { Button } from "../ui/button";

interface LoginButtonProps {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
}

const LoginButton = ({ label, onClick, icon }: LoginButtonProps) => {
    return (
        <Button onClick={onClick} className="flex gap-1">
            {icon && React.cloneElement(icon as React.ReactElement, { size: 17 })}
            {label}
        </Button>
    );
}
 
export default LoginButton;