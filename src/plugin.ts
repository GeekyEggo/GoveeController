import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { Brightness, ColorTemperature, TurnOnOff } from "./actions/";

streamDeck.logger.setLevel(LogLevel.TRACE);

// Register the actions and connect to Stream Deck.
streamDeck.actions.registerAction(new Brightness());
streamDeck.actions.registerAction(new ColorTemperature());
streamDeck.actions.registerAction(new TurnOnOff());
streamDeck.connect();
