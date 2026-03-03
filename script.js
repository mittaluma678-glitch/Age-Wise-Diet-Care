// ===== DATA =====
const dietPlans = {
    kids: {
        title: '👶 Kids Diet Plan (5-12 years)',
        meals: [
            {
                section: 'Breakfast (7:00 - 8:00 AM)',
                items: [
                    { emoji: '🥛', name: 'Milk with Turmeric or Cocoa', desc: 'Calcium & protein for growing bones' },
                    { emoji: '🥚', name: 'Boiled Eggs / Paneer Paratha', desc: 'High protein start to the day' },
                    { emoji: '🍌', name: 'Banana or Seasonal Fruit', desc: 'Natural energy & vitamins' }
                ]
            },
            {
                section: 'Lunch (12:30 - 1:30 PM)',
                items: [
                    { emoji: '🍚', name: 'Dal Rice / Roti with Sabzi', desc: 'Complex carbs & essential nutrients' },
                    { emoji: '🥗', name: 'Curd & Fresh Salad', desc: 'Probiotics & fiber intake' },
                    { emoji: '🍗', name: 'Chicken / Soya Chunks', desc: 'Protein for muscle growth' }
                ]
            },
            {
                section: 'Snacks (4:30 - 5:00 PM)',
                items: [
                    { emoji: '🥜', name: 'Dry Fruits & Nuts', desc: 'Healthy fats & brain fuel' },
                    { emoji: '🧃', name: 'Fresh Fruit Juice', desc: 'No added sugar, natural vitamins' }
                ]
            },
            {
                section: 'Dinner (7:30 - 8:30 PM)',
                items: [
                    { emoji: '🍲', name: 'Khichdi / Light Dal Roti', desc: 'Easy to digest & nutritious' },
                    { emoji: '🥛', name: 'Warm Milk before Bed', desc: 'Calcium & restful sleep' }
                ]
            }
        ]
    },
    teens: {
        title: '🧑 Teenager Diet Plan (13-19 years)',
        meals: [
            {
                section: 'Breakfast (7:00 - 8:00 AM)',
                items: [
                    { emoji: '🥣', name: 'Oats / Poha with Veggies', desc: 'Complex carbs for study energy' },
                    { emoji: '🥚', name: 'Egg Omelette / Sprouts', desc: 'Protein & iron boost' },
                    { emoji: '🍊', name: 'Orange / Pomegranate Juice', desc: 'Vitamin C & iron absorption' }
                ]
            },
            {
                section: 'Lunch (1:00 - 2:00 PM)',
                items: [
                    { emoji: '🍛', name: 'Rice, Dal, Roti, Sabzi', desc: 'Complete balanced meal' },
                    { emoji: '🥩', name: 'Fish / Chicken / Paneer', desc: 'Muscle building protein' },
                    { emoji: '🥒', name: 'Raita & Green Salad', desc: 'Gut health & hydration' }
                ]
            },
            {
                section: 'Evening Snacks (5:00 PM)',
                items: [
                    { emoji: '🥪', name: 'Peanut Butter Sandwich', desc: 'Healthy fats & sustained energy' },
                    { emoji: '🍎', name: 'Apple / Guava', desc: 'Fiber & natural sugars' }
                ]
            },
            {
                section: 'Dinner (8:00 - 9:00 PM)',
                items: [
                    { emoji: '🍲', name: 'Soup + Roti + Light Curry', desc: 'Easy digestion with nutrients' },
                    { emoji: '🥛', name: 'Milk or Buttermilk', desc: 'Calcium for growing bones' }
                ]
            }
        ]
    },
    adults: {
        title: '💪 Adult Diet Plan (20-45 years)',
        meals: [
            {
                section: 'Breakfast (7:00 - 8:30 AM)',
                items: [
                    { emoji: '🥑', name: 'Avocado Toast / Upma', desc: 'Healthy fats & complex carbs' },
                    { emoji: '🥚', name: 'Egg Whites / Moong Dal Chilla', desc: 'Lean protein to start the day' },
                    { emoji: '🍵', name: 'Green Tea / Black Coffee', desc: 'Antioxidants & metabolism boost' }
                ]
            },
            {
                section: 'Lunch (12:30 - 1:30 PM)',
                items: [
                    { emoji: '🥗', name: 'Quinoa / Brown Rice Bowl', desc: 'Low GI carbs for sustained energy' },
                    { emoji: '🍗', name: 'Grilled Chicken / Tofu', desc: 'High protein, low fat' },
                    { emoji: '🥦', name: 'Steamed Veggies & Salad', desc: 'Fiber & micronutrients' }
                ]
            },
            {
                section: 'Snacks (4:00 - 5:00 PM)',
                items: [
                    { emoji: '🥜', name: 'Mixed Nuts & Seeds', desc: 'Omega-3 & healthy fats' },
                    { emoji: '🫐', name: 'Greek Yogurt with Berries', desc: 'Protein & probiotics' }
                ]
            },
            {
                section: 'Dinner (7:00 - 8:00 PM)',
                items: [
                    { emoji: '🐟', name: 'Grilled Fish / Paneer Tikka', desc: 'Lean protein for muscle repair' },
                    { emoji: '🥬', name: 'Soup & Salad', desc: 'Light, nutrient-dense dinner' }
                ]
            }
        ]
    },
    seniors: {
        title: '👴 Senior Diet Plan (45+ years)',
        meals: [
            {
                section: 'Breakfast (7:00 - 8:00 AM)',
                items: [
                    { emoji: '🥣', name: 'Daliya / Oatmeal Porridge', desc: 'High fiber for heart health' },
                    { emoji: '🥛', name: 'Warm Milk with Almonds', desc: 'Calcium & brain health' },
                    { emoji: '🍎', name: 'Soaked Dry Fruits', desc: 'Antioxidants & good fats' }
                ]
            },
            {
                section: 'Lunch (12:00 - 1:00 PM)',
                items: [
                    { emoji: '🍲', name: 'Soft Roti, Dal, Light Sabzi', desc: 'Easy to digest & balanced' },
                    { emoji: '🥒', name: 'Bottle Gourd / Ridge Gourd Curry', desc: 'Low calorie & hydrating' },
                    { emoji: '🥗', name: 'Fresh Salad with Lemon', desc: 'Vitamin C & digestion aid' }
                ]
            },
            {
                section: 'Evening (4:00 PM)',
                items: [
                    { emoji: '🍵', name: 'Herbal Tea / Green Tea', desc: 'Anti-inflammatory & calming' },
                    { emoji: '🫘', name: 'Roasted Chana / Makhana', desc: 'Light protein & crunch' }
                ]
            },
            {
                section: 'Dinner (6:30 - 7:30 PM)',
                items: [
                    { emoji: '🍜', name: 'Vegetable Soup + Soft Khichdi', desc: 'Warm, light & nutritious' },
                    { emoji: '🥛', name: 'Turmeric Milk before Bed', desc: 'Anti-inflammatory & better sleep' }
                ]
            }
        ]
    }
};

// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== MODAL =====
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openDietPlan(planKey) {
    const plan = dietPlans[planKey];
    if (!plan) return;

    modalTitle.textContent = plan.title;

    let html = '';
    plan.meals.forEach(section => {
        html += `<div class="meal-section">
            <h4>${section.section}</h4>`;
        section.items.forEach(item => {
            html += `<div class="meal-item">
                <span class="meal-emoji">${item.emoji}</span>
                <div class="meal-info">
                    <h5>${item.name}</h5>
                    <p>${item.desc}</p>
                </div>
            </div>`;
        });
        html += `</div>`;
    });

    modalBody.innerHTML = html;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ===== BMI CALCULATOR =====
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        alert('Please enter valid weight and height values.');
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    const circle = document.querySelector('.bmi-result-circle');
    const bmiVal = document.querySelector('.bmi-value');
    const category = document.querySelector('.bmi-category');
    const advice = document.querySelector('.bmi-advice');

    bmiVal.textContent = bmi;

    // Remove all classes
    circle.className = 'bmi-result-circle';
    category.className = 'bmi-category';

    if (bmi < 18.5) {
        circle.classList.add('underweight');
        category.classList.add('bmi-underweight');
        category.textContent = 'Underweight';
        advice.textContent = 'You should increase your calorie intake with nutritious meals. Include more protein, healthy fats, and complex carbohydrates.';
    } else if (bmi < 25) {
        circle.classList.add('normal');
        category.classList.add('bmi-normal');
        category.textContent = 'Normal Weight ✅';
        advice.textContent = 'Great job! Maintain your healthy lifestyle with a balanced diet and regular exercise.';
    } else if (bmi < 30) {
        circle.classList.add('overweight');
        category.classList.add('bmi-overweight');
        category.textContent = 'Overweight';
        advice.textContent = 'Consider increasing physical activity and reducing processed foods. Focus on portion control and whole foods.';
    } else {
        circle.classList.add('obese');
        category.classList.add('bmi-obese');
        category.textContent = 'Obese';
        advice.textContent = 'Please consult a healthcare professional for personalized advice. Focus on gradual lifestyle changes.';
    }
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const suffix = counter.dataset.suffix || '';
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 25);
    });
}

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
let countersAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger counter animation when stats bar is visible
            if (entry.target.classList.contains('stats-bar') && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => observer.observe(el));

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input');
        if (emailInput.value) {
            alert('🎉 Thank you for subscribing! Stay healthy!');
            emailInput.value = '';
        }
    });
}
