const validateEmail = ({ email, setEmailError }) => {
    const emailRegular = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    return email && !email.match(emailRegular)
        ? setEmailError("Email non valide")
        : setEmailError("");
};

const validatePhone = ({ phone, setPhoneError }) => {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phone && !phone.match(phoneRegex)
        ? setPhoneError("Le numéro de téléphone n'est pas valide")
        : setPhoneError('');
};

const validateName = ({ name, setNameError }) => {

    return name && name.length < 4
        ? setNameError("Votre nom complet est trop court")
        : name && name.length > 50 ?
            setNameError("La limite de caractères a été atteinte (50)")
            : setNameError("");
};

const validateMessage = ({ message, setMessageError }) => {

    return message && message.length < 5
        ? setMessageError("Votre message est trop court")
        : message && message.length > 400 ?
            setMessageError("Votre message est trop long, la limite est de 400 caractères")
            : setMessageError("");
};

// Validation du mot de passe
const validatePassword = ({ password, setPasswordError }) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    return password && !password.match(passwordRegex)
        ? setPasswordError("Votre mot de passe doit contenir minimum 12 caractères, dont au moins une lettre, un chiffre et un caractère spécial")
        : setPasswordError("");
};

const resetPassword = ({ newPassword, setPasswordError }) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

    return newPassword && !newPassword.match(passwordRegex)
        ? setPasswordError("Votre mot de passe doit contenir minimum 12 caractères, dont au moins une lettre, un chiffre et un caractère spécial")
        : setPasswordError("");
};


export { validateEmail, validatePhone, validateName, validateMessage, validatePassword, resetPassword };
