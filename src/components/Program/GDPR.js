import React, { useEffect, useState } from "react";

function Profile() {
  const [userDetails] = useState({
    
  });



  useEffect(() => {
    // Here you can add any logic you want to run when the component mounts
  }, []);

  async function handleLogout() {
    // Logic to handle logout (redirect or local logout)
    window.location.href = "/login";
    console.log("User logged out successfully!");
  }

  return (
    <div>
      {userDetails ? (
        <>
          <header style={styles.header}>
            <div className="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg__AzXw2m6KyNZ85Qu8F0PR5NXBcviPks7-bLZ9ZBu1Gj89A" alt="Logo" style={{ width: "50px" }} />
            </div>
            <nav>
              <ul style={styles.navList}>
                <li style={styles.navItem}><a href="./profile">Home</a></li>
                <li style={styles.navItem}><a href="./Programs">Frameworks</a></li>
                <li style={styles.navItem}><a href="./Policys">Security Policy</a></li>
                <li style={styles.navItem}><a href="./Quiz">Quiz</a></li>  
              </ul>
            </nav>
            <button className="btn btn-primary" onClick={handleLogout} style={styles.logoutBtn}>
              Logout
            </button>
          </header>

          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function BlogHomepage() {
  return (
    <div>
      {/* Including the Profile Component */}
      <Profile />

      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1>Introduction to GDPR</h1>
          <br></br>
          <br></br>
          <p>
      The <strong>General Data Protection Regulation (GDPR)</strong> is a legal
      framework designed to protect the personal data and privacy of individuals
      in the European Union (EU). It was implemented in May 2018 and applies to
      any organization that processes personal data of individuals located in
      the EU, regardless of where the organization is based.
    </p>

        </div>
        <div style={styles.heroImage}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/472/896/original/gdpr-general-data-protection-regulation-background-free-vector.jpg"
            alt="Framework Illustration"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <br></br>
      <br></br>

      <p><strong>Key Objectives of GDPR</strong>:</p>
    <ul>
      <li>
        <strong>Protect individual privacy</strong>: GDPR ensures that
        individuals have control over how their personal data is collected,
        stored, and used.
      </li>
      <li>
        <strong>Increase transparency</strong>: Organizations must be
        transparent about how they handle personal data and provide clear
        information to individuals on how their data is processed.
      </li>
      <li>
        <strong>Enhance data security</strong>: GDPR establishes guidelines for
        securely handling and storing personal data to protect it from breaches
        or unauthorized access.
      </li>
      <li>
        <strong>Grant individual rights</strong>: GDPR gives individuals
        specific rights regarding their data, such as the right to access,
        correct, and delete their information.
      </li>
    </ul>

    <hr />

    <h3><strong>The Importance of GDPR for Organizations</strong></h3>

    <p>
      GDPR is important because it strengthens privacy protection for
      individuals and imposes strict requirements on how organizations manage
      personal data. Here’s why it matters for organizations:
    </p>

    <ul>
      <li>
        <strong>Building trust</strong>: GDPR compliance helps organizations
        build trust with customers, as it shows that the organization takes data
        protection seriously and respects privacy.
      </li>
      <li>
        <strong>Avoiding penalties</strong>: Non-compliance with GDPR can lead
        to heavy fines, which can be costly for any business.
      </li>
      <li>
        <strong>Global impact</strong>: Even if an organization is not based in
        the EU, it must comply with GDPR if it processes the data of individuals
        in the EU, making GDPR relevant for companies around the world.
      </li>
    </ul>

    <hr />

    <h3><strong>Who Must Comply with GDPR?</strong></h3>

    <p><strong>GDPR applies to</strong>:</p>
    <ul>
      <li>
        <strong>Organizations based in the EU</strong>: Any company or entity
        operating within the EU that processes personal data must comply with
        GDPR.
      </li>
      <li>
        <strong>Organizations outside the EU</strong>: Non-EU businesses that
        offer goods or services to individuals in the EU or monitor the behavior
        of individuals within the EU must also comply with GDPR.
      </li>
    </ul>

    <p>
      <strong>Example</strong>: If a US-based company sells products to
      customers in France and collects their personal information, that company
      must comply with GDPR.
    </p>

    <hr />

    <h3><strong>Penalties and Consequences of Non-Compliance</strong></h3>

    <p>Non-compliance with GDPR can result in severe penalties, including:</p>
    <ul>
      <li>
        <strong>Fines</strong>: GDPR allows for fines of up to
        <strong>€20 million</strong> or
        <strong>4% of global annual revenue</strong>, whichever is higher, for
        serious violations.
      </li>
      <li>
        <strong>Reputational damage</strong>: Organizations that fail to protect
        personal data can lose customer trust and face significant reputational
        damage, which can affect their business in the long term.
      </li>
      <li>
        <strong>Legal consequences</strong>: In addition to financial penalties,
        organizations may face legal challenges from individuals whose data has
        been mishandled.
      </li>
    </ul>

    <p>
      <strong>Example</strong>: If a company suffers a data breach and fails to
      notify individuals and the relevant authorities within 72 hours (as
      required by GDPR), it may face substantial fines and damage to its
      reputation.
    </p>

    <h2>2. <strong>Key GDPR Terminology</strong></h2>

    <p>
      Understanding key GDPR terminology is essential to grasping how the
      regulation applies to personal data and organizations that handle it.
      Below are explanations of important terms related to GDPR, explained in
      simple language.
    </p>

    <hr />

    <h3><strong>Personal Data</strong></h3>

    <p>
      <strong>Personal data</strong> refers to any information that can be used
      to identify an individual, either directly or indirectly. This includes
      obvious details like names and contact information, as well as less
      obvious data like IP addresses or even physical characteristics.
    </p>

    <p><strong>Examples of personal data</strong>:</p>
    <ul>
      <li>Names, email addresses, phone numbers</li>
      <li>Identification numbers (like social security numbers)</li>
      <li>Location data (such as GPS coordinates)</li>
      <li>Online identifiers (like IP addresses or cookies)</li>
      <li>
        Physical, genetic, or biometric data (such as fingerprints or facial
        recognition data)
      </li>
    </ul>

    <p>
      <strong>Why it matters</strong>: Under GDPR, organizations must protect
      personal data and handle it responsibly. Misusing or mishandling personal
      data can lead to legal and financial penalties.
    </p>

    <hr />

    <h3><strong>Data Controller vs. Data Processor</strong></h3>

    <p>
      GDPR distinguishes between two types of organizations involved in handling
      personal data: <strong>Data Controllers</strong> and
      <strong>Data Processors</strong>.
    </p>

    <ol>
      <li>
        <strong>Data Controller</strong>: The data controller is the
        organization or individual that
        <strong
          >determines the purpose and means of processing personal data</strong
        >. In simple terms, they decide why and how the data will be used.
        <ul>
          <li>
            <strong>Example</strong>: An online retailer collects customer data
            to process orders. The retailer is the
            <strong>data controller</strong> because it decides what data to
            collect and why (to complete a transaction).
          </li>
        </ul>
      </li>
      <li>
        <strong>Data Processor</strong>: The data processor is the organization
        or individual that
        <strong>processes personal data on behalf of the data controller</strong
        >. They don’t decide how the data is used, but they handle it as
        instructed by the controller.
        <ul>
          <li>
            <strong>Example</strong>: If the online retailer (data controller)
            hires a payment processing company to handle customer payments, the
            payment company is the <strong>data processor</strong>. They process
            the data but follow the instructions given by the retailer.
          </li>
        </ul>
      </li>
    </ol>

    <p>
      <strong>Why it matters</strong>: GDPR imposes different obligations on
      data controllers and processors. Controllers are responsible for ensuring
      compliance, while processors must follow the controller's instructions and
      implement appropriate security measures.
    </p>

    <hr />

    <h3><strong>Data Subject Rights</strong></h3>

    <p>
      Under GDPR, individuals (referred to as <strong>data subjects</strong>)
      are given specific rights regarding their personal data. These rights are
      designed to give individuals more control over how their data is used.
      Organizations must respect and fulfill these rights.
    </p>

    <p>Key data subject rights include:</p>

    <ol>
      <li>
        <strong>Right to Access</strong>: Individuals have the right to request
        access to their personal data held by an organization. They can ask for
        copies of their data and information on how it is being processed.
      </li>
      <li>
        <strong>Right to Rectification</strong>: If personal data is incorrect
        or incomplete, individuals can request that the organization correct or
        update it.
      </li>
      <li>
        <strong>Right to Erasure (Right to Be Forgotten)</strong>: Individuals
        can request that their personal data be deleted, especially if it is no
        longer necessary for the purpose it was collected or if they withdraw
        consent.
      </li>
      <li>
        <strong>Right to Restrict Processing</strong>: Individuals can request
        that an organization limit how their personal data is used, for example,
        while the accuracy of the data is being verified.
      </li>
      <li>
        <strong>Right to Data Portability</strong>: Individuals can request that
        their data be transferred to another organization in a structured,
        commonly used format.
      </li>
      <li>
        <strong>Right to Object</strong>: Individuals can object to the
        processing of their personal data for certain purposes, such as direct
        marketing.
      </li>
    </ol>

    <p>
      <strong>Why it matters</strong>: Organizations must be prepared to handle
      these requests efficiently and within specified timeframes (usually one
      month). Failing to do so can result in penalties under GDPR.
    </p>

    <hr />

    <h3><strong>Lawful Basis for Processing Data</strong></h3>

    <p>
      GDPR requires that organizations have a <strong>lawful basis</strong> for
      processing personal data. This means there must be a valid reason, under
      the law, to collect and use personal data. There are six lawful bases
      under GDPR, and at least one must apply for data processing to be legal.
    </p>

    <ol>
      <li>
        <strong>Consent</strong>: The individual has given clear, explicit
        permission for their personal data to be processed for a specific
        purpose.
        <ul>
          <li>
            <strong>Example</strong>: A customer signs up for a newsletter and
            agrees to receive emails from the company.
          </li>
        </ul>
      </li>
      <li>
        <strong>Contract</strong>: Processing is necessary to fulfill a contract
        with the individual, or to take steps before entering into a contract.
        <ul>
          <li>
            <strong>Example</strong>: A customer provides their address and
            payment information to complete a purchase.
          </li>
        </ul>
      </li>
      <li>
        <strong>Legal Obligation</strong>: Processing is necessary to comply
        with the law (excluding contractual obligations).
        <ul>
          <li>
            <strong>Example</strong>: A business is required by law to report
            employee tax information to government authorities.
          </li>
        </ul>
      </li>
      <li>
        <strong>Vital Interests</strong>: Processing is necessary to protect
        someone’s life or safety.
        <ul>
          <li>
            <strong>Example</strong>: In an emergency, a hospital may process a
            patient’s data to provide urgent medical care.
          </li>
        </ul>
      </li>
      <li>
        <strong>Public Task</strong>: Processing is necessary to perform a task
        in the public interest or for official functions.
        <ul>
          <li>
            <strong>Example</strong>: A government agency collects data for
            census purposes.
          </li>
        </ul>
      </li>
      <li>
        <strong>Legitimate Interests</strong>: Processing is necessary for the
        legitimate interests of the organization or a third party, as long as
        those interests are not overridden by the individual’s rights.
        <ul>
          <li>
            <strong>Example</strong>: A business processes customer data to
            improve its services, as long as this does not infringe on the
            customer’s privacy rights.
          </li>
        </ul>
      </li>
    </ol>

    <p>
      <strong>Why it matters</strong>: Organizations must ensure they have a
      lawful basis for processing personal data and must clearly communicate
      this to individuals. For example, when collecting data, businesses should
      inform individuals whether they are relying on consent, fulfilling a
      contract, or using another lawful basis.
    </p>

    <h2>3. <strong>GDPR Principles</strong></h2>

    <p>
      The <strong>General Data Protection Regulation (GDPR)</strong> is based on
      seven core principles that guide how personal data should be handled by
      organizations. These principles ensure that data is processed responsibly
      and with respect for individuals' privacy. Below is a clear explanation of
      each principle, designed to be easy to understand for all employees.
    </p>

    <hr />

    <h3><strong>1. Lawfulness, Fairness, and Transparency</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: This principle requires that personal
        data must be processed in a legal and ethical manner, and individuals
        must be informed about how their data will be used.
        <ul>
          <li>
            <strong>Lawfulness</strong>: Organizations must have a
            <strong>lawful basis</strong> for processing personal data, such as
            consent, a legal obligation, or fulfilling a contract (as discussed
            earlier).
          </li>
          <li>
            <strong>Fairness</strong>: Data must be handled in ways that
            individuals would reasonably expect and should not be used in a way
            that negatively affects them.
          </li>
          <li>
            <strong>Transparency</strong>: Organizations must be open and clear
            about how they collect, use, and share personal data. Individuals
            must be informed about the purpose of data collection and
            processing.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: When a company collects customer data for a
        marketing campaign, they must clearly explain why the data is being
        collected and how it will be used, ensuring the customer understands and
        agrees to it.
      </li>
    </ul>

    <hr />

    <h3><strong>2. Purpose Limitation</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: Personal data should only be collected
        for <strong>specific, legitimate purposes</strong>, and it should not be
        used for any other purpose beyond what was initially communicated to the
        individual.
        <ul>
          <li>
            Data collected for one reason cannot be repurposed for something
            else without the individual’s consent or a lawful basis.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If an organization collects personal
        information to process a customer’s order, they cannot later use that
        same data to send marketing emails without the customer’s permission.
      </li>
    </ul>

    <hr />

    <h3><strong>3. Data Minimization</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: Organizations should only collect the
        <strong>minimum amount of data</strong> necessary to achieve the purpose
        for which it was collected.
        <ul>
          <li>
            Data should be relevant and limited to what is necessary, meaning
            you shouldn’t collect or store more personal data than you need for
            the specific purpose.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If you’re collecting data to sign someone up
        for a newsletter, asking for their home address would be unnecessary.
        Only their email address is relevant in this case.
      </li>
    </ul>

    <hr />

    <h3><strong>4. Accuracy</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: Personal data must be
        <strong>accurate</strong> and kept up to date. Organizations should take
        steps to correct or delete inaccurate or outdated information.
        <ul>
          <li>
            Individuals should also be able to request corrections to their data
            if they notice any inaccuracies.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If a customer updates their contact
        information, the organization must update its records to reflect the
        change, ensuring the data remains accurate.
      </li>
    </ul>

    <hr />

    <h3><strong>5. Storage Limitation</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: Personal data should only be kept for as
        long as it is necessary for the purpose for which it was collected. Once
        the data is no longer needed, it should be deleted or anonymized.
        <ul>
          <li>
            Organizations should establish retention periods for different types
            of data and ensure data is deleted once it’s no longer needed.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company may keep customer records for a
        certain number of years for legal reasons, but after that period, they
        must securely delete or anonymize the data.
      </li>
    </ul>

    <hr />

    <h3><strong>6. Integrity and Confidentiality</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: Organizations must ensure that personal
        data is processed securely, protecting it from unauthorized access,
        accidental loss, or damage. This principle requires robust security
        measures, both technical and organizational, to protect data.
        <ul>
          <li>
            <strong>Integrity</strong>: Data must be protected from unauthorized
            alteration or deletion.
          </li>
          <li>
            <strong>Confidentiality</strong>: Data must be kept secure and only
            accessible to authorized individuals.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company should use encryption to protect
        sensitive data and ensure that only authorized employees have access to
        personal data. If a laptop containing customer data is lost or stolen,
        strong encryption ensures that the data cannot be accessed by
        unauthorized people.
      </li>
    </ul>

    <hr />

    <h3><strong>7. Accountability</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: Organizations are responsible for
        ensuring compliance with GDPR and must be able to demonstrate this
        compliance. They must take proactive steps to follow GDPR principles and
        be ready to show how they comply, such as maintaining records of data
        processing activities.
        <ul>
          <li>
            <strong>Accountability</strong> also means implementing data
            protection policies, providing staff training, and conducting
            regular audits to ensure GDPR compliance.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company should document how they handle
        personal data, implement privacy policies, and provide employee training
        on GDPR principles. If a regulatory authority requests evidence of
        compliance, the company should be able to show how they are meeting GDPR
        requirements.
      </li>
    </ul>

    <hr />

    <h2>5. <strong>Lawful Basis for Data Processing</strong></h2>

    <p>
      Under the <strong>General Data Protection Regulation (GDPR)</strong>,
      organizations must have a lawful basis to process personal data. This
      means that they must have a valid reason for collecting, using, or storing
      an individual’s personal information. GDPR outlines six
      <strong>lawful bases for data processing</strong>, and organizations must
      identify and document which basis applies before processing any personal
      data. Here’s a clear explanation of each one.
    </p>

    <hr />

    <h3><strong>1. Consent</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: <strong>Consent</strong> means that the
        individual has given clear, explicit permission for their personal data
        to be processed for a specific purpose. Consent must be freely given,
        specific, informed, and unambiguous.
      </li>
      <li>
        <strong>How it works</strong>: Individuals must know exactly what they
        are consenting to, and the request for consent should be clear and
        separate from other terms or conditions. They also have the right to
        withdraw consent at any time.
      </li>
      <li>
        <strong>Example</strong>: A company asks a customer if they agree to
        receive marketing emails. The customer checks a box to provide explicit
        consent. If they later choose to opt out, they can easily withdraw their
        consent.
      </li>
    </ul>

    <hr />

    <h3><strong>2. Contractual Necessity</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>:
        <strong>Contractual necessity</strong> refers to processing that is
        required to fulfill a contract with the individual or to take steps
        before entering into a contract. If processing the data is essential to
        providing a service or fulfilling a contract, this lawful basis applies.
      </li>
      <li>
        <strong>How it works</strong>: Organizations can process personal data
        if it’s necessary to complete a transaction or provide a service that
        the individual has requested.
      </li>
      <li>
        <strong>Example</strong>: A customer purchases a product online, and the
        company needs their shipping address to deliver the product. The
        processing of their personal data (such as name, address, and payment
        details) is necessary to fulfill the contract of sale.
      </li>
    </ul>

    <hr />

    <h3><strong>3. Legal Obligation</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: <strong>Legal obligation</strong> means
        that data processing is necessary for the organization to comply with a
        legal requirement. This could include obligations related to employment,
        taxes, health and safety, or other legal responsibilities.
      </li>
      <li>
        <strong>How it works</strong>: If an organization is required by law to
        process personal data, it does not need to obtain consent from
        individuals.
      </li>
      <li>
        <strong>Example</strong>: A business is required by law to report
        employee tax information to the government. Processing this data is
        necessary to comply with legal obligations.
      </li>
    </ul>

    <hr />

    <h3><strong>4. Vital Interests</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: <strong>Vital interests</strong> apply
        when processing personal data is necessary to protect someone’s life or
        safety. This basis is only used in situations where the processing is
        essential to protect the well-being of an individual.
      </li>
      <li>
        <strong>How it works</strong>: This lawful basis is used in emergency
        situations where the data must be processed to save a life or prevent
        harm, and it may apply to both the data subject and other individuals.
      </li>
      <li>
        <strong>Example</strong>: A hospital shares a patient’s medical data
        with another medical facility in an emergency to provide life-saving
        treatment.
      </li>
    </ul>

    <hr />

    <h3><strong>5. Public Task</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: <strong>Public task</strong> refers to
        processing that is necessary for an organization to perform a task that
        is carried out in the public interest or as part of an official duty.
        This lawful basis often applies to government agencies, public
        authorities, and other organizations that carry out public functions.
      </li>
      <li>
        <strong>How it works</strong>: The organization must show that
        processing personal data is required to fulfill a legal or public
        function, such as education, healthcare, or law enforcement.
      </li>
      <li>
        <strong>Example</strong>: A local government authority processes
        personal data to issue driver’s licenses. This processing is necessary
        to perform its public task of maintaining public records.
      </li>
    </ul>

    <hr />

    <h3><strong>6. Legitimate Interests</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>:
        <strong>Legitimate interests</strong> apply when processing personal
        data is necessary for the organization’s legitimate business purposes,
        as long as those interests are not overridden by the individual’s rights
        and freedoms. This is a flexible lawful basis, but it requires a careful
        balance between the organization’s interests and the individual’s
        privacy.
      </li>
      <li>
        <strong>How it works</strong>: Organizations must perform a legitimate
        interest assessment to ensure that their need to process the data does
        not infringe on the privacy rights of individuals.
      </li>
      <li>
        <strong>Example</strong>: A business processes customer data to analyze
        trends and improve its products and services. This can be considered a
        legitimate interest, as long as it does not interfere with the
        customer’s privacy rights.
      </li>
    </ul>

    <hr />

    <h2>6. <strong>GDPR Security Requirements</strong></h2>

    <p>
      Under the <strong>General Data Protection Regulation (GDPR)</strong>,
      organizations that process personal data are required to implement
      security measures to protect that data. These security requirements ensure
      that personal data is handled safely and responsibly, reducing the risk of
      breaches and unauthorized access. Below are clear explanations of key GDPR
      security requirements.
    </p>

    <hr />

    <h3>
      <strong
        >Protecting Personal Data with Technical and Organizational
        Measures</strong
      >
    </h3>

    <ul>
      <li>
        <strong>What it means</strong>: Organizations must use both technical
        tools and organizational practices to protect personal data from being
        lost, accessed by unauthorized individuals, or altered without
        permission. These security measures should be appropriate for the
        sensitivity of the data being processed.
      </li>
      <li>
        <strong>Technical measures</strong>: Include technologies like
        firewalls, antivirus software, data encryption, access controls
        (passwords, multi-factor authentication), and secure backup systems.
      </li>
      <li>
        <strong>Organizational measures</strong>: Involve policies and
        procedures such as employee training on data protection, limiting access
        to data, regular audits of data processing activities, and maintaining
        secure work environments.
      </li>
      <li>
        <strong>Example</strong>: A company may restrict access to personal data
        so that only employees who need it for their work can access it, while
        also ensuring data is encrypted when stored or transferred.
      </li>
    </ul>

    <hr />

    <h3><strong>Data Encryption and Anonymization</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>:
        <ul>
          <li>
            <strong>Encryption</strong>: This is the process of converting
            personal data into a coded format that can only be read by someone
            with the correct decryption key. Encryption helps protect data from
            being accessed if it’s intercepted or stolen.
          </li>
          <li>
            <strong>Anonymization</strong>: This is the process of removing
            personally identifiable information from data so that it can no
            longer be linked to an individual. Anonymized data is not considered
            personal data under GDPR and is safer to use in situations like
            research or data analysis.
          </li>
        </ul>
      </li>
      <li>
        <strong>Why it matters</strong>: Encryption and anonymization add extra
        layers of protection to personal data, ensuring that even if data is
        compromised, it cannot be easily read or linked to a specific
        individual.
      </li>
      <li>
        <strong>Example</strong>: If a company encrypts customer payment
        details, even if a hacker gains access to the data, they will not be
        able to read or use it without the decryption key.
      </li>
    </ul>

    <hr />

    <h3>
      <strong
        >Ensuring Data Confidentiality, Integrity, and Availability</strong
      >
    </h3>

    <ul>
      <li>
        <strong>What it means</strong>:
        <ul>
          <li>
            <strong>Confidentiality</strong>: Ensuring that personal data is
            only accessible to authorized people who have a legitimate need to
            access it.
          </li>
          <li>
            <strong>Integrity</strong>: Ensuring that personal data is accurate
            and has not been altered or tampered with without authorization.
          </li>
          <li>
            <strong>Availability</strong>: Ensuring that personal data is
            accessible when needed, meaning that data is backed up and protected
            from loss or destruction.
          </li>
        </ul>
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Confidentiality is ensured through access controls and encryption.
          </li>
          <li>
            Integrity is maintained through secure data handling practices and
            regular checks or audits.
          </li>
          <li>
            Availability is supported by backing up data and having disaster
            recovery plans in place to restore data if lost.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company ensures data confidentiality by
        using passwords and multi-factor authentication to protect access to
        personal information. They maintain integrity by regularly auditing data
        to ensure it is correct, and ensure availability by regularly backing up
        data.
      </li>
    </ul>

    <hr />

    <h3><strong>Managing Security Breaches and Incidents</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: A <strong>data breach</strong> occurs
        when personal data is accidentally or unlawfully accessed, lost,
        destroyed, or altered. Under GDPR, organizations must take immediate
        action to manage data breaches and mitigate damage.
      </li>
      <li>
        <strong>What organizations must do</strong>:
        <ul>
          <li>
            <strong>Detect and respond quickly</strong>: Organizations should
            have systems in place to detect security incidents and respond
            swiftly.
          </li>
          <li>
            <strong>Notify authorities</strong>: If a data breach poses a risk
            to individuals, organizations must notify the relevant Data
            Protection Authority (DPA) within 72 hours of becoming aware of the
            breach.
          </li>
          <li>
            <strong>Notify affected individuals</strong>: If the breach could
            significantly harm individuals (for example, by exposing sensitive
            data), the organization must inform the affected individuals without
            delay.
          </li>
          <li>
            <strong>Take corrective action</strong>: The organization must take
            steps to contain the breach, secure the data, and prevent future
            incidents.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If a company’s customer database is hacked and
        sensitive data is exposed, the company must immediately secure the
        system, report the breach to the authorities, and notify affected
        customers about the steps being taken to protect them.
      </li>
    </ul>

    <hr />

    <h2>7. <strong>Data Breach Notification</strong></h2>

    <p>
      Under the <strong>General Data Protection Regulation (GDPR)</strong>,
      organizations are required to respond swiftly and responsibly when a data
      breach occurs. A data breach can have serious consequences, so
      understanding what qualifies as a breach and the required steps for
      reporting it is crucial for compliance. Below are explanations of the key
      concepts related to data breach notification.
    </p>

    <hr />

    <h3><strong>What Constitutes a Data Breach Under GDPR</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: A <strong>data breach</strong> is any
        incident where personal data is accidentally or unlawfully lost,
        destroyed, altered, accessed, or disclosed without proper authorization.
        It includes situations where data is exposed to unauthorized individuals
        or when data becomes unavailable due to an accident or security issue.
      </li>
      <li>
        <strong>Types of breaches</strong>:
        <ul>
          <li>
            <strong>Confidentiality breach</strong>: When unauthorized people
            gain access to personal data (e.g., a hacker accessing customer
            data).
          </li>
          <li>
            <strong>Integrity breach</strong>: When personal data is altered or
            tampered with without authorization (e.g., malicious changes to
            data).
          </li>
          <li>
            <strong>Availability breach</strong>: When personal data is lost or
            made unavailable (e.g., accidental deletion of data without a
            backup).
          </li>
        </ul>
      </li>
      <li>
        <strong>Examples</strong>:
        <ul>
          <li>A laptop containing personal data is stolen.</li>
          <li>
            A company’s system is hacked, and personal data is accessed by
            cybercriminals.
          </li>
          <li>
            Personal data is accidentally sent to the wrong recipient via email.
          </li>
        </ul>
      </li>
    </ul>

    <hr />

    <h3><strong>Steps to Take When a Breach Occurs</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: When a data breach happens, immediate
        action is necessary to minimize damage, contain the breach, and protect
        individuals whose data may have been compromised. Following a clear
        process helps ensure the breach is managed properly.
      </li>
      <li>
        <strong>Steps to follow</strong>:
        <ol>
          <li>
            <strong>Detect and assess the breach</strong>: Identify the breach,
            understand what data is affected, and determine the potential impact
            on individuals.
          </li>
          <li>
            <strong>Contain the breach</strong>: Take immediate action to stop
            further data loss or damage. This might involve disconnecting
            systems, locking down accounts, or restoring backups.
          </li>
          <li>
            <strong>Report the breach internally</strong>: Notify the relevant
            people within the organization, such as the IT team and Data
            Protection Officer (DPO), who will coordinate the response.
          </li>
          <li>
            <strong>Evaluate the risk</strong>: Assess the level of risk to
            individuals' rights and freedoms. If there is a high risk, further
            notifications are required.
          </li>
        </ol>
      </li>
      <li>
        <strong>Example</strong>: If a company’s customer database is hacked,
        the IT team should immediately secure the system, assess what data was
        exposed, and report the incident to management and the Data Protection
        Officer.
      </li>
    </ul>

    <hr />

    <h3>
      <strong>Breach Notification Requirements for Data Controllers</strong>
    </h3>

    <ul>
      <li>
        <strong>What it means</strong>: <strong>Data controllers</strong> are
        the organizations that determine how and why personal data is processed.
        If a data breach occurs, the controller is responsible for determining
        whether it must be reported and ensuring the correct notifications are
        made.
      </li>
      <li>
        <strong>When to notify</strong>: A breach must be reported to the Data
        Protection Authority (DPA) if it is likely to result in a risk to
        individuals' rights and freedoms. This could include risks like identity
        theft, financial loss, or damage to reputation. If the breach is
        unlikely to pose a risk, reporting is not mandatory but still
        recommended.
      </li>
      <li>
        <strong>Timeline for notification</strong>: Data controllers must notify
        the relevant DPA <strong>within 72 hours</strong> of becoming aware of
        the breach. If it takes longer, the organization must provide reasons
        for the delay.
      </li>
      <li>
        <strong>What to include in the notification</strong>:
        <ul>
          <li>A description of the breach and the types of data involved.</li>
          <li>The likely impact on individuals.</li>
          <li>
            Steps taken to address the breach and prevent future incidents.
          </li>
          <li>
            Contact details for the Data Protection Officer or person
            responsible for data protection.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A healthcare provider discovers that patient
        records were accessed by an unauthorized employee. They must report this
        breach to the DPA within 72 hours, detailing how many patients were
        affected, what kind of data was exposed, and how they are addressing the
        issue.
      </li>
    </ul>

    <hr />

    <h3>
      <strong
        >Reporting to Data Protection Authorities and Affected
        Individuals</strong
      >
    </h3>

    <ul>
      <li>
        <strong>Reporting to Data Protection Authorities (DPA)</strong>:
        <ul>
          <li>
            If a breach is likely to result in a risk to individuals, it must be
            reported to the DPA within 72 hours. The DPA is responsible for
            overseeing data protection and may provide further guidance on
            handling the breach.
          </li>
        </ul>
      </li>
      <li>
        <strong>Notifying affected individuals</strong>:
        <ul>
          <li>
            If the breach is likely to result in a <strong>high risk</strong> to
            the rights and freedoms of individuals (such as identity theft or
            fraud), the organization must also notify the affected individuals
            without undue delay. This helps individuals take steps to protect
            themselves, such as changing passwords or monitoring for suspicious
            activity.
          </li>
        </ul>
      </li>
      <li>
        <strong>Information to include in notifications</strong>:
        <ul>
          <li>The nature of the breach and what data was involved.</li>
          <li>Possible consequences for the individual.</li>
          <li>Steps the organization has taken to mitigate the breach.</li>
          <li>
            Advice on what the individual can do to protect themselves (e.g.,
            changing passwords, monitoring bank accounts).
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If an online retailer’s customer database is
        hacked, exposing credit card details, the retailer must inform both the
        DPA and the affected customers, explaining what happened, how it affects
        them, and what they can do to protect themselves.
      </li>
    </ul>

    <hr />

    <h2>9. <strong>GDPR and Third-Party Relationships</strong></h2>

    <p>
      Organizations often work with third parties that process personal data on
      their behalf. Under the
      <strong>General Data Protection Regulation (GDPR)</strong>, it is crucial
      that these relationships are managed carefully to ensure that personal
      data is protected at all times. The following topics explain how GDPR
      applies to third-party relationships and how organizations can comply with
      these requirements.
    </p>

    <hr />

    <h3><strong>Data Sharing with Third Parties</strong></h3>

    <ul>
      <li>
        <strong>What it means</strong>: When an organization shares personal
        data with a third party, such as a vendor or service provider, it must
        ensure that the third party will process the data in compliance with
        GDPR. This applies whether the third party is handling data as a
        <strong>data processor</strong> (processing data on behalf of the
        organization) or a <strong>data controller</strong> (deciding how the
        data will be used).
      </li>
      <li>
        <strong>How it works</strong>: Organizations must:
        <ul>
          <li>
            Clearly inform individuals when their personal data is being shared
            with third parties.
          </li>
          <li>Ensure that personal data is shared securely.</li>
          <li>
            Limit the data shared to what is necessary for the third party to
            fulfill their role.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If a company shares employee payroll data with
        an external payroll processing firm, it must ensure that the payroll
        firm handles the data securely and only for the purpose of managing
        payroll.
      </li>
    </ul>
    <h4><strong>Data Processing Agreements (DPAs)</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: A
        <strong>Data Processing Agreement (DPA)</strong> is a legal contract
        between the data controller (the organization that owns the data) and
        the data processor (the third party handling the data). The DPA outlines
        how the processor will handle personal data, ensuring compliance with
        GDPR.
      </li>
      <li>
        <strong>Key elements of a DPA</strong>:
        <ol>
          <li>
            <strong>Scope and purpose</strong>: The DPA must specify what data
            will be processed, why, and for how long.
          </li>
          <li>
            <strong>Security measures</strong>: The third party must implement
            appropriate security measures to protect personal data.
          </li>
          <li>
            <strong>Obligations of the processor</strong>: The processor must
            follow the controller’s instructions and cannot use the data for any
            other purpose.
          </li>
          <li>
            <strong>Sub-processors</strong>: If the third party intends to
            engage other processors (sub-processors), they must seek permission
            from the data controller.
          </li>
          <li>
            <strong>Data breaches</strong>: The DPA should include provisions
            for reporting data breaches to the data controller promptly.
          </li>
        </ol>
      </li>
      <li>
        <strong>Example</strong>: A company using a cloud service provider to
        store customer data should have a DPA in place outlining how the cloud
        provider will secure and process the data.
      </li>
    </ul>

    <hr />

    <h4><strong>Ensuring Third-Party Compliance with GDPR</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: Organizations must ensure that any third
        parties they work with also comply with GDPR. This means that third
        parties must handle personal data in a secure and lawful manner, just as
        the organization itself is required to do.
      </li>
      <li>
        <strong>How it works</strong>: To ensure compliance:
        <ul>
          <li>
            Conduct due diligence before engaging third parties, ensuring they
            follow GDPR requirements.
          </li>
          <li>
            Regularly audit third-party providers to check for compliance,
            including reviewing security measures and data handling practices.
          </li>
          <li>
            Include clear terms in contracts (such as DPAs) that require the
            third party to comply with GDPR.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: Before hiring an external marketing agency to
        manage a customer email list, a company should ensure that the agency
        has proper security protocols in place and complies with GDPR when
        handling customer data.
      </li>
    </ul>

    <hr />

    <h4>
      <strong>International Data Transfers and Adequacy Decisions</strong>
    </h4>

    <ul>
      <li>
        <strong>What it means</strong>: When personal data is transferred to
        countries outside the European Economic Area (EEA), GDPR requires that
        the destination country provides an adequate level of data protection.
        <strong>Adequacy decisions</strong> are issued by the European
        Commission and confirm whether a non-EEA country’s data protection laws
        are sufficient.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            If the data is transferred to a country with an
            <strong>adequacy decision</strong>, no further safeguards are
            needed.
          </li>
          <li>
            If the country does not have an adequacy decision, organizations
            must use additional safeguards, such as
            <strong>Standard Contractual Clauses (SCCs)</strong>,
            <strong>Binding Corporate Rules (BCRs)</strong>, or obtain explicit
            <strong>consent</strong> from the individuals involved.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If a European company transfers personal data
        to a service provider in the US, it must ensure that the service
        provider either operates under approved mechanisms (like SCCs) or has
        taken adequate steps to protect the data in line with GDPR.
      </li>
    </ul>

    <hr />

    <h3>11. <strong>GDPR and Data Governance</strong></h3>

    <p>
      <strong>Data Governance</strong> refers to the way organizations manage
      the availability, integrity, and security of the data they collect and
      process. Under GDPR, strong data governance policies ensure that personal
      data is handled in compliance with the law and protect individuals'
      privacy rights.
    </p>

    <hr />

    <h4>
      <strong>Establishing Data Governance Policies and Procedures</strong>
    </h4>

    <ul>
      <li>
        <strong>What it means</strong>: Organizations must establish clear
        policies and procedures to ensure that personal data is processed
        responsibly and in accordance with GDPR. These policies guide how data
        is collected, stored, accessed, and shared.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Define who in the organization is responsible for overseeing data
            protection (e.g., Data Protection Officer).
          </li>
          <li>
            Implement clear policies for data collection, consent, processing,
            and storage.
          </li>
          <li>
            Provide training to employees on GDPR compliance and data governance
            best practices.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company might implement a data access policy
        that restricts personal data to only authorized employees and requires
        regular audits of data access logs.
      </li>
    </ul>

    <hr />

    <h4><strong>Managing Data Retention and Deletion Policies</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: Under GDPR, organizations must limit how
        long they store personal data and must have clear
        <strong>data retention</strong> and
        <strong>deletion policies</strong> to ensure that data is not kept
        longer than necessary.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Set retention periods based on the purpose for which the data is
            collected (e.g., legal requirements, business needs).
          </li>
          <li>
            Regularly review data to ensure outdated or unnecessary information
            is securely deleted or anonymized.
          </li>
          <li>
            Make sure deletion processes are secure, especially when handling
            sensitive personal data.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company may have a policy to delete customer
        data after seven years, unless it is still required for legal reasons,
        ensuring compliance with GDPR’s storage limitation principle.
      </li>
    </ul>

    <hr />

    <h4><strong>Auditing and Monitoring Data Processing Activities</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: Regular <strong>audits</strong> and
        <strong>monitoring</strong> of data processing activities are essential
        to ensure GDPR compliance. These audits help organizations identify any
        weaknesses or non-compliance in their data handling processes.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Conduct regular reviews of how personal data is processed, stored,
            and shared.
          </li>
          <li>
            Identify and fix any vulnerabilities or gaps in data protection.
          </li>
          <li>
            Keep records of data processing activities and demonstrate GDPR
            compliance during audits.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: An organization might perform annual internal
        audits of their data systems to ensure all processing activities comply
        with GDPR rules, and to track who has access to personal data.
      </li>
    </ul>

    <hr />

    <h4><strong>Managing Data Subject Access Requests (DSARs)</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: Under GDPR, individuals (data subjects)
        have the right to access their personal data.
        <strong>Data Subject Access Requests (DSARs)</strong> allow individuals
        to request a copy of their data and understand how it is being
        processed.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Set up a process to handle DSARs within the required timeframe
            (usually one month).
          </li>
          <li>
            Verify the identity of the individual making the request to ensure
            data is provided to the right person.
          </li>
          <li>
            Ensure that the data provided is clear and easy to understand and
            that it includes information on how the data is used.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A customer requests access to the personal
        data a company holds on them. The company must provide the data, explain
        how it is processed, and ensure it meets GDPR requirements for accuracy
        and transparency.
      </li>
    </ul>

    <hr />

    <h3>12. <strong>GDPR and Cybersecurity</strong></h3>

    <p>
      <strong>Cybersecurity</strong> is a critical component of GDPR compliance.
      Organizations must take steps to protect personal data from unauthorized
      access, breaches, and cyberattacks. Failure to implement adequate
      cybersecurity measures can lead to data breaches and heavy fines under
      GDPR.
    </p>

    <hr />

    <h4><strong>The Importance of Cybersecurity in GDPR Compliance</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: GDPR requires organizations to implement
        appropriate technical and organizational measures to protect personal
        data. Cybersecurity is essential for safeguarding this data against
        unauthorized access, loss, or damage.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Use encryption, firewalls, and secure access controls to protect
            personal data.
          </li>
          <li>
            Regularly update software and systems to guard against
            vulnerabilities and cyberattacks.
          </li>
          <li>
            Train employees on cybersecurity practices to ensure they understand
            how to protect data.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company encrypts customer data stored in its
        database and uses multi-factor authentication to ensure that only
        authorized personnel can access the data.
      </li>
    </ul>

    <hr />

    <h4><strong>Addressing Cyber Threats to Personal Data</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: Cyber threats, such as malware,
        ransomware, and phishing attacks, pose a significant risk to personal
        data security. Organizations must have strategies in place to detect,
        prevent, and respond to these threats.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Implement antivirus software, intrusion detection systems, and
            secure network configurations to protect against cyberattacks.
          </li>
          <li>
            Educate employees about common cyber threats, such as phishing
            emails, and how to avoid them.
          </li>
          <li>
            Monitor for unusual activity in systems that handle personal data.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: A company implements a robust phishing
        awareness program to educate employees about suspicious emails and
        ensure that they report potential phishing attempts.
      </li>
    </ul>

    <hr />

    <h4><strong>Incident Response and GDPR Compliance</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: GDPR requires organizations to have a
        clear <strong>incident response</strong> plan to address data breaches.
        Organizations must act quickly to contain the breach, notify relevant
        authorities, and inform affected individuals.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Develop an incident response plan that outlines steps to take when a
            breach occurs, including identifying and containing the breach, and
            mitigating its effects.
          </li>
          <li>
            Notify the relevant Data Protection Authority within 72 hours of
            becoming aware of a breach that poses a risk to individuals.
          </li>
          <li>
            Communicate with affected individuals when the breach is likely to
            result in a high risk to their rights and freedoms.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: If a company experiences a data breach where
        customer data is exposed, it must inform both the Data Protection
        Authority and the affected individuals within the legal time frame,
        outlining the breach and the steps being taken to address it.
      </li>
    </ul>

    <hr />

    <h4><strong>Security Best Practices to Safeguard Personal Data</strong></h4>

    <ul>
      <li>
        <strong>What it means</strong>: To comply with GDPR, organizations must
        implement security best practices to minimize the risk of data breaches
        and protect personal data.
      </li>
      <li>
        <strong>How it works</strong>:
        <ul>
          <li>
            Use <strong>encryption</strong> to protect sensitive data, both when
            it is stored and when it is transmitted.
          </li>
          <li>
            Implement <strong>access controls</strong> to ensure that only
            authorized employees can access personal data.
          </li>
          <li>
            Regularly update software and systems to protect against
            vulnerabilities and ensure that data processing tools are secure.
          </li>
          <li>
            Perform <strong>regular security assessments</strong> and audits to
            identify potential risks.
          </li>
        </ul>
      </li>
      <li>
        <strong>Example</strong>: An organization uses strong encryption to
        protect customer data during online transactions and requires employees
        to use multi-factor authentication when accessing sensitive systems.
      </li>
    </ul>

   

      <footer style={styles.footer}>
        <p>&copy; 2024 Information Security Frameworks. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    backgroundColor: "#f5f5f5",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  navItem: {
    marginRight: "20px",
    fontWeight: "bold",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
  },
  navItemHover: {
    textDecoration: "underline",
  },
  logoutBtn: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px",
    backgroundColor: "#e0f7fa",
  },
  heroContent: {
    maxWidth: "50%",
  },
  learnMoreBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    textDecoration: "none",
    borderRadius: "5px",
  },
  frameworks: {
    textAlign: "center",
    padding: "50px",
  },
  frameworkLogos: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
  },
  frameworkLogoImg: {
    width: "100px",
  },
  securityInfo: {
    display: "flex",
    justifyContent: "space-between",
    padding: "50px",
    backgroundColor: "#f9f9f9",
  },
  infoItem: {
    maxWidth: "30%",
    textAlign: "center",
  },
  clients: {
    textAlign: "center",
    padding: "50px",
  },
  clientLogos: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  clientLogoImg: {
    width: "100px",
  },
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "20px",
  },

  // Additional styles from your earlier CSS
  body: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f9",
    color: "#333",
    lineHeight: "1.6",
    margin: 0,
    padding: "20px",
  },
  h1: {
    fontSize: "2.5em",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  h2: {
    fontSize: "1.8em",
    marginBottom: "10px",
    borderBottom: "2px solid #3498db",
    paddingBottom: "5px",
  },
  h3: {
    fontSize: "1.4em",
    marginBottom: "8px",
    color: "#3498db",
  },
  ul: {
    listStyleType: "none",
    paddingLeft: 0,
  },
  ulLi: {
    backgroundColor: "#e7f1fd",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  ulLiStrong: {
    color: "#2980b9",
  },
  p: {
    marginBottom: "20px",
  },
  pStrong: {
    color: "#e74c3c",
  },
  pStrongExample: {
    backgroundColor: "#f9ecec",
    padding: "5px",
    display: "inline-block",
    borderLeft: "4px solid #e74c3c",
    marginTop: "10px",
  },
  hr: {
    border: 0,
    height: "2px",
    backgroundColor: "#3498db",
    margin: "40px 0",
  },
  btn: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "white",
    textAlign: "center",
    borderRadius: "5px",
    textDecoration: "none",
    marginTop: "20px",
  },
  btnHover: {
    backgroundColor: "#2980b9",
  },
  
  // Responsive styles
  responsive: {
    '@media (max-width: 768px)': {
      h1: {
        fontSize: "2em",
      },
      h2: {
        fontSize: "1.6em",
      },
      h3: {
        fontSize: "1.2em",
      },
    },
  },
};


export default BlogHomepage;
