import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termes et conditions | NEXACT',
  description: "Conditions d'utilisation et règles de la plateforme NEXACT.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Termes et Conditions d&apos;Utilisation</h1>
          <p className="text-sm text-gray-600 mb-8">Date d&apos;entrée en vigueur : [Date]</p>

          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            Les présentes Termes et Conditions d&apos;Utilisation (ci-après les "Conditions") régissent l&apos;utilisation de la plateforme web et mobile NEXACT (ci-après la "Plateforme"), éditée par [Nom de l&apos;Entité Juridique, e.g., SARL NEXACT CI], domiciliée à [Adresse en Côte d&apos;Ivoire] (ci-après "NEXACT" ou "Nous").
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            NEXACT est une plateforme dédiée à l&apos;évaluation, au développement et à la certification des compétences numériques.
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            Veuillez lire attentivement ces Conditions avant d&apos;utiliser nos services. En accédant à la Plateforme et en utilisant nos services, vous acceptez d&apos;être lié par ces Conditions.
          </p>

          <h2 className="text-2xl font-bold mb-3">1. Acceptation et Objet</h2>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            L&apos;objet des présentes Conditions est de définir les modalités et conditions d&apos;accès et d&apos;utilisation de la Plateforme par l&apos;Utilisateur (ci-après l&apos; "Utilisateur" ou "Vous"). L&apos;accès à la Plateforme est subordonné à l&apos;acceptation sans réserve des présentes Conditions.
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            L&apos;Utilisateur déclare disposer de la capacité juridique et des autorisations nécessaires pour s&apos;engager au titre des présentes Conditions.
          </p>

          <h2 className="text-2xl font-bold mb-3">2. Accès et Création de Compte</h2>
          <h3 className="text-xl font-semibold mb-2">2.1. Conditions d&apos;Accès</h3>
          <ul className="list-disc pl-6 text-[#282828] opacity-80 leading-relaxed mb-4">
            <li>Un équipement informatique ou mobile compatible.</li>
            <li>Une connexion internet satisfaisante.</li>
            <li>L&apos;acceptation des présentes Conditions et de la Politique de Confidentialité de NEXACT.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">2.2. Compte Utilisateur</h3>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            La création d&apos;un Compte Utilisateur est nécessaire pour accéder à l&apos;ensemble des services (évaluation, suivi, certification). L&apos;Utilisateur doit fournir des informations exactes, complètes et à jour (Nom, Prénom, Adresse e-mail, etc.).
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            L&apos;accès au compte est protégé par un identifiant et un mot de passe. L&apos;Utilisateur est seul responsable de la confidentialité de son mot de passe et de toutes les activités effectuées sous son Compte.
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            NEXACT se réserve le droit de suspendre ou de supprimer un compte en cas de violation des présentes Conditions, notamment en cas de fausse déclaration.
          </p>

          <h2 className="text-2xl font-bold mb-3">3. Services Fournis</h2>
          <ul className="list-disc pl-6 text-[#282828] opacity-80 leading-relaxed mb-8">
            <li><span className="font-semibold">Évaluation des compétences :</span> Mise à disposition de tests et d&apos;épreuves pour mesurer le niveau de l&apos;Utilisateur dans différentes compétences numériques.</li>
            <li><span className="font-semibold">Parcours de formation :</span> Proposition de ressources ou de pistes d&apos;amélioration pour développer les compétences.</li>
            <li><span className="font-semibold">Certification :</span> Délivrance, le cas échéant et sous réserve du respect des conditions spécifiques, d&apos;une attestation ou d&apos;un certificat de compétences numériques.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-3">4. Paiement et Tarification (Le cas échéant)</h2>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            L&apos;accès à certains services (e.g., certification officielle) peut être soumis au paiement de frais. Les tarifs en vigueur sont ceux affichés sur la Plateforme au moment de la commande.
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            Les paiements s&apos;effectuent via [Moyens de paiement acceptés en CI, e.g., cartes bancaires, mobile money]. Tout paiement est ferme et définitif. Les conditions de remboursement, le cas échéant, sont précisées dans les Conditions Générales de Vente (CGV) séparées.
          </p>

          <h2 className="text-2xl font-bold mb-3">5. Obligations de l&apos;Utilisateur</h2>
          <ul className="list-disc pl-6 text-[#282828] opacity-80 leading-relaxed mb-8">
            <li>Utiliser la Plateforme de manière loyale et conforme aux présentes Conditions et aux lois et règlements en vigueur en Côte d&apos;Ivoire.</li>
            <li>Ne pas tenter d&apos;accéder sans autorisation aux systèmes de NEXACT ou d&apos;interférer avec le bon fonctionnement de la Plateforme.</li>
            <li>Garantir l&apos;authenticité de sa participation aux évaluations. Toute fraude avérée (y compris la tentative d&apos;utiliser des outils non autorisés ou l&apos;aide extérieure) entraînera l&apos;invalidation des résultats et la suspension du compte, sans préjudice de poursuites.</li>
            <li>Respecter les droits de propriété intellectuelle de NEXACT et de tiers.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-3">6. Propriété Intellectuelle</h2>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            L&apos;ensemble des contenus de la Plateforme (textes, images, graphismes, logos, logiciels, bases de données, épreuves d&apos;évaluation, etc.) est la propriété exclusive de NEXACT ou de ses partenaires. L&apos;accès et l&apos;utilisation de la Plateforme ne confèrent à l&apos;Utilisateur aucun droit de propriété intellectuelle sur les éléments de la Plateforme, à l&apos;exception du droit d&apos;usage dans le cadre des services proposés. Toute reproduction, distribution, modification ou utilisation, même partielle, sans autorisation écrite préalable de NEXACT est strictement interdite.
          </p>

          <h2 className="text-2xl font-bold mb-3">7. Données Personnelles et Confidentialité</h2>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            NEXACT collecte et traite les données personnelles de l&apos;Utilisateur conformément à la législation en vigueur en Côte d&apos;Ivoire relative à la protection des données personnelles et à sa Politique de Confidentialité.
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            L&apos;Utilisateur est invité à consulter la Politique de Confidentialité pour connaître les modalités de collecte, de traitement et d&apos;exercice de ses droits (accès, rectification, opposition, etc.).
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            <span className="font-semibold">Confidentialité des Résultats :</span> Les résultats d&apos;évaluation et de certification sont confidentiels. Ils ne sont communiqués qu&apos;à l&apos;Utilisateur, aux organismes de certification désignés, ou à des tiers uniquement avec le consentement exprès de l&apos;Utilisateur (e.g., partage de certificat à un employeur).
          </p>

          <h2 className="text-2xl font-bold mb-3">8. Responsabilité</h2>
          <h3 className="text-xl font-semibold mb-2">8.1. Responsabilité de NEXACT</h3>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            NEXACT s&apos;engage à fournir un accès et une utilisation de la Plateforme dans les meilleures conditions techniques. NEXACT est tenu à une obligation de moyens. Sa responsabilité ne saurait être engagée en cas de force majeure, d&apos;interruption du service, ou de dommages résultant d&apos;une mauvaise utilisation de la Plateforme par l&apos;Utilisateur.
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            Dans la limite de la loi applicable, la responsabilité de NEXACT pour tout dommage direct découlant de l&apos;utilisation de la Plateforme est limitée au montant effectivement payé par l&apos;Utilisateur pour le service concerné au cours des douze (12) derniers mois.
          </p>
          <h3 className="text-xl font-semibold mb-2">8.2. Responsabilité de l&apos;Utilisateur</h3>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            L&apos;Utilisateur est responsable de tout dommage causé à NEXACT ou à des tiers du fait de son utilisation illicite de la Plateforme ou de la violation des présentes Conditions.
          </p>

          <h2 className="text-2xl font-bold mb-3">9. Modification des Conditions</h2>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-8">
            NEXACT peut modifier ponctuellement les présentes Conditions pour refléter des évolutions légales, techniques ou fonctionnelles de la Plateforme. Les modifications seront publiées sur la Plateforme avec une mention de la date de mise à jour. Lorsque les changements sont substantiels, NEXACT pourra notifier les Utilisateurs par e-mail ou via un bandeau d&apos;information. L&apos;utilisation continue de la Plateforme postérieurement à la publication des nouvelles Conditions vaut acceptation de celles-ci.
          </p>

          <h2 className="text-2xl font-bold mb-3">10. Droit Applicable et Juridiction Compétente</h2>
          <p className="text-[#282828] opacity-80 leading-relaxed mb-4">
            Les présentes Conditions sont régies par le droit de la République de Côte d&apos;Ivoire. Tout litige relatif à leur interprétation, leur exécution ou leur validité sera soumis, à défaut de règlement amiable, à la compétence exclusive des juridictions d&apos;Abidjan compétentes (notamment le Tribunal de Commerce d&apos;Abidjan).
          </p>
          <p className="text-[#282828] opacity-80 leading-relaxed">
            Avant toute action judiciaire, les parties s&apos;efforceront de rechercher une solution amiable.
          </p>
        </div>
      </section>
    </main>
  );
}