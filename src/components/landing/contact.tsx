import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function Contact() {
    const AppleLogo = () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5923 2.05319C16.9406 2.05319 18.2323 2.80236 18.9956 3.96319C19.7023 5.09569 20.3156 6.64319 20.3156 8.16236C20.3156 9.68153 20.0089 11.0299 19.3456 12.2182C18.6823 13.379 17.6956 14.1282 16.5223 14.1282C15.2823 14.1282 14.0756 13.4357 13.3123 12.4149C12.5773 11.4224 12.0723 9.98819 12.0723 8.52569C12.0723 7.03486 12.5156 5.51569 13.2506 4.46653C13.9856 3.44569 14.944 2.80236 15.9306 2.80236C16.144 2.80236 16.3573 2.83069 16.5706 2.85903L15.5923 2.05319ZM14.944 0.0348606C13.2506 0.00652729 11.3956 0.812361 10.2906 2.30319C9.21401 3.79403 8.65735 5.62069 8.65735 7.63403C8.65735 9.79069 9.34568 11.8324 10.4507 13.3515C11.5273 14.8424 12.989 15.7707 14.739 15.8274C15.0023 17.2032 14.799 18.6657 14.0756 19.8824C13.5007 20.8465 12.8689 21.6807 12.1807 22.344C11.1657 23.3365 10.0334 24 8.74168 24C7.42168 24 6.28901 23.3649 5.34068 22.4924C4.39235 21.6199 3.63068 20.4907 3.05401 19.1049C2.08901 16.2707 2.72068 13.0465 3.92735 10.2124C4.94235 7.79819 6.51735 6.01653 8.65735 4.88403C9.04401 4.67069 9.37401 4.54403 9.63735 4.51569C9.55235 4.51569 9.49568 4.51569 9.46735 4.51569C7.32735 3.32653 5.72401 1.57319 4.67568 0.0348606L14.944 0.0348606Z" />
      </svg>
    )

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left lg:gap-16">
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Control everything from your smartphone</h2>
                    <p className="mx-auto max-w-[600px] text-foreground/70 md:text-xl/relaxed lg:mx-0 lg:text-base/relaxed xl:text-xl/relaxed">
                        Manage your firewall, monitor traffic, and get real-time alerts on the go. Our mobile app puts the power of Plus Marketing in your pocket.
                    </p>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                        <Button size="lg" className="bg-white/90 text-black hover:bg-white/100 hover:scale-105 transition-transform">
                            <AppleLogo />
                            <div className="text-left ml-2">
                                <p className="text-xs">Download on the</p>
                                <p className="text-lg font-semibold leading-5">App Store</p>
                            </div>
                        </Button>
                        <Button size="lg" className="bg-white/90 text-black hover:bg-white/100 hover:scale-105 transition-transform">
                            <Play className="h-6 w-6" />
                             <div className="text-left ml-2">
                                <p className="text-xs">GET IT ON</p>
                                <p className="text-lg font-semibold leading-5">Google Play</p>
                            </div>
                        </Button>
                    </div>
                </div>
                <Image
                    src="https://placehold.co/550x550.png"
                    width={550}
                    height={550}
                    alt="App Promo"
                    data-ai-hint="mobile app interface"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
                />
            </div>
        </section>
    );
}
