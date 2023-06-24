const storedUser = JSON.parse(localStorage.getItem("user"))
export const userType = storedUser?.permit
export const userTypes = {
    admin: "admin",
    licensee: "licensee",
    staff: "staff"
}

export const navBar = (type) =>
{
    if (userTypes.admin == type)
    {
        return [
            { name: "Territories", url: "/Territories" },
            { name: "Promotions", url: "/Promotions" },
            { name: "Events", url: "/Events" },
            { name: "Personnel", subNav: [{ name: "Staff", url: "/staff" }, { name: "Sponsors", url: "/sponsors" }, { name: "Customers", url: "/customers" }] },
            { name: "Resources", subNav: [{ name: "Training", url: "/training" }, { name: "Marketing", url: "/marketing" }] },
            { name: "Settings", subNav: [{ name: "Profile", url: "/profile" }, { name: "Logout" }] }];
    }
    else if (userTypes.licensee == type)
    {
        return [{ name: "Promotions", url: "/Promotions" },
        { name: "Events", url: "/Events" },

        { name: "Personnel", subNav: [{ name: "Staff", url: "/staff" }, { name: "Sponsors", url: "/sponsors" }, { name: "Customers", url: "/customers" }] },
        { name: "Resources", subNav: [{ name: "Training", url: "/training" }, { name: "Marketing", url: "/marketing" }] },
        { name: "Settings", subNav: [{ name: "Profile", url: "/profile" }, { name: "Logout" }] }
        ];
    }
    else if (userTypes.staff == type)
    {
        return [
            { name: "Events", url: "/Events" },
            // { name: "Personnel", subNav: [{ name: "Staff", url: "/staff" }, { name: "Sponsors", url: "/sponsors" }, { name: "Customers", url: "/customers" }] },
            { name: "Resources", subNav: [{ name: "Training", url: "/training" }, { name: "Marketing", url: "/marketing" }] },
            { name: "Settings", subNav: [{ name: "Profile", url: "/profile" }, { name: "Logout" }] }
        ];
    }
    else
    {
        return []
    }

}

export const GENERAL_NAV_BAR = [{ name: "Home", url: "/", key: 0 }, { name: "About", url: "/about" }, { name: "FAQ", url: "/faq" }, { name: "Sponsors", url: "/solution" }, { name: "Contact" }]
export const NAV_BAR = [{ name: "Territories", url: "/Territories" }, { name: "Promotions", url: "/Promotions" }, { name: "Events", url: "/Events" }, { name: "Personnel", url: "/Personnel" }, { name: "Resources", url: "/Resources" }, { name: "Settings", url: "/Settings" }];
export const USER_NAV_BAR = navBar()




export const setDefaultPath = (user) =>
{
    if (userTypes.admin == user.permit)
    {
        return "/Territories"
    }
    else if (userTypes.licensee == user.permit)
    {
        return "/promotions"
    }
    else if (userTypes.staff == user.permit)
    {
        return "/events"
    }
    else
    {
        return ""
    }

}

export const interests = [{ label: "Family Law", value: "family-law" }, { label: "Business Law", value: "business-law" }]
export const ratings = [1, 2, 3, 4, 5] 
export const PromotionTypes = [{label:"Law" , value:"law"},{label:"Business" , value:"business"},{label:"Finance" , value:"finance"}]
export const consultantCategory = [{label:"Law" , value:"law"},{label:"Business" , value:"business"},{label:"Finance" , value:"finance"}]
export const promoterCategory=[{label:"Business" , value:"business"},{label:"Government" , value:"government"},{label:"Non-Profit" , value:"non-profit"},{label:"Other" , value:"other"}] 