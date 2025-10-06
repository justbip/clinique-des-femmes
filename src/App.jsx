import React, { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Accordion, FAQItem } from "./components/ui/accordion";
import { Input } from "./components/ui/input";
import { MapPin, Phone, Mail, Calendar, Stethoscope, Baby, HeartPulse, Microscope, ChevronRight, Instagram, Facebook, Linkedin, Search, Sparkles, UserRound } from 'lucide-react'

const SPECIALITES = [
  { id: 'gyneco', titre: 'Gynécologie médicale', resume: "Suivi gynécologique complet, dépistage, contraception, prise en charge des pathologies bénignes et prévention.", picto: <Stethoscope className='w-6 h-6' aria-hidden /> },
  { id: 'obstetrique', titre: 'Obstétrique & suivi de grossesse', resume: "Suivi de grossesse, préparation à la naissance, surveillance des grossesses à risque, accompagnement post-partum.", picto: <UserRound className='w-6 h-6' aria-hidden /> },
  { id: 'sagefemme', titre: 'Sages-femmes', resume: "Consultations de suivi, rééducation périnéale, allaitement, contraception, santé sexuelle et reproductive.", picto: <HeartPulse className='w-6 h-6' aria-hidden /> },
  { id: 'fertilite', titre: 'Fertilité & AMP', resume: "Bilan d'infertilité, orientations en assistance médicale à la procréation, soutien et coordination du parcours.", picto: <Microscope className='w-6 h-6' aria-hidden /> }, 
  { id: 'pediatrie', titre: 'Pédiatrie', resume: "Suivi du nourrisson à l’adolescent, vaccinations, bilans de croissance et accompagnement du développement.", picto: <Baby className='w-6 h-6' aria-hidden /> },
  { id: 'esthetique', titre: 'Esthétique', resume: "Injections (toxine botulique, acide hyaluronique), peelings, lasers non ablatifs, prise en charge des cicatrices et conseils personnalisés.", picto: <Sparkles className='w-6 h-6' aria-hidden /> },
]

const PRATICIENS = [
  { nom: 'Dr Amina YAMGNANE', role: 'Gynécologue-obstétricienne', specialites: ['gyneco', 'obstetrique'], photo: '/images/praticiens/amina-yamgnane.jpg', bio: 'Spécialisée en suivi de grossesse et pathologies gynécologiques bénignes. Engagement fort pour une prise en charge personnalisée et rassurante.', dispo: 'Du lundi au jeudi' },
  { nom: 'Dr Manon HENRY', role: 'Gynécologue', specialites: ['gyneco'], photo: '/images/praticiens/manon-henry.jpg', bio: 'Suivi gynécologique, contraception, prise en charge de la douleur pelvienne et endométriose.', dispo: 'Mardi, vendredi' },
  { nom: 'Pr Marie‑Victoire SENAT', role: 'Gynécologue', specialites: ['gyneco', 'obstetrique'], photo: '/images/praticiens/marie-victoire-senat.jpg', bio: 'Approche globale de la santé des femmes, du dépistage à l\'accompagnement des projets de fertilité.', dispo: 'Mercredi, jeudi' },
  { nom: 'Dr Stéphanie PROUST', role: 'Gynécologue', specialites: ['gyneco', 'fertilite'], photo: '/images/praticiens/stephanie-proust.jpg', bio: 'Suivi médical, colposcopie, pathologies du col, prévention et dépistage.', dispo: 'Lundi, jeudi' },
  { nom: 'Dr Corinne CUDEVILLE', role: 'Gynécologue', specialites: ['gyneco'], photo: '/images/praticiens/corinne-cudeville.jpg', bio: 'Prise en charge complète en gynécologie, écoute et pédagogie au cœur de la consultation.', dispo: 'Mardi, vendredi' },
  { nom: 'Laetitia REISER', role: 'Sage‑femme', specialites: ['sagefemme'], photo: '/images/praticiens/laetitia-reiser.jpg', bio: 'Préparation à la naissance, allaitement, rééducation périnéale et accompagnement post-partum.', dispo: 'Lundi, mercredi' },
  { nom: 'Isabelle BRAY', role: 'Sage‑femme', specialites: ['sagefemme'], photo: '/images/praticiens/isabelle-bray.jpg', bio: 'Suivi gynécologique de prévention, contraception, santé sexuelle et rééducation.', dispo: 'Mardi, jeudi' }, 
  { nom: 'Clémence MARAIS', role: 'Pédiatre', specialites: ['pediatrie'], photo: '/images/praticiens/clemence-marais.jpg', bio: 'Suivi du nourrisson à l’adolescent, vaccinations, bilans de croissance et accompagnement du développement.', dispo: 'Mardi, jeudi' },
  { nom: 'Valentine BEAUFRONT', role: 'Pédiatre', specialites: ['pediatrie'], photo: '/images/praticiens/valentine-beaufront.jpg', bio: 'Suivi du nourrisson à l’adolescent, vaccinations, bilans de croissance et accompagnement du développement, urgences.', dispo: 'Mardi, jeudi' },
]

