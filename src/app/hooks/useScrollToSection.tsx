import { useRouter } from "next/router";
import { useEffect } from "react";

export const useScrollToSection = (sectionId: string) => {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const query = new URLSearchParams(window.location.search);
            const sectionIdFromQuery = query.get("scrollTo");
            if (sectionIdFromQuery === sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    }, [router.isReady, sectionId]);
}
