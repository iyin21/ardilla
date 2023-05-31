import { CarouselItemProps } from "../subcomponents/CarouselItem";
import PhoneImg from "../../../assets/images/right.png";
import PhoneImg1 from "../../../assets/images/phoneImg1.png";
import PhoneImg2 from "../../../assets/images/phoneImg2.png";
import PhoneImg3 from "../../../assets/images/phoneImg3.png";

export const CarouselItems: CarouselItemProps[] = [
    {
        title: "Save",
        subtitle: "Save at your own pace!",
        text: "Save your money daily, weekly, or monthly. No pressure. We work at your pace",
        productItems: [
            "Create Unlimted savings plans",
            "Withdraw anytime",
            "Save with Friends with SAN ID",
            "Be better at saving",
            "Accountability profile",
            "Activity and report",
        ],
        imgSource: PhoneImg,
    },
    {
        title: "Learn",
        subtitle: "Financial freedom begins with You and Ardilla",
        text: "Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.",
        productItems: [
            "Learn to invest in 2hrs",
            "Get a portfolio manager",
            "Stay on top of your finances",
            "Learn with family and friends",
            "Earn points and reward",
        ],
        imgSource: PhoneImg1,
    },
    {
        title: "Invest",
        subtitle: "Multiply your finances",
        text: "Investment opportunities that gets you closer to financial freedom",
        productItems: [
            "Portfolio mangement",
            "Track your returns",
            "Risk Assessment",
            "Vetted Investment opportuinities",
            "Invest within your risk appetite",
            "Invest in Naira and Dollars",
        ],
        imgSource: PhoneImg2,
    },
    {
        title: "Budget",
        subtitle: "Plan your money",
        text: "Every good budget starts with a good plan for your money",
        productItems: [
            "Save as you spend",
            "Track your expenses",
            "Organize your finances",
            "Sync and share budgets",
            "Financial guide",
            "Better decision-making",
        ],
        imgSource: PhoneImg3,
    },
    {
        title: "Insurance",
        subtitle: "Protect your interest",
        text: "Stay protected, live freely",
        productItems: [
            "Vehicle insurance",
            "Home insurance",
            "Mutual Insurance",
            "Life Insurance",
            "Health Insurance",
            "Travel Insurance",
        ],
        imgSource: PhoneImg3,
    },
];
