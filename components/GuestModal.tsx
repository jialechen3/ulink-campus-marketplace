
import React from 'react';
import { ICONS } from '../constants';

interface GuestModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSignUp: () => void;
    actionText?: string;
}

const GuestModal: React.FC<GuestModalProps> = ({ isOpen, onClose, onSignUp, actionText = "perform this action" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-[#242526] w-full max-w-sm rounded-2xl border border-white/10 p-6 shadow-2xl animate-in zoom-in-95 duration-200 flex flex-col items-center text-center gap-6">
                <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path>
                    </svg>
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="text-white text-2xl font-bold">Join ULink</h3>
                    <p className="text-[#b0b3b8] text-sm leading-relaxed">
                        Please sign up or log in to <span className="text-white font-medium">{actionText}</span>.
                        It only takes a minute to join your campus community!
                    </p>
                </div>

                <div className="flex flex-col w-full gap-3 mt-2">
                    <button
                        onClick={onSignUp}
                        className="h-14 w-full rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98]"
                    >
                        Sign Up / Log In
                    </button>
                    <button
                        onClick={onClose}
                        className="h-12 w-full rounded-xl bg-[#3a3b3c] hover:bg-[#4e4f50] text-white font-bold transition-all active:scale-[0.98]"
                    >
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestModal;
