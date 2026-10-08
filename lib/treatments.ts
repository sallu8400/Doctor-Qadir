// Saari treatments ka data - home page ke cards, /treatments page, har treatment ka alag page,
// footer links aur sitemap sab isi file se bante hain. Nayi treatment add karni ho toh bas yahan ek entry jodo.

export type Treatment = {
  slug: string;
  title: string;
  icon: string;
  // Home page card aur /treatments list me dikhne wala chhota text
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  conditions: string[];
  approach: string[];
  faqs: { question: string; answer: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "skin-problems",
    title: "Skin Problems",
    icon: "fa-solid fa-hand-dots",
    summary:
      "Homeopathic treatment for eczema, psoriasis, acne, pimples, fungal infections and skin allergies, without steroid creams.",
    metaTitle: "Homeopathy for Skin Problems in Jogeshwari, Mumbai | Eczema, Psoriasis, Acne",
    metaDescription:
      "Homeopathic treatment for eczema, psoriasis, acne, urticaria and skin allergies by Dr. A. Qadir Shaikh (BHMS, MD) at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai.",
    intro: [
      "Skin problems are often a sign of something going on inside the body. Creams can calm the surface for a while, but the rash, itching or pimples tend to come back once they are stopped.",
      "At Neulife Homoeopathy Clinic, Dr. A. Qadir Shaikh looks at your skin complaint together with your digestion, stress levels, sleep, diet and family history. The remedy is chosen for you as a whole person, with the aim of reducing flare-ups and the need for steroid creams over time.",
    ],
    conditions: [
      "Eczema and atopic dermatitis",
      "Psoriasis",
      "Acne and pimples",
      "Urticaria (hives) and skin allergy",
      "Fungal infections and ringworm",
      "Warts and corns",
      "Vitiligo (white patches)",
      "Pigmentation and dark spots",
    ],
    approach: [
      "Your first consultation includes a detailed case history: when the problem started, what makes it better or worse, past treatments and your general health. Photos of the affected area are taken at each visit so that progress can be tracked clearly.",
      "Along with the medicine, you get simple advice on soaps, diet and daily habits that can irritate the skin. Long-standing skin conditions usually need a few months of regular follow-up.",
    ],
    faqs: [
      {
        question: "Can I stop my skin cream when I start homeopathy?",
        answer:
          "Do not stop any prescribed cream or tablet suddenly, especially steroids. Dr. Qadir will guide you on how and when to reduce them as your skin improves.",
      },
      {
        question: "Is homeopathy safe for skin problems in children?",
        answer:
          "Yes. Homeopathic medicines are given in small, sweet pills and are suitable for babies and children with eczema, rashes or allergies.",
      },
    ],
  },
  {
    slug: "hair-fall",
    title: "Hair Fall & Dandruff",
    icon: "fa-solid fa-user",
    summary:
      "Natural homeopathy for hair fall, thinning hair, dandruff and alopecia, focused on the internal cause of hair loss.",
    metaTitle: "Homeopathy for Hair Fall & Dandruff in Jogeshwari, Mumbai",
    metaDescription:
      "Homeopathic treatment for hair fall, thinning hair, dandruff and alopecia areata at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai. Consult Dr. A. Qadir Shaikh (BHMS, MD).",
    intro: [
      "Hair fall is rarely just a scalp problem. Stress, thyroid imbalance, low iron, hormonal changes, PCOD, poor sleep and crash diets can all show up as hair loss.",
      "Homeopathy for hair fall starts with finding out why your hair is falling. Dr. A. Qadir Shaikh then prescribes a remedy matched to your body type and the cause, along with practical diet and hair-care advice.",
    ],
    conditions: [
      "Excessive hair fall",
      "Thinning hair and receding hairline",
      "Alopecia areata (patchy hair loss)",
      "Dandruff and itchy scalp",
      "Premature greying",
      "Hair loss after illness, pregnancy or stress",
    ],
    approach: [
      "If needed, you may be advised a few blood tests such as haemoglobin, thyroid or vitamin levels, so that the underlying cause is clear.",
      "Hair grows slowly, so results are usually visible over a few months. Regular follow-ups help adjust the treatment as your hair and scalp respond.",
    ],
    faqs: [
      {
        question: "How long does homeopathy take to control hair fall?",
        answer:
          "Most patients notice reduced hair fall within a few weeks, while visible regrowth takes longer and depends on the cause and how long the problem has been present.",
      },
      {
        question: "Do I need to stop using my shampoo or oil?",
        answer:
          "Usually not. Dr. Qadir will tell you if any product you are using is irritating your scalp and suggest gentler options.",
      },
    ],
  },
  {
    slug: "allergy-respiratory",
    title: "Allergy & Respiratory Issues",
    icon: "fa-solid fa-lungs",
    summary:
      "Relief from sneezing, sinusitis, allergic rhinitis, recurring cold, cough and asthma-related breathing problems.",
    metaTitle: "Homeopathy for Allergy, Sinusitis & Asthma in Jogeshwari, Mumbai",
    metaDescription:
      "Homeopathic treatment for allergic rhinitis, sinusitis, frequent cold, cough and asthma at Neulife Homoeopathy Clinic, Jogeshwari West. Book with Dr. A. Qadir Shaikh.",
    intro: [
      "Mumbai's dust, pollution and humidity make allergies very common. Constant sneezing, a blocked nose, sinus headaches or a cough that returns every season can affect sleep, work and school.",
      "Homeopathic treatment aims to reduce how sensitive your body is to triggers, so that attacks become less frequent and less severe over time, instead of only relieving symptoms for a few hours.",
    ],
    conditions: [
      "Allergic rhinitis and frequent sneezing",
      "Sinusitis and sinus headache",
      "Recurring cold and cough",
      "Dust and seasonal allergy",
      "Asthma and wheezing",
      "Chronic bronchitis",
      "Adenoids and tonsillitis",
    ],
    approach: [
      "Dr. Qadir notes your triggers, the season and time when symptoms are worse, and your general immunity, and chooses a remedy for both acute attacks and long-term prevention.",
      "For asthma, homeopathy is given alongside your inhaler or medicines. Never stop an inhaler on your own; any reduction is done gradually with medical guidance.",
    ],
    faqs: [
      {
        question: "Can homeopathy help with allergies that come back every year?",
        answer:
          "Yes, seasonal and dust allergies are one of the most common reasons patients visit us. Treatment before and during the season can help reduce the intensity of symptoms.",
      },
      {
        question: "Can I take homeopathy with my asthma inhaler?",
        answer:
          "Yes. Homeopathic medicines can be taken along with your inhaler. Continue your inhaler as prescribed and let the doctor guide any changes.",
      },
    ],
  },
  {
    slug: "migraine-headache",
    title: "Migraine & Headache",
    icon: "fa-solid fa-head-side-virus",
    summary:
      "Personalised homeopathic remedies to reduce the frequency and intensity of migraine and chronic headaches.",
    metaTitle: "Homeopathy for Migraine & Headache in Jogeshwari, Mumbai",
    metaDescription:
      "Homeopathic treatment for migraine, tension headache and sinus headache at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai by Dr. A. Qadir Shaikh (BHMS, MD).",
    intro: [
      "Frequent headaches and migraine attacks can make it hard to work, study or enjoy family time. Many patients depend on painkillers every week, which only help for a short while.",
      "Homeopathy looks at your headache pattern in detail: the side of the head, the type of pain, triggers like sunlight, fasting, stress or periods, and what gives you relief. This helps in choosing a remedy that aims to reduce how often attacks come and how strong they are.",
    ],
    conditions: [
      "Migraine with or without aura",
      "Tension headache",
      "Sinus headache",
      "Headache related to stress or lack of sleep",
      "Hormonal headache around periods",
      "Cluster headache",
    ],
    approach: [
      "Keeping a simple headache diary (date, time, trigger, severity) helps a lot. Dr. Qadir uses it to fine-tune your remedy at each follow-up.",
      "If your headache is sudden and severe, comes with weakness, fits or vision loss, please see a doctor or go to the emergency room immediately.",
    ],
    faqs: [
      {
        question: "Will I still need painkillers during homeopathic treatment?",
        answer:
          "In the beginning you may still need them for severe attacks. As the frequency and intensity of attacks reduce, the need for painkillers usually reduces too.",
      },
      {
        question: "Is homeopathy suitable for migraine in teenagers?",
        answer:
          "Yes. Homeopathic medicines are gentle and suitable for children and teenagers who suffer from frequent headaches.",
      },
    ],
  },
  {
    slug: "child-immunity",
    title: "Child Immunity",
    icon: "fa-solid fa-child",
    summary:
      "Gentle, sweet homeopathic pills for children with frequent cold, cough, tonsillitis and low immunity.",
    metaTitle: "Homeopathy for Children's Immunity in Jogeshwari, Mumbai | Child Homeopath",
    metaDescription:
      "Gentle homeopathic treatment for children with frequent cold, cough, tonsillitis, adenoids, poor appetite and low immunity at Neulife Homoeopathy Clinic, Jogeshwari West.",
    intro: [
      "Some children fall sick every few weeks: cold, cough, fever, throat infection, then antibiotics, and the cycle repeats. Parents worry about missed school and repeated medicines.",
      "Homeopathic medicines come as small sweet pills that children take happily. Treatment focuses on building the child's overall health so that infections become less frequent and recovery is faster.",
    ],
    conditions: [
      "Frequent cold, cough and fever",
      "Tonsillitis and adenoids",
      "Poor appetite and low weight gain",
      "Recurrent stomach upsets",
      "Childhood allergies and eczema",
      "Bed-wetting",
      "Teething troubles in babies",
    ],
    approach: [
      "Dr. Qadir takes a detailed history of the child's birth, growth, food habits, sleep and temperament, and talks with parents about how the child behaves when unwell.",
      "Homeopathy does not replace vaccinations. Please continue your child's vaccination schedule as advised by your paediatrician.",
    ],
    faqs: [
      {
        question: "Is homeopathy safe for babies and small children?",
        answer:
          "Yes. Homeopathic medicines are highly diluted and given in very small doses, which makes them suitable for babies and young children.",
      },
      {
        question: "How do children take homeopathic medicine?",
        answer:
          "Most remedies are sweet globules that can be put directly in the mouth or dissolved in a little water for babies.",
      },
    ],
  },
  {
    slug: "joint-pain",
    title: "Joint & Body Pain",
    icon: "fa-solid fa-bone",
    summary:
      "Homeopathy for arthritis, knee pain, back pain, neck pain and other long-standing joint problems.",
    metaTitle: "Homeopathy for Joint Pain, Arthritis & Back Pain in Jogeshwari, Mumbai",
    metaDescription:
      "Homeopathic treatment for knee pain, arthritis, back pain, cervical spondylosis, sciatica and gout at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai.",
    intro: [
      "Joint and back pain can slowly limit daily life, from climbing stairs to sitting at a desk. Long-term painkillers are not ideal for the stomach and kidneys.",
      "Homeopathic treatment for joint pain considers the type of pain, stiffness, swelling, and what makes it worse, such as cold weather, rest or movement. The aim is to reduce pain and stiffness and improve movement over time.",
    ],
    conditions: [
      "Osteoarthritis and knee pain",
      "Rheumatoid arthritis",
      "Back pain and slip disc",
      "Cervical spondylosis and neck pain",
      "Sciatica",
      "Gout and high uric acid",
      "Frozen shoulder",
      "Heel pain",
    ],
    approach: [
      "Along with medicines, you get advice on posture, weight, diet and simple exercises. If needed, Dr. Qadir may suggest X-rays or blood tests to understand the condition better.",
      "Chronic joint conditions improve gradually, so regular follow-ups are important.",
    ],
    faqs: [
      {
        question: "Can homeopathy help with knee pain in elderly patients?",
        answer:
          "Yes. Homeopathy is gentle and safe for elderly patients and can be taken along with their other regular medicines.",
      },
      {
        question: "Do I need to stop my arthritis medicines?",
        answer:
          "No. Do not stop any prescribed medicine on your own. Homeopathy can be taken alongside, and any changes are made with your doctors' guidance.",
      },
    ],
  },
  {
    slug: "digestive-hormonal",
    title: "Digestive & Hormonal Issues",
    icon: "fa-solid fa-stethoscope",
    summary:
      "Support for acidity, IBS, constipation, piles, PCOD, irregular periods and thyroid-related complaints.",
    metaTitle: "Homeopathy for Acidity, IBS, PCOD & Thyroid in Jogeshwari, Mumbai",
    metaDescription:
      "Homeopathic treatment for acidity, gas, IBS, constipation, piles, PCOD, irregular periods and thyroid complaints at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai.",
    intro: [
      "Digestive problems and hormonal imbalance are closely linked to lifestyle, stress and sleep. Acidity, bloating, constipation, irregular periods and weight changes often come together.",
      "Homeopathy looks at your digestion, appetite, cravings, menstrual history and emotional state to choose a remedy suited to you, along with diet and lifestyle guidance.",
    ],
    conditions: [
      "Acidity, gas and bloating",
      "Irritable bowel syndrome (IBS)",
      "Chronic constipation",
      "Piles, fissure and fistula",
      "PCOD / PCOS",
      "Irregular or painful periods",
      "Thyroid-related complaints",
      "Menopause symptoms",
    ],
    approach: [
      "Reports such as ultrasound, thyroid profile or hormone tests help track progress. Bring any old reports to your first visit.",
      "If you are on thyroid or other hormone medicines, continue them as prescribed. Homeopathy is given alongside and your doses are only changed by your treating doctor.",
    ],
    faqs: [
      {
        question: "Can homeopathy help with PCOD?",
        answer:
          "Many women visit us for PCOD-related problems like irregular periods, acne, hair fall and weight gain. Treatment is combined with diet and exercise advice for better results.",
      },
      {
        question: "Is homeopathy useful for long-standing acidity?",
        answer:
          "Yes, homeopathy along with changes in meal timing and diet can help reduce frequent acidity and dependence on antacids.",
      },
    ],
  },
  {
    slug: "stress-anxiety-sleep",
    title: "Stress, Anxiety & Sleep",
    icon: "fa-solid fa-brain",
    summary:
      "Gentle homeopathic support for stress, anxiety, low mood, irritability and sleep problems.",
    metaTitle: "Homeopathy for Stress, Anxiety & Insomnia in Jogeshwari, Mumbai",
    metaDescription:
      "Gentle homeopathic support for stress, anxiety, low mood and sleep problems at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai. Consult Dr. A. Qadir Shaikh.",
    intro: [
      "Work pressure, exams, family responsibilities and long commutes leave many people stressed, anxious or unable to sleep well. Over time this affects digestion, skin, hair and immunity too.",
      "Homeopathy gives great importance to your emotional state. Dr. A. Qadir Shaikh takes time to listen and understand your fears, worries and sleep pattern before choosing a remedy.",
    ],
    conditions: [
      "Stress and burnout",
      "Anxiety and nervousness",
      "Exam fear in students",
      "Insomnia and disturbed sleep",
      "Irritability and anger",
      "Low mood",
    ],
    approach: [
      "Treatment is combined with simple advice on sleep routine, screen time and relaxation. Homeopathic remedies are non-habit-forming.",
      "If you have thoughts of harming yourself, please contact a psychiatrist or emergency services immediately. Homeopathy is not a substitute for urgent mental health care.",
    ],
    faqs: [
      {
        question: "Are homeopathic medicines for sleep habit-forming?",
        answer:
          "No. Homeopathic remedies do not cause dependence or a drowsy hangover the next morning.",
      },
      {
        question: "Can I continue my psychiatric medicines with homeopathy?",
        answer:
          "Yes. Never stop psychiatric medicines suddenly. Homeopathy can be taken alongside, and any change is made only with your psychiatrist's advice.",
      },
    ],
  },
  {
    slug: "chronic-diseases",
    title: "Chronic Diseases",
    icon: "fa-solid fa-heart-pulse",
    summary:
      "Root-cause homeopathic treatment for long-term health problems, alongside your regular medical care.",
    metaTitle: "Homeopathy for Chronic Diseases in Jogeshwari, Mumbai | Dr. A. Qadir Shaikh",
    metaDescription:
      "Long-term homeopathic care for chronic and recurring health problems at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai. Personalised treatment by Dr. A. Qadir Shaikh (BHMS, MD).",
    intro: [
      "Chronic diseases are health problems that last for months or years, or keep coming back. Many patients feel they are only managing symptoms without real improvement in how they feel.",
      "Homeopathy treats the person, not just the disease name. Dr. A. Qadir Shaikh studies your complete history, from childhood illnesses to your present lifestyle, to choose a constitutional remedy that supports your overall health.",
    ],
    conditions: [
      "Recurring infections and low immunity",
      "Kidney stones",
      "Lifestyle disorders (as supportive care)",
      "Chronic fatigue",
      "Long-standing skin and allergy problems",
      "Age-related complaints in elderly patients",
    ],
    approach: [
      "Homeopathy is used as a complementary treatment alongside your regular medicines for conditions like diabetes and blood pressure. Your existing medicines are never stopped without your treating doctor's advice.",
      "Chronic conditions need patience and regular follow-ups. Most patients come every 3 to 4 weeks in the beginning.",
    ],
    faqs: [
      {
        question: "Can homeopathy replace my diabetes or BP medicines?",
        answer:
          "No, do not stop these medicines. Homeopathy can be taken alongside as supportive care, and your physician should decide any change in your regular medicines.",
      },
      {
        question: "How long is the treatment for chronic diseases?",
        answer:
          "It depends on how long you have had the problem and your overall health. Dr. Qadir will give you an idea after the first detailed consultation.",
      },
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
