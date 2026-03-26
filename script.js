const tournamentsData = [
    { id: 1, name: "Spring Open", date: "2026-04-15T10:00:00", location: "City Hall", prize: "$500" },
    { id: 2, name: "Rapid Championship", date: "2026-05-20T14:00:00", location: "Chess Center", prize: "$300" },
    { id: 3, name: "Blitz Battle", date: "2026-06-10T18:00:00", location: "Online", prize: "$200" },
    { id: 4, name: "Summer Classic", date: "2026-07-25T09:00:00", location: "Grand Hotel", prize: "$1000" },
    { id: 5, name: "Autumn Invitational", date: "2026-09-12T11:00:00", location: "Convention Hall", prize: "$750" },
    { id: 6, name: "Winter Masters", date: "2026-12-05T10:00:00", location: "Royal Ballroom", prize: "$1500" }
];

let coaches = [
    {
        id: 1,
        name: "GM Pia Cramling",
        title: "Grandmaster & World-Class Competitor",
        expertise: "Endgames & Strategy",
        image: "https://placehold.co/400x300/1E293B/FFFFFF?text=GM+Pia",
        quote: "I've competed at the highest level for over 40 years. My students learn the resilience and precision needed to win.",
        phone: "+254 712 345 678",
        email: "piacramling@gmail.com",
        slots: [
            { date: "2026-06-10", time: "10:00", booked: false, slotId: "c1_s1" },
            { date: "2026-06-10", time: "14:00", booked: false, slotId: "c1_s2" },
            { date: "2026-06-12", time: "16:00", booked: false, slotId: "c1_s3" }
        ]
    },
    {
        id: 2,
        name: "IM Levy Rozman",
        title: "International Master & Chess Educator",
        expertise: "Openings & Middle Game",
        image: "https://placehold.co/400x300/1E293B/FFFFFF?text=IM+Levy",
        quote: "I've helped millions improve their chess online. Now let me help you – personally – to break through your plateau.",
        phone: "+254 723 456 789",
        email: "levyrozman@mail.com",
        slots: [
            { date: "2026-06-11", time: "11:00", booked: false, slotId: "c2_s1" },
            { date: "2026-06-11", time: "15:00", booked: false, slotId: "c2_s2" },
            { date: "2026-06-13", time: "09:00", booked: false, slotId: "c2_s3" }
        ]
    },
    {
        id: 3,
        name: "WGM Sarah Wambui",
        title: "Women's Grandmaster & Tactics Expert",
        expertise: "Tactics & Visualization",
        image: "https://placehold.co/400x300/1E293B/FFFFFF?text=WGM+Sarah",
        quote: "Tactics flow from a harmonious position. I'll help you see combinations before they appear.",
        phone: "+254 734 567 890",
        email: "sarah.w@royalchess.club",
        slots: [
            { date: "2026-06-14", time: "13:00", booked: false, slotId: "c3_s1" },
            { date: "2026-06-15", time: "10:00", booked: false, slotId: "c3_s2" }
        ]
    },
    {
        id: 4,
        name: "FM David Omondi",
        title: "FIDE Master & Junior Development Coach",
        expertise: "Positional Play & Calculation",
        image: "https://placehold.co/400x300/1E293B/FFFFFF?text=FM+David",
        quote: "I specialize in turning talented juniors into titled players. Let's build your foundation together.",
        phone: "+254 745 678 901",
        email: "david.o@royalchess.club",
        slots: [
            { date: "2026-06-16", time: "09:00", booked: false, slotId: "c4_s1" },
            { date: "2026-06-17", time: "14:00", booked: false, slotId: "c4_s2" }
        ]
    },
    {
        id: 5,
        name: "GM Viswanathan Anand",
        title: "Former World Champion & Legend",
        expertise: "All-round Excellence",
        image: "https://placehold.co/400x300/1E293B/FFFFFF?text=GM+Anand",
        quote: "Chess is a game of infinite possibilities. I'm here to help you discover your own path to mastery.",
        phone: "+254 756 789 012",
        email: "anand@royalchess.club",
        slots: [
            { date: "2026-06-18", time: "15:00", booked: false, slotId: "c5_s1" },
            { date: "2026-06-19", time: "11:00", booked: false, slotId: "c5_s2" }
        ]
    }
];

const MEMBERS_KEY = "chessClub_members";
const REGISTERED_TOURNAMENTS_KEY = "chessClub_registeredTournaments";
const BOOKED_SLOTS_KEY = "chessClub_bookedSlots";

