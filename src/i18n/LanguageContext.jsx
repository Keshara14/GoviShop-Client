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
    "Change language": "භාෂාව වෙනස් කරන්න",
    "Back to home": "මුල් පිටුවට යන්න",
    "Log in": "පිවිසෙන්න",
    "Get started": "ආරම්භ කරන්න",
    "How it works": "එය ක්‍රියා කරන ආකාරය",
    "Explore produce": "නිෂ්පාදන ගවේෂණය කරන්න",
    "Main navigation": "ප්‍රධාන සංචාලනය",
    "Open navigation menu": "සංචාලන මෙනුව විවෘත කරන්න",
    "Close navigation menu": "සංචාලන මෙනුව වසන්න",
    "LOCAL HARVESTS, DIRECT CONNECTIONS": "දේශීය අස්වැන්න, සෘජු සම්බන්ධතා",
    "A better way to move from": "වඩා හොඳ ක්‍රමයක්",
    "farm to market.": "ගොවිපළේ සිට වෙළඳපොළට.",
    "Discover local produce, connect with farmers, and make offers directly through one simple marketplace.": "දේශීය අස්වැන්න සොයා, ගොවීන් සමඟ සම්බන්ධ වී, එක් සරල වෙළඳපොළක් හරහා සෘජුවම මිල ගණන් ඉදිරිපත් කරන්න.",
    "Explore the marketplace": "වෙළඳපොළ ගවේෂණය කරන්න",
    "A simpler connection between growers and buyers": "වගාකරුවන් සහ ගැනුම්කරුවන් අතර වඩාත් සරල සම්බන්ධතාවයක්",
    "GOVISHOP MARKETPLACE": "GOVISHOP වෙළඳපොළ",
    "Good produce. Closer connections.": "හොඳ අස්වැන්නක්. වඩා සමීප සම්බන්ධතා.",
    "From local farms": "දේශීය ගොවිපළවලින්",
    "HOW IT WORKS": "ක්‍රියා කරන ආකාරය",
    "Three simple steps to get started": "ආරම්භ කිරීමට සරල පියවර තුනක්",
    "Bring your harvest to market or find produce for your business.": "ඔබේ අස්වැන්න වෙළඳපොළට ගෙන එන්න, නැතහොත් ඔබේ ව්‍යාපාරයට අවශ්‍ය නිෂ්පාදන සොයා ගන්න.",
    "Farmers create a listing": "ගොවීන් නිෂ්පාදන ලැයිස්තුවක් සාදයි",
    "Add your crop, quantity, location, and asking price to reach interested buyers.": "උනන්දුවක් දක්වන ගැනුම්කරුවන් වෙත ළඟා වීමට ඔබේ බෝගය, ප්‍රමාණය, ස්ථානය සහ ඉල්ලන මිල ඇතුළත් කරන්න.",
    "Buyers make an offer": "ගැනුම්කරුවන් මිල ගණනක් ඉදිරිපත් කරයි",
    "Explore produce listings and send an offer with the price and quantity you need.": "නිෂ්පාදන ලැයිස්තු ගවේෂණය කර ඔබට අවශ්‍ය මිල සහ ප්‍රමාණය සඳහන් කර මිල ගණනක් යවන්න.",
    "Farmers review bids": "ගොවීන් ලංසු සමාලෝචනය කරයි",
    "Compare incoming offers and accept or reject bids from your farmer workspace.": "ලැබෙන මිල ගණන් සසඳා ඔබේ ගොවි වැඩපොළෙන් ලංසු පිළිගන්න හෝ ප්‍රතික්ෂේප කරන්න.",
    "WHY GOVISHOP": "GOVISHOP තෝරාගන්නේ ඇයි",
    "A more direct way to trade": "වෙළඳාම් කිරීමට වඩාත් සෘජු ක්‍රමයක්",
    "Purpose-built tools make everyday produce trading easier to manage.": "විශේෂයෙන් නිර්මාණය කළ මෙවලම් දෛනික නිෂ්පාදන වෙළඳාම පහසුවෙන් කළමනාකරණය කිරීමට උපකාරී වේ.",
    "For farmers": "ගොවීන් සඳහා",
    "Showcase your harvest, set your terms, and manage buyer offers in one place.": "ඔබේ අස්වැන්න ප්‍රදර්ශනය කර, ඔබේ කොන්දේසි නියම කර, ගැනුම්කරුවන්ගේ මිල ගණන් එකම තැනක කළමනාකරණය කරන්න.",
    "For buyers": "ගැනුම්කරුවන් සඳහා",
    "Find local produce and send a clear offer that fits your order.": "දේශීය නිෂ්පාදන සොයා ඔබේ ඇණවුමට ගැළපෙන පැහැදිලි මිල ගණනක් යවන්න.",
    "Direct connections": "සෘජු සම්බන්ධතා",
    "Keep listings and bids together, from the first offer to the farmer's decision.": "පළමු මිල ගණනේ සිට ගොවියාගේ තීරණය දක්වා ලැයිස්තු සහ ලංසු එකට තබා ගන්න.",
    "EXPLORE THE MARKETPLACE": "වෙළඳපොළ ගවේෂණය කරන්න",
    "Fresh produce, direct from growers": "වගාකරුවන්ගෙන් සෘජුවම නැවුම් නිෂ්පාදන",
    "These are examples of the crops you can discover from local farmers.": "දේශීය ගොවීන්ගෙන් ඔබට සොයාගත හැකි බෝග කිහිපයක උදාහරණ මෙන්න.",
    "Fresh produce": "නැවුම් නිෂ්පාදන",
    "Seasonal crops": "කාලීන බෝග",
    "Bell Pepper": "මාළු මිරිස්",
    "Tomato": "තක්කාලි",
    "Green Chilli": "අමු මිරිස්",
    "Explore local listings and make an offer directly.": "දේශීය ලැයිස්තු ගවේෂණය කර සෘජුවම මිල ගණනක් ඉදිරිපත් කරන්න.",
    "YOUR NEXT HARVEST STARTS HERE": "ඔබේ මීළඟ අස්වැන්න මෙතැනින් ඇරඹේ",
    "Ready to connect?": "සම්බන්ධ වීමට සූදානම්ද?",
    "Join GoviShop as a farmer or buyer and start exploring the marketplace.": "ගොවියෙකු හෝ ගැනුම්කරුවෙකු ලෙස GoviShop සමඟ එක් වී වෙළඳපොළ ගවේෂණය අරඹන්න.",
    "Connecting local harvests with the people who need them.": "දේශීය අස්වැන්න අවශ්‍ය පුද්ගලයන් සමඟ සම්බන්ධ කිරීම.",
    "GoviShop home": "GoviShop මුල් පිටුව",
    "GoviShop leaf logo": "GoviShop පත්‍ර ලාංඡනය",
    "Change language · සිංහල": "භාෂාව වෙනස් කරන්න · සිංහල",
    "Change language · Sinhala": "භාෂාව වෙනස් කරන්න · සිංහල",
    "Change language · English": "භාෂාව වෙනස් කරන්න · ඉංග්‍රීසි",
    "FARMER WORKSPACE": "ගොවි වැඩපොළ",
    "BUYER WORKSPACE": "ගැනුම්කරු වැඩපොළ",
    "Received Bids": "ලැබුණු ලංසු",
    "My Bids": "මගේ ලංසු",
    "Review offers from buyers and decide which bids to accept.": "ගැනුම්කරුවන්ගේ මිල ගණන් සමාලෝචනය කර පිළිගත යුතු ලංසු තීරණය කරන්න.",
    "Track the offers you have placed on farmer listings.": "ගොවි ලැයිස්තු සඳහා ඔබ ඉදිරිපත් කළ මිල ගණන් නිරීක්ෂණය කරන්න.",
    "Loading bids...": "ලංසු පූරණය වෙමින්...",
    "No bids to show yet.": "පෙන්වීමට තවම ලංසු නැත.",
    "Listing": "ලැයිස්තුව",
    "kg at Rs.": "කි.ග්‍රෑ.කට රු.",
    "/ kg · Total Rs.": "/ කි.ග්‍රෑ. · මුළු එකතුව රු.",
    "Buyer:": "ගැනුම්කරු:",
    "Placed": "යොමු කළේ",
    "pending": "පොරොත්තුවෙන්",
    "accepted": "පිළිගත්",
    "rejected": "ප්‍රතික්ෂේප කළ",
    "Accept": "පිළිගන්න",
    "Reject": "ප්‍රතික්ෂේප කරන්න",
    "Loading your listings...": "ඔබේ ලැයිස්තු පූරණය වෙමින්...",
    "You haven't created any listings yet.": "ඔබ තවමත් ලැයිස්තු කිසිවක් සාදා නැත.",
    "Local farm": "දේශීය ගොවිපළ",
    "Place a Bid": "ලංසුවක් ඉදිරිපත් කරන්න",
    "Close Bid Form": "ලංසු පෝරමය වසන්න",
    "Bid submitted successfully.": "ලංසුව සාර්ථකව ඉදිරිපත් කරන ලදී.",
    "Offer price per kg": "කි.ග්‍රෑ. එකක මිල ගණන",
    "Message": "පණිවිඩය",
    "Total offer:": "මුළු මිල ගණන:",
    "Submitting...": "ඉදිරිපත් කරමින්...",
    "Submit Bid": "ලංසුව ඉදිරිපත් කරන්න",
    "Loading listings...": "ලැයිස්තු පූරණය වෙමින්...",
    "Unable to load listings": "ලැයිස්තු පූරණය කළ නොහැක",
    "Unable to load listings. Please try again.": "ලැයිස්තු පූරණය කළ නොහැක. නැවත උත්සාහ කරන්න.",
    "No listings are available yet.": "තවමත් ලැයිස්තු කිසිවක් නොමැත.",
    "Please complete all required fields with positive values.": "කරුණාකර අවශ්‍ය සියලු ක්ෂේත්‍ර ධන අගයන් සමඟ සම්පූර්ණ කරන්න.",
    "Unable to create listing": "ලැයිස්තුව සෑදිය නොහැක",
    "Creating...": "සාදමින්...",
    "Full name": "සම්පූර්ණ නම",
    "Email": "විද්‍යුත් තැපෑල",
    "Contact number": "දුරකථන අංකය",
    "Alternative contact": "විකල්ප දුරකථන අංකය",
    "Preferred contact": "කැමති සම්බන්ධතා ක්‍රමය",
    "WhatsApp number": "WhatsApp අංකය",
    "Product category": "නිෂ්පාදන කාණ්ඩය",
    "Farm/business name": "ගොවිපළේ/ව්‍යාපාරයේ නම",
    "Not provided": "සපයා නැත",
    "Registration details": "ලියාපදිංචි විස්තර",
    "These are the details saved when you created your GoviShop account.": "ඔබ GoviShop ගිණුම සාදන විට සුරැකි විස්තර මෙන්න.",
    "YOUR ACCOUNT": "ඔබේ ගිණුම",
    "Password": "මුරපදය",
    "Signing in...": "පිවිසෙමින්...",
    "Log out": "පිටවන්න",
    "View account details": "ගිණුම් විස්තර බලන්න",
    "Download GoviShop": "GoviShop බාගන්න",
    "Install for Windows": "Windows සඳහා ස්ථාපනය කරන්න",
    "Install for Android": "Android සඳහා ස්ථාපනය කරන්න",
    "Open the browser menu and choose Install GoviShop or Install page as app.": "බ්‍රවුසර මෙනුව විවෘත කර Install GoviShop හෝ Install page as app තෝරන්න.",
    "Open the browser menu and choose Install GoviShop or Add to Home Screen.": "බ්‍රවුසර මෙනුව විවෘත කර Install GoviShop හෝ Add to Home Screen තෝරන්න.",
    "Windows app installation started.": "Windows යෙදුම ස්ථාපනය කිරීම ආරම්භ විය.",
    "Android app installation started.": "Android යෙදුම ස්ථාපනය කිරීම ආරම්භ විය.",
    "Profile menu": "පැතිකඩ මෙනුව",
    "Mark all as read": "සියල්ල කියවූ ලෙස සලකුණු කරන්න",
    "View all notifications": "සියලු දැනුම්දීම් බලන්න",
    "New offer received": "නව මිල ගණනක් ලැබී ඇත",
    "Green Harvest Traders offered Rs. 430 / kg for Bell Pepper.": "Green Harvest Traders මාළු මිරිස් කි.ග්‍රෑ. එකකට රු. 430ක මිලක් ඉදිරිපත් කළේය.",
    "Listing viewed": "ලැයිස්තුව නරඹා ඇත",
    "Your Tomato listing was viewed by a buyer.": "ගැනුම්කරුවෙකු ඔබේ තක්කාලි ලැයිස්තුව නරඹා ඇත.",
    "10 minutes ago": "මිනිත්තු 10කට පෙර",
    "1 hour ago": "පැයකට පෙර",
    "GoviBot chat": "GoviBot සංවාදය",
    "GoviShop Assistant": "GoviShop සහායක",
    "Hi, I am GoviBot. How can I help you?": "ආයුබෝවන්, මම GoviBot. ඔබට උදව් කරන්නේ කෙසේද?",
    "GoviBot is thinking...": "GoviBot සිතමින්...",
    "Ask GoviBot something...": "GoviBot ගෙන් යමක් අසන්න...",
    "Message GoviBot": "GoviBot වෙත පණිවිඩයක්",
    "Send message": "පණිවිඩය යවන්න",
    "Open GoviBot": "GoviBot විවෘත කරන්න",
    "Close GoviBot": "GoviBot වසන්න",
    "vegetables": "එළවළු",
    "fruits": "පලතුරු",
    "grains": "ධාන්‍ය",
    "ratnapura": "රත්නපුර",
    "colombo": "කොළඹ",
    "kandy": "මහනුවර",
    "tomato": "තක්කාලි",
    "bell pepper": "මාළු මිරිස්",
    "green chilli": "අමු මිරිස්",
    "The backend server is not running. Start the server on port 5000 and try again.": "පසුබිම් සේවාදායකය ක්‍රියාත්මක නොවේ. සේවාදායකය 5000 තොටුවේ ආරම්භ කර නැවත උත්සාහ කරන්න.",
    "Cannot reach the server. Start GoviShop backend on port 5000 and try again.": "GoviShop පසුබිම් සේවාදායකයට සම්බන්ධ විය නොහැක. 5000 තොටුවේ සේවාදායකය ආරම්භ කර නැවත උත්සාහ කරන්න.",
    "Cannot reach GoviShop server on port 5000.": "5000 තොටුවේ ඇති GoviShop සේවාදායකයට සම්බන්ධ විය නොහැක.",
    "Unable to log in": "පිවිසීමට නොහැක",
    "Unable to create account": "ගිණුම සෑදීමට නොහැක",
    "Request failed": "ඉල්ලීම අසාර්ථක විය",
    "Authentication is required": "සත්‍යාපනය අවශ්‍ය වේ",
    "Invalid authentication token": "සත්‍යාපන ටෝකනය වලංගු නොවේ",
    "Authentication token has expired": "සත්‍යාපන ටෝකනය කල් ඉකුත් වී ඇත",
    "Account no longer exists": "ගිණුම තවදුරටත් නොපවතී",
    "Only farmers can perform this action": "මෙම ක්‍රියාව කළ හැක්කේ ගොවීන්ට පමණි",
    "Only buyers can perform this action": "මෙම ක්‍රියාව කළ හැක්කේ ගැනුම්කරුවන්ට පමණි",
    "All required account fields must be provided": "අවශ්‍ය සියලු ගිණුම් තොරතුරු ලබා දිය යුතුය",
    "An account with that email or NIC already exists": "එම විද්‍යුත් තැපෑල හෝ ජාතික හැඳුනුම්පත් අංකය සහිත ගිණුමක් දැනටමත් ඇත",
    "Account created successfully. Please log in.": "ගිණුම සාර්ථකව සාදන ලදී. කරුණාකර පිවිසෙන්න.",
    "Failed to create account": "ගිණුම සෑදීම අසාර්ථක විය",
    "Email and password are required": "විද්‍යුත් තැපෑල සහ මුරපදය අවශ්‍ය වේ",
    "Invalid email or password": "විද්‍යුත් තැපෑල හෝ මුරපදය වැරදිය",
    "Listing, offered price, and quantity are required": "ලැයිස්තුව, ඉදිරිපත් කරන මිල සහ ප්‍රමාණය අවශ්‍ය වේ",
    "Message must be 500 characters or fewer": "පණිවිඩය අක්ෂර 500ක් හෝ ඊට අඩු විය යුතුය",
    "Listing not found": "ලැයිස්තුව සොයාගත නොහැක",
    "This listing is not linked to a farmer account yet": "මෙම ලැයිස්තුව තවමත් ගොවි ගිණුමකට සම්බන්ධ කර නැත",
    "You cannot bid on your own listing": "ඔබට ඔබේම ලැයිස්තුවට ලංසු තැබිය නොහැක",
    "Requested quantity exceeds the available quantity": "ඉල්ලූ ප්‍රමාණය ලබාගත හැකි ප්‍රමාණය ඉක්මවයි",
    "This listing already has an accepted bid": "මෙම ලැයිස්තුවට දැනටමත් පිළිගත් ලංසුවක් ඇත",
    "You already have a pending bid for this listing": "මෙම ලැයිස්තුව සඳහා ඔබට දැනටමත් පොරොත්තු ලංසුවක් ඇත",
    "Failed to submit bid": "ලංසුව ඉදිරිපත් කිරීම අසාර්ථක විය",
    "Failed to fetch your bids": "ඔබේ ලංසු ලබාගැනීම අසාර්ථක විය",
    "Failed to fetch received bids": "ලැබුණු ලංසු ලබාගැනීම අසාර්ථක විය",
    "A valid bid decision is required": "වලංගු ලංසු තීරණයක් අවශ්‍ය වේ",
    "Bid not found": "ලංසුව සොයාගත නොහැක",
    "You can only manage bids for your listings": "ඔබට කළමනාකරණය කළ හැක්කේ ඔබේ ලැයිස්තුවල ලංසු පමණි",
    "This bid has already been decided": "මෙම ලංසුව පිළිබඳව දැනටමත් තීරණයක් ගෙන ඇත",
    "Bid accepted successfully": "ලංසුව සාර්ථකව පිළිගන්නා ලදී",
    "Bid rejected successfully": "ලංසුව සාර්ථකව ප්‍රතික්ෂේප කරන ලදී",
    "Failed to update bid": "ලංසුව යාවත්කාලීන කිරීම අසාර්ථක විය",
    "Failed to fetch listings": "ලැයිස්තු ලබාගැනීම අසාර්ථක විය",
    "Failed to fetch your listings": "ඔබේ ලැයිස්තු ලබාගැනීම අසාර්ථක විය",
    "Crop, category, location, quantity, and price are required": "බෝගය, කාණ්ඩය, ස්ථානය, ප්‍රමාණය සහ මිල අවශ්‍ය වේ",
    "Listing created successfully": "ලැයිස්තුව සාර්ථකව සාදන ලදී",
    "Failed to create listing": "ලැයිස්තුව සෑදීම අසාර්ථක විය",
    "Please enter a message.": "කරුණාකර පණිවිඩයක් ඇතුළත් කරන්න.",
    "Message must be 1000 characters or fewer.": "පණිවිඩය අක්ෂර 1000ක් හෝ ඊට අඩු විය යුතුය",
    "GoviShop API is running": "GoviShop API ක්‍රියාත්මක වේ",
};

