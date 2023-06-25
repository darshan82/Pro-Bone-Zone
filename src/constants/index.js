
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
            { name: "Resources", subNav: [{ name: "Training", url: "/training" }, { name: "Marketing", url: "/marketing" } , { name: "Blogs", url: "/blogs" }] },
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


// resources Selections
export const resourceViewers=[{label:"Admin" , value:"admin"},{label:"Licensee" , value:"licensee"},{label:"Staff" , value:"staff"},{label:"Public" , value:"public"}] 
export const resourceCategory=[{label:"Quick Start" , value:"quick-start"},{label:"Training" , value:"training"},{label:"Messaging" , value:"messaging"},{label:"Marketing" , value:"marketing"} ,{label:"Other" , value:"other"} ] 


//  blog selections

export const blogCategory = [{label:"Legal" , value:"legal"},{label:"Business" , value:"business"},{label:"Financial" , value:"financial"}]
export const legalSubcategoris = [{label:"Family Law" , value:"family-law"},{label:"Business Law" , value:"business-law"},{label:"Litigation" , value:"litigation"},{label:"Labor & Employment" , value:"labor & employment"},{label:"Real Estate Law" , value:"Real-Estate-Law"}]
export const businessSubcategories=[{label:"1" , value:"1"},{label:"2" , value:"2"},{label:"3" , value:"3"},{label:"4" , value:"4"},{label:"5" , value:"5"}]
export const financialSubcategories=[{label:"A" , value:"a"},{label:"B" , value:"b"},{label:"C" , value:"c"},{label:"D" , value:"d"},{label:"E" , value:"e"}]