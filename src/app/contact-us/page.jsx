import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ContactMap from '@/components/contact/ContactMap';
import ContactUsContent from '@/components/contact/ContactUsContent';
import React from 'react';

export const metadata = {
    title: "Consua - Consulting Business - Contact Us"
}

const ContactUs = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="contact-us" title="Contact Us">
                <ContactUsContent />
                <ContactMap />
            </LayoutStyle7>
        </>
    );
};

export default ContactUs;