let members = JSON.parse(localStorage.getItem(MEMBERS_KEY)) || [];
let registeredTournaments = JSON.parse(localStorage.getItem(REGISTERED_TOURNAMENTS_KEY)) || [];
let bookedSlotIds = JSON.parse(localStorage.getItem(BOOKED_SLOTS_KEY)) || [];

function applyBookedSlots() {
    coaches.forEach(coach => {
        coach.slots.forEach(slot => {
            slot.booked = bookedSlotIds.includes(slot.slotId);
        });
    });
}
applyBookedSlots();

function saveBookedSlots() {
    localStorage.setItem(BOOKED_SLOTS_KEY, JSON.stringify(bookedSlotIds));
}

function saveRegisteredTournaments() {
    localStorage.setItem(REGISTERED_TOURNAMENTS_KEY, JSON.stringify(registeredTournaments));
}

function saveMembers() {
    localStorage.setItem(MEMBERS_KEY, JSON.stringify(members));
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast) return;

    toastMessage.textContent = message;
    toast.classList.remove('hidden', 'bg-red-600', 'bg-green-600', 'bg-blue-600');
    
    if (type === 'success') {
        toast.classList.add('bg-green-600');
    } else if (type === 'error') {
        toast.classList.add('bg-red-600');
    } else {
        toast.classList.add('bg-[#1E293B]', 'border', 'border-amber-400');
    }
    
    toast.classList.remove('opacity-0', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');
    
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 3000);
}

function getRatingCategory(rating) {
    if (!rating) return "Open";
    if (rating <= 1400) return "U1400";
    if (rating <= 1600) return "U1600";
    if (rating <= 1800) return "U1800";
    return "Open";
}

const memberForm = document.getElementById('memberForm');
const memberMessage = document.getElementById('memberMessage');
const memberListContent = document.getElementById('memberListContent');

function displayMembers() {
    if (memberListContent) {
        if (members.length === 0) {
            memberListContent.innerHTML = '<p class="text-gray-400">No members yet. Be the first!</p>';
        } else {
            memberListContent.innerHTML = members.map(m => 
                `<div class="border-b border-[#334155] py-1 flex justify-between"><span>${m.name}</span><span class="text-gray-400">${m.email}</span></div>`
            ).join('');
        }
    }
}

if (memberForm) {
    memberForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const rating = document.getElementById('rating').value;

        if (!name || !email) {
            memberMessage.textContent = "Please fill all required fields.";
            memberMessage.classList.add("text-red-400");
            return;
        }

        const newMember = { name, email, rating: rating || null, registeredAt: new Date().toISOString() };
        members.push(newMember);
        saveMembers();
        memberForm.reset();
        memberMessage.textContent = "✅ Registration successful! Welcome to the club!";
        memberMessage.classList.remove("text-red-400");
        memberMessage.classList.add("text-green-400");
        displayMembers();
        showToast(`Welcome, ${name}!`, 'success');

        setTimeout(() => { memberMessage.textContent = ""; }, 3000);
    });
    displayMembers();
}

const tournamentsContainer = document.getElementById('tournamentsList');
let pendingTournamentId = null;

