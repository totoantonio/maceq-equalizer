# macEQ

**System-wide audio EQ and enhancement for macOS. USD 14.99, one-time. No driver. No subscription.**

**Requires macOS 27. Earlier versions of macOS are not supported.**

macEQ intercepts audio from every app on your Mac at once — Spotify, Apple Music, YouTube, Safari, Chrome — and runs it through a 10-band parametric equalizer with professional stereo processing, a live spectrum analyzer, and loudness normalization. It uses Apple's native audio tap API, so nothing is installed into your system and nothing is modified.



---

## System-Wide Audio Engine

- Intercepts audio from every app simultaneously — Spotify, Apple Music, YouTube, Safari, Chrome, any app
- Powered by Apple's native `CATapDescription` API — no virtual audio driver installed, no system modification
- Full Bluetooth speaker and AirPods support
- Instant enable/disable — restores original audio routing in real time
- Confirmation tone on activation so you know it's working
- Menu bar presence — always one click away

## 10-Band Parametric Equalizer

- 10 bands: 32, 64, 125, 250, 500, 1k, 2k, 4k, 8k, 16k Hz
- Visual sliders with blue (boost) and purple (cut) fill
- Real-time dB labels above each slider
- Zero-line tick marks for precise reference
- dB grid lines at +12, +6, 0, −6, −12
- **Live EQ frequency curve** — smooth bezier line showing your exact EQ shape, updates as you drag
- **Live spectrum analyzer** — green fill overlay showing real-time audio energy per frequency band, separate from the EQ curve

## Quick EQ Actions

- **Extra Bass** — additive bass toggle (adds +3/+3/+2/+1 dB to low bands on top of current settings, restores on tap-off)
- **Clarity** — additive treble toggle (boosts presence and air frequencies, restores on tap-off)
- **Reset EQ** — returns all bands to flat
- **Save Settings** — saves the entire current configuration as a named user preset

## 13 Built-In Presets

Bass Boost · Deep Bass · Treble Boost · Crisp Treble · Flat · Music · Movie · Gaming · Podcast · Night Mode · V-Shape · Warm · Orchestra

- Every preset tile shows a **live animated mini EQ visualizer** when selected — bars dance in real time with the music
- Preset tiles remember selection across tab switches

## User Presets — Save Everything

- Save your complete setup as a named preset — EQ, spatial, stereo width, crossfeed, balance, effects, pitch, volume boost, and auto level, all together
- Presets appear in the **MY PRESETS** section at the top of the Presets tab
- Delete with confirmation
- Tap to instantly restore every setting at once

## Spatial & Stereo

- **Spatial Surround** — virtual 5-channel surround with animated speaker diagram (FL, FC, FR, RL, RR) showing sonar pulse waves
- **Dolby Stereo** — plate reverb processing for cinematic stereo expansion
- **Stereo Width** — M/S (Mid-Side) processing from 0% mono to 200% super-wide — the same technique used in professional mastering studios
- **Crossfeed** — blends 30% of each channel into the opposite ear, removing the "sound inside your skull" effect on headphones
- **Channel Balance** — independent L/R channel level control for hearing compensation or uneven headphones

## Effects

- **Volume Boost** — amplifies output 100%–200% beyond the macOS system maximum using the audio mixer node
- **Auto Level** — software AGC keeps all songs at consistent loudness; no more jumping up to turn down a loud ad or track
- **Night Mode** — rolls off harsh high frequencies for comfortable late-night listening
- **Ambience** — adds natural small-room depth and presence
- **Fidelity** — high-frequency shelf boost that restores air and micro-detail
- **Pitch Shift** — shifts pitch ±12 semitones independently of playback speed

## Volume Control

- Master system volume slider built into the app header
- Works as a system-wide volume control for any connected output device

---

## The Short Pitch

macEQ is free for testing, No-driver, No-Subscription macOS audio enhancer that combines professional M/S stereo processing, crossfeed headphone optimization, a live spectrum analyzer, auto loudness normalization, and user-saveable full-session presets — all working simultaneously across every app on your Mac.

---

## This Repository

This repo holds the **macEQ website** — the landing page and marketing site. The app itself is a native macOS app built in Xcode.

---

**System-wide audio equalizer for macOS**
