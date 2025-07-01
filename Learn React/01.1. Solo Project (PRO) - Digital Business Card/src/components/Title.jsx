export default function Title() {
    return (
        <section className="title container">
            <h1 className="title-header">Laura Smith</h1>
            <h2 className="title-job">Frontend Developer</h2>
            <p className="title-website">laurasmith.website</p>
            <div className="title-social">
                <a className="title-links white" href="mailto:some_email@react.com"><i className="fa-solid fa-envelope"></i>Email</a>
                <a className="title-links blue" href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </section>
    );
}