function renderTournaments() {
    if (!tournamentsContainer) return;
    tournamentsContainer.innerHTML = '';
    tournamentsData.forEach(tournament => {
        const registration = registeredTournaments.find(reg => reg.id === tournament.id);
        const isRegistered = !!registration;
        const category = registration ? getRatingCategory(registration.rating) : '';
        const card = document.createElement('div');
        card.className = "bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden hover:border-amber-400 transition-all duration-300";
        card.innerHTML = `
            <div class="p-5">
                <h3 class="text-xl font-bold text-white">${tournament.name}</h3>
                <p class="text-gray-300 mt-1">📅 ${new Date(tournament.date).toLocaleString()}</p>
                <p class="text-gray-300">📍 ${tournament.location}</p>
                <p class="text-amber-400 font-semibold mt-1">🏆 ${tournament.prize}</p>
                <div id="countdown-${tournament.id}" class="text-sm font-mono mt-2 ${isRegistered ? 'text-amber-400' : 'text-gray-500'}"></div>
                ${isRegistered ? `
                    <div class="mt-4 p-3 bg-[#0F172A] rounded-lg text-sm">
                        <p class="text-gray-300">Registered as: <span class="text-white">${registration.name}</span></p>
                        <p class="text-gray-300">Rating: ${registration.rating || 'N/A'}</p>
                        <p class="text-gray-300">Category: <span class="text-amber-400">${category}</span></p>
                        <p class="text-green-400">✓ Payment confirmed</p>
                    </div>
                    <button data-id="${tournament.id}" class="tournament-unregister-btn mt-2 w-full py-2 rounded-lg font-semibold transition bg-red-600 hover:bg-red-700 text-white">
                        Unregister
                    </button>
                ` : `
                    <button data-id="${tournament.id}" class="tournament-register-btn mt-4 w-full py-2 rounded-lg font-semibold transition bg-amber-400 hover:bg-amber-500 text-[#0F172A]">
                        Register
                    </button>
                `}
            </div>
        `;
        tournamentsContainer.appendChild(card);
    });

    document.querySelectorAll('.tournament-register-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tournamentId = parseInt(btn.dataset.id);
            pendingTournamentId = tournamentId;
            const modal = document.getElementById('tournamentModal');
            if (modal) modal.classList.remove('hidden');
        });
    });

    document.querySelectorAll('.tournament-unregister-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tournamentId = parseInt(btn.dataset.id);
            const registration = registeredTournaments.find(reg => reg.id === tournamentId);
            const tournament = tournamentsData.find(t => t.id === tournamentId);
            if (registration) {
                registeredTournaments = registeredTournaments.filter(reg => reg.id !== tournamentId);
                saveRegisteredTournaments();
                renderTournaments();
                showToast(`Successfully unregistered from ${tournament.name}`, 'success');
            }
        });
    });

    startAllCountdowns();
}

const tournamentModal = document.getElementById('tournamentModal');
const tournamentRegisterForm = document.getElementById('tournamentRegisterForm');
const cancelTournamentReg = document.getElementById('cancelTournamentReg');

if (tournamentModal) {
    cancelTournamentReg.addEventListener('click', () => {
        tournamentModal.classList.add('hidden');
        pendingTournamentId = null;
    });

    tournamentRegisterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('tournamentName').value.trim();
        const rating = parseInt(document.getElementById('tournamentRating').value);
        const paymentConfirmed = document.getElementById('paymentConfirmed').checked;

        if (!name) {
            alert("Please enter your name.");
            return;
        }
        if (isNaN(rating) || rating < 0 || rating > 3000) {
            alert("Please enter a valid rating between 0 and 3000.");
            return;
        }
        if (!paymentConfirmed) {
            alert("Please confirm payment to complete registration.");
            return;
        }

        if (pendingTournamentId !== null) {
            const existing = registeredTournaments.find(reg => reg.id === pendingTournamentId);
            if (!existing) {
                registeredTournaments.push({
                    id: pendingTournamentId,
                    name: name,
                    rating: rating,
                    paymentConfirmed: true
                });
                saveRegisteredTournaments();
                renderTournaments();
                const tournament = tournamentsData.find(t => t.id === pendingTournamentId);
                showToast(`Successfully registered for ${tournament.name}!`, 'success');
            }
        }
        tournamentModal.classList.add('hidden');
        pendingTournamentId = null;
        tournamentRegisterForm.reset();
    });

    const ratingInput = document.getElementById('tournamentRating');
    const categoryPreview = document.getElementById('ratingCategoryPreview');
    if (ratingInput && categoryPreview) {
        ratingInput.addEventListener('input', () => {
            const val = parseInt(ratingInput.value);
            if (!isNaN(val) && val >= 0 && val <= 3000) {
                categoryPreview.textContent = `Category: ${getRatingCategory(val)}`;
            } else {
                categoryPreview.textContent = 'Category: Open (invalid rating)';
            }
        });
    }
}

function updateCountdown(tournamentId, tournamentDate) {
    const countdownElement = document.getElementById(`countdown-${tournamentId}`);
    if (!countdownElement) return;
    const now = new Date();
    const eventDate = new Date(tournamentDate);
    const diff = eventDate - now;

    if (diff <= 0) {
        countdownElement.textContent = "🏁 Tournament started!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownElement.textContent = `⏳ Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

let countdownInterval = null;
function startAllCountdowns() {
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        tournamentsData.forEach(tournament => {
            if (registeredTournaments.some(reg => reg.id === tournament.id)) {
                updateCountdown(tournament.id, tournament.date);
            } else {
                const elem = document.getElementById(`countdown-${tournament.id}`);
                if (elem) elem.textContent = "Register to see countdown";
            }
        });
    }, 1000);
}

