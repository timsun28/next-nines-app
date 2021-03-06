import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { GameScreen } from "../components/GameScreen";
import { ScoreView } from "../components/ScoreView";
import { StartScreen } from "../components/StartScreen";
import { getEmptyScores } from "../Funcs/global";
import { Player, Round } from "../Types/global";

const Home: NextPage = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [gameFinished, setGameFinished] = useState<boolean>(false);
    const [players, setPlayers] = useState<Player[]>([
        { name: "", score: getEmptyScores() },
        { name: "", score: getEmptyScores() },
    ]);

    return (
        <div>
            <Head>
                <title>Nines Score</title>
                <meta name="description" content="Keep track of your nines score" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </Head>
            <main className="flex flex-col justify-center h-screen gap-2 p-4 md:mx-auto md:max-w-md">
                {!gameFinished ? (
                    <>
                        {!gameStarted ? (
                            <StartScreen players={players} setPlayers={setPlayers} setGameStarted={setGameStarted} />
                        ) : (
                            <GameScreen players={players} setPlayers={setPlayers} setGameFinished={setGameFinished} />
                        )}{" "}
                    </>
                ) : (
                    <ScoreView
                        players={players}
                        setPlayers={setPlayers}
                        setGameStarted={setGameStarted}
                        setGameFinished={setGameFinished}
                    />
                )}
            </main>
        </div>
    );
};

export default Home;
