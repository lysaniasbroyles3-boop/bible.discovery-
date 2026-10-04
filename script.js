```javascript
/* =========================================================
   VERSEUP BIBLE STUDY
   INTERACTIVE JAVASCRIPT
   ========================================================= */


/* =========================================================
   LESSON DATA

   The included verse quotations are short/public-domain KJV
   excerpts. You can replace them with text from a translation
   you are licensed to publish.
   ========================================================= */

const lessons = [

    {
        title: "Trust God With Your Path",
        category: "Faith & Trust",
        reference: "Proverbs 3:5",
        verse:
            "Trust in the Lord with all thine heart; and lean not unto thine own understanding.",
        explanation:
            "Faith means learning to trust God's direction, even when you cannot see the whole path ahead.",
        review:
            "Trusting God means choosing faith even when you don't know everything that will happen next.",
        questions: [
            {
                question: "What are we encouraged to trust God with?",
                answers: [
                    "Only our problems",
                    "All our heart",
                    "Only our future",
                    "Nothing"
                ],
                correct: 1
            },
            {
                question: "What does the verse tell us not to lean on?",
                answers: [
                    "Our own understanding",
                    "Our friends",
                    "Our family",
                    "Our work"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "Love One Another",
        category: "Love",
        reference: "John 13:34",
        verse:
            "A new commandment I give unto you, That ye love one another.",
        explanation:
            "Jesus teaches that love should be an active part of the way we treat the people around us.",
        review:
            "Following Jesus includes showing genuine love and kindness to other people.",
        questions: [
            {
                question: "What commandment does Jesus give?",
                answers: [
                    "Love one another",
                    "Become famous",
                    "Never work",
                    "Be the strongest"
                ],
                correct: 0
            },
            {
                question: "How should this teaching affect our relationships?",
                answers: [
                    "We should ignore others",
                    "We should treat people with love",
                    "We should only help friends",
                    "We should avoid everyone"
                ],
                correct: 1
            }
        ]
    },

    {
        title: "Be Thankful",
        category: "Gratitude",
        reference: "1 Thessalonians 5:18",
        verse:
            "In every thing give thanks: for this is the will of God.",
        explanation:
            "Gratitude helps us notice the good things we have instead of focusing only on what we lack.",
        review:
            "Thankfulness is a choice we can practice every day.",
        questions: [
            {
                question: "What does the verse tell us to do?",
                answers: [
                    "Complain",
                    "Give thanks",
                    "Give up",
                    "Hide"
                ],
                correct: 1
            },
            {
                question: "When can we practice gratitude?",
                answers: [
                    "Only on holidays",
                    "Every day",
                    "Only when things are perfect",
                    "Never"
                ],
                correct: 1
            }
        ]
    },

    {
        title: "God Is With You",
        category: "Courage",
        reference: "Joshua 1:9",
        verse:
            "Be strong and of a good courage; be not afraid, neither be thou dismayed.",
        explanation:
            "God's presence can give us courage when we face difficult or unfamiliar situations.",
        review:
            "Courage does not mean that every situation is easy. It means moving forward with faith.",
        questions: [
            {
                question: "What does the verse encourage us to be?",
                answers: [
                    "Strong and courageous",
                    "Angry",
                    "Famous",
                    "Perfect"
                ],
                correct: 0
            },
            {
                question: "What does the verse tell us not to be?",
                answers: [
                    "Helpful",
                    "Afraid",
                    "Kind",
                    "Thankful"
                ],
                correct: 1
            }
        ]
    },

    {
        title: "Walk in Kindness",
        category: "Kindness",
        reference: "Ephesians 4:32",
        verse:
            "And be ye kind one to another, tenderhearted, forgiving one another.",
        explanation:
            "Kindness is more than being polite. It includes compassion, forgiveness, and caring about other people.",
        review:
            "Small acts of kindness can make a meaningful difference in someone else's day.",
        questions: [
            {
                question: "How should we treat one another?",
                answers: [
                    "With kindness",
                    "With anger",
                    "With jealousy",
                    "With disrespect"
                ],
                correct: 0
            },
            {
                question: "What else does the verse mention?",
                answers: [
                    "Winning",
                    "Forgiveness",
                    "Money",
                    "Popularity"
                ],
                correct: 1
            }
        ]
    },

    {
        title: "Ask God for Wisdom",
        category: "Wisdom",
        reference: "James 1:5",
        verse:
            "If any of you lack wisdom, let him ask of God.",
        explanation:
            "When we do not know what to do, we can seek God's wisdom instead of pretending that we know everything.",
        review:
            "Asking for wisdom is a way of recognizing that we still have things to learn.",
        questions: [
            {
                question: "What should someone ask God for if they lack it?",
                answers: [
                    "Wisdom",
                    "Popularity",
                    "Fame",
                    "More problems"
                ],
                correct: 0
            },
            {
                question: "What does asking for wisdom show?",
                answers: [
                    "That we know everything",
                    "That we are willing to learn",
                    "That we never need help",
                    "That we should quit"
                ],
                correct: 1
            }
        ]
    },

    {
        title: "Let Your Light Shine",
        category: "Purpose",
        reference: "Matthew 5:16",
        verse:
            "Let your light so shine before men, that they may see your good works.",
        explanation:
            "Our actions can point other people toward what is good and encourage them.",
        review:
            "Doing good can influence people around us in positive ways.",
        questions: [
            {
                question: "What should shine before others?",
                answers: [
                    "Our light",
                    "Our anger",
                    "Our possessions",
                    "Our worries"
                ],
                correct: 0
            },
            {
                question: "What might others see?",
                answers: [
                    "Our good works",
                    "Our passwords",
                    "Our mistakes only",
                    "Nothing"
                ],
                correct: 0
            }
        ]
    },

    {
        title: "Do Not Give Up",
        category: "Perseverance",
        reference: "Galatians 6:9",
        verse:
            "And let us not be weary in well doing: for in due season we shall reap.",
        explanation:
            "Doing the right thing can take patience. Keep going even when the results are not immediate.",
        review:
            "Good things often require patience, consistency, and perseverance.",
        questions: [
            {
                question: "What should we not become weary in doing?",
                answers: [
                    "Doing good",
                    "Complaining",
                    "Giving up",
                    "Ignoring people"
                ],
                correct: 0
            },
            {
                question: "What does the verse encourage?",
                answers: [
                    "Giving up immediately",
                    "Perseverance",
                    "Avoiding everyone",
                    "Doing nothing"
                ],
                correct: 1
            }
        ]
    }

];


/* =========================================================
   STATE
   ========================================================= */

const STORAGE_KEY = "verseup_bible_study_v2";

let state = {
    currentLesson: 0,
    xp: 0,
    completedLessons: [],
    reflections: {},
    lastStudyDate: null,
    streak: 0
};


/* =========================================================
   LOAD / SAVE
   ========================================================= */

function loadState() {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
        return;
    }

    try {

        const parsed = JSON.parse(saved);

        state = {
            ...state,
            ...parsed
        };

    } catch (error) {

        console.warn("Could not load saved progress.", error);

    }
}


function saveState() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state)
    );
}


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);


/* =========================================================
   INITIALIZATION
   ========================================================= */

loadState();

let selectedAnswers = {};

document.addEventListener("DOMContentLoaded", () => {

    setupNavigation();
    setupHomeButtons();
    setupStudyButtons();
    setupBibleSearch();
    setupReflection();

    renderEverything();
});


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    $$(".nav-btn").forEach(button => {

        button.addEventListener("click", () => {

            const page = button.dataset.page;

            showPage(page);

        });

    });
}


function showPage(page) {

    $$(".page").forEach(section => {
        section.classList.remove("active");
    });

    $$(".nav-btn").forEach(button => {
        button.classList.remove("active");
    });


    const pageElement =
        document.getElementById(`${page}Page`);

    const navButton =
        document.querySelector(
            `.nav-btn[data-page="${page}"]`
        );


    if (pageElement) {
        pageElement.classList.add("active");
    }

    if (navButton) {
        navButton.classList.add("active");
    }


    const titles = {
        home: "Grow in faith. One day at a time.",
        study: "Study the Word. Grow your faith.",
        bible: "Explore Scripture.",
        progress: "See how far you've come."
    };

    $("#pageTitle").textContent =
        titles[page] || titles.home;


    if (page === "progress") {
        renderProgressPage();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   HOME BUTTONS
   ========================================================= */

function setupHomeButtons() {

    $("#startStudy").addEventListener("click", () => {

        openStudy(state.currentLesson);

    });


    $("#continueStudy").addEventListener("click", () => {

        openStudy(state.currentLesson);

    });


    $("#challengeButton").addEventListener("click", () => {

        showToast(
            "Take a moment and think of one thing you're thankful for today."
        );

    });


    $("#resetProgress").addEventListener("click", () => {

        const confirmed =
            confirm(
                "Reset all VerseUp progress?"
            );

        if (!confirmed) {
            return;
        }

        state = {
            currentLesson: 0,
            xp: 0,
            completedLessons: [],
            reflections: {},
            lastStudyDate: null,
            streak: 0
        };

        saveState();

        selectedAnswers = {};

        renderEverything();

        showPage("home");

        showToast("Your progress has been reset.");

    });

}


/* =========================================================
   OPEN STUDY
   ========================================================= */

function openStudy(index) {

    if (index < 0) {
        index = 0;
    }

    if (index >= lessons.length) {
        index = 0;
    }

    state.currentLesson = index;

    saveState();

    selectedAnswers = {};

    renderLesson();

    showPage("study");

    setStudyStep("verse");
}


/* =========================================================
   RENDER EVERYTHING
   ========================================================= */

function renderEverything() {

    renderStats();

    renderLessonList();

    renderLesson();

    renderProgressPage();

}


/* =========================================================
   STATS
   ========================================================= */

function getLevel() {

    return Math.floor(state.xp / 100) + 1;

}


function getLevelXP() {

    return state.xp % 100;

}


function renderStats() {

    const level = getLevel();

    $("#levelStat").textContent = level;
    $("#xpStat").textContent = state.xp;

    $("#completedStat").textContent =
        state.completedLessons.length;

    $("#streakStat").textContent =
        state.streak;

    $("#topXP").textContent =
        state.xp;

    $("#topStreak").textContent =
        state.streak;

    $("#sideLevel").textContent =
        `Level ${level}`;


    const percentage =
        Math.round(
            (
                state.completedLessons.length /
                lessons.length
            ) * 100
        );

    $("#overallPercent").textContent =
        `${percentage}%`;

    $("#overallProgress").style.width =
        `${percentage}%`;
}


/* =========================================================
   LESSON LIST
   ========================================================= */

function renderLessonList() {

    const container = $("#lessonList");

    container.innerHTML = "";

    lessons.forEach((lesson, index) => {

        const completed =
            state.completedLessons.includes(index);

        const locked =
            index > 0 &&
            !state.completedLessons.includes(index - 1);


        const item =
            document.createElement("button");

        item.className =
            "lesson-item";


        if (index === state.currentLesson) {
            item.classList.add("active");
        }

        if (completed) {
            item.classList.add("completed");
        }

        if (locked) {
            item.classList.add("locked");
        }


        item.innerHTML = `
            <span class="lesson-item-number">
                ${completed ? "✓" : String(index + 1).padStart(2, "0")}
            </span>

            <span class="lesson-item-title">
                ${lesson.title}
            </span>
        `;


        item.addEventListener("click", () => {

            if (locked) {

                showToast(
                    "Complete the previous lesson to unlock this one."
                );

                return;
            }

            openStudy(index);

        });


        container.appendChild(item);

    });


    $("#lessonCount").textContent =
        `${state.completedLessons.length} / ${lessons.length}`;
}


/* =========================================================
   RENDER LESSON
   ========================================================= */

function renderLesson() {

    const lesson =
        lessons[state.currentLesson];


    $("#lessonTitle").textContent =
        lesson.title;

    $("#heroTitle").textContent =
        lesson.title;

    $("#heroDescription").textContent =
        lesson.explanation;

    $("#lessonCategory").textContent =
        lesson.category;

    $("#lessonNumber").textContent =
        String(state.currentLesson + 1).padStart(2, "0");

    $("#verseText").textContent =
        lesson.verse;

    $("#verseReference").textContent =
        lesson.reference;

    $("#lessonExplanation").textContent =
        lesson.explanation;

    $("#reviewText").textContent =
        lesson.review;


    renderQuestions();

    updateReflection();

}


/* =========================================================
   QUESTIONS
   ========================================================= */

function renderQuestions() {

    const lesson =
        lessons[state.currentLesson];

    const container =
        $("#questionsContainer");

    container.innerHTML = "";

    selectedAnswers = {};


    lesson.questions.forEach((question, questionIndex) => {

        const card =
            document.createElement("div");

        card.className =
            "question-card";


        const title =
            document.createElement("h3");

        title.textContent =
            `${questionIndex + 1}. ${question.question}`;


        const answers =
            document.createElement("div");

        answers.className =
            "answers";


        question.answers.forEach((answer, answerIndex) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-option";

            button.textContent =
                answer;


            button.addEventListener("click", () => {

                selectedAnswers[questionIndex] =
                    answerIndex;


                answers
                    .querySelectorAll(".answer-option")
                    .forEach(option => {
                        option.classList.remove("selected");
                    });


                button.classList.add("selected");

            });


            answers.appendChild(button);

        });


        card.appendChild(title);
        card.appendChild(answers);

        container.appendChild(card);

    });


    $("#answerResult").textContent = "";
    $("#answerResult").className = "answer-result";
}


/* =========================================================
   STUDY BUTTONS
   ========================================================= */

function setupStudyButtons() {

    $("#toQuestions").addEventListener(
        "click",
        () => setStudyStep("questions")
    );


    $("#backToVerse").addEventListener(
        "click",
        () => setStudyStep("verse")
    );


    $("#submitAnswers").addEventListener(
        "click",
        checkAnswers
    );


    $("#completeLesson").addEventListener(
        "click",
        completeLesson
    );


    $("#nextLesson").addEventListener(
        "click",
        goToNextLesson
    );

}


/* =========================================================
   STUDY STEPS
   ========================================================= */

function setStudyStep(step) {

    $$(".study-step").forEach(element => {
        element.classList.remove("active");
    });


    const target =
        document.getElementById(`${step}Step`);

    if (target) {
        target.classList.add("active");
    }


    $$(".step").forEach(element => {

        element.classList.remove(
            "active",
            "completed"
        );

    });


    const order = [
        "verse",
        "questions",
        "review",
        "complete"
    ];

    const currentIndex =
        order.indexOf(step);


    $$(".step").forEach(element => {

        const elementStep =
            element.dataset.step;

        const elementIndex =
            order.indexOf(elementStep);


        if (elementIndex < currentIndex) {
            element.classList.add("completed");
        }

        if (elementIndex === currentIndex) {
            element.classList.add("active");
        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CHECK ANSWERS
   ========================================================= */

function checkAnswers() {

    const lesson =
        lessons[state.currentLesson];


    const questionCount =
        lesson.questions.length;


    if (
        Object.keys(selectedAnswers).length <
        questionCount
    ) {

        $("#answerResult").textContent =
            "Please answer every question first.";

        $("#answerResult").className =
            "answer-result error";

        return;
    }


    let correct = 0;


    lesson.questions.forEach(
        (question, questionIndex) => {

            const selected =
                selectedAnswers[questionIndex];


            const card =
                $("#questionsContainer")
                    .children[questionIndex];


            const options =
                card.querySelectorAll(
                    ".answer-option"
                );


            options.forEach(
                (option, answerIndex) => {

                    option.classList.remove(
                        "correct",
                        "wrong"
                    );


                    if (
                        answerIndex ===
                        question.correct
                    ) {
                        option.classList.add(
                            "correct"
                        );
                    }


                    if (
                        answerIndex === selected &&
                        selected !== question.correct
                    ) {
                        option.classList.add(
                            "wrong"
                        );
                    }

                }
            );


            if (
                selected === question.correct
            ) {
                correct++;
            }

        }
    );


    if (correct === questionCount) {

        $("#answerResult").textContent =
            "✓ Perfect! Every answer is correct.";

        $("#answerResult").className =
            "answer-result success";


        setTimeout(() => {

            setStudyStep("review");

        }, 700);


    } else {

        $("#answerResult").textContent =
            `You got ${correct} of ${questionCount} correct. Review the highlighted answers and try again.`;

        $("#answerResult").className =
            "answer-result error";

    }

}


/* =========================================================
   REFLECTION
   ========================================================= */

function setupReflection() {

    $("#reflectionInput").addEventListener(
        "input",
        () => {

            const text =
                $("#reflectionInput").value;

            $("#reflectionCount").textContent =
                `${text.length} / 500`;

            state.reflections[state.currentLesson] =
                text;

            saveState();

        }
    );

}


function updateReflection() {

    const saved =
        state.reflections[state.currentLesson] || "";

    $("#reflectionInput").value =
        saved;

    $("#reflectionCount").textContent =
        `${saved.length} / 500`;

}


/* =========================================================
   COMPLETE LESSON
   ========================================================= */

function completeLesson() {

    const index =
        state.currentLesson;


    if (
        !state.completedLessons.includes(index)
    ) {

        state.completedLessons.push(index);

        state.xp += 50;

        updateStreak();

        saveState();

    }


    $("#earnedXPNumber").textContent =
        "50";

    $("#earnedXP").textContent =
        "50 XP";


    renderStats();

    renderLessonList();

    renderProgressPage();

    setStudyStep("complete");

    showToast("Study completed! +50 XP");


}


/* =========================================================
   STREAK
   ========================================================= */

function updateStreak() {

    const today =
        new Date();

    const todayString =
        today.toISOString().split("T")[0];


    if (!state.lastStudyDate) {

        state.streak = 1;

    } else {

        const previous =
            new Date(state.lastStudyDate);

        const todayDate =
            new Date(todayString);


        const difference =
            Math.round(
                (
                    todayDate -
                    previous
                ) /
                86400000
            );


        if (difference === 1) {

            state.streak++;

        } else if (difference > 1) {

            state.streak = 1;

        }

    }


    state.lastStudyDate =
        todayString;

}


/* =========================================================
   NEXT LESSON
   ========================================================= */

function goToNextLesson() {

    if (
        state.currentLesson <
        lessons.length - 1
    ) {

        openStudy(
            state.currentLesson + 1
        );

    } else {

        showPage("progress");

        showToast(
            "You completed every available study!"
        );

    }

}


/* =========================================================
   PROGRESS PAGE
   ========================================================= */

function renderProgressPage() {

    const level =
        getLevel();

    const currentXP =
        getLevelXP();


    $("#progressLevel").textContent =
        `Level ${level}`;

    $("#progressCurrentXP").textContent =
        currentXP;

    $("#progressNextXP").textContent =
        100;

    $("#levelProgress").style.width =
        `${currentXP}%`;


    $("#progressStreak").textContent =
        state.streak;

    $("#progressCompleted").textContent =
        state.completedLessons.length;

    $("#progressXP").textContent =
        state.xp;


    const history =
        $("#historyList");

    history.innerHTML = "";


    if (
        state.completedLessons.length === 0
    ) {

        history.innerHTML = `
            <div class="history-item">
                <div class="history-check">○</div>

                <div>
                    <strong>No completed studies yet</strong>
                    <small>Start your first study to begin your journey.</small>
                </div>
            </div>
        `;

        return;
    }


    [...state.completedLessons]
        .sort((a, b) => a - b)
        .forEach(index => {

            const lesson =
                lessons[index];


            const item =
                document.createElement("div");

            item.className =
                "history-item";


            item.innerHTML = `
                <div class="history-check">✓</div>

                <div>
                    <strong>${lesson.title}</strong>
                    <small>${lesson.reference} • +50 XP</small>
                </div>
            `;


            history.appendChild(item);

        });

}


/* =========================================================
   BIBLE SEARCH
   ========================================================= */

function setupBibleSearch() {

    $("#searchBible").addEventListener(
        "click",
        searchBible
    );


    [
        "#bookInput",
        "#chapterInput",
        "#verseInput"
    ].forEach(selector => {

        $(selector).addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {
                    searchBible();
                }

            }
        );

    });

}


/*
   Bible lookup uses Bible API.

   Example:
   https://bible-api.com/John%203:16?translation=kjv

   If the service changes in the future, this function can
   be replaced with another Bible API.
*/

async function searchBible() {

    const book =
        $("#bookInput").value.trim();

    const chapter =
        $("#chapterInput").value.trim();

    const verse =
        $("#verseInput").value.trim();


    if (
        !book ||
        !chapter ||
        !verse
    ) {

        showToast(
            "Enter a book, chapter, and verse."
        );

        return;
    }


    const result =
        $("#bibleResult");


    result.innerHTML = `
        <div class="bible-placeholder">
            <div class="big-book-icon">⌛</div>
            <h2>Finding your verse...</h2>
            <p>Please wait.</p>
        </div>
    `;


    try {

        const reference =
            `${book} ${chapter}:${verse}`;


        const url =
            `https://bible-api.com/${encodeURIComponent(
                reference
            )}?translation=kjv`;


        const response =
            await fetch(url);


        if (!response.ok) {
            throw new Error(
                "Verse not found."
            );
        }


        const data =
            await response.json();


        if (!data.text) {
            throw new Error(
                "Verse not found."
            );
        }


        result.innerHTML = `
            <div class="bible-result-content">

                <div class="bible-result-reference">
                    ${escapeHTML(
                        data.reference || reference
                    )}
                </div>

                <div class="bible-result-text">
                    “${escapeHTML(
                        data.text.trim()
                    )}”
                </div>

                <div class="bible-result-translation">
                    King James Version
                </div>

            </div>
        `;


    } catch (error) {

        result.innerHTML = `
            <div class="bible-placeholder">

                <div class="big-book-icon">
                    📖
                </div>

                <h2>We couldn't find that passage</h2>

                <p>
                    Check the book, chapter, and verse
                    and try again.
                </p>

            </div>
        `;

    }

}


/* =========================================================
   HTML SAFETY
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        $("#toast");


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}
```
