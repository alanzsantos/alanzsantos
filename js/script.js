const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const typedEl = document.getElementById('typedRole');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const roleText = 'Desenvolvedor .NET — ASP.NET Core — APIs REST — SQL Server — EF Core';

if (typedEl) {
    if (prefersReducedMotion) {
        typedEl.textContent = roleText;
    } else {
        let i = 0;
        const type = () => {
            if (i <= roleText.length) {
                typedEl.textContent = roleText.slice(0, i);
                i++;
                setTimeout(type, 28);
            }
        };
        type();
    }
}

function enviarMensagemWhatsapp(event) {
    event.preventDefault();

    const ddd = "5511";
    const prefixo = "96014";
    const sufixo = "1559";
    const numeroCompleto = ddd + prefixo + sufixo;

    const urlBase = new URL(`https://wa.me/${numeroCompleto}`);

    window.open(urlBase.href, '_blank');

}

function organizaProj() {
    const filterBtns = document.querySelectorAll('.proj-filter-btn');
    const projectCards = document.querySelectorAll('.projects-carousel .project-card');

    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const techs = card.getAttribute('data-tech') || '';
                if (filter === 'all' || techs.includes(filter)) {
                    card.classList.remove('is-hidden');
                } else {
                    card.classList.add('is-hidden');
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    organizaProj();
});
