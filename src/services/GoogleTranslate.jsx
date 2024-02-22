import { useEffectOnce } from "../common/useEffectOnce";

// GoogleTranslate is a React functional component that adds Google Translate functionality to your website.
function GoogleTranslate() {
  // googleTranslateElementInit is a function that initializes the Google Translate Element on the page.
  // It sets the page language to English, enables auto display, and sets the layout to SIMPLE.
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: "true",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element" // This is the id of the HTML element where the Google Translate widget will be rendered.
    );
  };

  // useEffectOnce is a custom hook that runs the provided function only once after the component is first rendered.
  // In this case, it adds a script tag to the body of the document that loads the Google Translate Element script.
  // It also assigns the googleTranslateElementInit function to the global window object so that it can be called by the Google Translate script.
  useEffectOnce(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" // The URL of the Google Translate script. The cb parameter is the name of the callback function that the script will call once it has loaded.
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
}

export default GoogleTranslate; // Export the GoogleTranslate component for use in other parts of the application.
