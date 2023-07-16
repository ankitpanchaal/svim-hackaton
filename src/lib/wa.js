const wa = (other = "") => {
    window.open(
        `https://api.whatsapp.com/send?phone=919993673521&text=%F0%9F%98%80Hey%20i%20want%20to%20buy%20this%20T-shirt%0A%0A${encodeURIComponent(
            other
        )}`,
        "_blank"
    );
};

export default wa;
