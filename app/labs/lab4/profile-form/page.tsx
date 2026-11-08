import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";
export default function ProfileFormPage() {
    return (
        <div id="wd-profile-form-page">
            <ProfileForm />
            <ContextProfileForm />
            <ZustandProfileForm />
        </div>
    );
}