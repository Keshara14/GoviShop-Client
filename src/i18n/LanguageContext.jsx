/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
    "Home": "මුල් පිටුව",
    "Marketplace": "වෙළඳපොළ",
    "My Listings": "මගේ ලැයිස්තු",
    "Create Listing": "ලැයිස්තුවක් සාදන්න",
    "+ Create Listing": "+ ලැයිස්තුවක් සාදන්න",
    "Add Listing": "ලැයිස්තුවක් එක් කරන්න",
    "View": "බලන්න",
    "Edit": "සංස්කරණය කරන්න",
    "Good morning, Keshara 👋": "සුභ උදෑසනක්, Keshara 👋",
    "Connect with trusted buyers and bring your harvest to market.": "විශ්වාසවන්ත ගැනුම්කරුවන් සමඟ සම්බන්ධ වී ඔබේ අස්වැන්න වෙළඳපොළට ගෙන එන්න.",
    "Notifications": "දැනුම්දීම්",
    "Farmer": "ගොවියා",
    "Customer": "පාරිභෝගිකයා",
    "Buyer": "ගැනුම්කරු",
    "Account": "ගිණුම",
    "You are logged in as a": "ඔබ පුරනය වී ඇත්තේ",
    "You are logged in as a Farmer.": "ඔබ ගොවියෙකු ලෙස පුරනය වී ඇත.",
    "You are logged in as a Customer.": "ඔබ පාරිභෝගිකයෙකු ලෙස පුරනය වී ඇත.",
    "You are logged in as a Buyer.": "ඔබ ගැනුම්කරුවෙකු ලෙස පුරනය වී ඇත.",
    "Log in as a": "ලෙස පුරනය වන්න",
    "Log in as a Customer": "පාරිභෝගිකයෙකු ලෙස පුරනය වන්න",
    "Log in as a Farmer": "ගොවියෙකු ලෙස පුරනය වන්න",
    "Log in as a Buyer": "ගැනුම්කරුවෙකු ලෙස පුරනය වන්න",
    "Log in as": "ලෙස පුරනය වන්න",
    "GoviShop Buyer Dashboard": "GoviShop ගැනුම්කරු උපකරණ පුවරුව",
    "Find the best harvest for your business 🛒": "ඔබේ ව්‍යාපාරය සඳහා හොඳම අස්වැන්න සොයා ගන්න 🛒",
    "Discover fresh agricultural products directly from trusted local farmers.": "විශ්වාසවන්ත දේශීය ගොවීන්ගෙන් නැවුම් කෘෂිකාර්මික නිෂ්පාදන සෘජුවම සොයා ගන්න.",
    "Browse Marketplace": "වෙළඳපොළ ගවේෂණය කරන්න",
    "Fresh agricultural products": "නැවුම් කෘෂිකාර්මික නිෂ්පාදන",
    "Active Orders": "ක්‍රියාකාරී ඇණවුම්",
    "Saved Products": "සුරැකි නිෂ්පාදන",
    "Completed Purchases": "සම්පූර්ණ කළ මිලදී ගැනීම්",
    "Total Spent": "මුළු වියදම",
    "Recommended Products": "නිර්දේශිත නිෂ්පාදන",
    "Fresh products selected for you": "ඔබ වෙනුවෙන් තෝරාගත් නැවුම් නිෂ්පාදන",
    "Available": "ලබාගත හැක",
    "Buyer Actions": "ගැනුම්කරු ක්‍රියා",
    "View your favorites": "ඔබේ ප්‍රියතම නිෂ්පාදන බලන්න",
    "Switch to Farmer": "ගොවි මාදිලියට මාරු වන්න",
    "Open farmer dashboard": "ගොවි උපකරණ පුවරුව විවෘත කරන්න",
    "Recent Purchases": "මෑත මිලදී ගැනීම්",
    "Your latest agricultural orders": "ඔබේ නවතම කෘෂිකාර්මික ඇණවුම්",
    "Delivered": "බෙදා හැර ඇත",
    "In Transit": "ප්‍රවාහනය වෙමින් පවතී",
    "Open profile menu": "පැතිකඩ මෙනුව විවෘත කරන්න",
    "GoviShop Dashboard": "GoviShop උපකරණ පුවරුව",
    "Welcome back, Harindu 👋": "නැවත සාදරයෙන් පිළිගනිමු, Harindu 👋",
    "Manage your agricultural products and connect with buyers through GoviShop.": "GoviShop හරහා ඔබේ කෘෂිකාර්මික නිෂ්පාදන කළමනාකරණය කර ගැනුම්කරුවන් සමඟ සම්බන්ධ වන්න.",
    "Active Listings": "ක්‍රියාකාරී ලැයිස්තු",
    "Pending Offers": "පොරොත්තු දීමනා",
    "Completed Sales": "සම්පූර්ණ කළ විකුණුම්",
    "Total Earnings": "මුළු ඉපැයීම්",
    "Recent Listings": "මෑත ලැයිස්තු",
    "Your recently added agricultural products": "ඔබ මෑතකදී එක් කළ කෘෂිකාර්මික නිෂ්පාදන",
    "View All": "සියල්ල බලන්න",
    "Active": "ක්‍රියාකාරී",
    "Quick Actions": "ඉක්මන් ක්‍රියා",
    "Add a new product": "නව නිෂ්පාදනයක් එක් කරන්න",
    "Find agricultural products": "කෘෂිකාර්මික නිෂ්පාදන සොයන්න",
    "Manage your products": "ඔබේ නිෂ්පාදන කළමනාකරණය කරන්න",
    "Recent Offers": "මෑත දීමනා",
    "Latest offers received from buyers": "ගැනුම්කරුවන්ගෙන් ලැබුණු නවතම දීමනා",
    "Buyer: Green Harvest Traders": "ගැනුම්කරු: Green Harvest Traders",
    "Buyer: Fresh Foods Ltd.": "ගැනුම්කරු: Fresh Foods Ltd.",
    "In Review": "සමාලෝචනය වෙමින් පවතී",
    "Find fresh agricultural products from local farmers.": "දේශීය ගොවීන්ගෙන් නැවුම් කෘෂිකාර්මික නිෂ්පාදන සොයන්න.",
    "Manage your agricultural products.": "ඔබේ කෘෂිකාර්මික නිෂ්පාදන කළමනාකරණය කරන්න.",
    "Search crops...": "බෝග සොයන්න...",
    "Search": "සොයන්න",
    "All Categories": "සියලු කාණ්ඩ",
    "Vegetables": "එළවළු",
    "Fruits": "පලතුරු",
    "Grains": "ධාන්‍ය",
    "All Locations": "සියලු ස්ථාන",
    "Ratnapura": "රත්නපුර",
    "Colombo": "කොළඹ",
    "Kandy": "මහනුවර",
    "View Listing": "ලැයිස්තුව බලන්න",
    "Add your agricultural product to the marketplace.": "ඔබේ කෘෂිකාර්මික නිෂ්පාදනය වෙළඳපොළට එක් කරන්න.",
    "Crop Name": "බෝගයේ නම",
    "Enter crop name": "බෝගයේ නම ඇතුළත් කරන්න",
    "Category": "කාණ්ඩය",
    "Select category": "කාණ්ඩය තෝරන්න",
    "Location": "ස්ථානය",
    "Select location": "ස්ථානය තෝරන්න",
    "Quantity (kg)": "ප්‍රමාණය (කි.ග්‍රෑ.)",
    "Enter quantity": "ප්‍රමාණය ඇතුළත් කරන්න",
    "Price per kg (Rs.)": "කි.ග්‍රෑ. එකක මිල (රු.)",
    "Enter price": "මිල ඇතුළත් කරන්න",
    "Description": "විස්තරය",
    "Describe your product...": "ඔබේ නිෂ්පාදනය විස්තර කරන්න...",
    "Create your GoviShop account": "ඔබේ GoviShop ගිණුම සාදන්න",
    "Join GoviShop and connect directly with the agricultural market.": "GoviShop සමඟ එක් වී කෘෂිකාර්මික වෙළඳපොළට සෘජුවම සම්බන්ධ වන්න.",
    "Products": "නිෂ්පාදන",
    "About": "අප ගැන",
    "Login": "පිවිසෙන්න",
    "Sign Up": "ලියාපදිංචි වන්න",
    "FROM FARM TO MARKET": "ගොවිපළේ සිට වෙළඳපොළ දක්වා",
    "Fresh From": "නැවුම්ව",
    "Farmers.": "ගොවීන්ගෙන්.",
    "Fresh From Farmers.": "ගොවීන්ගෙන් නැවුම්ව.",
    "Directly To The Market": "සෘජුවම වෙළඳපොළට",
    "Directly To The Market.": "සෘජුවම වෙළඳපොළට.",
    "Explore Products": "නිෂ්පාදන ගවේෂණය කරන්න",
    "Join GoviShop": "GoviShop සමඟ එක්වන්න",
    "Scroll to explore": "ගවේෂණය කිරීමට පහළට යන්න",
    "EXPLORE THE MARKET": "වෙළඳපොළ ගවේෂණය කරන්න",
    "Trending Products": "ජනප්‍රිය නිෂ්පාදන",
    "Discover fresh agricultural products available from local farmers.": "දේශීය ගොවීන්ගෙන් ලබාගත හැකි නැවුම් කෘෂිකාර්මික නිෂ්පාදන සොයා ගන්න.",
    "Specialty Vegetable": "විශේෂ එළවළු",
    "Fresh Vegetable": "නැවුම් එළවළු",
    "Available from Ratnapura": "රත්නපුරෙන් ලබාගත හැක",
    "Available from Colombo": "කොළඹින් ලබාගත හැක",
    "Available from Kandy": "මහනුවරින් ලබාගත හැක",
    "JUST ARRIVED": "අලුතින් පැමිණි",
    "Recently added products from farmers.": "ගොවීන් විසින් මෑතකදී එක් කළ නිෂ්පාදන.",
    "WHY GOVISHOP?": "GOVISHOP ඇයි?",
    "Connecting Agriculture More Directly": "කෘෂිකර්මාන්තය වඩාත් සෘජුව සම්බන්ධ කිරීම",
    "For Farmers": "ගොවීන් සඳහා",
    "List your products and reach potential buyers directly.": "ඔබේ නිෂ්පාදන ලැයිස්තුගත කර විභව ගැනුම්කරුවන් වෙත සෘජුව ළඟා වන්න.",
    "For Buyers": "ගැනුම්කරුවන් සඳහා",
    "Discover agricultural products from local farmers.": "දේශීය ගොවීන්ගෙන් කෘෂිකාර්මික නිෂ්පාදන සොයා ගන්න.",
    "Direct Connections": "සෘජු සම්බන්ධතා",
    "Create better connections between farmers and agricultural buyers.": "ගොවීන් සහ කෘෂිකාර්මික ගැනුම්කරුවන් අතර වඩා හොඳ සම්බන්ධතා ගොඩනඟන්න.",
    "Ready to become part of GoviShop?": "GoviShop හි කොටසක් වීමට සූදානම්ද?",
    "Join our agricultural marketplace today.": "අදම අපගේ කෘෂිකාර්මික වෙළඳපොළට එක්වන්න.",
    "From Farm to Market": "ගොවිපළේ සිට වෙළඳපොළ දක්වා",
    "Agricultural farm": "කෘෂිකාර්මික ගොවිපළ",
    "Sri Lankan agricultural farm": "ශ්‍රී ලංකාවේ කෘෂිකාර්මික ගොවිපළ",
    "Quantity:": "ප්‍රමාණය:",
    "Price:": "මිල:",
    "Language": "භාෂාව",
    "English": "ඉංග්‍රීසි",
    "Sinhala": "සිංහල",
    "WELCOME BACK": "නැවත සාදරයෙන් පිළිගනිමු",
    "Good things grow when we connect.": "අප සම්බන්ධ වූ විට යහපත් දේ වර්ධනය වේ.",
    "Access your marketplace and continue building meaningful connections from farm to market.": "ඔබේ වෙළඳපොළට පිවිස ගොවිපළේ සිට වෙළඳපොළ දක්වා අර්ථවත් සම්බන්ධතා ගොඩනඟන්න.",
    "Trusted marketplace": "විශ්වාසවන්ත වෙළඳපොළ",
    "Local connections": "දේශීය සම්බන්ධතා",
    "Fresh opportunities": "නැවුම් අවස්ථා",
    "SIGN IN TO CONTINUE": "ඉදිරියට යාමට පිවිසෙන්න",
    "Welcome back": "නැවත සාදරයෙන් පිළිගනිමු",
    "Choose your account type and enter your details.": "ඔබේ ගිණුම් වර්ගය තෝරා විස්තර ඇතුළත් කරන්න.",
    "Account type": "ගිණුම් වර්ගය",
    "Manage your harvest": "ඔබේ අස්වැන්න කළමනාකරණය කරන්න",
    "Find fresh products": "නැවුම් නිෂ්පාදන සොයන්න",
    "Email address": "විද්‍යුත් තැපැල් ලිපිනය",
    "Enter your password": "ඔබේ මුරපදය ඇතුළත් කරන්න",
    "Remember me": "මාව මතක තබා ගන්න",
    "Forgot password?": "මුරපදය අමතකද?",
    "FARM TO MARKET": "ගොවිපළේ සිට වෙළඳපොළ දක්වා",
    "Grow your journey with GoviShop.": "GoviShop සමඟ ඔබේ ගමන වර්ධනය කරගන්න.",
    "Join a trusted community connecting local farmers with buyers across Sri Lanka.": "ශ්‍රී ලංකාව පුරා දේශීය ගොවීන් ගැනුම්කරුවන් සමඟ සම්බන්ධ කරන විශ්වාසවන්ත ප්‍රජාවකට එක්වන්න.",
    "Reach more customers": "වැඩි ගනුදෙනුකරුවන් වෙත ළඟා වන්න",
    "Share your harvest": "ඔබේ අස්වැන්න බෙදා ගන්න",
    "Build trusted connections": "විශ්වාසවන්ත සම්බන්ධතා ගොඩනඟන්න",
    "STEP 1 OF 2": "පියවර 1 / 2",
    "Create your account": "ඔබේ ගිණුම සාදන්න",
    "Tell us a little about yourself to get started.": "ආරම්භ කිරීමට ඔබ ගැන කෙටි විස්තරයක් ලබා දෙන්න.",
    "Full Name": "සම්පූර්ණ නම",
    "Enter your full name": "ඔබේ සම්පූර්ණ නම ඇතුළත් කරන්න",
    "NIC": "ජාතික හැඳුනුම්පත් අංකය",
    "Enter your NIC number": "ඔබේ ජාතික හැඳුනුම්පත් අංකය ඇතුළත් කරන්න",
    "Contact Number": "දුරකථන අංකය",
    "Enter your contact number": "ඔබේ දුරකථන අංකය ඇතුළත් කරන්න",
    "Contact Number 2 (Optional)": "දුරකථන අංකය 2 (විකල්ප)",
    "Enter another contact number if available": "තිබේ නම් වෙනත් දුරකථන අංකයක් ඇතුළත් කරන්න",
    "Email (Optional)": "විද්‍යුත් තැපෑල (විකල්ප)",
    "Enter your email address": "ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න",
    "Province": "පළාත",
    "Enter your province": "ඔබේ පළාත ඇතුළත් කරන්න",
    "District": "දිස්ත්‍රික්කය",
    "Enter your district": "ඔබේ දිස්ත්‍රික්කය ඇතුළත් කරන්න",
    "Street Address": "වීදි ලිපිනය",
    "Enter your street address": "ඔබේ වීදි ලිපිනය ඇතුළත් කරන්න",
    "Continue": "ඉදිරියට",
    "STEP 2 OF 2": "පියවර 2 / 2",
    "Tell us about your work": "ඔබේ රැකියාව ගැන අපට කියන්න",
    "Help us personalize your GoviShop experience.": "ඔබේ GoviShop අත්දැකීම පුද්ගලීකරණය කිරීමට අපට උදව් කරන්න.",
    "Account Type": "ගිණුම් වර්ගය",
    "Sell your harvest": "ඔබේ අස්වැන්න විකුණන්න",
    "Preferred Contact Method": "කැමති සම්බන්ධතා ක්‍රමය",
    "Phone call": "දුරකථන ඇමතුම",
    "WhatsApp Number": "WhatsApp අංකය",
    "Enter your WhatsApp number": "ඔබේ WhatsApp අංකය ඇතුළත් කරන්න",
    "Product Category (Optional)": "නිෂ්පාදන කාණ්ඩය (විකල්ප)",
    "e.g. Vegetables, Fruits, Grains": "උදා. එළවළු, පලතුරු, ධාන්‍ය",
    "Farm or Business Name (Optional)": "ගොවිපළේ හෝ ව්‍යාපාරයේ නම (විකල්ප)",
    "Enter your farm or business name": "ඔබේ ගොවිපළේ හෝ ව්‍යාපාරයේ නම ඇතුළත් කරන්න",
    "About You (Optional)": "ඔබ ගැන (විකල්ප)",
    "Tell us briefly about your farm or business": "ඔබේ ගොවිපළ හෝ ව්‍යාපාරය ගැන කෙටියෙන් කියන්න",
    "Back": "ආපසු",
    "Create Account": "ගිණුමක් සාදන්න",
    "OUR GROWING COMMUNITY": "අපගේ වර්ධනය වන ප්‍රජාව",
    "Growing together, from farm to market.": "ගොවිපළේ සිට වෙළඳපොළ දක්වා එකට වර්ධනය වෙමු.",
    "Trusted by farmers and buyers building a better agricultural marketplace.": "වඩා හොඳ කෘෂිකාර්මික වෙළඳපොළක් ගොඩනඟන ගොවීන් සහ ගැනුම්කරුවන්ගේ විශ්වාසය දිනා ඇත.",
    "Farmers joined": "එක් වූ ගොවීන්",
    "Active buyers": "ක්‍රියාකාරී ගැනුම්කරුවන්",
    "Products listed": "ලැයිස්තුගත කළ නිෂ්පාදන",
    "Successful connections": "සාර්ථක සම්බන්ධතා",
};

