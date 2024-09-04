import { PacmanLoader } from "react-spinners";

export default function SpinnerLoader(): JSX.Element {
    return (
        <div style={{
            minHeight: "100vh",
            minWidth: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0" // Si vous voulez un fond spécifique pendant le chargement
        }}>
            <PacmanLoader
                size={50}
                color={"#28BFB4"}
            />
        </div>
    );
}