const coachesContainer = document.getElementById('coachesContainer');
let pendingBooking = null;

function renderFullCoaches() {
    if (!coachesContainer) return;
    coachesContainer.innerHTML = '';
    coaches.forEach(coach => {
        const coachCard = document.createElement('div');
        coachCard.className = "bg-[#1E293B] border border-[#334155] rounded-xl overflow-hidden hover:border-amber-400 transition-all duration-300";
        coachCard.innerHTML = `
            <div class="flex flex-col md:flex-row">
                <img src="${coach.image}" class="w-full md:w-1/3 h-64 object-cover" alt="${coach.name}">
                <div class="p-6 md:w-2/3">
                    <h3 class="text-xl font-bold text-white">${coach.name}</h3>
                    <p class="text-amber-400 text-sm mb-2">${coach.title}</p>
                    <p class="text-gray-300 text-sm italic mb-3">"${coach.quote}"</p>
                    <div class="flex items-center text-gray-400 text-sm mb-1">
                        <i class="fa fa-phone mr-2"></i> ${coach.phone}
                    </div>
                    <div class="flex items-center text-gray-400 text-sm mb-4">
                        <i class="fa fa-envelope mr-2"></i> ${coach.email}
                    </div>
                    <div class="space-y-2 mb-4">
                        <p class="text-white text-sm font-semibold">Available Slots:</p>
                        ${coach.slots.map(slot => `
                            <div class="flex justify-between items-center border-b border-[#334155] pb-2">
                                <span class="text-gray-300">📅 ${slot.date} at ${slot.time}</span>
                                ${slot.booked ? `
                                    <button data-coach-id="${coach.id}" data-slot-id="${slot.slotId}" 
                                        class="unbook-slot-btn px-3 py-1 rounded text-sm font-medium bg-red-600 hover:bg-red-700 text-white">
                                        Unbook
                                    </button>
                                ` : `
                                    <button data-coach-id="${coach.id}" data-slot-id="${slot.slotId}" data-date="${slot.date}" data-time="${slot.time}" 
                                        class="book-slot-btn px-3 py-1 rounded text-sm font-medium bg-amber-400 text-[#0F172A] hover:bg-amber-500">
                                        Book
                                    </button>
                                `}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        coachesContainer.appendChild(coachCard);
    });

    document.querySelectorAll('.book-slot-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const coachId = parseInt(btn.dataset.coachId);
            const slotId = btn.dataset.slotId;
            const slotDate = btn.dataset.date;
            const slotTime = btn.dataset.time;
            const coach = coaches.find(c => c.id === coachId);
            const slot = coach.slots.find(s => s.slotId === slotId);
            if (slot && !slot.booked) {
                document.getElementById('modalCoachName').textContent = coach.name;
                document.getElementById('modalSlotDate').textContent = slotDate;
                document.getElementById('modalSlotTime').textContent = slotTime;
                pendingBooking = { coachId, slotId, slot };
                const modal = document.getElementById('bookingModal');
                modal.classList.remove('hidden');
            }
        });
    });

    document.querySelectorAll('.unbook-slot-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const coachId = parseInt(btn.dataset.coachId);
            const slotId = btn.dataset.slotId;
            const coach = coaches.find(c => c.id === coachId);
            const slot = coach.slots.find(s => s.slotId === slotId);
            if (slot && slot.booked) {
                slot.booked = false;
                const index = bookedSlotIds.indexOf(slotId);
                if (index !== -1) bookedSlotIds.splice(index, 1);
                saveBookedSlots();
                renderFullCoaches();
                showToast(`Booking cancelled with ${coach.name} on ${slot.date} at ${slot.time}`, 'success');
            }
        });
    });
}

const modal = document.getElementById('bookingModal');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');

if (modal) {
    function closeModal() {
        modal.classList.add('hidden');
        pendingBooking = null;
    }

    modalCancel.addEventListener('click', closeModal);
    modalConfirm.addEventListener('click', () => {
        if (pendingBooking) {
            const { coachId, slotId, slot } = pendingBooking;
            if (!slot.booked) {
                slot.booked = true;
                bookedSlotIds.push(slotId);
                saveBookedSlots();
                renderFullCoaches();
                const coach = coaches.find(c => c.id === coachId);
                showToast(`Booking confirmed with ${coach.name} on ${slot.date} at ${slot.time}`, 'success');
            }
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTournaments();
    renderFullCoaches();
    if (registeredTournaments.length > 0) startAllCountdowns();
});