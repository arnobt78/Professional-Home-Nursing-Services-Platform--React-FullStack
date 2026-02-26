/** Privacy policy (Datenschutz) legal page. Renders its own Navbar and Footer. */
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 xl:py-24 px-6 lg:px-12 xl:px-44 space-y-12 text-justify overflow-visible">
        <motion.h1
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="text-3xl font-bold mt-6 mb-6 text-primary"
        >
          Datenschutz
        </motion.h1>
        <motion.div
          variants={slideUp(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false }}
          className="space-y-12 text-primary/90 leading-relaxed overflow-visible "
        >
          {/* <p>
            <strong>1. Data protection at a glance</strong>
            <br />
            <strong>General information</strong>
            <br />
            The following notes provide a simple overview of what happens to
            your personal data when you visit this website. Personal data is any
            data by which you can be personally identified. For more detailed
            information on data protection, please refer to our privacy policy
            listed below this text.
          </p>
          <p>
            <strong>Data collection on this website</strong>
            <br />
            Who is responsible for data collection on this website?
            <br />
            Data processing on this website is carried out by the website
            operator. You can find his contact details in the section “Note on
            the responsible party” in this data protection declaration.
          </p>
          <p>
            <strong>How do we collect your data?</strong>
            <br />
            On the one hand, your data is collected by you providing it to us.
            This may, for example, be data that you enter in a contact form.
          </p>
          <p>
            Other data is collected automatically or after your consent when you
            visit the website by our IT systems. This is mainly technical data
            (e.g. Internet browser, operating system or time of page view). This
            data is collected automatically as soon as you enter this website.
          </p>
          <p>
            <strong>What do we use your data for?</strong>
            <br />
            Some of the data is collected to ensure error-free provision of the
            website. Other data may be used to analyze your user behavior.
          </p>
          <p>
            <strong>What rights do you have regarding your data?</strong>
            <br />
            You have the right at any time to receive information free of charge
            about the origin, recipient and purpose of your stored personal
            data. You also have a right to request the correction or deletion of
            this data. If you have given your consent to data processing, you
            can revoke this consent at any time for the future. You also have
            the right to request the restriction of the processing of your
            personal data under certain circumstances. Furthermore, you have the
            right to lodge a complaint with the competent supervisory authority.
          </p>
          <p>
            For this purpose, as well as for further questions on the subject of
            data protection, you can contact us at any time.
          </p>
          <p>
            <strong>Analysis tools and third-party tools</strong>
            <br />
            When visiting this website, your surfing behavior may be
            statistically analyzed. This is done primarily with so-called
            analysis programs.
          </p>
          <p>
            Detailed information about these analysis programs can be found in
            the following privacy policy.
          </p>
          <p>
            <strong>2. Hosting and Content Delivery Networks (CDN)</strong>
            <br />
            <strong>Cloudflare</strong>
            <br />
            We use the service “Cloudflare”. The provider is Cloudflare Inc, 101
            Townsend St, San Francisco, CA 94107, USA (hereinafter
            “Cloudflare”).
          </p>
          <p>
            Cloudflare offers a globally distributed content delivery network
            with DNS. This technically routes the transfer of information
            between your browser and our website through Cloudflare’s network.
            This enables Cloudflare to analyze traffic between your browser and
            our website and serve as a filter between our servers and
            potentially malicious traffic from the Internet. In doing so,
            Cloudflare may also use cookies or other technologies to recognize
            Internet users, but these are used solely for the purpose described
            herein.
          </p>
          <p>
            The use of Cloudflare is based on our legitimate interest in
            providing our website as error-free and secure as possible (Art. 6
            para. 1 lit. f DSGVO).
          </p>
          <p>
            The data transfer to the USA is based on the standard contractual
            clauses of the EU Commission. Details can be found here:{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.cloudflare.com/privacypolicy/
            </a>
            .
          </p>
          <p>
            For more information about security and data protection at
            Cloudflare, please click here:{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.cloudflare.com/privacypolicy/
            </a>
            .
          </p>
          <p>
            <strong>Order Processing</strong>
            <br />
            We have concluded a contract on order processing (AVV) for the use
            of the above service. This is a contract required by data protection
            law, which ensures that this processes the personal data of our
            website visitors only according to our instructions and in
            compliance with the DSGVO.
          </p>
          <p>
            <strong>3. General Notes and Mandatory Information</strong>
            <br />
            <strong>Data Protection</strong>
            <br />
            The operators of these pages take the protection of your personal
            data very seriously. We treat your personal data confidentially and
            in accordance with the statutory data protection regulations and
            this privacy policy.
          </p>
          <p>
            When you use this website, various personal data are collected.
            Personal data is data with which you can be personally identified.
            This privacy policy explains what data we collect and what we use it
            for. It also explains how and for what purpose this is done.
          </p>
          <p>
            We would like to point out that data transmission on the Internet
            (e.g. when communicating by e-mail) can have security gaps. Complete
            protection of data against access by third parties is not possible.
          </p>
          <p>
            <strong>Note on the Responsible Party</strong>
            <br />
            The responsible party for data processing on this website is:
            <br />
            Sernitas GmbH
            <br />
            BioMedicineCenter Bochum
            <br />
            University Street 136
            <br />
            44799 Bochum
          </p>
          <p>
            <strong>Address Turkey:</strong>
            <br />
            Sernitas Sağlık Hizmetleri A.Ş.
            <br />
            İçerenköy Mah. Değirmenyolu
            <br />
            Cad. Kutay İş Merkezi B Blok K:4
            <br />
            Ataşehir/İstanbul
          </p>
          <p>
            Phone No.: +90 216 912 22 04
            <br />
            Fax: +90 216 740 09 88
            <br />
            Phone: +49 234 966 46 480
            <br />
            E-mail: info@sernitas.com
          </p>
          <p>
            <strong>Storage Period</strong>
            <br />
            Unless a more specific storage period has been specified within this
            data protection declaration, your personal data will remain with us
            until the purpose for the data processing no longer applies. If you
            assert a legitimate request for deletion or revoke your consent to
            data processing, your data will be deleted unless we have other
            legally permissible reasons for storing your personal data (e.g.
            retention periods under tax or commercial law); in the latter case,
            the data will be deleted once these reasons no longer apply.
          </p>
          <p>
            <strong>
              General Information on the Legal Basis for Data Processing on this
              Website
            </strong>
            <br />
            If you have consented to data processing, we process your personal
            data on the basis of Art. 6(1)(a) DSGVO or Art. 9(2)(a) DSGVO, if
            special categories of data are processed in accordance with Art.
            9(1) DSGVO. In the case of explicit consent to the transfer of
            personal data to third countries, the data processing is also based
            on Art. 49 (1) a DSGVO. If you have consented to the storage of
            cookies or to the access to information in your terminal device
            (e.g. via device fingerprinting), the data processing is
            additionally carried out on the basis of Section 25 (1) TTDSG. The
            consent can be revoked at any time. If your data is required for the
            performance of a contract or for the implementation of
            pre-contractual measures, we process your data on the basis of Art.
            6 para. 1 lit. b DSGVO. Furthermore, if your data is required for
            the fulfillment of a legal obligation, we process it on the basis of
            Art. 6 para. 1 lit. c DSGVO. Furthermore, the data processing may be
            carried out on the basis of our legitimate interest according to
            Art. 6 para. 1 lit. f DSGVO. Information on the relevant legal basis
            in each individual case is provided in the following paragraphs of
            this data protection declaration.
          </p>
          <p>
            <strong>Data Protection Officer</strong>
            <br />
            We have appointed a data protection officer.
            <br />
            Dr. Ali YILDIZ
            <br />
            Sernitas GmbH
            <br />
            BioMedicineCenter Bochum
            <br />
            University Street 136
            <br />
            44799 Bochum
            <br />
            Phone: +49 234 966 46 480
            <br />
            E-mail: info@sernitas.com
          </p>
          <p>
            <strong>
              Note on Data Transfer to the USA and Other Third Countries
            </strong>
            <br />
            Among other things, we use tools from companies based in the USA or
            other third countries that are not secure under data protection law.
            If these tools are active, your personal data may be transferred to
            these third countries and processed there. We would like to point
            out that no level of data protection comparable to that in the EU
            can be guaranteed in these countries. For example, US companies are
            obliged to hand over personal data to security authorities without
            you as a data subject being able to take legal action against this.
            Therefore, it cannot be ruled out that U.S. authorities (e.g.
            intelligence services) may process, evaluate and permanently store
            your data located on U.S. servers for monitoring purposes. We have
            no influence on these processing activities.
          </p>
          <p>
            <strong>Revocation of your consent to data processing</strong>
            <br />
            Many data processing operations are only possible with your express
            consent. You can revoke consent you have already given at any time.
            The legality of the data processing carried out until the revocation
            remains unaffected by the revocation.
          </p>
          <p>
            <strong>
              Right to object to data collection in special cases and to direct
              marketing (Art. 21 DSGVO)
            </strong>
            <br />
            IF THE DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 ABS. 1
            LIT. E OR F DSGVO, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF
            YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR
            PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE
            PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED
            CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO
            LONGER PROCESS YOUR PERSONAL DATA CONCERNED UNLESS WE CAN
            DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH
            OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING IS
            FOR THE PURPOSE OF ASSERTING, EXERCISING OR DEFENDING LEGAL CLAIMS
            (OBJECTION UNDER ARTICLE 21(1) DSGVO).
          </p>
          <p>
            IF YOUR PERSONAL DATA ARE PROCESSED FOR THE PURPOSE OF DIRECT
            MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE
            PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH
            MARKETING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS RELATED
            TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL
            SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT MARKETING
            (OBJECTION PURSUANT TO ARTICLE 21 (2) OF THE GERMAN DATA PROTECTION
            ACT).
          </p>
          <p>
            <strong>
              Right of appeal to the competent supervisory authority
            </strong>
            <br />
            In the event of violations of the GDPR, data subjects shall have the
            right to lodge a complaint with a supervisory authority, in
            particular in the Member State of their habitual residence, their
            place of work or the place of the alleged violation. The right of
            appeal is without prejudice to any other administrative or judicial
            remedy.
          </p>
          <p>
            <strong>Right to data portability</strong>
            <br />
            You have the right to have data that we process automatically on the
            basis of your consent or in performance of a contract handed over to
            you or to a third party in a common, machine-readable format. If you
            request the direct transfer of the data to another responsible
            party, this will only be done insofar as it is technically feasible.
          </p>
          <p> */}
          {/* <strong>Information, correction and deletion</strong>
            <br />
            Within the framework of the applicable legal provisions, you have
            the right at any time to free information about your stored personal
            data, its origin and recipient and the purpose of data processing
            and, if necessary, a right to correction or deletion of this data.
            For this purpose, as well as for further questions on the subject of
            personal data, you can contact us at any time.
          </p>
          <p>
            <strong>Right to restriction of processing</strong>
            <br />
            You have the right to request the restriction of the processing of
            your personal data. For this purpose, you can contact us at any
            time. The right to restriction of processing exists in the following
            cases:
          </p>
          <ul className="list-disc pl-5">
            <li>
              If you dispute the accuracy of your personal data stored by us, we
              usually need time to verify this. For the duration of the review,
              you have the right to request the restriction of the processing of
              your personal data.
            </li>
            <li>
              If the processing of your personal data happened/is happening
              unlawfully, you can request the restriction of data processing
              instead of deletion.
            </li>
            <li>
              If we no longer need your personal data, but you need it to
              exercise, defend or assert legal claims, you have the right to
              request restriction of the processing of your personal data
              instead of erasure.
            </li>
            <li>
              If you have lodged an objection pursuant to Art. 21 (1) DSGVO, a
              balancing of your and our interests must be carried out. As long
              as it has not yet been determined whose interests prevail, you
              have the right to request the restriction of the processing of
              your personal data.
            </li>
          </ul>
          <p>
            If you have restricted the processing of your personal data, this
            data – apart from its storage – may only be processed with your
            consent or for the assertion, exercise or defense of legal claims or
            for the protection of the rights of another natural or legal person
            or for reasons of an important public interest of the European Union
            or a Member State.
          </p>
          <p>
            <strong>SSL or TLS encryption</strong>
            <br />
            For security reasons and to protect the transmission of confidential
            content, such as orders or requests that you send to us as the site
            operator, this site uses SSL or TLS encryption. You can recognize an
            encrypted connection by the fact that the address line of the
            browser changes from “http://” to “https://” and by the lock symbol
            in your browser line.
          </p>
          <p>
            If SSL or TLS encryption is activated, the data you transmit to us
            cannot be read by third parties.
          </p>
          <p>
            <strong>Encrypted payment transactions on this website</strong>
            <br />
            If there is an obligation to transmit your payment data (e.g.
            account number in the case of direct debit authorization) to us
            after the conclusion of a contract with costs, this data is required
            for payment processing.
          </p>
          <p>
            Payment transactions via the common means of payment
            (Visa/MasterCard, direct debit) are made exclusively via an
            encrypted SSL or TLS connection. You can recognize an encrypted
            connection by the fact that the address line of the browser changes
            from “http://” to “https://” and by the lock symbol in your browser
            line.
          </p>
          <p>
            With encrypted communication, your payment data that you transmit to
            us cannot be read by third parties.
          </p>
          <p>
            <strong>4. Data Collection on This Website</strong>
            <br />
            <strong>Cookies</strong>
            <br />
            Our Internet pages use so-called “cookies”. Cookies are small data
            packets and do not cause any damage to your terminal device. They
            are stored either temporarily for the duration of a session (session
            cookies) or permanently (permanent cookies) on your terminal device.
            Session cookies are automatically deleted at the end of your visit.
            Permanent cookies remain stored on your end device until you delete
            them yourself or until they are automatically deleted by your web
            browser.
          </p>
          <p>
            Cookies can originate from us (first-party cookies) or from
            third-party companies (so-called third-party cookies). Third-party
            cookies enable the integration of certain services of third-party
            companies within websites (e.g. cookies for processing payment
            services).
          </p>
          <p>
            Cookies have various functions. Many cookies are technically
            necessary, as certain website functions would not work without them
            (e.g. the shopping cart function or the display of videos). Other
            cookies may be used to evaluate user behavior or for advertising
            purposes.
          </p>
          <p>
            Cookies that are necessary to carry out the electronic communication
            process, to provide certain functions that you have requested (e.g.
            for the shopping cart function) or to optimize the website (e.g.
            cookies to measure the web audience) (necessary cookies) are stored
            on the basis of Art. 6 (1) lit. f DSGVO, unless another legal basis
            is specified. The website operator has a legitimate interest in
            storing necessary cookies for the technically error-free and
            optimized provision of its services. If consent to the storage of
            cookies and comparable recognition technologies has been requested,
            processing is carried out exclusively on the basis of this consent
            (Art. 6 para. 1 lit. a DSGVO and § 25 para. 1 TTDSG); consent can be
            revoked at any time.
          </p>
          <p>
            You can set your browser so that you are informed about the setting
            of cookies and only allow cookies in individual cases, exclude the
            acceptance of cookies for certain cases or in general and activate
            the automatic deletion of cookies when closing the browser. If
            cookies are deactivated, the functionality of this website may be
            limited.
          </p>
          <p>
            Which cookies and services are used on this website can be found in
            this privacy policy.
          </p>
          <p>
            <strong>Consent with Complianz</strong>
            <br />
            Our website uses Complianz’s Consent technology to obtain your
            consent to the storage of certain cookies on your terminal device or
            to the use of certain technologies and to document this in
            accordance with data protection law. The provider of this technology
            is Complianz B.V., Kalmarweg 14-5, 9723 JG Groningen, The
            Netherlands (hereinafter “Complianz”).
          </p>
          <p>
            Complianz is hosted on our servers, so no connection is made to the
            servers of Complianz’s provider. Complianz stores a cookie in your
            browser in order to be able to assign the consents given to you or
            their revocation. The data collected in this way is stored until you
            request us to delete it, delete the Complianz cookie yourself or
            until the purpose for storing the data no longer applies. Mandatory
            legal storage obligations remain unaffected.
          </p>
          <p>
            Complianz is used to obtain the legally required consent for the use
            of cookies. The legal basis for this is Art. 6 para. 1 lit. c DSGVO.
          </p>
          <p>
            <strong>Server Log Files</strong>
            <br />
            The provider of the pages automatically collects and stores
            information in so-called server log files, which your browser
            automatically transmits to us. These are:
          </p>
          <ul className="list-disc pl-5">
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Host name of the accessing computer</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul>
          <p>
            This data is not merged with other data sources. The collection of
            this data is based on Art. 6 para. 1 lit. f DSGVO. The website
            operator has a legitimate interest in the technically error-free
            presentation and optimization of its website – for this purpose, the
            server log files must be collected.
          </p>
          <p>
            <strong>Contact Form</strong>
            <br />
            If you send us inquiries via the contact form, your data from the
            inquiry form, including the contact data you provided there, will be
            stored by us for the purpose of processing the inquiry and in case
            of follow-up questions. We do not pass on this data without your
            consent.
          </p>
          <p>
            The processing of this data is based on Art. 6 (1) lit. b DSGVO, if
            your request is related to the performance of a contract or is
            necessary for the implementation of pre-contractual measures. In all
            other cases, the processing is based on our legitimate interest in
            the effective processing of the requests sent to us (Art. 6 (1) (f)
            DSGVO) or on your consent (Art. 6 (1) (a) DSGVO) if this has been
            requested; the consent can be revoked at any time.
          </p>
          <p>
            The data you enter in the contact form will remain with us until you
            request us to delete it, revoke your consent to store it, or the
            purpose for storing the data no longer applies (e.g. after we have
            completed processing your request). Mandatory legal provisions – in
            particular retention periods – remain unaffected.
          </p>
          <p>
            <strong>Inquiry by E-mail, Telephone or Fax</strong>
            <br />
            If you contact us by e-mail, telephone or fax, your inquiry
            including all resulting personal data (name, inquiry) will be stored
            and processed by us for the purpose of processing your request. We
            do not pass on this data without your consent.
          </p>
          <p>
            The processing of this data is based on Art. 6 (1) lit. b DSGVO, if
            your request is related to the performance of a contract or is
            necessary for the implementation of pre-contractual measures. In all
            other cases, the processing is based on our legitimate interest in
            the effective processing of the requests sent to us (Art. 6 (1) (f)
            DSGVO) or on your consent (Art. 6 (1) (a) DSGVO) if this has been
            requested; the consent can be revoked at any time.
          </p>
          <p>
            The data you send to us via contact requests will remain with us
            until you request us to delete it, revoke your consent to store it,
            or the purpose for storing the data no longer applies (e.g. after
            your request has been processed). Mandatory legal provisions – in
            particular legal retention periods – remain unaffected.
          </p>
          <p>
            <strong>Use of Chatbots</strong>
            <br />
            We use chatbots to communicate with you. Chatbots are able to
            respond to your questions and other input without human assistance.
            For this purpose, the chatbots analyze further data in addition to
            your input in order to provide suitable answers (e.g. names, email
            addresses and other contact data, customer numbers and other
            identifiers, orders and chat histories). Furthermore, the chatbot
            may collect your IP address, log files, location information and
            other metadata. This data is stored on the servers of the chatbot
            provider.
          </p>
          <p>
            Based on the collected data, user profiles can be created. In
            addition, the data can be used to play out interest-based
            advertising, provided that the other legal requirements (in
            particular consent) for this are met. For this purpose, the chatbots
            can be linked to analysis and advertising tools.
          </p>
          <p>
            The collected data may also be used to improve our chatbots and
            their response behavior (machine learning).
          </p>
          <p>
            The data you enter during communication will remain with us or the
            chatbot operator until you request us to delete it, revoke your
            consent to store it, or the purpose for storing the data no longer
            applies (e.g., after we have completed processing your request).
            Mandatory legal provisions – in particular retention periods –
            remain unaffected.
          </p> */}
          {/* <p>
            The legal basis for the use of chatbots is Art. 6 (1) lit. b DSGVO,
            insofar as the chatbot is used to initiate a contract or as part of
            the performance of a contract. Insofar as a corresponding consent
            has been requested, processing is carried out exclusively on the
            basis of Art. 6 (1) a DSGVO and Section 25 (1) TTDSG, insofar as the
            consent includes the storage of cookies or access to information in
            the user’s terminal device (e.g. device fingerprinting) as defined
            by the TTDSG. The consent can be revoked at any time. In all other
            cases, the use is based on our legitimate interest in the most
            effective customer communication possible (Art. 6 para. 1 lit. f
            DSGVO).
          </p>
          <p>
            <strong>5. Plugins and Tools</strong>
            <br />
            <strong>Google Fonts (local hosting)</strong>
            <br />
            This site uses so-called Google Fonts, which are provided by Google,
            for the uniform display of fonts. The Google Fonts are installed
            locally. A connection to Google servers does not take place.
          </p>
          <p>
            Further information on Google Fonts can be found at{" "}
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://developers.google.com/fonts/faq
            </a>{" "}
            and in Google’s privacy policy:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p>
            <strong>Font Awesome (local hosting)</strong>
            <br />
            This site uses Font Awesome for the consistent display of fonts.
            Font Awesome is installed locally. There is no connection to
            Fonticons, Inc. servers.
          </p>
          <p>
            For more information about Font Awesome, please see the Font Awesome
            privacy policy at:{" "}
            <a
              href="https://fontawesome.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://fontawesome.com/privacy
            </a>
            .
          </p>
          <p>
            <strong>Google Maps</strong>
            <br />
            This site uses the map service Google Maps. The provider is Google
            Ireland Limited (“Google”), Gordon House, Barrow Street, Dublin 4,
            Ireland.
          </p>
          <p>
            To use the functions of Google Maps, it is necessary to store your
            IP address. This information is usually transferred to a Google
            server in the USA and stored there. The provider of this site has no
            influence on this data transmission. If Google Maps is activated,
            Google may use Google Fonts for the purpose of uniform display of
            fonts. When calling up Google Maps, your browser loads the required
            web fonts into its browser cache in order to display texts and fonts
            correctly.
          </p>
          <p>
            The use of Google Maps is in the interest of an appealing
            presentation of our online offers and an easy location of the places
            indicated by us on the website. This represents a legitimate
            interest within the meaning of Art. 6 para. 1 lit. f DSGVO. If a
            corresponding consent has been requested, the processing is carried
            out exclusively on the basis of Art. 6 para. 1 lit. a DSGVO and § 25
            para. 1 TTDSG, insofar as the consent includes the storage of
            cookies or access to information in the user’s terminal device (e.g.
            device fingerprinting) within the meaning of the TTDSG. The consent
            can be revoked at any time.
          </p>
          <p>
            Data transfer to the USA is based on the standard contractual
            clauses of the EU Commission. Details can be found here:{" "}
            <a
              href="https://privacy.google.com/businesses/gdprcontrollerterms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://privacy.google.com/businesses/gdprcontrollerterms/
            </a>{" "}
            and{" "}
            <a
              href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
            </a>
            .
          </p>
          <p>
            More information on the handling of user data can be found in
            Google’s privacy policy:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p>
            <strong>6. eCommerce and Payment Providers</strong>
            <br />
            <strong>Processing of Customer and Contract Data</strong>
            <br />
            We collect, process and use personal customer and contract data for
            the purpose of establishing, defining the content of and amending
            our contractual relationships. We collect, process and use personal
            data about the use of this website (usage data) only to the extent
            necessary to enable the user to use the service or to bill the user.
            The legal basis for this is Art. 6 para. 1 lit. b DSGVO.
          </p>
          <p>
            The collected customer data will be deleted after completion of the
            order or termination of the business relationship and expiration of
            any existing legal retention periods. Legal retention periods remain
            unaffected.
          </p>
          <p>
            <strong>
              Data Transfer Upon Conclusion of the Contract for Online Stores,
              Dealers, and Shipment of Goods
            </strong>
            <br />
            If you order goods from us, we will pass on your personal data to
            the transport company entrusted with delivery and to the payment
            service provider entrusted with payment processing. Only such data
            is released that the respective service provider requires to fulfill
            its task. The legal basis for this is Art. 6 (1) lit. b DSGVO, which
            permits the processing of data for the fulfillment of a contract or
            pre-contractual measures. Provided that you have given a
            corresponding consent according to Art. 6 (1) lit. a DSGVO, we will
            hand over your e-mail address to the transport company entrusted
            with the delivery so that they can inform you by e-mail about the
            shipping status of your order; you can revoke your consent at any
            time.
          </p>
          <p>
            <strong>
              Data Transfer When Concluding Contracts for Services and Digital
              Content
            </strong>
            <br />
            We transmit personal data to third parties only if this is necessary
            in the context of the contract, for example, to the credit
            institution entrusted with the payment processing.
          </p>
          <p>
            Further transmission of data does not take place or only if you have
            expressly consented to the transmission. Your data will not be
            passed on to third parties without your express consent, for example
            for advertising purposes.
          </p>
          <p>
            The basis for data processing is Art. 6 para. 1 lit. b DSGVO, which
            permits the processing of data for the fulfillment of a contract or
            pre-contractual measures.
          </p>
          <p>
            <strong>Payment Services</strong>
            <br />
            We integrate payment services from third-party companies on our
            website. When you make a purchase from us, your payment data (e.g.
            name, payment amount, account details, credit card number) are
            processed by the payment service provider for the purpose of payment
            processing. For these transactions, the respective contract and data
            protection provisions of the respective providers apply. The use of
            the payment service providers is based on Art. 6 para. 1 lit. b
            DSGVO (contract processing) and in the interest of a smooth,
            convenient and secure payment process (Art. 6 para. 1 lit. f DSGVO).
            Insofar as your consent is requested for certain actions, Art. 6
            para. 1 lit. a DSGVO is the legal basis for data processing;
            consents can be revoked at any time for the future.
          </p>
          <p>
            <strong>
              We use the following payment services / payment service providers
              within the scope of this website:
            </strong>
          </p>
          <p>
            <strong>PayPal</strong>
            <br />
            The provider of this payment service is PayPal (Europe) S.à.r.l. et
            Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg (hereinafter
            “PayPal”).
          </p>
          <p>
            The data transfer to the USA is based on the standard contractual
            clauses of the EU Commission. Details can be found here:{" "}
            <a
              href="https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full
            </a>
            .
          </p>
          <p>
            Details can be found in PayPal’s privacy policy:{" "}
            <a
              href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.paypal.com/de/webapps/mpp/ua/privacy-full
            </a>
            .
          </p>
          <p>
            <strong>7. Own Services</strong>
            <br />
            <strong>Handling of Applicant Data</strong>
            <br />
            We offer you the opportunity to apply to us (e.g., by e-mail, postal
            mail or via online application form). In the following, we inform
            you about the scope, purpose and use of your personal data collected
            during the application process. We assure you that the collection,
            processing and use of your data will be carried out in accordance
            with applicable data protection law and all other statutory
            provisions and that your data will be treated in strict confidence.
          </p>
          <p>
            <strong>Scope and Purpose of Data Collection</strong>
            <br />
            When you send us an application, we process your associated personal
            data (e.g. contact and communication data, application documents,
            notes taken during interviews, etc.) to the extent necessary to
            decide whether to establish an employment relationship. The legal
            basis for this is Section 26 BDSG under German law (initiation of an
            employment relationship), Art. 6 (1) lit. b DSGVO (general contract
            initiation) and – if you have given your consent – Art. 6 (1) lit. a
            DSGVO. The consent can be revoked at any time. Your personal data
            will only be passed on within our company to persons involved in
            processing your application.
          </p>
          <p>
            If the application is successful, the data you submitted will be
            stored in our data processing systems on the basis of Section 26 of
            the German Federal Data Protection Act (BDSG) and Article 6 (1) lit.
            b DSGVO for the purpose of implementing the employment relationship.
          </p>
          <p>
            <strong>Retention Period of the Data</strong>
            <br />
            If we are unable to make you a job offer, if you reject a job offer
            or if you withdraw your application, we reserve the right to retain
            the data you have provided for us on the basis of our legitimate
            interests (Art. 6 (1) (f) DSGVO) for up to 6 months from the end of
            the application process (rejection or withdrawal of the
            application). Subsequently, the data will be deleted and the
            physical application documents destroyed. This storage serves in
            particular as evidence in the event of a legal dispute. If it is
            apparent that the data will be required after the 6-month period has
            expired (e.g. due to an impending or pending legal dispute), the
            data will not be deleted until the purpose for continued storage no
            longer applies.
          </p>
          <p>
            Longer storage may also take place if you have given your
            corresponding consent (Art. 6 (1) a DSGVO) or if legal storage
            obligations prevent deletion.
          </p>
          <p>
            <strong>Inclusion in the Applicant Pool</strong>
            <br />
            If we do not make you a job offer, it may be possible to include you
            in our applicant pool. If you are accepted, all documents and
            information from your application will be transferred to the
            applicant pool so that we can contact you in the event of suitable
            vacancies.
          </p>
          <p>
            Inclusion in the applicant pool is based exclusively on your express
            consent (Art. 6 para. 1 lit. a DSGVO). The provision of consent is
            voluntary and is not related to the current application process. The
            data subject may revoke his/her consent at any time. In this case,
            the data from the applicant pool will be irrevocably deleted, unless
            there are legal reasons for retention.
          </p>
          <p>
            The data from the applicant pool will be irrevocably deleted no
            later than two years after consent has been given.
          </p> */}

          <p>
            <strong>1. Datenschutz auf einen Blick</strong>
            <br />
            <strong>Allgemeine Informationen</strong>
            <br />
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Weitere Informationen zum
            Thema Datenschutz finden Sie in unserer Datenschutzerklärung am Ende
            dieses Textes.
          </p>
          <p>
            <strong>Datenerhebung auf dieser Website</strong>
            <br />
            Wer ist verantwortlich für die Datenerhebung auf dieser Website?
            <br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Betreiber
            der Website. Die Kontaktdaten finden Sie im Abschnitt „Hinweis zur
            verantwortlichen Stelle“ in dieser Datenschutzerklärung.
          </p>
          <p>
            <strong>Wie erheben wir Ihre Daten?</strong>
            <br />
            Einerseits werden Ihre Daten dadurch erhoben, dass Sie diese uns
            mitteilen. Dies können zum Beispiel Daten sein, die Sie in ein
            Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung bei
            Ihrem Besuch der Website durch unsere IT-Systeme erhoben. Dies sind
            hauptsächlich technische Daten (z. B. Internetbrowser,
            Betriebssystem oder Uhrzeit des Seitenaufrufs). Diese Daten werden
            automatisch erhoben, sobald Sie diese Website betreten.
          </p>
          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong>
            <br />
            Einige der Daten werden erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können verwendet werden,
            um Ihr Nutzerverhalten zu analysieren.
          </p>
          <p>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
            <br />
            Sie haben das Recht, jederzeit unentgeltlich Auskunft über die
            Herkunft, den Empfänger und den Zweck Ihrer gespeicherten
            personenbezogenen Daten zu erhalten. Sie haben auch das Recht, die
            Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie Ihre
            Einwilligung zur Datenverarbeitung gegeben haben, können Sie diese
            Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Sie
            haben außerdem das Recht, unter bestimmten Voraussetzungen die
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen. Des Weiteren haben Sie das Recht, bei der zuständigen
            Aufsichtsbehörde Beschwerde einzulegen.
          </p>
          <p>
            Für diese Zwecke sowie für weitere Fragen zum Thema Datenschutz
            können Sie uns jederzeit kontaktieren.
          </p>
          <p>
            <strong>Analyse-Tools und Drittanbieter-Tools</strong>
            <br />
            Beim Besuch dieser Website kann Ihr Surfverhalten statistisch
            ausgewertet werden. Dies geschieht hauptsächlich mit sogenannten
            Analyseprogrammen.
          </p>
          <p>
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
            der folgenden Datenschutzerklärung.
          </p>
          <p>
            <strong>2. Hosting und Content Delivery Networks (CDN)</strong>
            <br />
            <strong>Cloudflare</strong>
            <br />
            Wir nutzen den Dienst „Cloudflare“. Anbieter ist die Cloudflare Inc,
            101 Townsend St, San Francisco, CA 94107, USA (nachfolgend
            „Cloudflare“).
          </p>
          <p>
            Cloudflare bietet ein weltweit verteiltes Content Delivery Network
            mit DNS. Dadurch wird der Informationsaustausch zwischen Ihrem
            Browser und unserer Website durch das Netzwerk von Cloudflare
            geleitet. Dies ermöglicht Cloudflare, den Verkehr zwischen Ihrem
            Browser und unserer Website zu analysieren und als Filter zwischen
            unseren Servern und möglicherweise schädlichem Internetverkehr zu
            fungieren. Dabei kann Cloudflare auch Cookies oder andere
            Technologien einsetzen, um Internetnutzer zu erkennen, diese werden
            jedoch ausschließlich für den beschriebenen Zweck verwendet.
          </p>
          <p>
            Die Nutzung von Cloudflare erfolgt auf Grundlage unseres
            berechtigten Interesses, unsere Website so fehlerfrei und sicher wie
            möglich bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            Die Datenübertragung in die USA erfolgt auf Grundlage der
            Standardvertragsklauseln der EU-Kommission. Details finden Sie hier:{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.cloudflare.com/privacypolicy/
            </a>
            .
          </p>
          <p>
            Weitere Informationen zu Sicherheit und Datenschutz bei Cloudflare
            finden Sie hier:{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.cloudflare.com/privacypolicy/
            </a>
            .
          </p>
          <p>
            <strong>Auftragsverarbeitung</strong>
            <br />
            Wir haben einen Vertrag zur Auftragsverarbeitung (AVV) für die
            Nutzung des oben genannten Dienstes abgeschlossen. Dies ist ein
            vertraglich vorgeschriebenes Dokument gemäß dem Datenschutzrecht,
            das sicherstellt, dass die personenbezogenen Daten unserer
            Website-Besucher nur nach unseren Weisungen und unter Einhaltung der
            DSGVO verarbeitet werden.
          </p>
          <p>
            <strong>3. Allgemeine Hinweise und Pflichtinformationen</strong>
            <br />
            <strong>Datenschutz</strong>
            <br />
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website nutzen, werden verschiedene personenbezogene
            Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
            persönlich identifiziert werden können. Diese Datenschutzerklärung
            erklärt, welche Daten wir erheben und wie wir diese verwenden. Sie
            erklärt auch, wie und zu welchem Zweck dies geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
          <p>
            <strong>Hinweis zur verantwortlichen Stelle</strong>
            <br />
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
            <br />
            Sernitas GmbH
            <br />
            BioMedicineCenter Bochum
            <br />
            Universitätstraße 136
            <br />
            44799 Bochum
          </p>
          <p>
            <strong>Adresse Türkei:</strong>
            <br />
            Sernitas Sağlık Hizmetleri A.Ş.
            <br />
            İçerenköy Mah. Değirmenyolu
            <br />
            Cad. Kutay İş Merkezi B Blok K:4
            <br />
            Ataşehir/İstanbul
          </p>
          <p>
            Telefon-Nr.: +90 216 912 22 04
            <br />
            Fax: +90 216 740 09 88
            <br />
            Telefon: +49 234 966 46 480
            <br />
            E-Mail: info@sernitas.com
          </p>
          <p>
            <strong>Speicherdauer</strong>
            <br />
            Sofern in dieser Datenschutzerklärung keine speziellere
            Speicherdauer angegeben wurde, verbleiben Ihre personenbezogenen
            Daten bei uns, bis der Zweck für die Datenverarbeitung nicht mehr
            zutrifft. Wenn Sie ein berechtigtes Löschverlangen geltend machen
            oder Ihre Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
            Daten gelöscht, es sei denn, wir haben andere rechtlich zulässige
            Gründe für die Speicherung Ihrer personenbezogenen Daten (z. B.
            Aufbewahrungsfristen nach Steuer- oder Handelsrecht); in diesem Fall
            werden die Daten gelöscht, sobald diese Gründe nicht mehr zutreffen.
          </p>
          <p>
            <strong>
              Allgemeine Hinweise zur Rechtsgrundlage für die Datenverarbeitung
              auf dieser Website
            </strong>
            <br />
            Wenn Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
            wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO, wenn besondere
            Kategorien von Daten gemäß Art. 9 Abs. 1 DSGVO verarbeitet werden.
            Im Falle einer ausdrücklichen Einwilligung zur Übermittlung
            personenbezogener Daten in Drittländer erfolgt die Datenverarbeitung
            ebenfalls auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Wenn Sie
            der Speicherung von Cookies oder dem Zugriff auf Informationen in
            Ihrem Endgerät zugestimmt haben (z. B. durch Geräte-Fingerprinting),
            erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs.
            1 TTDSG. Die Einwilligung kann jederzeit widerrufen werden. Wenn
            Ihre Daten für die Erfüllung eines Vertrags oder für die
            Durchführung vorvertraglicher Maßnahmen erforderlich sind,
            verarbeiten wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. b
            DSGVO. Des Weiteren, wenn Ihre Daten zur Erfüllung einer rechtlichen
            Verpflichtung erforderlich sind, verarbeiten wir diese auf Grundlage
            von Art. 6 Abs. 1 lit. c DSGVO. Zudem kann die Datenverarbeitung auf
            Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f
            DSGVO erfolgen. Weitere Informationen zur relevanten Rechtsgrundlage
            finden Sie in den folgenden Absätzen dieser Datenschutzerklärung.
          </p>
          <p>
            <strong>Datenschutzbeauftragter</strong>
            <br />
            Wir haben einen Datenschutzbeauftragten bestellt.
            <br />
            Dr. Ali YILDIZ
            <br />
            Sernitas GmbH
            <br />
            BioMedicineCenter Bochum
            <br />
            Universitätstraße 136
            <br />
            44799 Bochum
            <br />
            Telefon: +49 234 966 46 480
            <br />
            E-Mail: info@sernitas.com
          </p>
          <p>
            <strong>
              Hinweis zur Datenübertragung in die USA und in andere Drittländer
            </strong>
            <br />
            Unter anderem setzen wir Tools von Unternehmen ein, die ihren Sitz
            in den USA oder anderen Drittländern haben, die datenschutzrechtlich
            nicht sicher sind. Wenn diese Tools aktiv sind, können Ihre
            personenbezogenen Daten in diese Drittländer übermittelt und dort
            verarbeitet werden. Wir möchten darauf hinweisen, dass in diesen
            Ländern kein Datenschutzniveau gewährleistet werden kann, das mit
            dem in der EU vergleichbar ist. US-Unternehmen sind beispielsweise
            verpflichtet, personenbezogene Daten an Sicherheitsbehörden zu
            übermitteln, ohne dass Sie als betroffene Person hiergegen rechtlich
            vorgehen können. Daher kann nicht ausgeschlossen werden, dass
            US-Behörden (z. B. Geheimdienste) Ihre Daten, die auf US-Servern
            gespeichert sind, zu Überwachungszwecken verarbeiten, auswerten und
            dauerhaft speichern. Auf diese Verarbeitungsvorgänge haben wir
            keinen Einfluss.
          </p>
          <p>
            <strong>Information, Korrektur und Löschung</strong>
            <br />
            Im Rahmen der geltenden gesetzlichen Bestimmungen haben Sie das
            Recht, jederzeit kostenlose Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger sowie den
            Zweck der Datenverarbeitung zu erhalten und gegebenenfalls das Recht
            auf Berichtigung oder Löschung dieser Daten. Zu diesem Zweck sowie
            für weitere Fragen zum Thema personenbezogene Daten können Sie sich
            jederzeit an uns wenden.
          </p>
          <p>
            <strong>Recht auf Einschränkung der Verarbeitung</strong>
            <br />
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Zu diesem Zweck können Sie
            sich jederzeit an uns wenden. Das Recht auf Einschränkung der
            Verarbeitung besteht in den folgenden Fällen:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, benötigen wir in der Regel
              Zeit, um dies zu überprüfen. Während der Überprüfung haben Sie das
              Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
              Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
              erfolgt/ist, können Sie die Einschränkung der Datenverarbeitung
              anstelle der Löschung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
              diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von
              Rechtsansprüchen benötigen, haben Sie das Recht, die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten anstelle der
              Löschung zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch gemäß Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abwägung Ihrer und unserer Interessen erfolgen.
              Solange noch nicht geklärt ist, wessen Interessen überwiegen,
              haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          <p>
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschränkt haben, dürfen diese Daten – abgesehen von der
            Speicherung – nur mit Ihrer Einwilligung oder zur Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
            Rechte einer anderen natürlichen oder juristischen Person oder aus
            Gründen eines wichtigen öffentlichen Interesses der Europäischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          <p>
            <strong>SSL- oder TLS-Verschlüsselung</strong>
            <br />
            Aus Sicherheitsgründen und zum Schutz der Übertragung von
            vertraulichen Inhalten, wie z. B. Bestellungen oder Anfragen, die
            Sie an uns als Seitenbetreiber senden, verwendet diese Seite SSL-
            oder TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
            Sie daran, dass die Adresszeile des Browsers von “http://” auf
            “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
          <p>
            Ist die SSL- oder TLS-Verschlüsselung aktiviert, können die Daten,
            die Sie an uns übermitteln, von Dritten nicht mitgelesen werden.
          </p>
          <p>
            <strong>
              Verschlüsselte Zahlungstransaktionen auf dieser Website
            </strong>
            <br />
            Sofern nach Abschluss eines kostenpflichtigen Vertrages die
            Übermittlung Ihrer Zahlungsdaten (z. B. Kontonummer im Falle einer
            Lastschrift) an uns erforderlich ist, werden diese Daten für die
            Zahlungsabwicklung benötigt.
          </p>
          <p>
            Zahlungstransaktionen über die gängigen Zahlungsmethoden
            (Visa/MasterCard, Lastschrift) erfolgen ausschließlich über eine
            verschlüsselte SSL- oder TLS-Verbindung. Eine verschlüsselte
            Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
            “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>
          <p>
            Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie
            uns übermitteln, von Dritten nicht mitgelesen werden.
          </p>
          <p>
            <strong>4. Datenerhebung auf dieser Website</strong>
            <br />
            <strong>Cookies</strong>
            <br />
            Unsere Internetseiten verwenden sogenannte „Cookies“. Cookies sind
            kleine Datenpakete und richten keinen Schaden auf Ihrem Endgerät an.
            Sie werden entweder temporär für die Dauer einer Sitzung gespeichert
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät. Session-Cookies werden automatisch am Ende Ihres Besuchs
            gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert,
            bis Sie diese selbst löschen oder bis sie automatisch von Ihrem
            Webbrowser gelöscht werden.
          </p>
          <p>
            Cookies können von uns stammen (First-Party-Cookies) oder von
            Drittunternehmen (sogenannte Third-Party-Cookies).
            Drittanbieter-Cookies ermöglichen die Integration bestimmter Dienste
            von Drittunternehmen auf Webseiten (z. B. Cookies zur Abwicklung von
            Zahlungsdiensten).
          </p>
          <p>
            Cookies haben verschiedene Funktionen. Viele Cookies sind technisch
            notwendig, da ohne sie bestimmte Funktionen der Website nicht
            funktionieren würden (z. B. die Warenkorb-Funktion oder die Anzeige
            von Videos). Andere Cookies können zur Auswertung des
            Nutzerverhaltens oder zu Werbezwecken eingesetzt werden.
          </p>
          <p>
            Cookies, die notwendig sind, um den elektronischen
            Kommunikationsprozess durchzuführen, um bestimmte Funktionen, die
            Sie angefordert haben (z. B. für die Warenkorb-Funktion)
            bereitzustellen oder um die Website zu optimieren (z. B. Cookies zur
            Messung der Web-Reichweite) (notwendige Cookies), werden auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
            andere Rechtsgrundlage angegeben wird. Der Webseitenbetreiber hat
            ein berechtigtes Interesse an der Speicherung notwendiger Cookies
            zur technisch fehlerfreien und optimierten Bereitstellung seiner
            Dienste. Wurde die Einwilligung zur Speicherung von Cookies und
            vergleichbaren Erkennungstechnologien eingeholt, erfolgt die
            Verarbeitung ausschließlich auf Basis dieser Einwilligung (Art. 6
            Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung kann
            jederzeit widerrufen werden.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über die Setzung
            von Cookies informiert werden und Cookies nur im Einzelfall
            erlauben, die Akzeptanz von Cookies für bestimmte Fälle oder
            generell ausschließen und die automatische Löschung von Cookies beim
            Schließen des Browsers aktivieren. Wenn Sie Cookies deaktivieren,
            kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p>
            Welche Cookies und Dienste auf dieser Website verwendet werden,
            entnehmen Sie bitte dieser Datenschutzerklärung.
          </p>
          <p>
            <strong>Einwilligung mit Complianz</strong>
            <br />
            Unsere Website verwendet die Consent-Technologie von Complianz, um
            Ihre Einwilligung zur Speicherung bestimmter Cookies auf Ihrem
            Endgerät oder zur Verwendung bestimmter Technologien einzuholen und
            diese gemäß der Datenschutzgesetzgebung zu dokumentieren. Anbieter
            dieser Technologie ist Complianz B.V., Kalmarweg 14-5, 9723 JG
            Groningen, Niederlande (im Folgenden „Complianz“).
          </p>
          <p>
            Complianz wird auf unseren Servern gehostet, sodass keine Verbindung
            zu den Servern des Anbieters von Complianz hergestellt wird.
            Complianz speichert ein Cookie in Ihrem Browser, um die Ihnen
            erteilten Einwilligungen oder deren Widerruf zuordnen zu können. Die
            auf diese Weise erhobenen Daten werden gespeichert, bis Sie uns um
            deren Löschung bitten, das Complianz- Cookie selbst löschen oder der
            Zweck für die Speicherung der Daten nicht mehr zutrifft. Gesetzlich
            vorgeschriebene Aufbewahrungspflichten bleiben unberührt.
          </p>
          <p>
            Complianz wird verwendet, um die gesetzlich erforderliche
            Einwilligung für die Verwendung von Cookies zu erhalten. Die
            Rechtsgrundlage dafür bildet Art. 6 Abs. 1 lit. c DSGVO.
          </p>
          <p>
            <strong>Server-Log-Dateien</strong>
            <br />
            Der Anbieter der Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
            automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-5">
            <li>Browser-Typ und Browser-Version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
            <li>Host-Name des zugreifenden Rechners</li>
            <li>Zeitpunkt der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
            Die Erhebung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Webseitenbetreiber hat ein berechtigtes Interesse
            an der technisch fehlerfreien Darstellung und Optimierung seiner
            Website – zu diesem Zweck müssen die Server-Log-Dateien erfasst
            werden.
          </p>
          <p>
            <strong>Kontaktformular</strong>
            <br />
            Wenn Sie uns Anfragen über das Kontaktformular senden, werden Ihre
            Daten aus dem Anfrageformular, einschließlich der dort angegebenen
            Kontaktdaten, von uns gespeichert, um die Anfrage zu bearbeiten und
            für eventuelle Rückfragen. Wir geben diese Daten nicht ohne Ihre
            Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, wenn Ihre Anfrage mit der Erfüllung eines Vertrages
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen anderen Fällen erfolgt die Verarbeitung
            auf Basis unseres berechtigten Interesses an der effektiven
            Bearbeitung der Anfragen, die an uns gerichtet werden (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
            lit. a DSGVO), wenn diese eingefordert wurde; die Einwilligung kann
            jederzeit widerrufen werden.
          </p>
          <p>
            Die Daten, die Sie im Kontaktformular eingeben, bleiben bei uns, bis
            Sie uns um deren Löschung bitten, Ihre Einwilligung zur Speicherung
            widerrufen oder der Zweck für die Speicherung der Daten nicht mehr
            zutrifft (z. B. nach Abschluss der Bearbeitung Ihrer Anfrage).
            Gesetzlich vorgeschriebene Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>
          <p>
            <strong>Anfrage per E-Mail, Telefon oder Fax</strong>
            <br />
            Wenn Sie uns per E-Mail, Telefon oder Fax kontaktieren, wird Ihre
            Anfrage einschließlich aller daraus resultierenden personenbezogenen
            Daten (Name, Anfrage) von uns gespeichert und zur Bearbeitung Ihrer
            Anfrage verarbeitet. Wir geben diese Daten nicht ohne Ihre
            Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
            1 lit. b DSGVO, wenn Ihre Anfrage mit der Erfüllung eines Vertrages
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich ist. In allen anderen Fällen erfolgt die Verarbeitung
            auf Basis unseres berechtigten Interesses an der effektiven
            Bearbeitung der Anfragen, die an uns gerichtet werden (Art. 6 Abs. 1
            lit. f DSGVO) oder auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1
            lit. a DSGVO), wenn diese eingefordert wurde; die Einwilligung kann
            jederzeit widerrufen werden.
          </p>
          <p>
            Die Daten, die Sie uns per Kontaktanfragen zusenden, bleiben bei
            uns, bis Sie uns um deren Löschung bitten, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck für die Speicherung der Daten
            nicht mehr zutrifft (z. B. nach Bearbeitung Ihrer Anfrage).
            Gesetzlich vorgeschriebene Bestimmungen – insbesondere gesetzliche
            Aufbewahrungsfristen – bleiben unberührt.
          </p>
          <p>
            <strong>Verwendung von Chatbots</strong>
            <br />
            Wir nutzen Chatbots, um mit Ihnen zu kommunizieren. Chatbots sind in
            der Lage, Ihre Fragen und anderen Eingaben ohne menschliche Hilfe zu
            beantworten. Zu diesem Zweck analysieren die Chatbots weitere Daten
            zusätzlich zu Ihrer Eingabe, um passende Antworten zu liefern (z. B.
            Namen, E-Mail-Adressen und andere Kontaktdaten, Kundennummern und
            andere Kennungen, Bestellungen und Chat-Historien). Darüber hinaus
            kann der Chatbot Ihre IP-Adresse, Log-Dateien, Standortinformationen
            und andere Metadaten sammeln. Diese Daten werden auf den Servern des
            Chatbot-Anbieters gespeichert.
          </p>
          <p>
            Auf Grundlage der gesammelten Daten können Benutzerprofile erstellt
            werden. Zudem können die Daten genutzt werden, um interessenbezogene
            Werbung auszuspielen, sofern die anderen rechtlichen Voraussetzungen
            (insbesondere Einwilligung) dafür erfüllt sind. Zu diesem Zweck
            können die Chatbots mit Analyse- und Werbetools verknüpft werden.
          </p>
          <p>
            Die gesammelten Daten können auch zur Verbesserung unserer Chatbots
            und deren Reaktionsverhalten (Machine Learning) verwendet werden.
          </p>
          <p>
            Die Daten, die Sie während der Kommunikation eingeben, bleiben bei
            uns oder dem Chatbot-Betreiber, bis Sie uns um deren Löschung
            bitten, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
            für die Speicherung der Daten nicht mehr zutrifft (z. B. nach
            Bearbeitung Ihrer Anfrage). Gesetzlich vorgeschriebene Bestimmungen
            – insbesondere Aufbewahrungsfristen – bleiben unberührt.
          </p>
          <p>
            Die rechtliche Grundlage für die Nutzung von Chatbots ist Art. 6
            Abs. 1 lit. b DSGVO, soweit der Chatbot zur Anbahnung eines Vertrags
            oder im Rahmen der Vertragserfüllung genutzt wird. Soweit eine
            entsprechende Einwilligung eingeholt wurde, erfolgt die Verarbeitung
            ausschließlich auf Basis von Art. 6 Abs. 1 lit. a DSGVO und § 25
            Abs. 1 TTDSG, sofern die Einwilligung die Speicherung von Cookies
            oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
            Geräte-Fingerabdruck) gemäß TTDSG umfasst. Die Einwilligung kann
            jederzeit widerrufen werden. In allen anderen Fällen basiert die
            Nutzung auf unserem berechtigten Interesse an einer möglichst
            effektiven Kundenkommunikation (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
          <p>
            <strong>5. Plugins und Tools</strong>
            <br />
            <strong>Google Fonts (lokales Hosting)</strong>
            <br />
            Diese Seite verwendet sogenannte Google Fonts, die von Google
            bereitgestellt werden, für die einheitliche Anzeige von
            Schriftarten. Die Google Fonts werden lokal installiert. Eine
            Verbindung zu Google-Servern findet nicht statt.
          </p>
          <p>
            Weitere Informationen zu Google Fonts finden Sie unter{" "}
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://developers.google.com/fonts/faq
            </a>{" "}
            und in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p>
            <strong>Font Awesome (lokales Hosting)</strong>
            <br />
            Diese Seite verwendet Font Awesome für die einheitliche Darstellung
            von Schriftarten. Font Awesome ist lokal installiert. Es besteht
            keine Verbindung zu den Servern von Fonticons, Inc.
          </p>
          <p>
            Weitere Informationen zu Font Awesome finden Sie in der
            Datenschutzerklärung von Font Awesome unter:{" "}
            <a
              href="https://fontawesome.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://fontawesome.com/privacy
            </a>
            .
          </p>
          <p>
            <strong>Google Maps</strong>
            <br />
            Diese Seite verwendet den Kartendienst Google Maps. Anbieter ist
            Google Ireland Limited („Google“), Gordon House, Barrow Street,
            Dublin 4, Irland.
          </p>
          <p>
            Um die Funktionen von Google Maps nutzen zu können, ist es
            notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden
            in der Regel an einen Google- Server in den USA übertragen und dort
            gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese
            Datenübertragung. Wenn Google Maps aktiviert ist, kann Google Google
            Fonts zur einheitlichen Darstellung von Schriftarten nutzen. Beim
            Abrufen von Google Maps lädt Ihr Browser die erforderlichen Webfonts
            in seinen Browser-Cache, um Texte und Schriftarten korrekt
            darzustellen.
          </p>
          <p>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
            Präsentation unserer Online-Angebote und der leichten Auffindbarkeit
            der von uns auf der Website angegebenen Orte. Dies stellt ein
            berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
            Wenn eine entsprechende Einwilligung eingeholt wurde, erfolgt die
            Verarbeitung ausschließlich auf Basis von Art. 6 Abs. 1 lit. a DSGVO
            und § 25 Abs. 1 TTDSG, sofern die Einwilligung die Speicherung von
            Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers
            (z. B. Geräte-Fingerabdruck) im Sinne des TTDSG umfasst. Die
            Einwilligung kann jederzeit widerrufen werden.
          </p>
          <p>
            Die Datenübertragung in die USA erfolgt auf Grundlage der
            Standardvertragsklauseln der EU-Kommission. Details finden Sie hier:{" "}
            <a
              href="https://privacy.google.com/businesses/gdprcontrollerterms/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://privacy.google.com/businesses/gdprcontrollerterms/
            </a>{" "}
            und{" "}
            <a
              href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
            </a>
            .
          </p>
          <p>
            Weitere Informationen zur Verarbeitung von Nutzerdaten finden Sie in
            der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p>
            <strong>6. eCommerce und Zahlungsdienstleister</strong>
            <br />
            <strong>Verarbeitung von Kunden- und Vertragsdaten</strong>
            <br />
            Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und
            Vertragsdaten zum Zweck der Begründung, Ausgestaltung und Änderung
            unserer vertraglichen Beziehungen. Wir erheben, verarbeiten und
            nutzen personenbezogene Daten über die Nutzung dieser Website
            (Nutzungsdaten) nur im notwendigen Umfang, um dem Nutzer die Nutzung
            des Dienstes zu ermöglichen oder die Abrechnung des Nutzers
            vorzunehmen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO.
          </p>
          <p>
            Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder
            Beendigung der Geschäftsbeziehung und Ablauf etwaiger gesetzlicher
            Aufbewahrungsfristen gelöscht. Gesetzliche Aufbewahrungsfristen
            bleiben unberührt.
          </p>
          <p>
            <strong>
              Datenübermittlung bei Vertragsschluss für Onlineshops, Händler und
              Versand von Waren
            </strong>
            <br />
            Wenn Sie Waren bei uns bestellen, geben wir Ihre personenbezogenen
            Daten an das mit der Lieferung beauftragte Transportunternehmen und
            an den mit der Zahlungsabwicklung beauftragten Zahlungsdienstleister
            weiter. Es werden nur die Daten freigegeben, die der jeweilige
            Dienstleister zur Erfüllung seiner Aufgabe benötigt. Rechtsgrundlage
            hierfür ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von
            Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
            erlaubt. Sofern Sie eine entsprechende Einwilligung nach Art. 6 Abs.
            1 lit. a DSGVO gegeben haben, geben wir Ihre E-Mail-Adresse an das
            Transportunternehmen weiter, damit dieses Sie per E-Mail über den
            Versandstatus Ihrer Bestellung informieren kann; Sie können Ihre
            Einwilligung jederzeit widerrufen.
          </p>
          <p>
            <strong>
              Datenübermittlung bei Abschluss von Verträgen für Dienstleistungen
              und digitale Inhalte
            </strong>
            <br />
            Wir übermitteln personenbezogene Daten an Dritte nur, wenn dies im
            Rahmen des Vertrags erforderlich ist, beispielsweise an das mit der
            Zahlungsabwicklung beauftragte Kreditinstitut.
          </p>
          <p>
            Eine weitere Übermittlung von Daten erfolgt nicht oder nur, wenn Sie
            ausdrücklich in die Übermittlung eingewilligt haben. Ihre Daten
            werden nicht ohne Ihre ausdrückliche Einwilligung an Dritte
            weitergegeben, zum Beispiel zu Werbezwecken.
          </p>
          <p>
            Die Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b
            DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags
            oder vorvertraglicher Maßnahmen erlaubt.
          </p>
          <p>
            <strong>Zahlungsdienste</strong>
            <br />
            Wir integrieren Zahlungsdienste von Drittunternehmen auf unserer
            Website. Wenn Sie bei uns einkaufen, werden Ihre Zahlungsdaten (z.
            B. Name, Zahlungsbetrag, Kontodaten, Kreditkartennummer) vom
            Zahlungsdienstleister zur Zahlungsabwicklung verarbeitet. Für diese
            Transaktionen gelten die jeweiligen Vertrags- und
            Datenschutzbestimmungen der jeweiligen Anbieter. Die Nutzung der
            Zahlungsdienstleister basiert auf Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsabwicklung) und im Interesse eines reibungslosen, bequemen
            und sicheren Zahlungsprozesses (Art. 6 Abs. 1 lit. f DSGVO). Soweit
            für bestimmte Aktionen Ihre Einwilligung erforderlich ist, ist Art.
            6 Abs. 1 lit. a DSGVO die Rechtsgrundlage für die Datenverarbeitung;
            Einwilligungen können jederzeit für die Zukunft widerrufen werden.
          </p>
          <p>
            <strong>
              Wir nutzen die folgenden Zahlungsdienste / Zahlungsdienstleister
              im Rahmen dieser Website:
            </strong>
          </p>
          <p>
            <strong>PayPal</strong>
            <br />
            Der Anbieter dieses Zahlungsdienstes ist PayPal (Europe) S.à.r.l. et
            Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg (im Folgenden
            „PayPal“).
          </p>
          <p>
            Die Datenübertragung in die USA erfolgt auf Grundlage der
            Standardvertragsklauseln der EU-Kommission. Details finden Sie hier:{" "}
            <a
              href="https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.paypal.com/de/webapps/mpp/ua/pocpsa-full
            </a>
            .
          </p>
          <p>
            Details finden Sie in der Datenschutzerklärung von PayPal:{" "}
            <a
              href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary underline"
            >
              https://www.paypal.com/de/webapps/mpp/ua/privacy-full
            </a>
            .
          </p>
          <p>
            <strong>7. Eigene Dienstleistungen</strong>
            <br />
            <strong>Umgang mit Bewerberdaten</strong>
            <br />
            Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B.
            per E-Mail, Post oder über ein Online-Bewerbungsformular). Im
            Folgenden informieren wir Sie über den Umfang, die Zwecke und die
            Verwendung Ihrer personenbezogenen Daten, die im Bewerbungsprozess
            erhoben werden. Wir versichern Ihnen, dass die Erhebung,
            Verarbeitung und Nutzung Ihrer Daten im Einklang mit den geltenden
            Datenschutzgesetzen und allen anderen gesetzlichen Bestimmungen
            erfolgt und Ihre Daten streng vertraulich behandelt werden.
          </p>
          <p>
            <strong>Umfang und Zweck der Datenerhebung</strong>
            <br />
            Wenn Sie uns eine Bewerbung senden, verarbeiten wir Ihre damit
            verbundenen personenbezogenen Daten (z. B. Kontakt- und
            Kommunikationsdaten, Bewerbungsunterlagen, während Interviews
            gemachte Notizen usw.) in dem Umfang, der notwendig ist, um zu
            entscheiden, ob ein Arbeitsverhältnis begründet wird.
            Rechtsgrundlage hierfür ist § 26 BDSG (Begründung eines
            Arbeitsverhältnisses) und Art. 6 Abs. 1 lit. b DSGVO (allgemeine
            Vertragsaufnahme) und – wenn Sie Ihre Einwilligung gegeben haben –
            Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung kann jederzeit
            widerrufen werden. Ihre personenbezogenen Daten werden nur innerhalb
            unseres Unternehmens an Personen weitergegeben, die an der
            Bearbeitung Ihrer Bewerbung beteiligt sind.
          </p>
          <p>
            Wird die Bewerbung erfolgreich, werden die von Ihnen übermittelten
            Daten auf Grundlage des § 26 BDSG und Art. 6 Abs. 1 lit. b DSGVO in
            unseren Datenverarbeitungssystemen gespeichert, um das
            Arbeitsverhältnis umzusetzen.
          </p>
          <p>
            <strong>Aufbewahrungsfrist der Daten</strong>
            <br />
            Wenn wir Ihnen kein Jobangebot machen können, Sie ein Jobangebot
            ablehnen oder Ihre Bewerbung zurückziehen, behalten wir uns vor, die
            von Ihnen bereitgestellten Daten auf Grundlage unserer berechtigten
            Interessen (Art. 6 Abs. 1 (f) DSGVO) bis zu 6 Monate nach Abschluss
            des Bewerbungsprozesses (Ablehnung oder Rücknahme der Bewerbung)
            aufzubewahren. Danach werden die Daten gelöscht und die physischen
            Bewerbungsunterlagen vernichtet. Diese Aufbewahrung dient
            insbesondere als Beweis im Falle eines Rechtsstreits. Sollte es
            absehbar sein, dass die Daten nach Ablauf der 6-Monatsfrist benötigt
            werden (z. B. aufgrund eines drohenden oder laufenden
            Rechtsstreits), werden die Daten nicht gelöscht, bis der Zweck für
            die weitere Aufbewahrung nicht mehr zutrifft.
          </p>
          <p>
            Eine längere Aufbewahrung kann auch stattfinden, wenn Sie Ihre
            entsprechende Einwilligung gegeben haben (Art. 6 Abs. 1 a DSGVO)
            oder wenn gesetzliche Aufbewahrungspflichten die Löschung
            verhindern.
          </p>
          <p>
            <strong>Einbeziehung in den Bewerberpool</strong>
            <br />
            Wenn wir Ihnen kein Jobangebot machen, kann es möglich sein, Sie in
            unseren Bewerberpool aufzunehmen. Wenn Sie aufgenommen werden,
            werden alle Unterlagen und Informationen aus Ihrer Bewerbung in den
            Bewerberpool übertragen, damit wir Sie bei geeigneten offenen
            Stellen kontaktieren können.
          </p>
          <p>
            Die Aufnahme in den Bewerberpool erfolgt ausschließlich auf Ihre
            ausdrückliche Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die
            Erteilung der Einwilligung ist freiwillig und steht in keinem
            Zusammenhang mit dem aktuellen Bewerbungsprozess. Die betroffene
            Person kann ihre Einwilligung jederzeit widerrufen. In diesem Fall
            werden die Daten aus dem Bewerberpool unwiderruflich gelöscht, es
            sei denn, es bestehen gesetzliche Aufbewahrungsgründe.
          </p>
          <p>
            Die Daten aus dem Bewerberpool werden spätestens zwei Jahre nach
            Erteilung der Einwilligung unwiderruflich gelöscht.
          </p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
