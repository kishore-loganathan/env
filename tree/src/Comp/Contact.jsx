import Nav from "./nav";
import Bot from "./bottom";
import con from "../assets/img/imagesc.jpg";

const Contact = () => {
    return (
        <>
            <Nav />

            <div className="h-full w-full flex flex-col items-center font-serif mx-7">
                <div className="font-semibold text-2xl mb-4">CONTACT</div>

                <div className="flex flex-col md:flex-row w-full justify-between mt-10 gap-20">
                    <div className="leading-9 w-full md:w-1/2 mb-4 md:mb-0">
                        <span className="font-semibold text-xl">
                            Contact our Foundation
                        </span>
                        <br />
                        If you find our activities interesting, please help us to fulfill the goals of the One More Tree Foundation. Let's plant trees together, educate, and promote corporate social responsibility against climate change.
                        <div className="mt-10 m-10">
                            <img className="h-[60vh] w-[60vw]" src={con} alt="Contact" />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 leading-8">
                        <div className="font-bold">Address</div>
                        <address>
                            <div>One More Tree Foundation</div>
                            <div>Aleja Zjednoczenia 17/U-1</div>
                            <div>01-829 Warsaw</div>
                            <div>Poland</div>
                            <div>Tax number: 1182255811</div>
                        </address>
                        <br />
                        <div className="font-bold">Contact details</div>
                        <div>+48 883 622 887</div>
                        <div>info@one-more-tree.org</div>
                    </div>
                </div>
            </div>

            <Bot />
        </>
    );
}

export default Contact;
