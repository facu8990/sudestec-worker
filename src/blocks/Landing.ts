import { html } from "hono/html";

export const Landing = (props: object) => html`
<section id="pc-revival">
    <h2>PC Revival: Installation + SSD</h2>
    <p>Revitalize your PC with our PC Revival service. We'll install a lightning-fast SSD to boost your PC's performance. Starting at just $99!</p>
    <a href="#contact" class="cta-button">Get Started</a>
</section>

<section id="services">
    <h2>Our Services</h2>
    <ul>
        <li>PC Repair</li>
        <li>Custom PC Building</li>
        <li>Virus Removal</li>
        <li>Hardware Upgrades</li>
        <li>Software Installation</li>
    </ul>
</section>

<section id="why-choose-us">
    <h2>Why Choose Us</h2>
    <p>We are your local PC experts, dedicated to providing top-notch services. With over 10 years of experience, we guarantee:</p>
    <ul>
        <li>Fast and Reliable Repairs</li>
        <li>Competitive Prices</li>
        <li>Expert Technicians</li>
        <li>Customer Satisfaction</li>
    </ul>
</section>
`;