const textSources = new WeakMap();
const attributeSources = new WeakMap();

function translateText(value, language) {
    if (language === "en") {
        return value;
    }

    const trimmedValue = value.trim();
    if (!trimmedValue) {
        return value;
    }

    const leadingWhitespace = value.slice(0, value.indexOf(trimmedValue));
    const trailingWhitespace = value.slice(value.indexOf(trimmedValue) + trimmedValue.length);

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
        const currentValue = textNode.nodeValue;
        const previous = textSources.get(textNode);
        const sourceValue = previous && currentValue === previous.translated
            ? previous.source
            : currentValue;
        const translated = translateText(sourceValue, language);
        textSources.set(textNode, { source: sourceValue, translated });
        if (translated !== currentValue) {
            textNode.nodeValue = translated;
        }
    });

    document.querySelectorAll("input[placeholder], textarea[placeholder], [aria-label], img[alt]").forEach((element) => {
        ["placeholder", "aria-label", "alt"].forEach((attribute) => {
            if (element.hasAttribute(attribute)) {
                let sources = attributeSources.get(element);
                if (!sources) {
                    sources = new Map();
                    attributeSources.set(element, sources);
                }
                const currentValue = element.getAttribute(attribute);
                const previous = sources.get(attribute);
                const sourceValue = previous && currentValue === previous.translated
                    ? previous.source
                    : currentValue;
                const translated = translateText(sourceValue, language);
                sources.set(attribute, { source: sourceValue, translated });
                if (translated !== currentValue) {
                    element.setAttribute(attribute, translated);
                }
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
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["aria-label", "alt", "placeholder"],
            characterData: true,
            childList: true,
            subtree: true,
        });

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
