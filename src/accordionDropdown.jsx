import minus from "../src/assets/images/icon-minus.svg";
import plus from "../src/assets/images/icon-plus.svg";
import faqLogo from "../src/assets/images/icon-star.svg";
import { useState } from "react";

let AccordionDropdown = () => {
    const [imgOne, setImgOne] = useState(plus);
    const [imgTwo, setImgTwo] = useState(plus);
    const [imgThree, setImgThree] = useState(plus);
    const [imgFour, setImgFour] = useState(plus);
    const [HTMLOne, setHTMLOne] = useState("");
    const [HTMLTwo, setHTMLTwo] = useState("");
    const [HTMLThree, setHTMLThree] = useState("");
    const [HTMLFour, setHTMLFour] = useState("");
    const [itemOnePadding, setItemOnePadding] = useState("zero--padding");
    const [itemTwoPadding, setItemTwoPadding] = useState("zero--padding");
    const [itemThreePadding, setItemThreePadding] = useState("zero--padding");



    let toggleAccordionOne = () => { if(imgOne === plus) {
        setHTMLOne("Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.");
        setImgOne(minus);
        setItemOnePadding("twenty--padding");
        setHTMLTwo("");
        setImgTwo(plus);
        setItemTwoPadding("zero--padding");
        setHTMLThree("");
        setImgThree(plus);
        setItemThreePadding("zero--padding");
        setHTMLFour("");
        setImgFour(plus);
    } else if(imgOne === minus) {
        setHTMLOne("");
        setImgOne(plus);
        setItemOnePadding("zero--padding");
    }
    }

    let toggleAccordionTwo = () => { if(imgTwo === plus) {
        setHTMLOne("");
        setImgOne(plus);
        setItemOnePadding("zero--padding");
        setHTMLTwo("Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.");
        setImgTwo(minus);
        setItemTwoPadding("twenty--padding");
        setHTMLThree("");
        setImgThree(plus);
        setItemThreePadding("zero--padding");
        setHTMLFour("");
        setImgFour(plus);
    } else if(imgTwo === minus) {
        setHTMLTwo("");
        setImgTwo(plus);
        setItemTwoPadding("zero--padding");
    }
    }

    let toggleAccordionThree = () => { if(imgThree === plus) {
        setHTMLOne("");
        setImgOne(plus);
        setItemOnePadding("zero--padding");
        setHTMLTwo("");
        setImgTwo(plus);
        setItemTwoPadding("zero--padding");
        setHTMLThree("Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!");
        setImgThree(minus);
        setItemThreePadding("twenty--padding");
        setHTMLFour("");
        setImgFour(plus);
    } else if(imgThree === minus) {
        setHTMLThree("");
        setImgThree(plus);
        setItemThreePadding("zero--padding");
    }
    }

    let toggleAccordionFour = () => { if(imgFour === plus) {
        setHTMLOne("");
        setImgOne(plus);
        setItemOnePadding("zero--padding");
        setHTMLTwo("");
        setImgTwo(plus);
        setItemTwoPadding("zero--padding");
        setHTMLThree("");
        setImgThree(plus);
        setItemThreePadding("zero--padding");
        setHTMLFour("The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.");
        setImgFour(minus);
    } else if(imgFour === minus) {
        setHTMLFour("");
        setImgFour(plus);
    }
    }

    return <>
    
        <article id="faqs--section">
            <figure className="faqs--title">
                <img className="faqs--logo" src={faqLogo} alt="" />
                <h1 className="faqs--text">FAQs</h1>
            </figure>

            <figure onKeyDown={ (event) => event.key=== "Enter"? toggleAccordionOne() : null} className="title--and--btn" tabIndex="0">
                <h4 className="faqs--text">What is Frontend Mentor, and how will it help me?</h4>
                <img className="btn" onClick={toggleAccordionOne} src={imgOne} alt="" />
            </figure>
            <h5 className={`faqs--subtext faqs--border ${itemOnePadding}`} id="faq--one">{HTMLOne}</h5>
            
            <figure onKeyDown={ (event) => event.key==="Enter"? toggleAccordionTwo() : null } className="title--and--btn" tabIndex="0">
                <h4 className="faqs--text">Is Frontend Mentor free?</h4>
                <img className="btn" onClick={toggleAccordionTwo} src={imgTwo} alt="" />
            </figure>
            <h5 className={`faqs--subtext faqs--border ${itemTwoPadding}`} id="faq--two">{HTMLTwo}</h5>
    
            <figure onKeyDown={ (event) => event.key==="Enter"? toggleAccordionThree() : null} className="title--and--btn" tabIndex="0">
                <h4 className="faqs--text">Can I use Frontend Mentor projects in my portfolio?</h4>
                <img className="btn" onClick={toggleAccordionThree} src={imgThree} alt="" />
            </figure>
            <h5 className={`faqs--subtext faqs--border ${itemThreePadding}`} id="faq--three">{HTMLThree}</h5>
    
            <figure onKeyDown={ (event) => event.key==="Enter"? toggleAccordionFour() : null} className="title--and--btn" tabIndex="0">
                <h4 className="faqs--text">How can I get help if I'm stuck on a challenge?</h4>
                <img className="btn" onClick={toggleAccordionFour} src={imgFour} alt="" />
            </figure>
            <h5 className="faqs--subtext" id="faq--four">{HTMLFour}</h5>  

        </article>  
    </>
    }

export default AccordionDropdown

