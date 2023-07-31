
import "./Card.css";

const Card = (props) => {
    const classes = "card " + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;

// const classes = "card " + props.className;
// Component တစ်ခုကနေ တစ်ခုကို className တွေချိတ်ချင်ရင် variable တစ်ခုတည်ဆောက်ပြီး ရေးရတယ်။ မဟုတ်ရင် className ထဲက class တွေက eg.[className = "cardExpenseItem"] ပူးနေတာဖြစ်ပါတယ်။