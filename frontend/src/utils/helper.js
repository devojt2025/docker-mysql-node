

export const formatDate = (date, type = "full") => {
    if (type === "full") {
        return new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    }
    if (type === "short") {
        return new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }
    if (type === "time") {
        return new Date(date).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    }

}
export const formatDateRange = (startDate, endDate) => {
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: 'numeric', minute: '2-digit', hour12: true };
    const optionsShortDate = { month: 'short', day: 'numeric', year: 'numeric' };

    const start = new Date(startDate);
    const end = new Date(endDate);

    const formattedStartDate = start.toLocaleDateString('en-US', optionsDate);
    const formattedEndDate = end.toLocaleDateString('en-US', optionsDate);
    const formattedStartTime = start.toLocaleTimeString('en-US', optionsTime);
    const formattedEndTime = end.toLocaleTimeString('en-US', optionsTime);
    const formattedShortStartDate = start.toLocaleDateString('en-US', optionsShortDate);
    const formattedShortEndDate = end.toLocaleDateString('en-US', optionsShortDate);

    if (formattedStartDate === formattedEndDate) {
        return `${formattedStartDate} at ${formattedStartTime} - ${formattedEndTime}`;
    } else {
        return `${formattedShortStartDate} at ${formattedStartTime} - ${formattedShortEndDate} at ${formattedEndTime}`;
    }
};

export const formatNumber = (num) => {
    if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    } else {
        return num.toString();
    }
}

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined' && data?.access_token) {
        localStorage.setItem('access_token', data.access_token);
    }

    if (typeof next === 'function') {
        next();
    }
};
// remove token from session storage
export const logoutFunc = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
    }
};

export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('access_token');
        return token ? token : null;
    }
    return null;
}