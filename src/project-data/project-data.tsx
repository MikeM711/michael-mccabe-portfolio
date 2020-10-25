import parseit from "../img/parseit.png";
import youtubeScraper from "../img/youtube-scraper.png";
import handwritingRecognition from "../img/handwriting-recognition.png";

const projectData = [
    {
        "title": "ParseIt",
        "repoName": "ParseIt",
        "description": ["A full-stack web tool that allows non-technical people the ability to extract information, or perform data science, for large amounts of PDF documents or complex text data.",
        "ParseIt comes with 21 simple, open-ended modules that can either add, remove, replace, split or save text. The purpose of ParseIt is to \"stack\" these modules on top of each other, and have your input funneled through each module. As modules are stacked, one can solve very challenging and unique parsing problems.",
        "The tool incorporates text-preview features that use text highlighting as a guide to let the user know exactly how they are parsing their data, before they commit to a parsing action."
        ],
        "projectImage": parseit,
        "alt": "parseIt"
    },
    {
        "title": "YouTube Comment Scraper",
        "repoName": "React-YouTube-Comment-Section-Scraper",
        "description": ["A web application that uses a bot to render and capture YouTube comments, as well as comment characteristics, on a given YouTube video.", 
        "When the application is supplied with comments, users are able to filter comments using variety of filter functions that can be chained together."
        ],
        "projectImage": youtubeScraper,
        "alt": "youtube-scraper"
    },
    {
        "title": "Handwriting Recognition",
        "repoName": "Deep-Learning-Handwriting-Recognition",
        "description": ["A web tool that utilizes pre-trained deep learning models to predict users' handwriting using a resizable drawing canvas.", 
        "The full A.I. network utilizes a \"jury\" of 5 convolutional models that takes the aggregate of all results to create a singular prediction.", 
        "See my Python Notebook inside the Code link for more detail on how these models were trained."
        ],
        "projectImage": handwritingRecognition,
        "alt": "handwriting-recognition"
    }
]

export default projectData