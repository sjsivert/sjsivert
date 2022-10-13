import { GlobalInfoBox } from "@/lib/types/sanity/globalComponents/infoBox";

interface Props {
    infoBoxProps: GlobalInfoBox;
}

export default function GlobalCompInfoBox({ infoBoxProps }: Props) {
    const { title, infoText } = infoBoxProps;
    return (
        <div className="p-4 border border-gray-700">
            <div>
                <h3 className="mt-2">{title}</h3>
                <p className="">{infoText}</p>
            </div>
        </div>
    );
}
