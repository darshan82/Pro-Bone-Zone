
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
            { name: "Personnel", subNav: [{ name: "Licensee", url: "/licensee" },{ name: "Staff", url: "/staff" }, { name: "Sponsors", url: "/sponsors" }, { name: "Customers", url: "/customers" }] },
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

export const GENERAL_NAV_BAR = [{ name: "Home", url: "/", key: 0 }, { name: "About", url: "/about" }, { name: "FAQ", url: "/faq" }, { name: "Sponsors", url: "/sponsor" }, { name: "Contact" }]
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

export const interests = [{ label: "Family Law", value: "Family law" }, { label: "Business Law", value: "Business Law" }]
export const ratings = [1, 2, 3, 4, 5] 


// events
export const timeList = ["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM"]
export const eventTypes = [{label:"Legal" , value:"Legal"},{label:"Business" , value:"Business"},{label:"Financial" , value:"Financial"}]
//  promotions
export const PromotionTypes = [{label:"Legal" , value:"Legal"},{label:"Business" , value:"Business"},{label:"Financial" , value:"Financial"}]

//  sponsors
export const consultantCategory = [{label:"Legal" , value:"Legal"},{label:"Business" , value:"Business"},{label:"Financial" , value:"Financial"}]
export const promoterCategory=[{label:"Business" , value:"Business"},{label:"Government" , value:"Government"},{label:"Non-Profit" , value:"Non-Profit"},{label:"Other" , value:"Other"}] 


// resources Selections
export const resourceViewers=[{label:"Admin" , value:"admin"},{label:"Licensee" , value:"licensee"},{label:"Staff" , value:"staff"},{label:"Public" , value:"public"}] 
export const resourceCategory=[{label:"Quick Start" , value:"Quick Start"},{label:"Training" , value:"Training"},{label:"Messaging" , value:"Messaging"},{label:"Marketing" , value:"Marketing"} ,{label:"Other" , value:"Other"} ] 


//  blog selections

export const blogCategory = [{label:"Legal" , value:"Legal"},{label:"Business" , value:"Business"},{label:"Financial" , value:"Financial"}]
export const legalSubcategoris = [{label:"Family Law" , value:"Family Law"},{label:"Business Law" , value:"Business Law"},{label:"Litigation" , value:"Litigation"},{label:"Labor & Employment" , value:"Labor & Employment"},{label:"Real Estate Law" , value:"Real Estate Law"}]
export const businessSubcategories=[{label:"1" , value:"1"},{label:"2" , value:"2"},{label:"3" , value:"3"},{label:"4" , value:"4"},{label:"5" , value:"5"}]
export const financialSubcategories=[{label:"A" , value:"a"},{label:"B" , value:"b"},{label:"C" , value:"c"},{label:"D" , value:"d"},{label:"E" , value:"e"}]