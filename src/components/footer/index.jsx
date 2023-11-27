import { useSelector } from "react-redux";
import BootstrapLogo from "../../assets/svg/bootstrap-logo.svg"
import LinksContainer from "./components/links-container";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

export default function Footer() {
  const categoryState = useSelector((state) => state.categoryState);
  const themeContextValue = useContext(ThemeContext)

    return (
    <>
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={BootstrapLogo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-body-secondary">&copy; 2017–2023</small>
      </div>

      <LinksContainer 
      title="Categories" 
      links={categoryState.categories.slice(0, 5).map((category) => ({
        url: `/category/${category.slug}`,
        title: category.name,
      }))}
        />

        <LinksContainer
        title="About Us"
        links={[
        { url: "about-us", title: "About Us"},
        { url: "about-us/vision-mission", title: "Vision & Mission"},
        { url: "about-us/contact-us", title: "Contact Us"},
        { url: "about-us/privacy-policy", title: "Privacy Policy"},
        ]}
        />
        <div className="col-12 col-md">
          Theme color:
          <br />
          <Button variant="light" onClick={() => themeContextValue.setTheme("light")}>
            {themeContextValue.theme === 'light' ? (
            <i class="fa-regular fa-square-check"></i>
             ) : (
              <i class="fa-regular fa-moon"></i>
              )}
              &nbsp;Light
              </Button>
          &nbsp;
          <Button variant="dark" onClick={() => themeContextValue.setTheme("dark")}
          >
            {themeContextValue.theme === 'dark' ? (
            <i class="fa-regular fa-square-check"></i>
             ) : (
              <i class="fa-solid fa-moon"></i>
              )}
              &nbsp;Dark
              </Button>
          </div>
      </div>   
      </footer>
    </>
    );
}