export default function App() {
  const [recherche, setRecherche] = useState('')
  const [filtre, setFiltre] = useState('toutes')

  const praticiensFiltres = useMemo(() => {
    const q = recherche.trim().toLowerCase()
    return PRATICIENS.filter(p => {
      const matchTexte =
        !q ||
        p.nom.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.bio.toLowerCase().includes(q)
      const matchSpecialite = filtre === 'toutes' || p.specialites.includes(filtre)
      return matchTexte && matchSpecialite
    })
  }, [recherche, filtre])



  return (
    <div className="min-h-screen bg-white text-slate-900">
       {/* --- Barre de navigation --- */}
<nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
    {/* Logo + nom */}
    <a href="#" className="flex items-center gap-3">
      <img
        src="/images/logo/logocdf.png"
        alt="Logo Clinique des Femmes"
        className="h-10 w-auto"
      />
      <span className="font-semibold text-slate-800 text-lg"></span>
    </a>

    {/* Liens de navigation */}
    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
      <a href="#specialites" className="hover:text-rose-600 transition">Spécialités</a>
      <a href="#praticiens" className="hover:text-rose-600 transition">Équipe</a>
      <a href="#apropos" className="hover:text-rose-600 transition">Contact</a>
      <a
        href="#rdv"
        className="bg-[#5cc3e6] text-white px-4 py-2 rounded-xl hover:bg-[#4db1d3] transition"
      >
        Prendre rendez-vous
      </a>
    </div>
  </div>
</nav>
      <header className="relative overflow-hidden pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a4def9] via-[#c7efff] to-white" />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">La Clinique des Femmes</h1>
              <p className="mt-5 text-lg md:text-xl text-slate-700 max-w-prose text-justify leading-relaxed">
                Un lieu pensé par et pour les femmes, au cœur du 7ᵉ arrondissement de Paris. Suivi
                gynécologique, obstétrique, sages‑femmes et parcours fertilité dans une approche
                pluridisciplinaire, bienveillante et fondée sur les preuves.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#rdv" className="inline-block">
                  <Button className="rounded-2xl px-6 text-base">
                    <Calendar className="w-4 h-4 mr-2" /> Prendre rendez‑vous
                  </Button>
                </a>
                <a href="#specialites" className="inline-block">
                  <Button variant="outline" className="rounded-2xl px-6 text-base">
                    Découvrir nos spécialités <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:justify-self-end">
              <HeroCard />
            </div>
          </div>
        </div>
      </header>

      <section id="specialites" className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle titre="Nos spécialités" sousTitre="Une prise en charge globale et coordonnée" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {SPECIALITES.map(s => (
            <Card key={s.id} className="rounded-2xl shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-600">{s.picto}</div>
                  <CardTitle className="text-lg">{s.titre}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm leading-relaxed">{s.resume}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="praticiens" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle titre="L'équipe médicale" sousTitre="Des praticiens engagés pour une médecine personnalisée" />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input className="pl-9 rounded-2xl" placeholder="Rechercher un praticien, une compétence…" value={recherche} onChange={e => setRecherche(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2">
              <FiltreChip label="Toutes" actif={filtre === 'toutes'} onClick={() => setFiltre('toutes')} />
              {SPECIALITES.map(s => (
                <FiltreChip key={s.id} label={s.titre} actif={filtre === s.id} onClick={() => setFiltre(s.id)} />
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {praticiensFiltres.map(p => (
              <PraticienCard key={p.nom} p={p} />
            ))}
            {praticiensFiltres.length === 0 && (
              <p className="text-slate-600 col-span-full">Aucun praticien ne correspond à votre recherche.</p>
            )}
          </div>
        </div>
      </section>

      <section id="apropos" className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle titre="À propos" sousTitre="Une clinique à taille humaine" />
        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <div className="prose prose-slate max-w-none text-justify leading-relaxed">
            <p>La Clinique des Femmes réunit gynécologues, sages‑femmes et spécialistes de la fertilité autour d'une vision commune : offrir des soins accessibles, empathiques et fondés sur les recommandations scientifiques les plus récentes.</p>
            <p>Nos espaces ont été conçus pour le confort, l'intimité et l'accessibilité (PMR). Nous accueillons les patientes tout au long de leur parcours : prévention, désir d'enfant, grossesse, post‑partum et santé gynécologique au long cours.</p>
          </div>
          <div>
            <Card className="rounded-2xl shadow-sm">
              <CardHeader><CardTitle>Informations pratiques</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-slate-700">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 40 bis Rue Fabert, 75007 Paris</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 01 44 25 00 00</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> secretariat@cdfparis.fr</p>

                {/* ✅ Carte Google Maps intégrée */}
<div className="h-56 w-full rounded-xl overflow-hidden border">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.892231455517!2d2.306238356392087!3d48.85923789764064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fd780f40001%3A0xab5bcff25609e82!2s40B%20Rue%20Fabert%2C%2075007%20Paris!5e0!3m2!1sfr!2sfr!4v1759737927909!5m2!1sfr!2sfr"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Localisation de la Clinique des Femmes"
  ></iframe>
</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

 <section id="rdv" className="bg-gradient-to-br from-[#a4def9] via-[#d3f3ff] to-[#e9f9ff] py-16">
  <div className="max-w-6xl mx-auto px-6">
    <SectionTitle
      titre="Prendre rendez-vous"
      sousTitre="En ligne, par téléphone ou par email"
    />
    <div className="mt-6 grid md:grid-cols-3 gap-6">
      <CtaCard
        titre="En ligne"
        icone={<Calendar className='w-5 h-5' />}
        contenu="Prenez rendez-vous sur Doctolib avec l’un de nos praticiens, en toute simplicité et sécurité."
        bouton="Prendre rendez-vous"
        href="https://www.doctolib.fr/cabinet-medical/paris/la-clinique-des-femmes"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      />
      <CtaCard
        titre="Par téléphone"
        icone={<Phone className='w-5 h-5' />}
        contenu="Notre secrétariat est à votre écoute du lundi au vendredi, 9h-18h."
        bouton="Appeler le secrétariat"
        href="tel:+33144250000"
      />
      <CtaCard
        titre="Par email"
        icone={<Mail className='w-5 h-5' />}
        contenu="Posez vos questions, envoyez vos documents, on vous répond rapidement."
        bouton="Écrire un email"
        href="mailto:secretariat@cdfparis.fr"
      />
    </div>
  </div>
</section>


      <section id="faq" className="max-w-4xl mx-auto px-6 py-16">
        <SectionTitle titre="Questions fréquentes" sousTitre="Pour préparer au mieux votre venue" />
        <Accordion className="mt-6">
          <FAQItem question="Acceptez‑vous de nouvelles patientes ?" answer="Oui, la plupart des praticiens acceptent de nouvelles patientes. La disponibilité peut varier selon les périodes." />
          <FAQItem question="Proposez‑vous des consultations de télé‑santé ?" answer="Certaines consultations peuvent se faire en télé‑consultation (renouvellement d'ordonnance, conseils, résultats). Demandez au secrétariat." />        
          <FAQItem question="Quels soins proposez-vous en médecine esthétique ?" answer="Nos actes de médecine esthétique comprennent les injections (toxine botulique, acide hyaluronique), peelings, lasers non ablatifs et conseils sur le soin de la peau. Tous les traitements sont réalisés par des médecins qualifiés, dans le respect du naturel et de la sécurité." />
          <FAQItem question="Accueillez-vous les enfants pour des consultations de pédiatrie ?" answer="Oui, la Clinique des Femmes dispose d’un espace dédié aux enfants et d’une équipe de pédiatres expérimentés. Nous assurons le suivi de la naissance jusqu’à l’adolescence, incluant bilans de santé, vaccinations et accompagnement du développement." />
          <FAQItem question="La clinique est‑elle accessible PMR ?" answer="Oui, nos locaux sont accessibles et un dispositif d'assistance est disponible pour faciliter votre venue." />
        </Accordion>
      </section>

      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-600">© {new Date().getFullYear()} Clinique des Femmes — Tous droits réservés</p>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="Instagram" className="hover:text-slate-700"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-slate-700"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-700"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionTitle({ titre, sousTitre }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{titre}</h2>
      {sousTitre && <p className="mt-2 text-slate-600">{sousTitre}</p>}
    </div>
  )
}

function HeroCard() {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardContent className="p-6">
        {/* ✅ Image de la clinique */}
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border">
          <img
            src="/images/clinique/clinique.jpg"
            alt="Façade de la Clinique des Femmes à Paris"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Badges de spécialités */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge className="rounded-xl" variant="secondary">Gynécologie</Badge>
          <Badge className="rounded-xl" variant="secondary">Obstétrique</Badge>
          <Badge className="rounded-xl" variant="secondary">Sages-femmes</Badge>
          <Badge className="rounded-xl" variant="secondary">Fertilité</Badge>
          <Badge className="rounded-xl" variant="secondary">Pédiatrie</Badge>
        </div>
      </CardContent>
    </Card>
  )
}

function FiltreChip({ label, actif, onClick }) {
  return (
    <button onClick={onClick} className={[
      'px-3 py-1.5 rounded-xl text-sm border transition',
      actif ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 hover:bg-slate-50',
    ].join(' ')}>{label}</button>
  )
}

function PraticienCard({ p }) {
  const libelles = p.specialites.map(id => SPECIALITES.find(s => s.id === id)?.titre || id)
  return (
    <Card className="rounded-2xl shadow-sm overflow-hidden">
      <div className="aspect-[4/3] w-full bg-slate-100">
        <img
          src={p.photo}
          alt={`Photo de ${p.nom}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg leading-tight">{p.nom}</CardTitle>
        <p className="text-slate-600 text-sm mt-1">{p.role}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-slate-700 leading-relaxed text-justify max-w-prose">{p.bio}</p>
        <div className="flex flex-wrap gap-2">
          {libelles.map(l => <Badge key={l} variant="secondary" className="rounded-xl">{l}</Badge>)}
        </div>
        {p.dispo && <p className="text-xs text-slate-500">Disponibilités : {p.dispo}</p>}
      </CardContent>
    </Card>
  )
}

function CtaCard({ titre, icone, contenu, bouton, href }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-white border">{icone}</div>
          <CardTitle className="text-lg">{titre}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700 text-sm leading-relaxed">{contenu}</p>
        <a href={href} className="inline-block mt-4">
          <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-xl transition focus:outline-none border bg-slate-900 text-white border-slate-900 hover:opacity-90">{bouton}</button>
        </a>
      </CardContent>
    </Card>
  )
}
