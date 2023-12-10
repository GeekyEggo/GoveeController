import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { TurnOnOff } from "./actions/turn-on-off";

streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the actions and connect to Stream Deck.
streamDeck.actions.registerAction(new TurnOnOff());
streamDeck.connect();
