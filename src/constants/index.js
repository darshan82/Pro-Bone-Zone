const storedUser = JSON.parse(localStorage.getItem("user"))
export const userType = storedUser?.permit
export const userTypes = {
    admin: "admin",
    licensee: "licensees",
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
            { name: "Personel", subNav: [{ name: "Staff", url: "/staff" }, { name: "Sponsors", url: "/sponsors" }, { name: "Customers", url: "/customers" }] },
            { name: "Resources", subNav: [{ name: "Training", url: "/training" }, { name: "Marketing", url: "/marketing" }] },
            { name: "Settings", subNav: [{ name: "Profile", url: "/profile" }, { name: "Logout" }] }];
    }
    else if (userTypes.licensee == type)
    {
        return [{ name: "Promotions", url: "/Promotions" },
        { name: "Personel", subNav: [{ name: "Staff", url: "/staff" }, { name: "Sponsors", url: "/sponsors" }, { name: "Customers", url: "/customers" }] },
        { name: "Resources", subNav: [{ name: "Training", url: "/training" }, { name: "Marketing", url: "/marketing" }] },
        { name: "Settings", subNav: [{ name: "Profile", url: "/profile" }, { name: "Logout" }] }
        ];
    }
    else if (userTypes.staff == type)
    {
        return [
            { name: "Personel", subNav: [{ name: "Staff", url: "/staff" }, { name: "Sponsors", url: "/sponsors" }, { name: "Customers", url: "/customers" }] },
            { name: "Resources", subNav: [{ name: "Training", url: "/training" }, { name: "Marketing", url: "/marketing" }] },
            { name: "Settings", subNav: [{ name: "Profile", url: "/profile" }, { name: "Logout" }] }
        ];
    }
    else
    {
        return []
    }

}

export const GENERAL_NAV_BAR = [{ name: "Home", url: "/", key: 0 }, { name: "About", url: "/about" }, { name: "FAQ", url: "/faq" }, { name: "Sponsors", url: "/solution" }]
export const NAV_BAR = [{ name: "Territories", url: "/Territories" }, { name: "Promotions", url: "/Promotions" }, { name: "Events", url: "/Events" }, { name: "Personel", url: "/Personel" }, { name: "Resources", url: "/Resources" }, { name: "Settings", url: "/Settings" }];
export const USER_NAV_BAR = navBar()






