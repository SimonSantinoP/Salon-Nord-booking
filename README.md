# Salon-Nord-booking
[README.md](https://github.com/user-attachments/files/30017512/README.md)
# Salon Nord — demo-hjemmeside

En statisk demo-hjemmeside til en frisør med bookingformular og betalingsknap.
Kan hostes gratis på GitHub Pages, Netlify eller Vercel.

## 1. Få mails ved booking (Formspree)

Formularen bruger [Formspree](https://formspree.io) til at sende bookinger som mail —
det kræver ingen server.

1. Gå til formspree.io og opret en gratis konto med **simonpedersen61@yahoo.com**
   (gratis plan giver 50 indsendelser/måned — nok til at teste).
2. Opret et nyt formular-projekt. Du får et form-ID der ligner `xyzabcde`.
3. Åbn `index.html` og find linjen:
   ```html
   <form id="booking-form" class="booking-form" action="https://formspree.io/f/DIT_FORMSPREE_ID" method="POST">
   ```
   Erstat `DIT_FORMSPREE_ID` med dit eget ID.
4. Gem, push til GitHub, og test en booking — mailen lander i din indbakke.

## 2. Modtag betaling (Stripe)

Betal-knappen peger på et **Stripe Payment Link** — en betalingsside Stripe
hoster for dig, uden du skal skrive backend-kode.

1. Opret en gratis konto på stripe.com.
2. Under "Payment links" → opret et link til fx "Herreklip — 350 kr".
3. Kopiér linket (starter med `https://buy.stripe.com/...`).
4. Åbn `index.html` og erstat:
   ```html
   <a id="pay-link" ... href="https://buy.stripe.com/DIT_PAYMENT_LINK" ...>
   ```
   med dit rigtige link.

**Vigtigt:** Pengene lander på den Stripe-konto, der ejer linket. Til din egen
test kan du bruge din egen konto. Men når du sælger til en rigtig frisør,
skal linket oprettes i **frisørens egen Stripe-konto** — ellers er det dig,
der modtager kundernes penge, ikke dem. Stripe kræver typisk CVR-nummer eller
personligt CPR for udbetaling, afhængigt af kontotype.

Stripe har også et **testmode** med falske betalingskort, så du kan teste hele
flowet uden at bruge rigtige penge, før du går live.

## 3. Deploy

- **Netlify/Vercel:** træk mappen ind på deres dashboard, eller forbind dit
  GitHub-repo — de deployer automatisk ved hvert push.
- **GitHub Pages:** slå det til under repo → Settings → Pages, vælg branch
  `main` og mappen `/ (root)`.