const reverseTranslations = Object.fromEntries(
    Object.entries(translations).map(([english, sinhala]) => [sinhala, english]),
);

function translateText(value, language) {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
        return value;
    }

    const leadingWhitespace = value.slice(0, value.indexOf(trimmedValue));
    const trailingWhitespace = value.slice(value.indexOf(trimmedValue) + trimmedValue.length);

    if (language === "en") {
        const translated = reverseTranslations[trimmedValue];
        return translated ? `${leadingWhitespace}${translated}${trailingWhitespace}` : value;
    }

    const exact = translations[trimmedValue];
    if (exact) {
        return `${leadingWhitespace}${exact}${trailingWhitespace}`;
    }

    return value
        .replace(/Quantity:/g, translations["Quantity:"])
        .replace(/Price:/g, translations["Price:"])
        .replace(/Location:/g, translations["Location:"])
        .replace(/Available from Ratnapura/g, translations["Available from Ratnapura"])
        .replace(/Available from Colombo/g, translations["Available from Colombo"])
        .replace(/Available from Kandy/g, translations["Available from Kandy"]);
}

function translateDocument(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;

    while ((node = walker.nextNode())) {
        textNodes.push(node);
    }

    textNodes.forEach((textNode) => {
        const translated = translateText(textNode.nodeValue, language);
        if (translated !== textNode.nodeValue) {
            textNode.nodeValue = translated;
        }
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder], [aria-label], img[alt]").forEach((element) => {
        ["placeholder", "aria-label", "alt"].forEach((attribute) => {
            if (element.hasAttribute(attribute)) {
                const value = element.getAttribute(attribute);
                element.setAttribute(attribute, translateText(value, language));
            }
        });
    });
}

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => localStorage.getItem("govishop-language") || "en");

    useEffect(() => {
        localStorage.setItem("govishop-language", language);
        translateDocument(language);

        const observer = new MutationObserver(() => translateDocument(language));
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [language]);

    const value = useMemo(() => ({
        language,
        setLanguage,
        toggleLanguage: () => setLanguage((current) => current === "en" ? "si" : "en"),
    }), [language]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }
    return context;
}
