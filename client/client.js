/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/fivem-js/lib/Audio.js":
/*!*********************************************!*\
  !*** ../node_modules/fivem-js/lib/Audio.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Audio = void 0;
class Audio {
    static playSoundAt(position, sound, set) {
        PlaySoundFromCoord(-1, sound, position.x, position.y, position.z, set ? set : null, false, 0, false);
        return GetSoundId();
    }
    static playSoundFromEntity(entity, sound, set) {
        PlaySoundFromEntity(-1, sound, entity.Handle, set ? set : null, false, 0);
        return GetSoundId();
    }
    static playSoundFrontEnd(sound, set) {
        PlaySoundFrontend(-1, sound, set ? set : null, false);
        return GetSoundId();
    }
    static stopSound(soundId) {
        StopSound(soundId);
    }
    static releaseSound(soundId) {
        ReleaseSoundId(soundId);
    }
    static hasSoundFinished(soundId) {
        return !!HasSoundFinished(soundId);
    }
    static setAudioFlag(flag, toggle) {
        if (typeof flag === 'string') {
            SetAudioFlag(flag, toggle);
        }
        else {
            SetAudioFlag(this.audioFlags[Number(flag)], toggle);
        }
    }
    static playSound(soundFile, soundSet) {
        this.releaseSound(this.playSoundFrontEnd(soundFile, soundSet));
    }
    static playMusic(musicFile) {
        if (this.cachedMusicFile !== null) {
            CancelMusicEvent(musicFile);
        }
        this.cachedMusicFile = musicFile;
        TriggerMusicEvent(musicFile);
    }
    static stopMusic(musicFile) {
        if (musicFile === null) {
            if (this.cachedMusicFile !== null) {
                CancelMusicEvent(this.cachedMusicFile);
                this.cachedMusicFile = null;
            }
        }
        else {
            CancelMusicEvent(musicFile);
        }
    }
}
exports.Audio = Audio;
Audio.audioFlags = [
    'ActivateSwitchWheelAudio',
    'AllowCutsceneOverScreenFade',
    'AllowForceRadioAfterRetune',
    'AllowPainAndAmbientSpeechToPlayDuringCutscene',
    'AllowPlayerAIOnMission',
    'AllowPoliceScannerWhenPlayerHasNoControl',
    'AllowRadioDuringSwitch',
    'AllowRadioOverScreenFade',
    'AllowScoreAndRadio',
    'AllowScriptedSpeechInSlowMo',
    'AvoidMissionCompleteDelay',
    'DisableAbortConversationForDeathAndInjury',
    'DisableAbortConversationForRagdoll',
    'DisableBarks',
    'DisableFlightMusic',
    'DisableReplayScriptStreamRecording',
    'EnableHeadsetBeep',
    'ForceConversationInterrupt',
    'ForceSeamlessRadioSwitch',
    'ForceSniperAudio',
    'FrontendRadioDisabled',
    'HoldMissionCompleteWhenPrepared',
    'IsDirectorModeActive',
    'IsPlayerOnMissionForSpeech',
    'ListenerReverbDisabled',
    'LoadMPData',
    'MobileRadioInGame',
    'OnlyAllowScriptTriggerPoliceScanner',
    'PlayMenuMusic',
    'PoliceScannerDisabled',
    'ScriptedConvListenerMaySpeak',
    'SpeechDucksScore',
    'SuppressPlayerScubaBreathing',
    'WantedMusicDisabled',
    'WantedMusicOnMission',
];


/***/ }),

/***/ "../node_modules/fivem-js/lib/Blip.js":
/*!********************************************!*\
  !*** ../node_modules/fivem-js/lib/Blip.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Blip = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js");
const models_1 = __webpack_require__(/*! ./models */ "../node_modules/fivem-js/lib/models/index.js");
class Blip {
    constructor(handle) {
        this.handle = handle;
    }
    get Handle() {
        return this.handle;
    }
    get Position() {
        const coords = GetBlipInfoIdCoord(this.handle);
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
    }
    set Position(location) {
        SetBlipCoords(this.handle, location.x, location.y, location.z);
    }
    set Rotation(rotation) {
        SetBlipRotation(this.handle, rotation);
    }
    set Scale(scale) {
        SetBlipScale(this.handle, scale);
    }
    get Type() {
        return GetBlipInfoIdType(this.handle);
    }
    get Alpha() {
        return GetBlipAlpha(this.handle);
    }
    set Alpha(alpha) {
        SetBlipAlpha(this.handle, alpha);
    }
    set Priority(priority) {
        SetBlipPriority(this.handle, priority);
    }
    set NumberLabel(number) {
        ShowNumberOnBlip(this.handle, number);
    }
    get Color() {
        return GetBlipColour(this.handle);
    }
    set Color(color) {
        SetBlipColour(this.handle, color);
    }
    get Sprite() {
        return GetBlipSprite(this.handle);
    }
    set Sprite(sprite) {
        SetBlipSprite(this.handle, sprite);
    }
    set Display(display) {
        SetBlipDisplay(this.handle, display);
    }
    set Name(name) {
        BeginTextCommandSetBlipName('STRING');
        AddTextComponentSubstringPlayerName(name);
        EndTextCommandSetBlipName(this.handle);
    }
    setNameToPlayerName(player) {
        SetBlipNameToPlayerName(this.handle, player.Handle);
    }
    get Entity() {
        return models_1.Entity.fromHandle(GetBlipInfoIdEntityIndex(this.handle));
    }
    set ShowHeadingIndicator(show) {
        ShowHeadingIndicatorOnBlip(this.handle, show);
    }
    set ShowRoute(show) {
        SetBlipRoute(this.handle, show);
    }
    set IsFriendly(friendly) {
        SetBlipAsFriendly(this.handle, friendly);
    }
    set IsFriend(friend) {
        SetBlipFriend(this.handle, friend);
    }
    set IsCrew(crew) {
        SetBlipCrew(this.handle, crew);
    }
    get IsFlashing() {
        return !!IsBlipFlashing(this.handle);
    }
    set IsFlashing(flashing) {
        SetBlipFlashes(this.handle, flashing);
    }
    get IsOnMinimap() {
        return !!IsBlipOnMinimap(this.handle);
    }
    get IsShortRange() {
        return !!IsBlipShortRange(this.handle);
    }
    set IsShortRange(shortRange) {
        SetBlipAsShortRange(this.handle, shortRange);
    }
    removeNumberLabel() {
        HideNumberOnBlip(this.handle);
    }
    delete() {
        if (this.exists()) {
            RemoveBlip(this.handle);
        }
    }
    exists() {
        return !!DoesBlipExist(this.handle);
    }
}
exports.Blip = Blip;


/***/ }),

/***/ "../node_modules/fivem-js/lib/Camera.js":
/*!**********************************************!*\
  !*** ../node_modules/fivem-js/lib/Camera.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Camera = void 0;
const models_1 = __webpack_require__(/*! ./models */ "../node_modules/fivem-js/lib/models/index.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js");
class Camera {
    constructor(handle) {
        this.shakeNames = [
            'HAND_SHAKE',
            'SMALL_EXPLOSION_SHAKE',
            'MEDIUM_EXPLOSION_SHAKE',
            'LARGE_EXPLOSION_SHAKE',
            'JOLT_SHAKE',
            'VIBRATE_SHAKE',
            'ROAD_VIBRATION_SHAKE',
            'DRUNK_SHAKE',
            'SKY_DIVING_SHAKE',
            'FAMILY5_DRUG_TRIP_SHAKE',
            'DEATH_FAIL_IN_EFFECT_SHAKE',
        ];
        this.handle = handle;
    }
    get IsActive() {
        return !!IsCamActive(this.handle);
    }
    set IsActive(active) {
        SetCamActive(this.handle, active);
    }
    get Position() {
        const pos = GetCamCoord(this.handle);
        return new utils_1.Vector3(pos[0], pos[1], pos[2]);
    }
    set Position(position) {
        SetCamCoord(this.handle, position.x, position.y, position.z);
    }
    get Rotation() {
        const rot = GetCamRot(this.handle, 2);
        return new utils_1.Vector3(rot[0], rot[1], rot[2]);
    }
    set Rotation(rotation) {
        SetCamRot(this.handle, rotation.x, rotation.y, rotation.z, 2);
    }
    // public get Matrix() : Matrix {}
    /**
     * Gets the direction the camera is facing. Same as ForwardVector
     */
    get Direction() {
        return this.ForwardVector;
    }
    set Direction(direction) {
        const dir = direction.normalize;
        const vec1 = new utils_1.Vector3(dir.x, dir.y, 0);
        const vec2 = new utils_1.Vector3(dir.z, vec1.distanceSquared(vec1), 0);
        const vec3 = vec2.normalize;
        this.Rotation = new utils_1.Vector3(Math.atan2(vec3.x, vec3.y) * 57.295779513082323, this.Rotation.y, Math.atan2(dir.x, dir.y) * -57.295779513082323);
    }
    //   public get UpVector() : Vector3 {
    //       return Matrix.Up;
    //   }
    get ForwardVector() {
        const rotation = utils_1.Vector3.multiply(this.Rotation, Math.PI / 180);
        const normalized = utils_1.Vector3.normalize(new utils_1.Vector3(-Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.sin(rotation.x)));
        return new utils_1.Vector3(normalized.x, normalized.y, normalized.z);
    }
    //   public get RightVector() : Vector3 {
    //       return Matrix.Right;
    //   }
    // public Vector3 GetOffsetPosition(Vector3 offset) {
    //     return Vector3.TransformCoordinate(offset, Matrix);
    // }
    // public Vector3 GetPositionOffset(Vector3 worldCoords) {
    //     return Vector3.TransformCoordinate(worldCoords, Matrix.Invert(Matrix));
    // }
    get FieldOfView() {
        return GetCamFov(this.handle);
    }
    set FieldOfView(fieldOfView) {
        SetCamFov(this.handle, fieldOfView);
    }
    get NearClip() {
        return GetCamNearClip(this.handle);
    }
    set NearClip(nearClip) {
        SetCamNearClip(this.handle, nearClip);
    }
    get FarClip() {
        return GetCamFarClip(this.handle);
    }
    set FarClip(farClip) {
        SetCamFarClip(this.handle, farClip);
    }
    set NearDepthOfField(nearDepthOfField) {
        SetCamNearDof(this.handle, nearDepthOfField);
    }
    get FarDepthOfField() {
        return GetCamFarDof(this.handle);
    }
    set FarDepthOfField(farDepthOfField) {
        SetCamFarDof(this.handle, farDepthOfField);
    }
    set DepthOfFieldStrength(strength) {
        SetCamDofStrength(this.handle, strength);
    }
    set MotionBlurStrength(strength) {
        SetCamMotionBlurStrength(this.handle, strength);
    }
    shake(shakeType, amplitude) {
        ShakeCam(this.handle, this.shakeNames[Number(shakeType)], amplitude);
    }
    stopShaking() {
        StopCamShaking(this.handle, true);
    }
    get IsShaking() {
        return !!IsCamShaking(this.handle);
    }
    set ShakeAmplitude(amplitude) {
        SetCamShakeAmplitude(this.handle, amplitude);
    }
    pointAt(target, offset = new utils_1.Vector3(0, 0, 0)) {
        if (target instanceof models_1.Entity) {
            PointCamAtEntity(this.handle, target.Handle, offset.x, offset.y, offset.z, true);
        }
        else if (target instanceof models_1.PedBone) {
            PointCamAtPedBone(this.handle, target.Owner.Handle, target.Index, offset.x, offset.y, offset.z, true);
        }
        else {
            PointCamAtCoord(this.handle, target.x, target.y, target.z);
        }
    }
    stopPointing() {
        StopCamPointing(this.handle);
    }
    interpTo(to, duration, easePosition, easeRotation) {
        SetCamActiveWithInterp(to.handle, this.handle, duration, Number(easePosition), Number(easeRotation));
    }
    get IsInterpolating() {
        return !!IsCamInterpolating(this.handle);
    }
    attachTo(object, offset) {
        if (object instanceof models_1.Entity) {
            AttachCamToEntity(this.handle, object.Handle, offset.x, offset.y, offset.z, true);
        }
        else if (object instanceof models_1.PedBone) {
            AttachCamToPedBone(this.handle, object.Owner.Handle, object.Index, offset.x, offset.y, offset.z, true);
        }
    }
    detach() {
        DetachCam(this.handle);
    }
    delete() {
        DestroyCam(this.handle, false);
    }
    exists() {
        return !!DoesCamExist(this.handle);
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "../node_modules/fivem-js/lib/Checkpoint.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/Checkpoint.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Checkpoint = void 0;
class Checkpoint {
    constructor(handle) {
        this.handle = handle;
    }
    get Position() {
        return this.position;
    }
    set Position(position) {
        this.position = position;
    }
    get TargetPosition() {
        return this.targetPosition;
    }
    set TargetPosition(targetPosition) {
        this.targetPosition = targetPosition;
    }
    get Icon() {
        return this.icon;
    }
    set Icon(icon) {
        this.icon = icon;
    }
    // TODO
    //   public get CustomIcon(): CheckpointIcon {
    //     return this.icon;
    //   }
    //     public set CustomIcon(icon: CheckpointIcon) {
    //     this.icon = icon;
    //   }
    get Radius() {
        return this.radius;
    }
    set Radius(radius) {
        this.radius = radius;
    }
}
exports.Checkpoint = Checkpoint;


/***/ }),

/***/ "../node_modules/fivem-js/lib/Game.js":
/*!********************************************!*\
  !*** ../node_modules/fivem-js/lib/Game.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const Audio_1 = __webpack_require__(/*! ./Audio */ "../node_modules/fivem-js/lib/Audio.js");
const enums_1 = __webpack_require__(/*! ./enums */ "../node_modules/fivem-js/lib/enums/index.js");
const models_1 = __webpack_require__(/*! ./models */ "../node_modules/fivem-js/lib/models/index.js");
class Game {
    /**
     * Calculate the Jenkins One At A Time (joaat) has from the given string.
     *
     * @param input The input string to calculate the hash
     */
    static generateHash(input) {
        if (typeof input === 'undefined') {
            return 0;
        }
        return GetHashKey(input);
    }
    /**
     * Gets the game language
     */
    static get Language() {
        return GetUiLanguageId();
    }
    /**
     * Gets how many milliseconds the game has been open this session
     */
    static get GameTime() {
        return GetGameTimer();
    }
    /**
     * Sets the time scale of the Game.
     *
     * @param time The time scale, only accepts values between 0.0 and 1.0
     */
    static set TimeScale(time) {
        SetTimeScale(time <= 1 && time >= 0 ? time : 1);
    }
    /**
     * Gets the total amount of frames rendered in this session
     */
    static get FrameCount() {
        return GetFrameCount();
    }
    /**
     * Gets the current frame rate per second
     */
    static get FPS() {
        return 1 / this.LastFrameTime;
    }
    /**
     * Gets the time it currently takes to render a frame, in seconds;
     */
    static get LastFrameTime() {
        return GetFrameTime();
    }
    /**
     * Get the local player's Player object.
     */
    static get Player() {
        const handle = PlayerId();
        if (typeof this.cachedPlayer === 'undefined' || handle !== this.cachedPlayer.Handle) {
            this.cachedPlayer = new models_1.Player(handle);
        }
        return this.cachedPlayer;
    }
    /**
     * Get the local player character's Ped object.
     * @returns A local player's character.
     */
    static get PlayerPed() {
        return this.Player.Character;
    }
    /**
     * Get an iterable list of players currently on server.
     * @returns Iterable list of Player objects.
     */
    static *playerList() {
        for (const id of GetActivePlayers()) {
            yield new models_1.Player(id);
        }
    }
    /**
     * Get whether PvP is enabled.
     * @returns True if enabled.
     */
    static get PlayerVersusPlayer() {
        return this.Player.PvPEnabled;
    }
    /**
     * Set whether PvP is enabled.
     */
    static set PlayerVersusPlayer(value) {
        this.Player.PvPEnabled = value;
    }
    /**
     * Get the maximum wanted level.
     */
    static get MaxWantedLevel() {
        return GetMaxWantedLevel();
    }
    /**
     * Set the maximum wanted level the local client can get.
     */
    static set MaxWantedLevel(value) {
        if (value < 0) {
            value = 0;
        }
        else if (value > 5) {
            value = 5;
        }
        SetMaxWantedLevel(value);
    }
    /**
     * Set the multiplier of the wanted level.
     */
    static set WantedMultiplier(value) {
        SetWantedLevelMultiplier(value);
    }
    /**
     * Set whether police blips should show on minimap.
     */
    static set ShowPoliceBlipsOnRadar(toggle) {
        SetPoliceRadarBlips(toggle);
    }
    /**
     * Get if nightvision is active.
     */
    static get Nightvision() {
        return !!IsNightvisionActive();
    }
    /**
     * Toggle nightvision.
     */
    static set Nightvision(toggle) {
        SetNightvision(toggle);
    }
    /**
     * Get if thermal (heat) vision is active.
     */
    static get ThermalVision() {
        return !!IsSeethroughActive();
    }
    /**
     * Toggle thermal (heat) vision.
     */
    static set ThermalVision(toggle) {
        SetSeethrough(toggle);
    }
    static get IsMissionActive() {
        return !!GetMissionFlag();
    }
    static set IsMissionActive(toggle) {
        SetMissionFlag(toggle);
    }
    static get IsRandomEventActive() {
        return GetRandomEventFlag() === 1;
    }
    static set IsRandomEventActive(toggle) {
        SetRandomEventFlag(toggle ? 1 : 0);
    }
    static get IsCutsceneActive() {
        return !!IsCutsceneActive();
    }
    /**
     * Is a waypoint set on the map.
     */
    static get IsWaypointActive() {
        return !!IsWaypointActive();
    }
    /**
     * Is the player in the pause menu (ESC).
     */
    static get IsPaused() {
        return !!IsPauseMenuActive();
    }
    /**
     * Force enable pause menu.
     */
    static set IsPaused(toggle) {
        SetPauseMenuActive(toggle);
    }
    /**
     * Get if a loading screen is active.
     */
    static get IsLoading() {
        return !!GetIsLoadingScreenActive();
    }
    /**
     * Get current input mode.
     * @returns InputMode: Mouse & Keyboard or GamePad.
     */
    static get CurrentInputMode() {
        return IsInputDisabled(2) ? enums_1.InputMode.MouseAndKeyboard : enums_1.InputMode.GamePad;
    }
    /**
     * Gets the player's current radio station.
     *
     * @returns A radio station.
     */
    static get RadioStation() {
        const stationName = GetPlayerRadioStationName();
        const keys = Object.keys(enums_1.RadioStation).filter(x => enums_1.RadioStation[x] === stationName);
        return keys.length > 0 ? enums_1.RadioStation[keys[0]] : enums_1.RadioStation.RadioOff;
    }
    /**
     * Sets the player's radio station.
     *
     * @param station A radio station.
     */
    static set RadioStation(station) {
        const stationName = enums_1.RadioStation[station];
        SetRadioToStationName(stationName);
    }
    /**
     * Check whether a control is currently pressed.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlPressed(inputMode, control) {
        return !!IsControlPressed(inputMode, Number(control));
    }
    /**
     * Check whether a disabled control is currently pressed.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlPressed(inputMode, control) {
        return !!IsDisabledControlPressed(inputMode, Number(control));
    }
    /**
     * Check whether a control has been pressed since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlJustPressed(inputMode, control) {
        return !!IsControlJustPressed(inputMode, Number(control));
    }
    /**
     * Check whether a disabled control has been pressed since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlJustPressed(inputMode, control) {
        return !!IsDisabledControlJustPressed(inputMode, Number(control));
    }
    /**
     * Check whether a control is being released.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlReleased(inputMode, control) {
        return !!IsControlReleased(inputMode, Number(control));
    }
    /**
     * Check whether a disabled control is being released.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlReleased(inputMode, control) {
        return !!IsDisabledControlReleased(inputMode, Number(control));
    }
    /**
     * Check whether a control has been released since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlJustReleased(inputMode, control) {
        return !!IsControlJustReleased(inputMode, Number(control));
    }
    /**
     * Check whether a disabled control has been released since last check.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isDisabledControlJustReleased(inputMode, control) {
        return !!IsDisabledControlJustReleased(inputMode, Number(control));
    }
    /**
     * Check whether a control is enabled this frame.
     *
     * @param inputMode InputMode
     * @param control Control
     * @returns True or False.
     */
    static isControlEnabled(inputMode, control) {
        return !!IsControlEnabled(inputMode, Number(control));
    }
    /**
     * Makes the Game Engine respond to the given Control this frame
     *
     * @param inputMode InputMode
     * @param control Control
     */
    static enableControlThisFrame(inputMode, control) {
        EnableControlAction(inputMode, Number(control), true);
    }
    /**
     * Makes the Game Engine ignore the given Control this frame
     *
     * @param inputMode InputMode
     * @param control Control
     */
    static disableControlThisFrame(inputMode, control) {
        DisableControlAction(inputMode, Number(control), true);
    }
    /**
     * Disables all Controls this frame.
     *
     * @param inputMode InputMode
     */
    static disableAllControlsThisFrame(inputMode) {
        DisableAllControlActions(inputMode);
    }
    /**
     * Enables all Controls this frame.
     *
     * @param inputMode InputMode
     */
    static enableAllControlsThisFrame(inputMode) {
        EnableAllControlActions(inputMode);
    }
    /**
     * Get an entity object from an entity handle.
     *
     * @param handle Handle of entity
     * @returns A Ped, Vehicle or Prop object. `undefined` if entity handle doesn't exist.
     */
    static entityFromHandle(handle) {
        switch (GetEntityType(handle)) {
            case 1:
                return new models_1.Ped(handle);
            case 2:
                return new models_1.Vehicle(handle);
            case 3:
                return new models_1.Prop(handle);
        }
        return null;
    }
    /**
     * Play a sound. Same as Audio.playSound
     *
     * @param soundFile Name of sound
     * @param soundSet The set where the sound is in
     */
    static playSound(soundFile, soundSet) {
        Audio_1.Audio.playSound(soundFile, soundSet);
    }
    /**
     * Play music. Same as Audio.playSound
     *
     * @param musicFile Music file.
     */
    static playMusic(musicFile) {
        Audio_1.Audio.playMusic(musicFile);
    }
    /**
     * Stop music. If `musicFile` is not given, last played music is stopped. Same as Audio.playSound
     *
     * @param musicFile (optional) Music file.
     */
    static stopMusic(musicFile) {
        Audio_1.Audio.stopMusic(musicFile);
    }
}
exports.Game = Game;


/***/ }),

/***/ "../node_modules/fivem-js/lib/GameplayCamera.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/GameplayCamera.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameplayCamera = void 0;
const utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js");
/**
 * The current rendering gameplay camera
 */
class GameplayCamera {
    /**
     * Get the world position of gameplay camera.
     */
    static get Position() {
        const coords = GetGameplayCamCoords();
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
    }
    /**
     * Get the rotation of gameplay camera.
     */
    static get Rotation() {
        const rot = GetGameplayCamRot(2);
        return new utils_1.Vector3(rot[0], rot[1], rot[2]);
    }
    /**
     * Get the forward vector of gameplay camera.
     */
    static get ForwardVector() {
        const rotation = utils_1.Vector3.multiply(this.Rotation, Math.PI / 180);
        const normalized = utils_1.Vector3.normalize(new utils_1.Vector3(-Math.sin(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.cos(rotation.z) * Math.abs(Math.cos(rotation.x)), Math.sin(rotation.x)));
        return new utils_1.Vector3(normalized.x, normalized.y, normalized.z);
    }
    /**
     * Get the pitch of the gameplay camera relative to player.
     */
    static get RelativePitch() {
        return GetGameplayCamRelativePitch();
    }
    /**
     * Set gameplay camera pitch relative to player.
     */
    static set RelativePitch(pitch) {
        SetGameplayCamRelativePitch(pitch, 1);
    }
    /**
     * Get heading of gameplay camera.
     */
    static get RelativeHeading() {
        return GetGameplayCamRelativeHeading();
    }
    /**
     * Get heading of gameplay camera.
     */
    static set RelativeHeading(heading) {
        SetGameplayCamRelativeHeading(heading);
    }
}
exports.GameplayCamera = GameplayCamera;


/***/ }),

/***/ "../node_modules/fivem-js/lib/Model.js":
/*!*********************************************!*\
  !*** ../node_modules/fivem-js/lib/Model.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Model = void 0;
const Game_1 = __webpack_require__(/*! ./Game */ "../node_modules/fivem-js/lib/Game.js");
const hashes_1 = __webpack_require__(/*! ./hashes */ "../node_modules/fivem-js/lib/hashes/index.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js");
/**
 * Class to create and manage entity models.
 */
class Model {
    /**
     * Creates a model object based on the hash key or model string.
     *
     * @param hash A number or string of the model's hash. Example: "mp_m_freemode_01"
     */
    constructor(hash) {
        if (typeof hash === 'string') {
            this.hash = Game_1.Game.generateHash(hash);
        }
        else {
            this.hash = hash;
        }
    }
    /**
     * Gets the hash of the model.
     *
     * @returns The hash key.
     */
    get Hash() {
        return this.hash;
    }
    /**
     * Gets if the model is valid or not.
     *
     * @returns Whether this model is valid.
     */
    get IsValid() {
        return !!IsModelValid(this.hash);
    }
    /**
     * Gets if the model is in cd image or not.
     *
     * @returns Whether this model is in cd image.
     */
    get IsInCdImage() {
        return !!IsModelInCdimage(this.hash);
    }
    /**
     * Gets if the model is loaded or not.
     *
     * @returns Whether this model is loaded.
     */
    get IsLoaded() {
        return !!HasModelLoaded(this.hash);
    }
    /**
     * Gets if the model collision is loaded or not.
     *
     * @returns Whether this model collision is loaded.
     */
    get IsCollisionLoaded() {
        return !!HasCollisionForModelLoaded(this.hash);
    }
    /**
     * Gets if the model is a bicycle or not.
     *
     * @returns Whether this model is a bicycle.
     */
    get IsBicycle() {
        return !!IsThisModelABicycle(this.hash);
    }
    /**
     * Gets if the model is a motorbike or not.
     *
     * @returns Whether this model is a motorbike.
     */
    get IsBike() {
        return !!IsThisModelABike(this.hash);
    }
    /**
     * Gets if the model is a boat or not.
     *
     * @returns Whether this model is a boat.
     */
    get IsBoat() {
        return !!IsThisModelABoat(this.hash);
    }
    /**
     * Gets if the model is a car or not.
     *
     * @returns Whether this model is a car.
     */
    get IsCar() {
        return !!IsThisModelACar(this.hash);
    }
    /**
     * Gets if the model is a cargobob or not.
     *
     * @returns Whether this model is a cargobob.
     */
    get IsCargobob() {
        return (this.hash === hashes_1.VehicleHash.Cargobob ||
            this.hash === hashes_1.VehicleHash.Cargobob2 ||
            this.hash === hashes_1.VehicleHash.Cargobob3 ||
            this.hash === hashes_1.VehicleHash.Cargobob4);
    }
    /**
     * Gets if the model is a helicopter or not.
     *
     * @returns Whether this model is a helicopter.
     */
    get IsHelicopter() {
        return !!IsThisModelAHeli(this.hash);
    }
    /**
     * Gets if the model is a Ped or not.
     *
     * @returns Whether this model is a Ped.
     */
    get IsPed() {
        return !!IsModelAPed(this.hash);
    }
    /**
     * Gets if the model is a plane or not.
     *
     * @returns Whether this model is a plane.
     */
    get IsPlane() {
        return !!IsThisModelAPlane(this.hash);
    }
    /**
     * Gets if the model is a prop or not.
     *
     * @returns Whether this model is a prop.
     */
    get IsProp() {
        return this.IsValid && !this.IsPed && !this.IsVehicle && !IsWeaponValid(this.hash);
    }
    /**
     * Gets if the model is a quadbike or not.
     *
     * @returns Whether this model is a quadbike.
     */
    get IsQuadbike() {
        return !!IsThisModelAQuadbike(this.hash);
    }
    /**
     * Gets if the model is a train or not.
     *
     * @returns Whether this model is a train.
     */
    get IsTrain() {
        return !!IsThisModelATrain(this.hash);
    }
    /**
     * Gets if the model is a Vehicle or not.
     *
     * @returns Whether this model is a Vehicle.
     */
    get IsVehicle() {
        return !!IsModelAVehicle(this.hash);
    }
    /**
     * Gets the model dimensions.
     *
     * @returns This model dimensions.
     */
    get Dimensions() {
        const [min, max] = GetModelDimensions(this.hash);
        const right = new utils_1.Vector3(min[0], min[1], min[2]);
        const left = new utils_1.Vector3(max[0], max[1], max[2]);
        return utils_1.Vector3.subtract(left, right);
    }
    /**
     * Request and load the model with a specified timeout. Advised timeout - 1000.
     *
     * @param timeout Maximum allowed time for model to load.
     */
    request(timeout) {
        return new Promise(resolve => {
            if (!this.IsInCdImage && !this.IsValid && !IsWeaponValid(this.hash)) {
                resolve(false);
            }
            RequestModel(this.hash);
            const start = GetGameTimer();
            const interval = setInterval(() => {
                if (this.IsLoaded || GetGameTimer() - start >= timeout) {
                    clearInterval(interval);
                    this.markAsNoLongerNeeded();
                    resolve(this.IsLoaded);
                }
            }, 0);
        });
    }
    /**
     * Sets the model as no longer needed allowing the game engine to free memory.
     */
    markAsNoLongerNeeded() {
        SetModelAsNoLongerNeeded(this.hash);
    }
}
exports.Model = Model;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ParticleEffect.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/ParticleEffect.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticleEffect = void 0;
// TODO: Lots of Matrix stuff through memory access
/**
 * UNFINISHED! Class to manage particle effects.
 */
class ParticleEffect {
    /**
     * Creates a particle effect.
     *
     * @param asset Particle effect asset.
     * @param effectName Name of effect.
     */
    constructor(asset, effectName) {
        this.handle = -1;
        this.asset = asset;
        this.effectName = effectName;
    }
    /**
     * Get the particle effect handle.
     */
    get Handle() {
        return this.handle;
    }
    /**
     * Get whether particle effect is currently active.
     */
    get IsActive() {
        return this.Handle !== -1 && !!DoesParticleFxLoopedExist(this.Handle);
    }
    /**
     * Stop a particle effect.
     */
    stop() {
        if (this.IsActive) {
            RemoveParticleFx(this.Handle, false);
        }
        this.handle = -1;
    }
    /**
     * Get the rotation of the particle effect.
     */
    get Rotation() {
        return this.rotation;
    }
    /**
     * Set the rotation of the particle effect.
     */
    set Rotation(rotation) {
        this.rotation = rotation;
        if (this.IsActive) {
            const off = this.offset; // TODO Matrix stuff to access from memory
            SetParticleFxLoopedOffsets(this.Handle, off.x, off.y, off.z, rotation.x, rotation.y, rotation.z);
        }
    }
    /**
     * Get the range of the particle effect.
     */
    get Range() {
        return this.range;
    }
    /**
     * Set the range of the particle effect.
     */
    set Range(range) {
        this.range = range;
        SetParticleFxLoopedRange(this.Handle, range);
    }
    /**
     * Get the invert axis flag of the particle effect.
     */
    get InvertAxis() {
        return this.invertAxis;
    }
    /**
     * Set the inverted axis of the particle effect.
     */
    set InvertAxis(invertAxis) {
        this.invertAxis = invertAxis;
        if (this.IsActive) {
            this.stop();
            this.start();
        }
    }
    /**
     * Set a paramaeter of a particle effect.
     *
     * @param parameterName Name of parameter.
     * @param value Value of parameter.
     */
    setParameter(parameterName, value) {
        if (this.IsActive) {
            SetParticleFxLoopedEvolution(this.Handle, parameterName, value, false);
        }
    }
    /**
     * Get the name of the particle effect asset. Same as ParticleEffect.AssetName.
     */
    get AssetName() {
        return this.asset.AssetName;
    }
    /**
     * Get the name of the particle effect.
     */
    get EffectName() {
        return this.effectName;
    }
    /**
     * Return the particle effect as string. `AssetName`\\`EffectName`.
     */
    toString() {
        return `${this.AssetName}\\${this.EffectName}`;
    }
}
exports.ParticleEffect = ParticleEffect;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ParticleEffectAsset.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/ParticleEffectAsset.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticleEffectAsset = void 0;
const enums_1 = __webpack_require__(/*! ./enums */ "../node_modules/fivem-js/lib/enums/index.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js");
/**
 * UNFINISHED! Class that represents a particle effect asset.
 */
class ParticleEffectAsset {
    constructor(assetName) {
        this.assetName = assetName;
    }
    /**
     * Returns the name of the asset. Same as AssetName.
     */
    get Asset() {
        return this.assetName;
    }
    /**
     * Get the name of the particle effect.
     */
    get AssetName() {
        return this.assetName;
    }
    /**
     * Get whether the particle effect has loaded into game memory.
     */
    get IsLoaded() {
        return !!HasNamedPtfxAssetLoaded(this.assetName);
    }
    /**
     * Start a particle effect at a world position.
     *
     * @param effectName Name of effect.
     * @param entity Entity to use effect on.
     * @param off Offset from entity position.
     * @param rot Rotation from entity position.
     * @param scale Size of the effect.
     * @param invertAxis Which axis to invert (default none).
     */
    startNonLoopedAtCoord(effectName, pos, rot = new utils_1.Vector3(0, 0, 0), scale = 1.0, invertAxis = { flags: enums_1.InvertAxisFlags.None }) {
        if (!this.setNextCall()) {
            return false;
        }
        const invertAxisFlags = invertAxis.flags;
        SetPtfxAssetNextCall(this.assetName);
        return (StartParticleFxLoopedAtCoord(effectName, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z, scale, !!(invertAxisFlags & enums_1.InvertAxisFlags.X), !!(invertAxisFlags & enums_1.InvertAxisFlags.Y), !!(invertAxisFlags & enums_1.InvertAxisFlags.Z), false) > 0);
    }
    /**
     * Start a particle effect on an entity
     *
     * @param effectName Name of effect.
     * @param entity Entity to use effect on.
     * @param off Offset from entity position.
     * @param rot Rotation from entity position.
     * @param scale Size of the effect.
     * @param invertAxis Which axis to invert (default none).
     */
    startNonLoopedOnEntity(effectName, entity, off = new utils_1.Vector3(0, 0, 0), rot = new utils_1.Vector3(0, 0, 0), scale = 1.0, invertAxis = { flags: enums_1.InvertAxisFlags.None }) {
        if (!this.setNextCall()) {
            return false;
        }
        const invertAxisFlags = invertAxis.flags;
        SetPtfxAssetNextCall(this.assetName);
        return !!StartParticleFxLoopedOnEntity(effectName, entity.Handle, off.x, off.y, off.z, rot.x, rot.y, rot.z, scale, !!(invertAxisFlags & enums_1.InvertAxisFlags.X), !!(invertAxisFlags & enums_1.InvertAxisFlags.Y), !!(invertAxisFlags & enums_1.InvertAxisFlags.Z));
    }
    /**
     * Load a particle effect into the game memory.
     *
     * @param timeout Max time to load Particle Effect
     */
    request(timeout) {
        return new Promise(resolve => {
            if (!this.IsLoaded) {
                RequestNamedPtfxAsset(this.assetName);
                const start = GetGameTimer();
                const interval = setInterval(() => {
                    if (this.IsLoaded || GetGameTimer() - start >= timeout) {
                        clearInterval(interval);
                        resolve(this.IsLoaded);
                    }
                }, 0);
            }
            else {
                resolve(this.IsLoaded);
            }
        });
    }
    /**
     * Allow game engine to safely unload particle effect model from memory.
     */
    markAsNoLongerNeeded() {
        RemoveNamedPtfxAsset(this.assetName);
    }
    toString() {
        return this.assetName;
    }
    setNextCall() {
        if (!this.IsLoaded) {
            RequestNamedPtfxAsset(this.assetName);
        }
        else {
            SetPtfxAssetNextCall(this.assetName);
            return true;
        }
        return false;
    }
}
exports.ParticleEffectAsset = ParticleEffectAsset;


/***/ }),

/***/ "../node_modules/fivem-js/lib/Raycast.js":
/*!***********************************************!*\
  !*** ../node_modules/fivem-js/lib/Raycast.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RaycastResult = void 0;
const Game_1 = __webpack_require__(/*! ./Game */ "../node_modules/fivem-js/lib/Game.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js");
/**
 * Class that represents the result of a raycast.
 */
class RaycastResult {
    /**
     * Create a RaycastResult object that gets the results from a StartShapeTestRay()
     *
     * @param handle The handle returned from StartShapeTestRay()
     */
    constructor(handle) {
        this.handle = handle;
        this.hitPositionArg = new utils_1.Vector3(0, 0, 0);
        this.hitSomethingArg = false;
        this.entityHandleArg = null;
        this.surfaceNormalArg = new utils_1.Vector3(0, 0, 0);
        this.materialArg = 0;
        const results = GetShapeTestResultEx(this.handle);
        this.hitSomethingArg = !!results[1];
        this.hitPositionArg = new utils_1.Vector3(results[2][0], results[2][1], results[2][2]);
        this.surfaceNormalArg = new utils_1.Vector3(results[3][0], results[3][1], results[3][2]);
        this.materialArg = results[4];
        this.entityHandleArg = Game_1.Game.entityFromHandle(results[5]);
        this.result = results[0];
    }
    /**
     * Return the entity that was hit.
     */
    get HitEntity() {
        return this.entityHandleArg;
    }
    /**
     * Get the position of the entity that was hit.
     */
    get HitPosition() {
        return this.hitPositionArg;
    }
    /**
     * Return the vector perpendicular to the tangent plane.
     */
    get SurfaceNormal() {
        return this.surfaceNormalArg;
    }
    /**
     * Whether we hit anything.
     */
    get DidHit() {
        return this.hitSomethingArg;
    }
    /**
     * Whether the entity hit exists.
     */
    get DidHitEntity() {
        return this.entityHandleArg.Handle !== 0;
    }
    /**
     * Material type that was hit.
     */
    get Material() {
        return this.materialArg;
    }
    /**
     * Raycast result's handle.
     */
    get Result() {
        return this.result;
    }
}
exports.RaycastResult = RaycastResult;


/***/ }),

/***/ "../node_modules/fivem-js/lib/RelationshipGroup.js":
/*!*********************************************************!*\
  !*** ../node_modules/fivem-js/lib/RelationshipGroup.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RelationshipGroup = void 0;
/**
 * Class to create and manage a relationship group. Useful to manage behavior between Peds.
 */
class RelationshipGroup {
    /**
     * Create a relationship group. Optionally pass a group hash.
     *
     * @param name Name of the relationship group.
     * @param groupHash Optional custom group hash (default: 0).
     */
    constructor(name, groupHash) {
        AddRelationshipGroup(name, groupHash ? groupHash : 0);
        this.hash = groupHash ? groupHash : 0;
    }
    /**
     * Gets the hash of the relationship group.
     *
     * @returns The hash of this object.
     */
    get Hash() {
        return this.hash;
    }
    /**
     * Get the relationship between two relationship groups.
     *
     * @param targetGroup The other relationship group.
     * @returns The relationship
     */
    getRelationshipBetweenGroups(targetGroup) {
        return GetRelationshipBetweenGroups(this.Hash, targetGroup.Hash);
    }
    /**
     * Set the relationship group between this relationship group and another one.
     *
     * @param targetGroup The other relationship group.
     * @param relationship The desired relationship.
     * @param biDirectionally If target group should have same relationship towards this.
     */
    setRelationshipBetweenGroups(targetGroup, relationship, biDirectionally = false) {
        SetRelationshipBetweenGroups(Number(relationship), this.Hash, targetGroup.Hash);
        if (biDirectionally) {
            SetRelationshipBetweenGroups(Number(relationship), targetGroup.Hash, this.Hash);
        }
    }
    /**
     * Clear the relationship between this relationship group and another.
     *
     * @param targetGroup The other relationship group.
     * @param relationship The desired relationship to clear.
     * @param biDirectionally Whether the target group should also clear the relationship.
     */
    clearRelationshipBetweenGroups(targetGroup, relationship, biDirectionally = false) {
        ClearRelationshipBetweenGroups(Number(relationship), this.Hash, targetGroup.Hash);
        if (biDirectionally) {
            ClearRelationshipBetweenGroups(Number(relationship), targetGroup.Hash, this.Hash);
        }
    }
    /**
     * Remove this relationship group from the game. This will not delete this object.
     */
    remove() {
        RemoveRelationshipGroup(this.Hash);
    }
}
exports.RelationshipGroup = RelationshipGroup;


/***/ }),

/***/ "../node_modules/fivem-js/lib/World.js":
/*!*********************************************!*\
  !*** ../node_modules/fivem-js/lib/World.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.World = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/index.js");
const Blip_1 = __webpack_require__(/*! ./Blip */ "../node_modules/fivem-js/lib/Blip.js");
const Camera_1 = __webpack_require__(/*! ./Camera */ "../node_modules/fivem-js/lib/Camera.js");
const enums_1 = __webpack_require__(/*! ./enums */ "../node_modules/fivem-js/lib/enums/index.js");
const hashes_1 = __webpack_require__(/*! ./hashes */ "../node_modules/fivem-js/lib/hashes/index.js");
const models_1 = __webpack_require__(/*! ./models */ "../node_modules/fivem-js/lib/models/index.js");
const Raycast_1 = __webpack_require__(/*! ./Raycast */ "../node_modules/fivem-js/lib/Raycast.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js");
/**
 * Class with common world manipulations.
 *
 * This class includes methods for creating entities and common world rendering.
 *
 * You can create blips, entities, cameras and more.
 *
 * @abstract
 */
class World {
    /**
     * Get the current camera that's rendering.
     *
     * @returns The camera that's currently used.
     */
    static get RenderingCamera() {
        return new Camera_1.Camera(GetRenderingCam());
    }
    /**
     * Set the rendering camera. World.RenderingCamera = null to reset.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
     * World.RenderingCamera = myCamera;
     *
     * // Reset to default cam
     * World.RenderingCamera = null;
     * ```
     *
     * @param value The camera to render.
     */
    static set RenderingCamera(value) {
        if (value === null) {
            RenderScriptCams(false, false, 3000, true, false);
        }
        else {
            value.IsActive = true;
            RenderScriptCams(true, false, 3000, true, false);
        }
    }
    /**
     * Get the current date in the world.
     *
     * @returns The current date.
     */
    static get CurrentDate() {
        const year = GetClockYear();
        const month = GetClockMonth();
        const day = GetClockDayOfMonth();
        const hour = GetClockHours();
        const minutes = GetClockMinutes();
        const seconds = GetClockSeconds();
        return new Date(year, month, day, hour, minutes, seconds);
    }
    /**
     * Set the current date of the world.
     */
    static set CurrentDate(date) {
        SetClockDate(date.getDate(), date.getMonth(), date.getFullYear());
        SetClockTime(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    /**
     * Disables all emissive textures, street/building/vehicle lights. "EMP" effect.
     *
     * @param value On or off.
     */
    static set Blackout(value) {
        SetBlackout(value);
    }
    /**
     * Get the current cloud hat.
     *
     * @returns The current cloud hat type.
     */
    static get CloudHat() {
        return this.currentCloudHat;
    }
    /**
     * Set the current cloud hat.
     *
     * @param value The type of cloud hat.
     */
    static set CloudHat(value) {
        this.currentCloudHat = value;
        if (this.currentCloudHat === enums_1.CloudHat.Unknown) {
            this.currentCloudHat = enums_1.CloudHat.Clear;
            ClearCloudHat();
            return;
        }
        SetCloudHatTransition(this.cloudHatDict.has(this.currentCloudHat)
            ? this.cloudHatDict.get(this.currentCloudHat)
            : '', 3);
    }
    /**
     * Get the opacity of current cloud hat. Value is between 0-1.
     *
     * @returns The current cloud opacity between 0.0 and 1.0
     */
    static get CloudHatOpacity() {
        return GetCloudHatOpacity();
    }
    /**
     * Set opacity of current cloud hat between 0-1.
     *
     * @param value Opacity between 0.0 and 1.0
     */
    static set CloudHatOpacity(value) {
        SetCloudHatOpacity(utils_1.clamp(value, 0, 1));
    }
    /**
     * Get the current weather type.
     *
     * @returns The current type of weather.
     */
    static get Weather() {
        switch (GetPrevWeatherTypeHashName()) {
            case -1750463879:
                return enums_1.Weather.ExtraSunny;
            case 916995460:
                return enums_1.Weather.Clear;
            case -1530260698:
                return enums_1.Weather.Neutral;
            case 282916021:
                return enums_1.Weather.Smog;
            case -1368164796:
                return enums_1.Weather.Foggy;
            case 821931868:
                return enums_1.Weather.Clouds;
            case -1148613331:
                return enums_1.Weather.Overcast;
            case 1840358669:
                return enums_1.Weather.Clearing;
            case 1420204096:
                return enums_1.Weather.Raining;
            case -1233681761:
                return enums_1.Weather.ThunderStorm;
            case 669657108:
                return enums_1.Weather.Blizzard;
            case -273223690:
                return enums_1.Weather.Snowing;
            case 603685163:
                return enums_1.Weather.Snowlight;
            case -1429616491:
                return enums_1.Weather.Christmas;
            case -921030142:
                return enums_1.Weather.Halloween;
            default:
                return enums_1.Weather.Unknown;
        }
    }
    /**
     * Set the current weather.
     *
     * @param value Type of weather to set.
     */
    static set Weather(value) {
        if (value !== enums_1.Weather.Unknown) {
            const weather = this.weatherDict[value];
            SetWeatherTypeOverTime(weather, 1);
            setTimeout(() => {
                SetWeatherTypeNow(weather);
            }, 100);
        }
    }
    /**
     * Get the next weather type.
     *
     * @returns The Weather type
     */
    static get NextWeather() {
        switch (GetNextWeatherTypeHashName()) {
            case -1750463879:
                return enums_1.Weather.ExtraSunny;
            case 916995460:
                return enums_1.Weather.Clear;
            case -1530260698:
                return enums_1.Weather.Neutral;
            case 282916021:
                return enums_1.Weather.Smog;
            case -1368164796:
                return enums_1.Weather.Foggy;
            case 821931868:
                return enums_1.Weather.Clouds;
            case -1148613331:
                return enums_1.Weather.Overcast;
            case 1840358669:
                return enums_1.Weather.Clearing;
            case 1420204096:
                return enums_1.Weather.Raining;
            case -1233681761:
                return enums_1.Weather.ThunderStorm;
            case 669657108:
                return enums_1.Weather.Blizzard;
            case -273223690:
                return enums_1.Weather.Snowing;
            case 603685163:
                return enums_1.Weather.Snowlight;
            case -1429616491:
                return enums_1.Weather.Christmas;
            case -921030142:
                return enums_1.Weather.Halloween;
            default:
                return enums_1.Weather.Unknown;
        }
    }
    /**
     * Set weather type instantly. Similar to World.transitionToWeather with duration 0.
     */
    static set NextWeather(value) {
        if (value !== enums_1.Weather.Unknown) {
            const weather = this.weatherDict[value];
            SetWeatherTypeOverTime(weather, 0);
        }
    }
    /**
     * Doesn't work
     */
    static get WeatherTransition() {
        const transition = GetWeatherTypeTransition();
        return [this.weatherDict[transition[0]], this.weatherDict[transition[1]], transition[2]];
    }
    /**
     * Doesn't work
     */
    static set WeatherTransition(transition) {
        SetWeatherTypeTransition(transition[0], transition[1], transition[2]);
    }
    /**
     * Transition to different weather type within a certain time.
     *
     * @param weather Weather type to change to.
     * @param duration Time for full weather change (in milliseconds);
     */
    static transitionToWeather(weather, duration) {
        if (weather !== enums_1.Weather.Unknown) {
            SetWeatherTypeOverTime(this.weatherDict[weather], duration);
        }
    }
    /**
     * Destroys all existing cameras and sets your rendering camera back to GameplayCam.
     */
    static destroyAllCameras() {
        DestroyAllCams(false);
    }
    /**
     * Creates a blip at a given position and optionally radius.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myStoreBlip = World.createBlip(position, 5.0);
     * myStoreBlip.Sprite = BlipSprite.Store;
     * ```
     *
     * @param position World coordinate of blip.
     * @param radius (Optional) Radius of where blip should be shown.
     * @returns Blip object.
     */
    static createBlip(position, radius) {
        if (radius !== null && radius !== undefined) {
            return new Blip_1.Blip(AddBlipForRadius(position.x, position.y, position.z, radius));
        }
        return new Blip_1.Blip(AddBlipForCoord(position.x, position.y, position.z));
    }
    /**
     * Creates a camera using 'DEFAULT_SCRIPTED_CAMERA'.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const myCamera = World.createCamera(position, new Vector3(0,0,0), 180);
     * ```
     *
     * @param position World coordinate where the camera should render.
     * @param rotation Rotation of camera relative to world.
     * @param fieldOfView Field of view angle of camera.
     * @returns Camera object.
     */
    static createCamera(position, rotation, fieldOfView) {
        return new Camera_1.Camera(CreateCamWithParams('DEFAULT_SCRIPTED_CAMERA', position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, fieldOfView, true, 2));
    }
    /**
     * Create a ped at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("a_f_m_beach_01");
     * const myPed = await World.createPed(model, position);
     * ```
     *
     * @param model Ped model to be spawned.
     * @param position World position (coordinates) of Ped spawn.
     * @param heading Heading of Ped when spawning.
     * @returns Ped object.
     */
    static createPed(model, position, heading = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!model.IsPed || !(yield model.request(1000))) {
                return null;
            }
            return new models_1.Ped(CreatePed(26, model.Hash, position.x, position.y, position.z, heading, true, false));
        });
    }
    /**
     * Creates a [[`Ped`]] with a random model.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const randomPed = World.createRandomPed(position);
     * ```
     *
     * @param position World coordinate of Ped spawn.
     * @returns Ped object.
     */
    static createRandomPed(position) {
        return new models_1.Ped(CreateRandomPed(position.x, position.y, position.z));
    }
    /**
     * Create a vehicle at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("adder");
     * const myVehicle = await World.createVehicle(model, position);
     * ```
     *
     * @param model Vehicle model to be spawned.
     * @param position World position (coordinates) of Vehicle spawn.
     * @param heading Heading of Vehicle when spawning.
     * @returns Vehicle object.
     */
    static createVehicle(model, position, heading = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!model.IsVehicle || !(yield model.request(1000))) {
                return null;
            }
            return new models_1.Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, true, false));
        });
    }
    /**
     * Create a random vehicle at a desired location.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const randomVehicle = await World.createRandomVehicle(position);
     * ```
     *
     * @param position World position (coordinates) of Vehicle spawn.
     * @param heading Heading of Vehicle when spawning.
     * @returns Vehicle object.
     */
    static createRandomVehicle(position, heading = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const vehicleCount = Object.keys(hashes_1.VehicleHash).length / 2; // check
            const randomIndex = utils_1.getRandomInt(0, vehicleCount);
            const randomVehicleName = hashes_1.VehicleHash[randomIndex];
            const modelHash = GetHashKey(randomVehicleName);
            const model = new _1.Model(modelHash);
            if (!model.IsVehicle || !(yield model.request(1000))) {
                return null;
            }
            return new models_1.Vehicle(CreateVehicle(model.Hash, position.x, position.y, position.z, heading, true, false));
        });
    }
    /**
     * Spawns a [[`Prop`]] at the given position.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const model = new Model("prop_barrel_02a");
     * const myBarrelProp = await World.createProp(model, position, false, true);
     * ```
     *
     * @param model The [[`Model`]] to spawn (must be a Prop)
     * @param position Location of Prop
     * @param dynamic If set to true, the Prop will have physics otherwise it's static.
     * @param placeOnGround If set to true, sets the Prop on the ground nearest to position.
     */
    static createProp(model, position, dynamic, placeOnGround) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!model.IsProp || !(yield model.request(1000))) {
                return null;
            }
            const prop = new _1.Prop(CreateObject(model.Hash, position.x, position.y, position.z, true, true, dynamic));
            if (placeOnGround) {
                prop.placeOnGround();
            }
            return prop;
        });
    }
    /**
     * Draw a marker at a desired location. Careful! Must be drawn every tick.
     *
     * ```typescript
     * const position = new Vector3(-802.311, 175.056, 72.8446);
     * const zeroVector = new Vector3(0,0,0);
     *
     * setTick(() => {
     *  World.drawMarker(MarkerType.ThickChevronUp, position, zeroVector, zeroVector, 1.0, new Color(255,0,0));
     * })
     * ```
     *
     * @param type Type of marker.
     * @param position Location of marker.
     * @param direction Direction facing.
     * @param rotation World rotation.
     * @param scale Size of marker.
     * @param color Color of marker.
     * @param bobUpAndDown Animated movement along marker's own X axis.
     * @param faceCamera Rendering marker facing rendering camera.
     * @param rotateY Rotate along Y axis.
     * @param textureDict Custom texture dictionary for custom marker.
     * @param textureName Custom texture name for custom marker.
     * @param drawOnEntity Render the marker on an entity.
     */
    static drawMarker(type, position, direction, rotation, scale, color, bobUpAndDown = false, faceCamera = false, rotateY = false, textureDict = null, textureName = null, drawOnEntity = false) {
        DrawMarker(Number(type), position.x, position.y, position.z, direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, scale.x, scale.y, scale.z, color.r, color.g, color.b, color.a, bobUpAndDown, faceCamera, 2, rotateY, textureDict, textureName, drawOnEntity);
    }
    /**
     * Creates a light in the world with a certain length (range).
     *
     * @param pos World coordinate where to draw the light.
     * @param color RGB colors of the light.
     * @param range How far to draw the light.
     * @param intensity Intensity of the light ("alpha").
     */
    static drawLightWithRange(pos, color, range, intensity) {
        DrawLightWithRange(pos.x, pos.y, pos.z, color.r, color.g, color.b, range, intensity);
    }
    /**
     * Creates a light in the world. More configurable than World.drawLightWithRange.
     *
     * @param pos World coordinate of spotlight.
     * @param dir Direction to face spotlight.
     * @param color RGB colors of spotlight.
     * @param distance The maximum distance the spotlight can reach.
     * @param brightness Brightness of the spotlight.
     * @param roundness "Smoothness" of the edge of the spotlight.
     * @param radius Radius size of spotlight.
     * @param fadeOut Falloff size of the spotlight's edge.
     */
    static drawSpotLight(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
        DrawSpotLight(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut);
    }
    /**
     * Creates a light in the world. Same as World.drawSpotlight, but also draws shadows.
     *
     * @param pos World coordinate of spotlight.
     * @param dir Direction to face spotlight.
     * @param color RGB colors of spotlight.
     * @param distance The maximum distance the spotlight can reach.
     * @param brightness Brightness of the spotlight.
     * @param roundness "Smoothness" of the edge of the spotlight.
     * @param radius Radius size of spotlight.
     * @param fadeOut Falloff size of the spotlight's edge.
     */
    static drawSpotLightWithShadow(pos, dir, color, distance, brightness, roundness, radius, fadeOut) {
        DrawSpotLightWithShadow(pos.x, pos.y, pos.z, dir.x, dir.y, dir.z, color.r, color.g, color.b, distance, brightness, roundness, radius, fadeOut, 0);
    }
    /**
     * Draws a line in the world. It's not possible to change thickness.
     *
     * @param start World coordinate of start position of line.
     * @param end World coordinate of end position of line.
     * @param color RGB color of line.
     */
    static drawLine(start, end, color) {
        DrawLine(start.x, start.y, start.z, end.x, end.y, end.z, color.r, color.g, color.b, color.a);
    }
    /**
     * Draw polygon in the world.
     *
     * @param vertexA World coordinate of first point.
     * @param vertexB World coordinate of second point.
     * @param vertexC World coordinate of third point.
     * @param color RGB color of polygon.
     */
    static drawPoly(vertexA, vertexB, vertexC, color) {
        DrawPoly(vertexA.x, vertexA.y, vertexA.z, vertexB.x, vertexB.y, vertexB.z, vertexC.x, vertexC.y, vertexC.z, color.r, color.g, color.b, color.a);
    }
    /**
     * Cast ("shoot") a ray in a certain direction to detect entities in the way.
     *
     * @param source Starting position of raycast.
     * @param direction Direction to cast a ray to.
     * @param maxDistance Max distance to cast the ray.
     * @param options Possible entity types to detect.
     * @param ignoreEntity An entity to ignore (usually player's Ped).
     * @returns RaycastResult object.
     */
    static raycast(source, direction, maxDistance, options, ignoreEntity) {
        const target = utils_1.Vector3.add(source, utils_1.Vector3.multiply(direction, maxDistance));
        return new Raycast_1.RaycastResult(StartShapeTestRay(source.x, source.y, source.z, target.x, target.y, target.z, Number(options), ignoreEntity.Handle, 7));
    }
    /**
     * Get all [[`Prop`]] entities in your own scope.
     *
     * @returns Array of Props.
     */
    static getAllProps() {
        const props = [];
        const [handle, entityHandle] = FindFirstObject(null);
        let prop = _1.Entity.fromHandle(entityHandle);
        if (prop !== undefined && prop !== null && prop.exists()) {
            props.push(prop);
        }
        let findResult = [false, null];
        do {
            findResult = FindNextObject(handle, null);
            if (findResult[0]) {
                prop = _1.Entity.fromHandle(findResult[1]);
                if (prop !== undefined && prop !== null && prop.exists()) {
                    props.push(prop);
                }
            }
        } while (findResult[0]);
        EndFindObject(handle);
        return props;
    }
    /**
     * Get all [[`Ped`]] entities in your own scope.
     *
     * @returns Array of Peds.
     */
    static getAllPeds() {
        const peds = [];
        const [handle, entityHandle] = FindFirstPed(null);
        let ped = _1.Entity.fromHandle(entityHandle);
        if (ped !== undefined && ped !== null && ped.exists()) {
            peds.push(ped);
        }
        let findResult = [false, null];
        do {
            findResult = FindNextPed(handle, null);
            if (findResult[0]) {
                ped = _1.Entity.fromHandle(findResult[1]);
                if (ped !== undefined && ped !== null && ped.exists()) {
                    peds.push(ped);
                }
            }
        } while (findResult[0]);
        EndFindPed(handle);
        return peds;
    }
    /**
     * Get all [[`Vehicle`]] entities in your own scope.
     *
     * @returns Array of Vehicles.
     */
    static getAllVehicles() {
        const vehicles = [];
        const [handle, entityHandle] = FindFirstVehicle(null);
        let vehicle = _1.Entity.fromHandle(entityHandle);
        if (vehicle !== undefined && vehicle !== null && vehicle.exists()) {
            vehicles.push(vehicle);
        }
        let findResult = [false, null];
        do {
            findResult = FindNextVehicle(handle, null);
            if (findResult[0]) {
                vehicle = _1.Entity.fromHandle(findResult[1]);
                if (vehicle !== undefined && vehicle !== null && vehicle.exists()) {
                    vehicles.push(vehicle);
                }
            }
        } while (findResult[0]);
        EndFindVehicle(handle);
        return vehicles;
    }
}
exports.World = World;
World.currentCloudHat = enums_1.CloudHat.Clear;
World.cloudHatDict = new Map([
    [enums_1.CloudHat.Unknown, 'Unknown'],
    [enums_1.CloudHat.Altostratus, 'altostratus'],
    [enums_1.CloudHat.Cirrus, 'Cirrus'],
    [enums_1.CloudHat.Cirrocumulus, 'cirrocumulus'],
    [enums_1.CloudHat.Clear, 'Clear 01'],
    [enums_1.CloudHat.Cloudy, 'Cloudy 01'],
    [enums_1.CloudHat.Contrails, 'Contrails'],
    [enums_1.CloudHat.Horizon, 'Horizon'],
    [enums_1.CloudHat.HorizonBand1, 'horizonband1'],
    [enums_1.CloudHat.HorizonBand2, 'horizonband2'],
    [enums_1.CloudHat.HorizonBand3, 'horizonband3'],
    [enums_1.CloudHat.Horsey, 'horsey'],
    [enums_1.CloudHat.Nimbus, 'Nimbus'],
    [enums_1.CloudHat.Puffs, 'Puffs'],
    [enums_1.CloudHat.Rain, 'RAIN'],
    [enums_1.CloudHat.Snowy, 'Snowy 01'],
    [enums_1.CloudHat.Stormy, 'Stormy 01'],
    [enums_1.CloudHat.Stratoscumulus, 'stratoscumulus'],
    [enums_1.CloudHat.Stripey, 'Stripey'],
    [enums_1.CloudHat.Shower, 'shower'],
    [enums_1.CloudHat.Wispy, 'Wispy'],
]);
World.weatherDict = [
    'EXTRASUNNY',
    'CLEAR',
    'CLOUDS',
    'SMOG',
    'FOGGY',
    'OVERCAST',
    'RAIN',
    'THUNDER',
    'CLEARING',
    'NEUTRAL',
    'SNOW',
    'BLIZZARD',
    'SNOWLIGHT',
    'XMAS',
];


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Alignment.js":
/*!*******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Alignment.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Alignment = void 0;
var Alignment;
(function (Alignment) {
    Alignment[Alignment["Left"] = 0] = "Left";
    Alignment[Alignment["Centered"] = 1] = "Centered";
    Alignment[Alignment["Right"] = 2] = "Right";
})(Alignment = exports.Alignment || (exports.Alignment = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/AudioFlag.js":
/*!*******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/AudioFlag.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AudioFlag = void 0;
var AudioFlag;
(function (AudioFlag) {
    AudioFlag[AudioFlag["ActivateSwitchWheelAudio"] = 0] = "ActivateSwitchWheelAudio";
    AudioFlag[AudioFlag["AllowCutsceneOverScreenFade"] = 1] = "AllowCutsceneOverScreenFade";
    AudioFlag[AudioFlag["AllowForceRadioAfterRetune"] = 2] = "AllowForceRadioAfterRetune";
    AudioFlag[AudioFlag["AllowPainAndAmbientSpeechToPlayDuringCutscene"] = 3] = "AllowPainAndAmbientSpeechToPlayDuringCutscene";
    AudioFlag[AudioFlag["AllowPlayerAIOnMission"] = 4] = "AllowPlayerAIOnMission";
    AudioFlag[AudioFlag["AllowPoliceScannerWhenPlayerHasNoControl"] = 5] = "AllowPoliceScannerWhenPlayerHasNoControl";
    AudioFlag[AudioFlag["AllowRadioDuringSwitch"] = 6] = "AllowRadioDuringSwitch";
    AudioFlag[AudioFlag["AllowRadioOverScreenFade"] = 7] = "AllowRadioOverScreenFade";
    AudioFlag[AudioFlag["AllowScoreAndRadio"] = 8] = "AllowScoreAndRadio";
    AudioFlag[AudioFlag["AllowScriptedSpeechInSlowMo"] = 9] = "AllowScriptedSpeechInSlowMo";
    AudioFlag[AudioFlag["AvoidMissionCompleteDelay"] = 10] = "AvoidMissionCompleteDelay";
    AudioFlag[AudioFlag["DisableAbortConversationForDeathAndInjury"] = 11] = "DisableAbortConversationForDeathAndInjury";
    AudioFlag[AudioFlag["DisableAbortConversationForRagdoll"] = 12] = "DisableAbortConversationForRagdoll";
    AudioFlag[AudioFlag["DisableBarks"] = 13] = "DisableBarks";
    AudioFlag[AudioFlag["DisableFlightMusic"] = 14] = "DisableFlightMusic";
    AudioFlag[AudioFlag["DisableReplayScriptStreamRecording"] = 15] = "DisableReplayScriptStreamRecording";
    AudioFlag[AudioFlag["EnableHeadsetBeep"] = 16] = "EnableHeadsetBeep";
    AudioFlag[AudioFlag["ForceConversationInterrupt"] = 17] = "ForceConversationInterrupt";
    AudioFlag[AudioFlag["ForceSeamlessRadioSwitch"] = 18] = "ForceSeamlessRadioSwitch";
    AudioFlag[AudioFlag["ForceSniperAudio"] = 19] = "ForceSniperAudio";
    AudioFlag[AudioFlag["FrontendRadioDisabled"] = 20] = "FrontendRadioDisabled";
    AudioFlag[AudioFlag["HoldMissionCompleteWhenPrepared"] = 21] = "HoldMissionCompleteWhenPrepared";
    AudioFlag[AudioFlag["IsDirectorModeActive"] = 22] = "IsDirectorModeActive";
    AudioFlag[AudioFlag["IsPlayerOnMissionForSpeech"] = 23] = "IsPlayerOnMissionForSpeech";
    AudioFlag[AudioFlag["ListenerReverbDisabled"] = 24] = "ListenerReverbDisabled";
    AudioFlag[AudioFlag["LoadMPData"] = 25] = "LoadMPData";
    AudioFlag[AudioFlag["MobileRadioInGame"] = 26] = "MobileRadioInGame";
    AudioFlag[AudioFlag["OnlyAllowScriptTriggerPoliceScanner"] = 27] = "OnlyAllowScriptTriggerPoliceScanner";
    AudioFlag[AudioFlag["PlayMenuMusic"] = 28] = "PlayMenuMusic";
    AudioFlag[AudioFlag["PoliceScannerDisabled"] = 29] = "PoliceScannerDisabled";
    AudioFlag[AudioFlag["ScriptedConvListenerMaySpeak"] = 30] = "ScriptedConvListenerMaySpeak";
    AudioFlag[AudioFlag["SpeechDucksScore"] = 31] = "SpeechDucksScore";
    AudioFlag[AudioFlag["SuppressPlayerScubaBreathing"] = 32] = "SuppressPlayerScubaBreathing";
    AudioFlag[AudioFlag["WantedMusicDisabled"] = 33] = "WantedMusicDisabled";
    AudioFlag[AudioFlag["WantedMusicOnMission"] = 34] = "WantedMusicOnMission";
})(AudioFlag = exports.AudioFlag || (exports.AudioFlag = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/BadgeStyle.js":
/*!********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/BadgeStyle.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BadgeStyle = void 0;
var BadgeStyle;
(function (BadgeStyle) {
    BadgeStyle[BadgeStyle["None"] = 0] = "None";
    BadgeStyle[BadgeStyle["Lock"] = 1] = "Lock";
    BadgeStyle[BadgeStyle["Star"] = 2] = "Star";
    BadgeStyle[BadgeStyle["Warning"] = 3] = "Warning";
    BadgeStyle[BadgeStyle["Crown"] = 4] = "Crown";
    BadgeStyle[BadgeStyle["MedalBronze"] = 5] = "MedalBronze";
    BadgeStyle[BadgeStyle["MedalGold"] = 6] = "MedalGold";
    BadgeStyle[BadgeStyle["MedalSilver"] = 7] = "MedalSilver";
    BadgeStyle[BadgeStyle["Cash"] = 8] = "Cash";
    BadgeStyle[BadgeStyle["Coke"] = 9] = "Coke";
    BadgeStyle[BadgeStyle["Heroin"] = 10] = "Heroin";
    BadgeStyle[BadgeStyle["Meth"] = 11] = "Meth";
    BadgeStyle[BadgeStyle["Weed"] = 12] = "Weed";
    BadgeStyle[BadgeStyle["Ammo"] = 13] = "Ammo";
    BadgeStyle[BadgeStyle["Armor"] = 14] = "Armor";
    BadgeStyle[BadgeStyle["Barber"] = 15] = "Barber";
    BadgeStyle[BadgeStyle["Clothing"] = 16] = "Clothing";
    BadgeStyle[BadgeStyle["Franklin"] = 17] = "Franklin";
    BadgeStyle[BadgeStyle["Bike"] = 18] = "Bike";
    BadgeStyle[BadgeStyle["Car"] = 19] = "Car";
    BadgeStyle[BadgeStyle["Gun"] = 20] = "Gun";
    BadgeStyle[BadgeStyle["HealthHeart"] = 21] = "HealthHeart";
    BadgeStyle[BadgeStyle["MakeupBrush"] = 22] = "MakeupBrush";
    BadgeStyle[BadgeStyle["Mask"] = 23] = "Mask";
    BadgeStyle[BadgeStyle["Michael"] = 24] = "Michael";
    BadgeStyle[BadgeStyle["Tattoo"] = 25] = "Tattoo";
    BadgeStyle[BadgeStyle["Tick"] = 26] = "Tick";
    BadgeStyle[BadgeStyle["Trevor"] = 27] = "Trevor";
    BadgeStyle[BadgeStyle["Female"] = 28] = "Female";
    BadgeStyle[BadgeStyle["Male"] = 29] = "Male";
    BadgeStyle[BadgeStyle["LockArena"] = 30] = "LockArena";
    BadgeStyle[BadgeStyle["Adversary"] = 31] = "Adversary";
    BadgeStyle[BadgeStyle["BaseJumping"] = 32] = "BaseJumping";
    BadgeStyle[BadgeStyle["Briefcase"] = 33] = "Briefcase";
    BadgeStyle[BadgeStyle["MissionStar"] = 34] = "MissionStar";
    BadgeStyle[BadgeStyle["Deathmatch"] = 35] = "Deathmatch";
    BadgeStyle[BadgeStyle["Castle"] = 36] = "Castle";
    BadgeStyle[BadgeStyle["Trophy"] = 37] = "Trophy";
    BadgeStyle[BadgeStyle["RaceFlag"] = 38] = "RaceFlag";
    BadgeStyle[BadgeStyle["RaceFlagPlane"] = 39] = "RaceFlagPlane";
    BadgeStyle[BadgeStyle["RaceFlagBicycle"] = 40] = "RaceFlagBicycle";
    BadgeStyle[BadgeStyle["RaceFlagPerson"] = 41] = "RaceFlagPerson";
    BadgeStyle[BadgeStyle["RaceFlagCar"] = 42] = "RaceFlagCar";
    BadgeStyle[BadgeStyle["RaceFlagBoatAnchor"] = 43] = "RaceFlagBoatAnchor";
    BadgeStyle[BadgeStyle["Rockstar"] = 44] = "Rockstar";
    BadgeStyle[BadgeStyle["Stunt"] = 45] = "Stunt";
    BadgeStyle[BadgeStyle["StuntPremium"] = 46] = "StuntPremium";
    BadgeStyle[BadgeStyle["RaceFlagStuntJump"] = 47] = "RaceFlagStuntJump";
    BadgeStyle[BadgeStyle["Shield"] = 48] = "Shield";
    BadgeStyle[BadgeStyle["TeamDeathmatch"] = 49] = "TeamDeathmatch";
    BadgeStyle[BadgeStyle["VehicleDeathmatch"] = 50] = "VehicleDeathmatch";
    BadgeStyle[BadgeStyle["MpAmmoPickup"] = 51] = "MpAmmoPickup";
    BadgeStyle[BadgeStyle["MpAmmo"] = 52] = "MpAmmo";
    BadgeStyle[BadgeStyle["MpCash"] = 53] = "MpCash";
    BadgeStyle[BadgeStyle["MpRp"] = 54] = "MpRp";
    BadgeStyle[BadgeStyle["MpSpectating"] = 55] = "MpSpectating";
    BadgeStyle[BadgeStyle["Sale"] = 56] = "Sale";
    BadgeStyle[BadgeStyle["GlobeWhite"] = 57] = "GlobeWhite";
    BadgeStyle[BadgeStyle["GlobeRed"] = 58] = "GlobeRed";
    BadgeStyle[BadgeStyle["GlobeBlue"] = 59] = "GlobeBlue";
    BadgeStyle[BadgeStyle["GlobeYellow"] = 60] = "GlobeYellow";
    BadgeStyle[BadgeStyle["GlobeGreen"] = 61] = "GlobeGreen";
    BadgeStyle[BadgeStyle["GlobeOrange"] = 62] = "GlobeOrange";
    BadgeStyle[BadgeStyle["InvArmWrestling"] = 63] = "InvArmWrestling";
    BadgeStyle[BadgeStyle["InvBasejump"] = 64] = "InvBasejump";
    BadgeStyle[BadgeStyle["InvMission"] = 65] = "InvMission";
    BadgeStyle[BadgeStyle["InvDarts"] = 66] = "InvDarts";
    BadgeStyle[BadgeStyle["InvDeathmatch"] = 67] = "InvDeathmatch";
    BadgeStyle[BadgeStyle["InvDrug"] = 68] = "InvDrug";
    BadgeStyle[BadgeStyle["InvCastle"] = 69] = "InvCastle";
    BadgeStyle[BadgeStyle["InvGolf"] = 70] = "InvGolf";
    BadgeStyle[BadgeStyle["InvBike"] = 71] = "InvBike";
    BadgeStyle[BadgeStyle["InvBoat"] = 72] = "InvBoat";
    BadgeStyle[BadgeStyle["InvAnchor"] = 73] = "InvAnchor";
    BadgeStyle[BadgeStyle["InvCar"] = 74] = "InvCar";
    BadgeStyle[BadgeStyle["InvDollar"] = 75] = "InvDollar";
    BadgeStyle[BadgeStyle["InvCoke"] = 76] = "InvCoke";
    BadgeStyle[BadgeStyle["InvKey"] = 77] = "InvKey";
    BadgeStyle[BadgeStyle["InvData"] = 78] = "InvData";
    BadgeStyle[BadgeStyle["InvHeli"] = 79] = "InvHeli";
    BadgeStyle[BadgeStyle["InvHeorin"] = 80] = "InvHeorin";
    BadgeStyle[BadgeStyle["InvKeycard"] = 81] = "InvKeycard";
    BadgeStyle[BadgeStyle["InvMeth"] = 82] = "InvMeth";
    BadgeStyle[BadgeStyle["InvBriefcase"] = 83] = "InvBriefcase";
    BadgeStyle[BadgeStyle["InvLink"] = 84] = "InvLink";
    BadgeStyle[BadgeStyle["InvPerson"] = 85] = "InvPerson";
    BadgeStyle[BadgeStyle["InvPlane"] = 86] = "InvPlane";
    BadgeStyle[BadgeStyle["InvPlane2"] = 87] = "InvPlane2";
    BadgeStyle[BadgeStyle["InvQuestionmark"] = 88] = "InvQuestionmark";
    BadgeStyle[BadgeStyle["InvRemote"] = 89] = "InvRemote";
    BadgeStyle[BadgeStyle["InvSafe"] = 90] = "InvSafe";
    BadgeStyle[BadgeStyle["InvSteerWheel"] = 91] = "InvSteerWheel";
    BadgeStyle[BadgeStyle["InvWeapon"] = 92] = "InvWeapon";
    BadgeStyle[BadgeStyle["InvWeed"] = 93] = "InvWeed";
    BadgeStyle[BadgeStyle["InvRaceFlagPlane"] = 94] = "InvRaceFlagPlane";
    BadgeStyle[BadgeStyle["InvRaceFlagBicycle"] = 95] = "InvRaceFlagBicycle";
    BadgeStyle[BadgeStyle["InvRaceFlagBoatAnchor"] = 96] = "InvRaceFlagBoatAnchor";
    BadgeStyle[BadgeStyle["InvRaceFlagPerson"] = 97] = "InvRaceFlagPerson";
    BadgeStyle[BadgeStyle["InvRaceFlagCar"] = 98] = "InvRaceFlagCar";
    BadgeStyle[BadgeStyle["InvRaceFlagHelmet"] = 99] = "InvRaceFlagHelmet";
    BadgeStyle[BadgeStyle["InvShootingRange"] = 100] = "InvShootingRange";
    BadgeStyle[BadgeStyle["InvSurvival"] = 101] = "InvSurvival";
    BadgeStyle[BadgeStyle["InvTeamDeathmatch"] = 102] = "InvTeamDeathmatch";
    BadgeStyle[BadgeStyle["InvTennis"] = 103] = "InvTennis";
    BadgeStyle[BadgeStyle["InvVehicleDeathmatch"] = 104] = "InvVehicleDeathmatch";
    BadgeStyle[BadgeStyle["AudioMute"] = 105] = "AudioMute";
    BadgeStyle[BadgeStyle["AudioInactive"] = 106] = "AudioInactive";
    BadgeStyle[BadgeStyle["AudioVol1"] = 107] = "AudioVol1";
    BadgeStyle[BadgeStyle["AudioVol2"] = 108] = "AudioVol2";
    BadgeStyle[BadgeStyle["AudioVol3"] = 109] = "AudioVol3";
    BadgeStyle[BadgeStyle["CountryUsa"] = 110] = "CountryUsa";
    BadgeStyle[BadgeStyle["CountryUk"] = 111] = "CountryUk";
    BadgeStyle[BadgeStyle["CountrySweden"] = 112] = "CountrySweden";
    BadgeStyle[BadgeStyle["CountryKorea"] = 113] = "CountryKorea";
    BadgeStyle[BadgeStyle["CountryJapan"] = 114] = "CountryJapan";
    BadgeStyle[BadgeStyle["CountryItaly"] = 115] = "CountryItaly";
    BadgeStyle[BadgeStyle["CountryGermany"] = 116] = "CountryGermany";
    BadgeStyle[BadgeStyle["CountryFrance"] = 117] = "CountryFrance";
    BadgeStyle[BadgeStyle["BrandAlbany"] = 118] = "BrandAlbany";
    BadgeStyle[BadgeStyle["BrandAnnis"] = 119] = "BrandAnnis";
    BadgeStyle[BadgeStyle["BrandBanshee"] = 120] = "BrandBanshee";
    BadgeStyle[BadgeStyle["BrandBenefactor"] = 121] = "BrandBenefactor";
    BadgeStyle[BadgeStyle["BrandBf"] = 122] = "BrandBf";
    BadgeStyle[BadgeStyle["BrandBollokan"] = 123] = "BrandBollokan";
    BadgeStyle[BadgeStyle["BrandBravado"] = 124] = "BrandBravado";
    BadgeStyle[BadgeStyle["BrandBrute"] = 125] = "BrandBrute";
    BadgeStyle[BadgeStyle["BrandBuckingham"] = 126] = "BrandBuckingham";
    BadgeStyle[BadgeStyle["BrandCanis"] = 127] = "BrandCanis";
    BadgeStyle[BadgeStyle["BrandChariot"] = 128] = "BrandChariot";
    BadgeStyle[BadgeStyle["BrandCheval"] = 129] = "BrandCheval";
    BadgeStyle[BadgeStyle["BrandClassique"] = 130] = "BrandClassique";
    BadgeStyle[BadgeStyle["BrandCoil"] = 131] = "BrandCoil";
    BadgeStyle[BadgeStyle["BrandDeclasse"] = 132] = "BrandDeclasse";
    BadgeStyle[BadgeStyle["BrandDewbauchee"] = 133] = "BrandDewbauchee";
    BadgeStyle[BadgeStyle["BrandDilettante"] = 134] = "BrandDilettante";
    BadgeStyle[BadgeStyle["BrandDinka"] = 135] = "BrandDinka";
    BadgeStyle[BadgeStyle["BrandDundreary"] = 136] = "BrandDundreary";
    BadgeStyle[BadgeStyle["BrandEmporer"] = 137] = "BrandEmporer";
    BadgeStyle[BadgeStyle["BrandEnus"] = 138] = "BrandEnus";
    BadgeStyle[BadgeStyle["BrandFathom"] = 139] = "BrandFathom";
    BadgeStyle[BadgeStyle["BrandGalivanter"] = 140] = "BrandGalivanter";
    BadgeStyle[BadgeStyle["BrandGrotti"] = 141] = "BrandGrotti";
    BadgeStyle[BadgeStyle["BrandGrotti2"] = 142] = "BrandGrotti2";
    BadgeStyle[BadgeStyle["BrandHijak"] = 143] = "BrandHijak";
    BadgeStyle[BadgeStyle["BrandHvy"] = 144] = "BrandHvy";
    BadgeStyle[BadgeStyle["BrandImponte"] = 145] = "BrandImponte";
    BadgeStyle[BadgeStyle["BrandInvetero"] = 146] = "BrandInvetero";
    BadgeStyle[BadgeStyle["BrandJacksheepe"] = 147] = "BrandJacksheepe";
    BadgeStyle[BadgeStyle["BrandLcc"] = 148] = "BrandLcc";
    BadgeStyle[BadgeStyle["BrandJobuilt"] = 149] = "BrandJobuilt";
    BadgeStyle[BadgeStyle["BrandKarin"] = 150] = "BrandKarin";
    BadgeStyle[BadgeStyle["BrandLampadati"] = 151] = "BrandLampadati";
    BadgeStyle[BadgeStyle["BrandMaibatsu"] = 152] = "BrandMaibatsu";
    BadgeStyle[BadgeStyle["BrandMammoth"] = 153] = "BrandMammoth";
    BadgeStyle[BadgeStyle["BrandMtl"] = 154] = "BrandMtl";
    BadgeStyle[BadgeStyle["BrandNagasaki"] = 155] = "BrandNagasaki";
    BadgeStyle[BadgeStyle["BrandObey"] = 156] = "BrandObey";
    BadgeStyle[BadgeStyle["BrandOcelot"] = 157] = "BrandOcelot";
    BadgeStyle[BadgeStyle["BrandOverflod"] = 158] = "BrandOverflod";
    BadgeStyle[BadgeStyle["BrandPed"] = 159] = "BrandPed";
    BadgeStyle[BadgeStyle["BrandPegassi"] = 160] = "BrandPegassi";
    BadgeStyle[BadgeStyle["BrandPfister"] = 161] = "BrandPfister";
    BadgeStyle[BadgeStyle["BrandPrincipe"] = 162] = "BrandPrincipe";
    BadgeStyle[BadgeStyle["BrandProgen"] = 163] = "BrandProgen";
    BadgeStyle[BadgeStyle["BrandProgen2"] = 164] = "BrandProgen2";
    BadgeStyle[BadgeStyle["BrandRune"] = 165] = "BrandRune";
    BadgeStyle[BadgeStyle["BrandSchyster"] = 166] = "BrandSchyster";
    BadgeStyle[BadgeStyle["BrandShitzu"] = 167] = "BrandShitzu";
    BadgeStyle[BadgeStyle["BrandSpeedophile"] = 168] = "BrandSpeedophile";
    BadgeStyle[BadgeStyle["BrandStanley"] = 169] = "BrandStanley";
    BadgeStyle[BadgeStyle["BrandTruffade"] = 170] = "BrandTruffade";
    BadgeStyle[BadgeStyle["BrandUbermacht"] = 171] = "BrandUbermacht";
    BadgeStyle[BadgeStyle["BrandVapid"] = 172] = "BrandVapid";
    BadgeStyle[BadgeStyle["BrandVulcar"] = 173] = "BrandVulcar";
    BadgeStyle[BadgeStyle["BrandWeeny"] = 174] = "BrandWeeny";
    BadgeStyle[BadgeStyle["BrandWestern"] = 175] = "BrandWestern";
    BadgeStyle[BadgeStyle["BrandWesternmotorcycle"] = 176] = "BrandWesternmotorcycle";
    BadgeStyle[BadgeStyle["BrandWillard"] = 177] = "BrandWillard";
    BadgeStyle[BadgeStyle["BrandZirconium"] = 178] = "BrandZirconium";
    BadgeStyle[BadgeStyle["Info"] = 179] = "Info";
})(BadgeStyle = exports.BadgeStyle || (exports.BadgeStyle = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Blip.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Blip.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlipSprite = exports.BlipColor = void 0;
var BlipColor;
(function (BlipColor) {
    BlipColor[BlipColor["White"] = 0] = "White";
    BlipColor[BlipColor["Red"] = 1] = "Red";
    BlipColor[BlipColor["Green"] = 2] = "Green";
    BlipColor[BlipColor["Blue"] = 3] = "Blue";
    BlipColor[BlipColor["MichaelBlue"] = 42] = "MichaelBlue";
    BlipColor[BlipColor["FranklinGreen"] = 43] = "FranklinGreen";
    BlipColor[BlipColor["TrevorOrange"] = 44] = "TrevorOrange";
    BlipColor[BlipColor["Yellow"] = 66] = "Yellow";
})(BlipColor = exports.BlipColor || (exports.BlipColor = {}));
var BlipSprite;
(function (BlipSprite) {
    BlipSprite[BlipSprite["Standard"] = 1] = "Standard";
    BlipSprite[BlipSprite["BigBlip"] = 2] = "BigBlip";
    BlipSprite[BlipSprite["PoliceOfficer"] = 3] = "PoliceOfficer";
    BlipSprite[BlipSprite["PoliceArea"] = 4] = "PoliceArea";
    BlipSprite[BlipSprite["Square"] = 5] = "Square";
    BlipSprite[BlipSprite["Player"] = 6] = "Player";
    BlipSprite[BlipSprite["North"] = 7] = "North";
    BlipSprite[BlipSprite["Waypoint"] = 8] = "Waypoint";
    BlipSprite[BlipSprite["BigCircle"] = 9] = "BigCircle";
    BlipSprite[BlipSprite["BigCircleOutline"] = 10] = "BigCircleOutline";
    BlipSprite[BlipSprite["ArrowUpOutlined"] = 11] = "ArrowUpOutlined";
    BlipSprite[BlipSprite["ArrowDownOutlined"] = 12] = "ArrowDownOutlined";
    BlipSprite[BlipSprite["ArrowUp"] = 13] = "ArrowUp";
    BlipSprite[BlipSprite["ArrowDown"] = 14] = "ArrowDown";
    BlipSprite[BlipSprite["PoliceHelicopterAnimated"] = 15] = "PoliceHelicopterAnimated";
    BlipSprite[BlipSprite["Jet"] = 16] = "Jet";
    BlipSprite[BlipSprite["Number1"] = 17] = "Number1";
    BlipSprite[BlipSprite["Number2"] = 18] = "Number2";
    BlipSprite[BlipSprite["Number3"] = 19] = "Number3";
    BlipSprite[BlipSprite["Number4"] = 20] = "Number4";
    BlipSprite[BlipSprite["Number5"] = 21] = "Number5";
    BlipSprite[BlipSprite["Number6"] = 22] = "Number6";
    BlipSprite[BlipSprite["Number7"] = 23] = "Number7";
    BlipSprite[BlipSprite["Number8"] = 24] = "Number8";
    BlipSprite[BlipSprite["Number9"] = 25] = "Number9";
    BlipSprite[BlipSprite["Number10"] = 26] = "Number10";
    BlipSprite[BlipSprite["GTAOCrew"] = 27] = "GTAOCrew";
    BlipSprite[BlipSprite["GTAOFriendly"] = 28] = "GTAOFriendly";
    BlipSprite[BlipSprite["Lift"] = 36] = "Lift";
    BlipSprite[BlipSprite["RaceFinish"] = 38] = "RaceFinish";
    BlipSprite[BlipSprite["Safehouse"] = 40] = "Safehouse";
    BlipSprite[BlipSprite["PoliceOfficer2"] = 41] = "PoliceOfficer2";
    BlipSprite[BlipSprite["PoliceCarDot"] = 42] = "PoliceCarDot";
    BlipSprite[BlipSprite["PoliceHelicopter"] = 43] = "PoliceHelicopter";
    BlipSprite[BlipSprite["ChatBubble"] = 47] = "ChatBubble";
    BlipSprite[BlipSprite["Garage2"] = 50] = "Garage2";
    BlipSprite[BlipSprite["Drugs"] = 51] = "Drugs";
    BlipSprite[BlipSprite["Store"] = 52] = "Store";
    BlipSprite[BlipSprite["PoliceCar"] = 56] = "PoliceCar";
    BlipSprite[BlipSprite["PolicePlayer"] = 58] = "PolicePlayer";
    BlipSprite[BlipSprite["PoliceStation"] = 60] = "PoliceStation";
    BlipSprite[BlipSprite["Hospital"] = 61] = "Hospital";
    BlipSprite[BlipSprite["Helicopter"] = 64] = "Helicopter";
    BlipSprite[BlipSprite["StrangersAndFreaks"] = 65] = "StrangersAndFreaks";
    BlipSprite[BlipSprite["ArmoredTruck"] = 66] = "ArmoredTruck";
    BlipSprite[BlipSprite["TowTruck"] = 68] = "TowTruck";
    BlipSprite[BlipSprite["Barber"] = 71] = "Barber";
    BlipSprite[BlipSprite["LosSantosCustoms"] = 72] = "LosSantosCustoms";
    BlipSprite[BlipSprite["Clothes"] = 73] = "Clothes";
    BlipSprite[BlipSprite["TattooParlor"] = 75] = "TattooParlor";
    BlipSprite[BlipSprite["Simeon"] = 76] = "Simeon";
    BlipSprite[BlipSprite["Lester"] = 77] = "Lester";
    BlipSprite[BlipSprite["Michael"] = 78] = "Michael";
    BlipSprite[BlipSprite["Trevor"] = 79] = "Trevor";
    BlipSprite[BlipSprite["Rampage"] = 84] = "Rampage";
    BlipSprite[BlipSprite["VinewoodTours"] = 85] = "VinewoodTours";
    BlipSprite[BlipSprite["Lamar"] = 86] = "Lamar";
    BlipSprite[BlipSprite["Franklin"] = 88] = "Franklin";
    BlipSprite[BlipSprite["Chinese"] = 89] = "Chinese";
    BlipSprite[BlipSprite["Airport"] = 90] = "Airport";
    BlipSprite[BlipSprite["Bar"] = 93] = "Bar";
    BlipSprite[BlipSprite["BaseJump"] = 94] = "BaseJump";
    BlipSprite[BlipSprite["CarWash"] = 100] = "CarWash";
    BlipSprite[BlipSprite["ComedyClub"] = 102] = "ComedyClub";
    BlipSprite[BlipSprite["Dart"] = 103] = "Dart";
    BlipSprite[BlipSprite["FIB"] = 106] = "FIB";
    BlipSprite[BlipSprite["DollarSign"] = 108] = "DollarSign";
    BlipSprite[BlipSprite["Golf"] = 109] = "Golf";
    BlipSprite[BlipSprite["AmmuNation"] = 110] = "AmmuNation";
    BlipSprite[BlipSprite["Exile"] = 112] = "Exile";
    BlipSprite[BlipSprite["ShootingRange"] = 119] = "ShootingRange";
    BlipSprite[BlipSprite["Solomon"] = 120] = "Solomon";
    BlipSprite[BlipSprite["StripClub"] = 121] = "StripClub";
    BlipSprite[BlipSprite["Tennis"] = 122] = "Tennis";
    BlipSprite[BlipSprite["Triathlon"] = 126] = "Triathlon";
    BlipSprite[BlipSprite["OffRoadRaceFinish"] = 127] = "OffRoadRaceFinish";
    BlipSprite[BlipSprite["Key"] = 134] = "Key";
    BlipSprite[BlipSprite["MovieTheater"] = 135] = "MovieTheater";
    BlipSprite[BlipSprite["Music"] = 136] = "Music";
    BlipSprite[BlipSprite["Marijuana"] = 140] = "Marijuana";
    BlipSprite[BlipSprite["Hunting"] = 141] = "Hunting";
    BlipSprite[BlipSprite["ArmsTraffickingGround"] = 147] = "ArmsTraffickingGround";
    BlipSprite[BlipSprite["Nigel"] = 149] = "Nigel";
    BlipSprite[BlipSprite["AssaultRifle"] = 150] = "AssaultRifle";
    BlipSprite[BlipSprite["Bat"] = 151] = "Bat";
    BlipSprite[BlipSprite["Grenade"] = 152] = "Grenade";
    BlipSprite[BlipSprite["Health"] = 153] = "Health";
    BlipSprite[BlipSprite["Knife"] = 154] = "Knife";
    BlipSprite[BlipSprite["Molotov"] = 155] = "Molotov";
    BlipSprite[BlipSprite["Pistol"] = 156] = "Pistol";
    BlipSprite[BlipSprite["RPG"] = 157] = "RPG";
    BlipSprite[BlipSprite["Shotgun"] = 158] = "Shotgun";
    BlipSprite[BlipSprite["SMG"] = 159] = "SMG";
    BlipSprite[BlipSprite["Sniper"] = 160] = "Sniper";
    BlipSprite[BlipSprite["SonicWave"] = 161] = "SonicWave";
    BlipSprite[BlipSprite["PointOfInterest"] = 162] = "PointOfInterest";
    BlipSprite[BlipSprite["GTAOPassive"] = 163] = "GTAOPassive";
    BlipSprite[BlipSprite["GTAOUsingMenu"] = 164] = "GTAOUsingMenu";
    BlipSprite[BlipSprite["Link"] = 171] = "Link";
    BlipSprite[BlipSprite["Minigun"] = 173] = "Minigun";
    BlipSprite[BlipSprite["GrenadeLauncher"] = 174] = "GrenadeLauncher";
    BlipSprite[BlipSprite["Armor"] = 175] = "Armor";
    BlipSprite[BlipSprite["Castle"] = 176] = "Castle";
    BlipSprite[BlipSprite["Camera"] = 184] = "Camera";
    BlipSprite[BlipSprite["Handcuffs"] = 188] = "Handcuffs";
    BlipSprite[BlipSprite["Yoga"] = 197] = "Yoga";
    BlipSprite[BlipSprite["Cab"] = 198] = "Cab";
    BlipSprite[BlipSprite["Number11"] = 199] = "Number11";
    BlipSprite[BlipSprite["Number12"] = 200] = "Number12";
    BlipSprite[BlipSprite["Number13"] = 201] = "Number13";
    BlipSprite[BlipSprite["Number14"] = 202] = "Number14";
    BlipSprite[BlipSprite["Number15"] = 203] = "Number15";
    BlipSprite[BlipSprite["Number16"] = 204] = "Number16";
    BlipSprite[BlipSprite["Shrink"] = 205] = "Shrink";
    BlipSprite[BlipSprite["Epsilon"] = 206] = "Epsilon";
    BlipSprite[BlipSprite["PersonalVehicleCar"] = 225] = "PersonalVehicleCar";
    BlipSprite[BlipSprite["PersonalVehicleBike"] = 226] = "PersonalVehicleBike";
    BlipSprite[BlipSprite["Custody"] = 237] = "Custody";
    BlipSprite[BlipSprite["ArmsTraffickingAir"] = 251] = "ArmsTraffickingAir";
    BlipSprite[BlipSprite["Fairground"] = 266] = "Fairground";
    BlipSprite[BlipSprite["PropertyManagement"] = 267] = "PropertyManagement";
    BlipSprite[BlipSprite["Altruist"] = 269] = "Altruist";
    BlipSprite[BlipSprite["Enemy"] = 270] = "Enemy";
    BlipSprite[BlipSprite["Chop"] = 273] = "Chop";
    BlipSprite[BlipSprite["Dead"] = 274] = "Dead";
    BlipSprite[BlipSprite["Hooker"] = 279] = "Hooker";
    BlipSprite[BlipSprite["Friend"] = 280] = "Friend";
    BlipSprite[BlipSprite["BountyHit"] = 303] = "BountyHit";
    BlipSprite[BlipSprite["GTAOMission"] = 304] = "GTAOMission";
    BlipSprite[BlipSprite["GTAOSurvival"] = 305] = "GTAOSurvival";
    BlipSprite[BlipSprite["CrateDrop"] = 306] = "CrateDrop";
    BlipSprite[BlipSprite["PlaneDrop"] = 307] = "PlaneDrop";
    BlipSprite[BlipSprite["Sub"] = 308] = "Sub";
    BlipSprite[BlipSprite["Race"] = 309] = "Race";
    BlipSprite[BlipSprite["Deathmatch"] = 310] = "Deathmatch";
    BlipSprite[BlipSprite["ArmWrestling"] = 311] = "ArmWrestling";
    BlipSprite[BlipSprite["AmmuNationShootingRange"] = 313] = "AmmuNationShootingRange";
    BlipSprite[BlipSprite["RaceAir"] = 314] = "RaceAir";
    BlipSprite[BlipSprite["RaceCar"] = 315] = "RaceCar";
    BlipSprite[BlipSprite["RaceSea"] = 316] = "RaceSea";
    BlipSprite[BlipSprite["GarbageTruck"] = 318] = "GarbageTruck";
    BlipSprite[BlipSprite["SafehouseForSale"] = 350] = "SafehouseForSale";
    BlipSprite[BlipSprite["Package"] = 351] = "Package";
    BlipSprite[BlipSprite["MartinMadrazo"] = 352] = "MartinMadrazo";
    BlipSprite[BlipSprite["EnemyHelicopter"] = 353] = "EnemyHelicopter";
    BlipSprite[BlipSprite["Boost"] = 354] = "Boost";
    BlipSprite[BlipSprite["Devin"] = 355] = "Devin";
    BlipSprite[BlipSprite["Marina"] = 356] = "Marina";
    BlipSprite[BlipSprite["Garage"] = 357] = "Garage";
    BlipSprite[BlipSprite["GolfFlag"] = 358] = "GolfFlag";
    BlipSprite[BlipSprite["Hangar"] = 359] = "Hangar";
    BlipSprite[BlipSprite["Helipad"] = 360] = "Helipad";
    BlipSprite[BlipSprite["JerryCan"] = 361] = "JerryCan";
    BlipSprite[BlipSprite["Masks"] = 362] = "Masks";
    BlipSprite[BlipSprite["HeistSetup"] = 363] = "HeistSetup";
    BlipSprite[BlipSprite["Incapacitated"] = 364] = "Incapacitated";
    BlipSprite[BlipSprite["PickupSpawn"] = 365] = "PickupSpawn";
    BlipSprite[BlipSprite["BoilerSuit"] = 366] = "BoilerSuit";
    BlipSprite[BlipSprite["Completed"] = 367] = "Completed";
    BlipSprite[BlipSprite["Rockets"] = 368] = "Rockets";
    BlipSprite[BlipSprite["GarageForSale"] = 369] = "GarageForSale";
    BlipSprite[BlipSprite["HelipadForSale"] = 370] = "HelipadForSale";
    BlipSprite[BlipSprite["MarinaForSale"] = 371] = "MarinaForSale";
    BlipSprite[BlipSprite["HangarForSale"] = 372] = "HangarForSale";
    BlipSprite[BlipSprite["Business"] = 374] = "Business";
    BlipSprite[BlipSprite["BusinessForSale"] = 375] = "BusinessForSale";
    BlipSprite[BlipSprite["RaceBike"] = 376] = "RaceBike";
    BlipSprite[BlipSprite["Parachute"] = 377] = "Parachute";
    BlipSprite[BlipSprite["TeamDeathmatch"] = 378] = "TeamDeathmatch";
    BlipSprite[BlipSprite["RaceFoot"] = 379] = "RaceFoot";
    BlipSprite[BlipSprite["VehicleDeathmatch"] = 380] = "VehicleDeathmatch";
    BlipSprite[BlipSprite["Barry"] = 381] = "Barry";
    BlipSprite[BlipSprite["Dom"] = 382] = "Dom";
    BlipSprite[BlipSprite["MaryAnn"] = 383] = "MaryAnn";
    BlipSprite[BlipSprite["Cletus"] = 384] = "Cletus";
    BlipSprite[BlipSprite["Josh"] = 385] = "Josh";
    BlipSprite[BlipSprite["Minute"] = 386] = "Minute";
    BlipSprite[BlipSprite["Omega"] = 387] = "Omega";
    BlipSprite[BlipSprite["Tonya"] = 388] = "Tonya";
    BlipSprite[BlipSprite["Paparazzo"] = 389] = "Paparazzo";
    BlipSprite[BlipSprite["Crosshair"] = 390] = "Crosshair";
    BlipSprite[BlipSprite["Creator"] = 398] = "Creator";
    BlipSprite[BlipSprite["CreatorDirection"] = 399] = "CreatorDirection";
    BlipSprite[BlipSprite["Abigail"] = 400] = "Abigail";
    BlipSprite[BlipSprite["Blimp"] = 401] = "Blimp";
    BlipSprite[BlipSprite["Repair"] = 402] = "Repair";
    BlipSprite[BlipSprite["Testosterone"] = 403] = "Testosterone";
    BlipSprite[BlipSprite["Dinghy"] = 404] = "Dinghy";
    BlipSprite[BlipSprite["Fanatic"] = 405] = "Fanatic";
    BlipSprite[BlipSprite["Information"] = 407] = "Information";
    BlipSprite[BlipSprite["CaptureBriefcase"] = 408] = "CaptureBriefcase";
    BlipSprite[BlipSprite["LastTeamStanding"] = 409] = "LastTeamStanding";
    BlipSprite[BlipSprite["Boat"] = 410] = "Boat";
    BlipSprite[BlipSprite["CaptureHouse"] = 411] = "CaptureHouse";
    BlipSprite[BlipSprite["JerryCan2"] = 415] = "JerryCan2";
    BlipSprite[BlipSprite["RP"] = 416] = "RP";
    BlipSprite[BlipSprite["GTAOPlayerSafehouse"] = 417] = "GTAOPlayerSafehouse";
    BlipSprite[BlipSprite["GTAOPlayerSafehouseDead"] = 418] = "GTAOPlayerSafehouseDead";
    BlipSprite[BlipSprite["CaptureAmericanFlag"] = 419] = "CaptureAmericanFlag";
    BlipSprite[BlipSprite["CaptureFlag"] = 420] = "CaptureFlag";
    BlipSprite[BlipSprite["Tank"] = 421] = "Tank";
    BlipSprite[BlipSprite["HelicopterAnimated"] = 422] = "HelicopterAnimated";
    BlipSprite[BlipSprite["Plane"] = 423] = "Plane";
    BlipSprite[BlipSprite["PlayerNoColor"] = 425] = "PlayerNoColor";
    BlipSprite[BlipSprite["GunCar"] = 426] = "GunCar";
    BlipSprite[BlipSprite["Speedboat"] = 427] = "Speedboat";
    BlipSprite[BlipSprite["Heist"] = 428] = "Heist";
    BlipSprite[BlipSprite["Stopwatch"] = 430] = "Stopwatch";
    BlipSprite[BlipSprite["DollarSignCircled"] = 431] = "DollarSignCircled";
    BlipSprite[BlipSprite["Crosshair2"] = 432] = "Crosshair2";
    BlipSprite[BlipSprite["DollarSignSquared"] = 434] = "DollarSignSquared";
})(BlipSprite = exports.BlipSprite || (exports.BlipSprite = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Bone.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Bone.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bone = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
var Bone;
(function (Bone) {
    Bone[Bone["SKEL_ROOT"] = 0] = "SKEL_ROOT";
    Bone[Bone["SKEL_Pelvis"] = 11816] = "SKEL_Pelvis";
    Bone[Bone["SKEL_L_Thigh"] = 58271] = "SKEL_L_Thigh";
    Bone[Bone["SKEL_L_Calf"] = 63931] = "SKEL_L_Calf";
    Bone[Bone["SKEL_L_Foot"] = 14201] = "SKEL_L_Foot";
    Bone[Bone["SKEL_L_Toe0"] = 2108] = "SKEL_L_Toe0";
    Bone[Bone["IK_L_Foot"] = 65245] = "IK_L_Foot";
    Bone[Bone["PH_L_Foot"] = 57717] = "PH_L_Foot";
    Bone[Bone["MH_L_Knee"] = 46078] = "MH_L_Knee";
    Bone[Bone["SKEL_R_Thigh"] = 51826] = "SKEL_R_Thigh";
    Bone[Bone["SKEL_R_Calf"] = 36864] = "SKEL_R_Calf";
    Bone[Bone["SKEL_R_Foot"] = 52301] = "SKEL_R_Foot";
    Bone[Bone["SKEL_R_Toe0"] = 20781] = "SKEL_R_Toe0";
    Bone[Bone["IK_R_Foot"] = 35502] = "IK_R_Foot";
    Bone[Bone["PH_R_Foot"] = 24806] = "PH_R_Foot";
    Bone[Bone["MH_R_Knee"] = 16335] = "MH_R_Knee";
    Bone[Bone["RB_L_ThighRoll"] = 23639] = "RB_L_ThighRoll";
    Bone[Bone["RB_R_ThighRoll"] = 6442] = "RB_R_ThighRoll";
    Bone[Bone["SKEL_Spine_Root"] = 57597] = "SKEL_Spine_Root";
    Bone[Bone["SKEL_Spine0"] = 23553] = "SKEL_Spine0";
    Bone[Bone["SKEL_Spine1"] = 24816] = "SKEL_Spine1";
    Bone[Bone["SKEL_Spine2"] = 24817] = "SKEL_Spine2";
    Bone[Bone["SKEL_Spine3"] = 24818] = "SKEL_Spine3";
    Bone[Bone["SKEL_L_Clavicle"] = 64729] = "SKEL_L_Clavicle";
    Bone[Bone["SKEL_L_UpperArm"] = 45509] = "SKEL_L_UpperArm";
    Bone[Bone["SKEL_L_Forearm"] = 61163] = "SKEL_L_Forearm";
    Bone[Bone["SKEL_L_Hand"] = 18905] = "SKEL_L_Hand";
    Bone[Bone["SKEL_L_Finger00"] = 26610] = "SKEL_L_Finger00";
    Bone[Bone["SKEL_L_Finger01"] = 4089] = "SKEL_L_Finger01";
    Bone[Bone["SKEL_L_Finger02"] = 4090] = "SKEL_L_Finger02";
    Bone[Bone["SKEL_L_Finger10"] = 26611] = "SKEL_L_Finger10";
    Bone[Bone["SKEL_L_Finger11"] = 4169] = "SKEL_L_Finger11";
    Bone[Bone["SKEL_L_Finger12"] = 4170] = "SKEL_L_Finger12";
    Bone[Bone["SKEL_L_Finger20"] = 26612] = "SKEL_L_Finger20";
    Bone[Bone["SKEL_L_Finger21"] = 4185] = "SKEL_L_Finger21";
    Bone[Bone["SKEL_L_Finger22"] = 4186] = "SKEL_L_Finger22";
    Bone[Bone["SKEL_L_Finger30"] = 26613] = "SKEL_L_Finger30";
    Bone[Bone["SKEL_L_Finger31"] = 4137] = "SKEL_L_Finger31";
    Bone[Bone["SKEL_L_Finger32"] = 4138] = "SKEL_L_Finger32";
    Bone[Bone["SKEL_L_Finger40"] = 26614] = "SKEL_L_Finger40";
    Bone[Bone["SKEL_L_Finger41"] = 4153] = "SKEL_L_Finger41";
    Bone[Bone["SKEL_L_Finger42"] = 4154] = "SKEL_L_Finger42";
    Bone[Bone["PH_L_Hand"] = 60309] = "PH_L_Hand";
    Bone[Bone["IK_L_Hand"] = 36029] = "IK_L_Hand";
    Bone[Bone["RB_L_ForeArmRoll"] = 61007] = "RB_L_ForeArmRoll";
    Bone[Bone["RB_L_ArmRoll"] = 5232] = "RB_L_ArmRoll";
    Bone[Bone["MH_L_Elbow"] = 22711] = "MH_L_Elbow";
    Bone[Bone["SKEL_R_Clavicle"] = 10706] = "SKEL_R_Clavicle";
    Bone[Bone["SKEL_R_UpperArm"] = 40269] = "SKEL_R_UpperArm";
    Bone[Bone["SKEL_R_Forearm"] = 28252] = "SKEL_R_Forearm";
    Bone[Bone["SKEL_R_Hand"] = 57005] = "SKEL_R_Hand";
    Bone[Bone["SKEL_R_Finger00"] = 58866] = "SKEL_R_Finger00";
    Bone[Bone["SKEL_R_Finger01"] = 64016] = "SKEL_R_Finger01";
    Bone[Bone["SKEL_R_Finger02"] = 64017] = "SKEL_R_Finger02";
    Bone[Bone["SKEL_R_Finger10"] = 58867] = "SKEL_R_Finger10";
    Bone[Bone["SKEL_R_Finger11"] = 64096] = "SKEL_R_Finger11";
    Bone[Bone["SKEL_R_Finger12"] = 64097] = "SKEL_R_Finger12";
    Bone[Bone["SKEL_R_Finger20"] = 58868] = "SKEL_R_Finger20";
    Bone[Bone["SKEL_R_Finger21"] = 64112] = "SKEL_R_Finger21";
    Bone[Bone["SKEL_R_Finger22"] = 64113] = "SKEL_R_Finger22";
    Bone[Bone["SKEL_R_Finger30"] = 58869] = "SKEL_R_Finger30";
    Bone[Bone["SKEL_R_Finger31"] = 64064] = "SKEL_R_Finger31";
    Bone[Bone["SKEL_R_Finger32"] = 64065] = "SKEL_R_Finger32";
    Bone[Bone["SKEL_R_Finger40"] = 58870] = "SKEL_R_Finger40";
    Bone[Bone["SKEL_R_Finger41"] = 64080] = "SKEL_R_Finger41";
    Bone[Bone["SKEL_R_Finger42"] = 64081] = "SKEL_R_Finger42";
    Bone[Bone["PH_R_Hand"] = 28422] = "PH_R_Hand";
    Bone[Bone["IK_R_Hand"] = 6286] = "IK_R_Hand";
    Bone[Bone["RB_R_ForeArmRoll"] = 43810] = "RB_R_ForeArmRoll";
    Bone[Bone["RB_R_ArmRoll"] = 37119] = "RB_R_ArmRoll";
    Bone[Bone["MH_R_Elbow"] = 2992] = "MH_R_Elbow";
    Bone[Bone["SKEL_Neck_1"] = 39317] = "SKEL_Neck_1";
    Bone[Bone["SKEL_Head"] = 31086] = "SKEL_Head";
    Bone[Bone["IK_Head"] = 12844] = "IK_Head";
    Bone[Bone["FACIAL_facialRoot"] = 65068] = "FACIAL_facialRoot";
    Bone[Bone["FB_L_Brow_Out_000"] = 58331] = "FB_L_Brow_Out_000";
    Bone[Bone["FB_L_Lid_Upper_000"] = 45750] = "FB_L_Lid_Upper_000";
    Bone[Bone["FB_L_Eye_000"] = 25260] = "FB_L_Eye_000";
    Bone[Bone["FB_L_CheekBone_000"] = 21550] = "FB_L_CheekBone_000";
    Bone[Bone["FB_L_Lip_Corner_000"] = 29868] = "FB_L_Lip_Corner_000";
    Bone[Bone["FB_R_Lid_Upper_000"] = 43536] = "FB_R_Lid_Upper_000";
    Bone[Bone["FB_R_Eye_000"] = 27474] = "FB_R_Eye_000";
    Bone[Bone["FB_R_CheekBone_000"] = 19336] = "FB_R_CheekBone_000";
    Bone[Bone["FB_R_Brow_Out_000"] = 1356] = "FB_R_Brow_Out_000";
    Bone[Bone["FB_R_Lip_Corner_000"] = 11174] = "FB_R_Lip_Corner_000";
    Bone[Bone["FB_Brow_Centre_000"] = 37193] = "FB_Brow_Centre_000";
    Bone[Bone["FB_UpperLipRoot_000"] = 20178] = "FB_UpperLipRoot_000";
    Bone[Bone["FB_UpperLip_000"] = 61839] = "FB_UpperLip_000";
    Bone[Bone["FB_L_Lip_Top_000"] = 20279] = "FB_L_Lip_Top_000";
    Bone[Bone["FB_R_Lip_Top_000"] = 17719] = "FB_R_Lip_Top_000";
    Bone[Bone["FB_Jaw_000"] = 46240] = "FB_Jaw_000";
    Bone[Bone["FB_LowerLipRoot_000"] = 17188] = "FB_LowerLipRoot_000";
    Bone[Bone["FB_LowerLip_000"] = 20623] = "FB_LowerLip_000";
    Bone[Bone["FB_L_Lip_Bot_000"] = 47419] = "FB_L_Lip_Bot_000";
    Bone[Bone["FB_R_Lip_Bot_000"] = 49979] = "FB_R_Lip_Bot_000";
    Bone[Bone["FB_Tongue_000"] = 47495] = "FB_Tongue_000";
    Bone[Bone["RB_Neck_1"] = 35731] = "RB_Neck_1";
    Bone[Bone["IK_Root"] = 56604] = "IK_Root";
})(Bone = exports.Bone || (exports.Bone = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/CameraShake.js":
/*!*********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/CameraShake.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraShake = void 0;
var CameraShake;
(function (CameraShake) {
    CameraShake[CameraShake["Hand"] = 0] = "Hand";
    CameraShake[CameraShake["SmallExplosion"] = 1] = "SmallExplosion";
    CameraShake[CameraShake["MediumExplosion"] = 2] = "MediumExplosion";
    CameraShake[CameraShake["LargeExplosion"] = 3] = "LargeExplosion";
    CameraShake[CameraShake["Jolt"] = 4] = "Jolt";
    CameraShake[CameraShake["Vibrate"] = 5] = "Vibrate";
    CameraShake[CameraShake["RoadVibration"] = 6] = "RoadVibration";
    CameraShake[CameraShake["Drunk"] = 7] = "Drunk";
    CameraShake[CameraShake["SkyDiving"] = 8] = "SkyDiving";
    CameraShake[CameraShake["FamilyDrugTrip"] = 9] = "FamilyDrugTrip";
    CameraShake[CameraShake["DeathFail"] = 10] = "DeathFail";
})(CameraShake = exports.CameraShake || (exports.CameraShake = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/CheckboxStyle.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/CheckboxStyle.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckboxStyle = void 0;
var CheckboxStyle;
(function (CheckboxStyle) {
    CheckboxStyle[CheckboxStyle["Tick"] = 0] = "Tick";
    CheckboxStyle[CheckboxStyle["Cross"] = 1] = "Cross";
})(CheckboxStyle = exports.CheckboxStyle || (exports.CheckboxStyle = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Checkpoint.js":
/*!********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Checkpoint.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckpointCustomIconStyle = exports.CheckpointIcon = void 0;
var CheckpointIcon;
(function (CheckpointIcon) {
    CheckpointIcon[CheckpointIcon["CylinderSingleArrow"] = 0] = "CylinderSingleArrow";
    CheckpointIcon[CheckpointIcon["CylinderDoubleArrow"] = 1] = "CylinderDoubleArrow";
    CheckpointIcon[CheckpointIcon["CylinderTripleArrow"] = 2] = "CylinderTripleArrow";
    CheckpointIcon[CheckpointIcon["CylinderCycleArrow"] = 3] = "CylinderCycleArrow";
    CheckpointIcon[CheckpointIcon["CylinderCheckerboard"] = 4] = "CylinderCheckerboard";
    CheckpointIcon[CheckpointIcon["CylinderSingleArrow2"] = 5] = "CylinderSingleArrow2";
    CheckpointIcon[CheckpointIcon["CylinderDoubleArrow2"] = 6] = "CylinderDoubleArrow2";
    CheckpointIcon[CheckpointIcon["CylinderTripleArrow2"] = 7] = "CylinderTripleArrow2";
    CheckpointIcon[CheckpointIcon["CylinderCycleArrow2"] = 8] = "CylinderCycleArrow2";
    CheckpointIcon[CheckpointIcon["CylinderCheckerboard2"] = 9] = "CylinderCheckerboard2";
    CheckpointIcon[CheckpointIcon["RingSingleArrow"] = 10] = "RingSingleArrow";
    CheckpointIcon[CheckpointIcon["RingDoubleArrow"] = 11] = "RingDoubleArrow";
    CheckpointIcon[CheckpointIcon["RingTripleArrow"] = 12] = "RingTripleArrow";
    CheckpointIcon[CheckpointIcon["RingCycleArrow"] = 13] = "RingCycleArrow";
    CheckpointIcon[CheckpointIcon["RingCheckerboard"] = 14] = "RingCheckerboard";
    CheckpointIcon[CheckpointIcon["SingleArrow"] = 15] = "SingleArrow";
    CheckpointIcon[CheckpointIcon["DoubleArrow"] = 16] = "DoubleArrow";
    CheckpointIcon[CheckpointIcon["TripleArrow"] = 17] = "TripleArrow";
    CheckpointIcon[CheckpointIcon["CycleArrow"] = 18] = "CycleArrow";
    CheckpointIcon[CheckpointIcon["Checkerboard"] = 19] = "Checkerboard";
    CheckpointIcon[CheckpointIcon["CylinderSingleArrow3"] = 20] = "CylinderSingleArrow3";
    CheckpointIcon[CheckpointIcon["CylinderDoubleArrow3"] = 21] = "CylinderDoubleArrow3";
    CheckpointIcon[CheckpointIcon["CylinderTripleArrow3"] = 22] = "CylinderTripleArrow3";
    CheckpointIcon[CheckpointIcon["CylinderCycleArrow3"] = 23] = "CylinderCycleArrow3";
    CheckpointIcon[CheckpointIcon["CylinderCheckerboard3"] = 24] = "CylinderCheckerboard3";
    CheckpointIcon[CheckpointIcon["CylinderSingleArrow4"] = 25] = "CylinderSingleArrow4";
    CheckpointIcon[CheckpointIcon["CylinderDoubleArrow4"] = 26] = "CylinderDoubleArrow4";
    CheckpointIcon[CheckpointIcon["CylinderTripleArrow4"] = 27] = "CylinderTripleArrow4";
    CheckpointIcon[CheckpointIcon["CylinderCycleArrow4"] = 28] = "CylinderCycleArrow4";
    CheckpointIcon[CheckpointIcon["CylinderCheckerboard4"] = 29] = "CylinderCheckerboard4";
    CheckpointIcon[CheckpointIcon["CylinderSingleArrow5"] = 30] = "CylinderSingleArrow5";
    CheckpointIcon[CheckpointIcon["CylinderDoubleArrow5"] = 31] = "CylinderDoubleArrow5";
    CheckpointIcon[CheckpointIcon["CylinderTripleArrow5"] = 32] = "CylinderTripleArrow5";
    CheckpointIcon[CheckpointIcon["CylinderCycleArrow5"] = 33] = "CylinderCycleArrow5";
    CheckpointIcon[CheckpointIcon["CylinderCheckerboard5"] = 34] = "CylinderCheckerboard5";
    CheckpointIcon[CheckpointIcon["RingPlaneUp"] = 35] = "RingPlaneUp";
    CheckpointIcon[CheckpointIcon["RingPlaneLeft"] = 36] = "RingPlaneLeft";
    CheckpointIcon[CheckpointIcon["RingPlaneRight"] = 37] = "RingPlaneRight";
    CheckpointIcon[CheckpointIcon["RingPlaneDown"] = 38] = "RingPlaneDown";
    CheckpointIcon[CheckpointIcon["Empty"] = 39] = "Empty";
    CheckpointIcon[CheckpointIcon["Ring"] = 40] = "Ring";
    CheckpointIcon[CheckpointIcon["Empty2"] = 41] = "Empty2";
    // CylinderCustomShape,
    // CylinderCustomShape2,
    // CylinderCustomShape3,
    CheckpointIcon[CheckpointIcon["Cyclinder"] = 45] = "Cyclinder";
    CheckpointIcon[CheckpointIcon["Cyclinder2"] = 46] = "Cyclinder2";
    CheckpointIcon[CheckpointIcon["Cyclinder3"] = 47] = "Cyclinder3";
})(CheckpointIcon = exports.CheckpointIcon || (exports.CheckpointIcon = {}));
var CheckpointCustomIconStyle;
(function (CheckpointCustomIconStyle) {
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["Number"] = 0] = "Number";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["SingleArrow"] = 1] = "SingleArrow";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["DoubleArrow"] = 2] = "DoubleArrow";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["TripleArrow"] = 3] = "TripleArrow";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["Ring"] = 4] = "Ring";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["CycleArrow"] = 5] = "CycleArrow";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["Ring2"] = 6] = "Ring2";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["RingPointer"] = 7] = "RingPointer";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["SegmentedRing"] = 8] = "SegmentedRing";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["Sphere"] = 9] = "Sphere";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["Dollar"] = 10] = "Dollar";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["QuintupleLines"] = 11] = "QuintupleLines";
    CheckpointCustomIconStyle[CheckpointCustomIconStyle["BeastIcon"] = 12] = "BeastIcon";
})(CheckpointCustomIconStyle = exports.CheckpointCustomIconStyle || (exports.CheckpointCustomIconStyle = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/CloudHat.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/CloudHat.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloudHat = void 0;
/**
 * List of cloud hats. Used to change cloud patterns
 */
var CloudHat;
(function (CloudHat) {
    CloudHat[CloudHat["Unknown"] = 1] = "Unknown";
    CloudHat[CloudHat["Altostratus"] = 2] = "Altostratus";
    CloudHat[CloudHat["Cirrus"] = 3] = "Cirrus";
    CloudHat[CloudHat["Cirrocumulus"] = 4] = "Cirrocumulus";
    CloudHat[CloudHat["Clear"] = 5] = "Clear";
    CloudHat[CloudHat["Cloudy"] = 6] = "Cloudy";
    CloudHat[CloudHat["Contrails"] = 7] = "Contrails";
    CloudHat[CloudHat["Horizon"] = 8] = "Horizon";
    CloudHat[CloudHat["HorizonBand1"] = 9] = "HorizonBand1";
    CloudHat[CloudHat["HorizonBand2"] = 10] = "HorizonBand2";
    CloudHat[CloudHat["HorizonBand3"] = 11] = "HorizonBand3";
    CloudHat[CloudHat["Horsey"] = 12] = "Horsey";
    CloudHat[CloudHat["Nimbus"] = 13] = "Nimbus";
    CloudHat[CloudHat["Puffs"] = 14] = "Puffs";
    CloudHat[CloudHat["Rain"] = 15] = "Rain";
    CloudHat[CloudHat["Snowy"] = 16] = "Snowy";
    CloudHat[CloudHat["Stormy"] = 17] = "Stormy";
    CloudHat[CloudHat["Stratoscumulus"] = 18] = "Stratoscumulus";
    CloudHat[CloudHat["Stripey"] = 19] = "Stripey";
    CloudHat[CloudHat["Shower"] = 20] = "Shower";
    CloudHat[CloudHat["Wispy"] = 21] = "Wispy";
})(CloudHat = exports.CloudHat || (exports.CloudHat = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Control.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Control.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Control = void 0;
var Control;
(function (Control) {
    Control[Control["NextCamera"] = 0] = "NextCamera";
    Control[Control["LookLeftRight"] = 1] = "LookLeftRight";
    Control[Control["LookUpDown"] = 2] = "LookUpDown";
    Control[Control["LookUpOnly"] = 3] = "LookUpOnly";
    Control[Control["LookDownOnly"] = 4] = "LookDownOnly";
    Control[Control["LookLeftOnly"] = 5] = "LookLeftOnly";
    Control[Control["LookRightOnly"] = 6] = "LookRightOnly";
    Control[Control["CinematicSlowMo"] = 7] = "CinematicSlowMo";
    Control[Control["FlyUpDown"] = 8] = "FlyUpDown";
    Control[Control["FlyLeftRight"] = 9] = "FlyLeftRight";
    Control[Control["ScriptedFlyZUp"] = 10] = "ScriptedFlyZUp";
    Control[Control["ScriptedFlyZDown"] = 11] = "ScriptedFlyZDown";
    Control[Control["WeaponWheelUpDown"] = 12] = "WeaponWheelUpDown";
    Control[Control["WeaponWheelLeftRight"] = 13] = "WeaponWheelLeftRight";
    Control[Control["WeaponWheelNext"] = 14] = "WeaponWheelNext";
    Control[Control["WeaponWheelPrev"] = 15] = "WeaponWheelPrev";
    Control[Control["SelectNextWeapon"] = 16] = "SelectNextWeapon";
    Control[Control["SelectPrevWeapon"] = 17] = "SelectPrevWeapon";
    Control[Control["SkipCutscene"] = 18] = "SkipCutscene";
    Control[Control["CharacterWheel"] = 19] = "CharacterWheel";
    Control[Control["MultiplayerInfo"] = 20] = "MultiplayerInfo";
    Control[Control["Sprint"] = 21] = "Sprint";
    Control[Control["Jump"] = 22] = "Jump";
    Control[Control["Enter"] = 23] = "Enter";
    Control[Control["Attack"] = 24] = "Attack";
    Control[Control["Aim"] = 25] = "Aim";
    Control[Control["LookBehind"] = 26] = "LookBehind";
    Control[Control["Phone"] = 27] = "Phone";
    Control[Control["SpecialAbility"] = 28] = "SpecialAbility";
    Control[Control["SpecialAbilitySecondary"] = 29] = "SpecialAbilitySecondary";
    Control[Control["MoveLeftRight"] = 30] = "MoveLeftRight";
    Control[Control["MoveUpDown"] = 31] = "MoveUpDown";
    Control[Control["MoveUpOnly"] = 32] = "MoveUpOnly";
    Control[Control["MoveDownOnly"] = 33] = "MoveDownOnly";
    Control[Control["MoveLeftOnly"] = 34] = "MoveLeftOnly";
    Control[Control["MoveRightOnly"] = 35] = "MoveRightOnly";
    Control[Control["Duck"] = 36] = "Duck";
    Control[Control["SelectWeapon"] = 37] = "SelectWeapon";
    Control[Control["Pickup"] = 38] = "Pickup";
    Control[Control["SniperZoom"] = 39] = "SniperZoom";
    Control[Control["SniperZoomInOnly"] = 40] = "SniperZoomInOnly";
    Control[Control["SniperZoomOutOnly"] = 41] = "SniperZoomOutOnly";
    Control[Control["SniperZoomInSecondary"] = 42] = "SniperZoomInSecondary";
    Control[Control["SniperZoomOutSecondary"] = 43] = "SniperZoomOutSecondary";
    Control[Control["Cover"] = 44] = "Cover";
    Control[Control["Reload"] = 45] = "Reload";
    Control[Control["Talk"] = 46] = "Talk";
    Control[Control["Detonate"] = 47] = "Detonate";
    Control[Control["HUDSpecial"] = 48] = "HUDSpecial";
    Control[Control["Arrest"] = 49] = "Arrest";
    Control[Control["AccurateAim"] = 50] = "AccurateAim";
    Control[Control["Context"] = 51] = "Context";
    Control[Control["ContextSecondary"] = 52] = "ContextSecondary";
    Control[Control["WeaponSpecial"] = 53] = "WeaponSpecial";
    Control[Control["WeaponSpecial2"] = 54] = "WeaponSpecial2";
    Control[Control["Dive"] = 55] = "Dive";
    Control[Control["DropWeapon"] = 56] = "DropWeapon";
    Control[Control["DropAmmo"] = 57] = "DropAmmo";
    Control[Control["ThrowGrenade"] = 58] = "ThrowGrenade";
    Control[Control["VehicleMoveLeftRight"] = 59] = "VehicleMoveLeftRight";
    Control[Control["VehicleMoveUpDown"] = 60] = "VehicleMoveUpDown";
    Control[Control["VehicleMoveUpOnly"] = 61] = "VehicleMoveUpOnly";
    Control[Control["VehicleMoveDownOnly"] = 62] = "VehicleMoveDownOnly";
    Control[Control["VehicleMoveLeftOnly"] = 63] = "VehicleMoveLeftOnly";
    Control[Control["VehicleMoveRightOnly"] = 64] = "VehicleMoveRightOnly";
    Control[Control["VehicleSpecial"] = 65] = "VehicleSpecial";
    Control[Control["VehicleGunLeftRight"] = 66] = "VehicleGunLeftRight";
    Control[Control["VehicleGunUpDown"] = 67] = "VehicleGunUpDown";
    Control[Control["VehicleAim"] = 68] = "VehicleAim";
    Control[Control["VehicleAttack"] = 69] = "VehicleAttack";
    Control[Control["VehicleAttack2"] = 70] = "VehicleAttack2";
    Control[Control["VehicleAccelerate"] = 71] = "VehicleAccelerate";
    Control[Control["VehicleBrake"] = 72] = "VehicleBrake";
    Control[Control["VehicleDuck"] = 73] = "VehicleDuck";
    Control[Control["VehicleHeadlight"] = 74] = "VehicleHeadlight";
    Control[Control["VehicleExit"] = 75] = "VehicleExit";
    Control[Control["VehicleHandbrake"] = 76] = "VehicleHandbrake";
    Control[Control["VehicleHotwireLeft"] = 77] = "VehicleHotwireLeft";
    Control[Control["VehicleHotwireRight"] = 78] = "VehicleHotwireRight";
    Control[Control["VehicleLookBehind"] = 79] = "VehicleLookBehind";
    Control[Control["VehicleCinCam"] = 80] = "VehicleCinCam";
    Control[Control["VehicleNextRadio"] = 81] = "VehicleNextRadio";
    Control[Control["VehiclePrevRadio"] = 82] = "VehiclePrevRadio";
    Control[Control["VehicleNextRadioTrack"] = 83] = "VehicleNextRadioTrack";
    Control[Control["VehiclePrevRadioTrack"] = 84] = "VehiclePrevRadioTrack";
    Control[Control["VehicleRadioWheel"] = 85] = "VehicleRadioWheel";
    Control[Control["VehicleHorn"] = 86] = "VehicleHorn";
    Control[Control["VehicleFlyThrottleUp"] = 87] = "VehicleFlyThrottleUp";
    Control[Control["VehicleFlyThrottleDown"] = 88] = "VehicleFlyThrottleDown";
    Control[Control["VehicleFlyYawLeft"] = 89] = "VehicleFlyYawLeft";
    Control[Control["VehicleFlyYawRight"] = 90] = "VehicleFlyYawRight";
    Control[Control["VehiclePassengerAim"] = 91] = "VehiclePassengerAim";
    Control[Control["VehiclePassengerAttack"] = 92] = "VehiclePassengerAttack";
    Control[Control["VehicleSpecialAbilityFranklin"] = 93] = "VehicleSpecialAbilityFranklin";
    Control[Control["VehicleStuntUpDown"] = 94] = "VehicleStuntUpDown";
    Control[Control["VehicleCinematicUpDown"] = 95] = "VehicleCinematicUpDown";
    Control[Control["VehicleCinematicUpOnly"] = 96] = "VehicleCinematicUpOnly";
    Control[Control["VehicleCinematicDownOnly"] = 97] = "VehicleCinematicDownOnly";
    Control[Control["VehicleCinematicLeftRight"] = 98] = "VehicleCinematicLeftRight";
    Control[Control["VehicleSelectNextWeapon"] = 99] = "VehicleSelectNextWeapon";
    Control[Control["VehicleSelectPrevWeapon"] = 100] = "VehicleSelectPrevWeapon";
    Control[Control["VehicleRoof"] = 101] = "VehicleRoof";
    Control[Control["VehicleJump"] = 102] = "VehicleJump";
    Control[Control["VehicleGrapplingHook"] = 103] = "VehicleGrapplingHook";
    Control[Control["VehicleShuffle"] = 104] = "VehicleShuffle";
    Control[Control["VehicleDropProjectile"] = 105] = "VehicleDropProjectile";
    Control[Control["VehicleMouseControlOverride"] = 106] = "VehicleMouseControlOverride";
    Control[Control["VehicleFlyRollLeftRight"] = 107] = "VehicleFlyRollLeftRight";
    Control[Control["VehicleFlyRollLeftOnly"] = 108] = "VehicleFlyRollLeftOnly";
    Control[Control["VehicleFlyRollRightOnly"] = 109] = "VehicleFlyRollRightOnly";
    Control[Control["VehicleFlyPitchUpDown"] = 110] = "VehicleFlyPitchUpDown";
    Control[Control["VehicleFlyPitchUpOnly"] = 111] = "VehicleFlyPitchUpOnly";
    Control[Control["VehicleFlyPitchDownOnly"] = 112] = "VehicleFlyPitchDownOnly";
    Control[Control["VehicleFlyUnderCarriage"] = 113] = "VehicleFlyUnderCarriage";
    Control[Control["VehicleFlyAttack"] = 114] = "VehicleFlyAttack";
    Control[Control["VehicleFlySelectNextWeapon"] = 115] = "VehicleFlySelectNextWeapon";
    Control[Control["VehicleFlySelectPrevWeapon"] = 116] = "VehicleFlySelectPrevWeapon";
    Control[Control["VehicleFlySelectTargetLeft"] = 117] = "VehicleFlySelectTargetLeft";
    Control[Control["VehicleFlySelectTargetRight"] = 118] = "VehicleFlySelectTargetRight";
    Control[Control["VehicleFlyVerticalFlightMode"] = 119] = "VehicleFlyVerticalFlightMode";
    Control[Control["VehicleFlyDuck"] = 120] = "VehicleFlyDuck";
    Control[Control["VehicleFlyAttackCamera"] = 121] = "VehicleFlyAttackCamera";
    Control[Control["VehicleFlyMouseControlOverride"] = 122] = "VehicleFlyMouseControlOverride";
    Control[Control["VehicleSubTurnLeftRight"] = 123] = "VehicleSubTurnLeftRight";
    Control[Control["VehicleSubTurnLeftOnly"] = 124] = "VehicleSubTurnLeftOnly";
    Control[Control["VehicleSubTurnRightOnly"] = 125] = "VehicleSubTurnRightOnly";
    Control[Control["VehicleSubPitchUpDown"] = 126] = "VehicleSubPitchUpDown";
    Control[Control["VehicleSubPitchUpOnly"] = 127] = "VehicleSubPitchUpOnly";
    Control[Control["VehicleSubPitchDownOnly"] = 128] = "VehicleSubPitchDownOnly";
    Control[Control["VehicleSubThrottleUp"] = 129] = "VehicleSubThrottleUp";
    Control[Control["VehicleSubThrottleDown"] = 130] = "VehicleSubThrottleDown";
    Control[Control["VehicleSubAscend"] = 131] = "VehicleSubAscend";
    Control[Control["VehicleSubDescend"] = 132] = "VehicleSubDescend";
    Control[Control["VehicleSubTurnHardLeft"] = 133] = "VehicleSubTurnHardLeft";
    Control[Control["VehicleSubTurnHardRight"] = 134] = "VehicleSubTurnHardRight";
    Control[Control["VehicleSubMouseControlOverride"] = 135] = "VehicleSubMouseControlOverride";
    Control[Control["VehiclePushbikePedal"] = 136] = "VehiclePushbikePedal";
    Control[Control["VehiclePushbikeSprint"] = 137] = "VehiclePushbikeSprint";
    Control[Control["VehiclePushbikeFrontBrake"] = 138] = "VehiclePushbikeFrontBrake";
    Control[Control["VehiclePushbikeRearBrake"] = 139] = "VehiclePushbikeRearBrake";
    Control[Control["MeleeAttackLight"] = 140] = "MeleeAttackLight";
    Control[Control["MeleeAttackHeavy"] = 141] = "MeleeAttackHeavy";
    Control[Control["MeleeAttackAlternate"] = 142] = "MeleeAttackAlternate";
    Control[Control["MeleeBlock"] = 143] = "MeleeBlock";
    Control[Control["ParachuteDeploy"] = 144] = "ParachuteDeploy";
    Control[Control["ParachuteDetach"] = 145] = "ParachuteDetach";
    Control[Control["ParachuteTurnLeftRight"] = 146] = "ParachuteTurnLeftRight";
    Control[Control["ParachuteTurnLeftOnly"] = 147] = "ParachuteTurnLeftOnly";
    Control[Control["ParachuteTurnRightOnly"] = 148] = "ParachuteTurnRightOnly";
    Control[Control["ParachutePitchUpDown"] = 149] = "ParachutePitchUpDown";
    Control[Control["ParachutePitchUpOnly"] = 150] = "ParachutePitchUpOnly";
    Control[Control["ParachutePitchDownOnly"] = 151] = "ParachutePitchDownOnly";
    Control[Control["ParachuteBrakeLeft"] = 152] = "ParachuteBrakeLeft";
    Control[Control["ParachuteBrakeRight"] = 153] = "ParachuteBrakeRight";
    Control[Control["ParachuteSmoke"] = 154] = "ParachuteSmoke";
    Control[Control["ParachutePrecisionLanding"] = 155] = "ParachutePrecisionLanding";
    Control[Control["Map"] = 156] = "Map";
    Control[Control["SelectWeaponUnarmed"] = 157] = "SelectWeaponUnarmed";
    Control[Control["SelectWeaponMelee"] = 158] = "SelectWeaponMelee";
    Control[Control["SelectWeaponHandgun"] = 159] = "SelectWeaponHandgun";
    Control[Control["SelectWeaponShotgun"] = 160] = "SelectWeaponShotgun";
    Control[Control["SelectWeaponSmg"] = 161] = "SelectWeaponSmg";
    Control[Control["SelectWeaponAutoRifle"] = 162] = "SelectWeaponAutoRifle";
    Control[Control["SelectWeaponSniper"] = 163] = "SelectWeaponSniper";
    Control[Control["SelectWeaponHeavy"] = 164] = "SelectWeaponHeavy";
    Control[Control["SelectWeaponSpecial"] = 165] = "SelectWeaponSpecial";
    Control[Control["SelectCharacterMichael"] = 166] = "SelectCharacterMichael";
    Control[Control["SelectCharacterFranklin"] = 167] = "SelectCharacterFranklin";
    Control[Control["SelectCharacterTrevor"] = 168] = "SelectCharacterTrevor";
    Control[Control["SelectCharacterMultiplayer"] = 169] = "SelectCharacterMultiplayer";
    Control[Control["SaveReplayClip"] = 170] = "SaveReplayClip";
    Control[Control["SpecialAbilityPC"] = 171] = "SpecialAbilityPC";
    Control[Control["PhoneUp"] = 172] = "PhoneUp";
    Control[Control["PhoneDown"] = 173] = "PhoneDown";
    Control[Control["PhoneLeft"] = 174] = "PhoneLeft";
    Control[Control["PhoneRight"] = 175] = "PhoneRight";
    Control[Control["PhoneSelect"] = 176] = "PhoneSelect";
    Control[Control["PhoneCancel"] = 177] = "PhoneCancel";
    Control[Control["PhoneOption"] = 178] = "PhoneOption";
    Control[Control["PhoneExtraOption"] = 179] = "PhoneExtraOption";
    Control[Control["PhoneScrollForward"] = 180] = "PhoneScrollForward";
    Control[Control["PhoneScrollBackward"] = 181] = "PhoneScrollBackward";
    Control[Control["PhoneCameraFocusLock"] = 182] = "PhoneCameraFocusLock";
    Control[Control["PhoneCameraGrid"] = 183] = "PhoneCameraGrid";
    Control[Control["PhoneCameraSelfie"] = 184] = "PhoneCameraSelfie";
    Control[Control["PhoneCameraDOF"] = 185] = "PhoneCameraDOF";
    Control[Control["PhoneCameraExpression"] = 186] = "PhoneCameraExpression";
    Control[Control["FrontendDown"] = 187] = "FrontendDown";
    Control[Control["FrontendUp"] = 188] = "FrontendUp";
    Control[Control["FrontendLeft"] = 189] = "FrontendLeft";
    Control[Control["FrontendRight"] = 190] = "FrontendRight";
    Control[Control["FrontendRdown"] = 191] = "FrontendRdown";
    Control[Control["FrontendRup"] = 192] = "FrontendRup";
    Control[Control["FrontendRleft"] = 193] = "FrontendRleft";
    Control[Control["FrontendRright"] = 194] = "FrontendRright";
    Control[Control["FrontendAxisX"] = 195] = "FrontendAxisX";
    Control[Control["FrontendAxisY"] = 196] = "FrontendAxisY";
    Control[Control["FrontendRightAxisX"] = 197] = "FrontendRightAxisX";
    Control[Control["FrontendRightAxisY"] = 198] = "FrontendRightAxisY";
    Control[Control["FrontendPause"] = 199] = "FrontendPause";
    Control[Control["FrontendPauseAlternate"] = 200] = "FrontendPauseAlternate";
    Control[Control["FrontendAccept"] = 201] = "FrontendAccept";
    Control[Control["FrontendCancel"] = 202] = "FrontendCancel";
    Control[Control["FrontendX"] = 203] = "FrontendX";
    Control[Control["FrontendY"] = 204] = "FrontendY";
    Control[Control["FrontendLb"] = 205] = "FrontendLb";
    Control[Control["FrontendRb"] = 206] = "FrontendRb";
    Control[Control["FrontendLt"] = 207] = "FrontendLt";
    Control[Control["FrontendRt"] = 208] = "FrontendRt";
    Control[Control["FrontendLs"] = 209] = "FrontendLs";
    Control[Control["FrontendRs"] = 210] = "FrontendRs";
    Control[Control["FrontendLeaderboard"] = 211] = "FrontendLeaderboard";
    Control[Control["FrontendSocialClub"] = 212] = "FrontendSocialClub";
    Control[Control["FrontendSocialClubSecondary"] = 213] = "FrontendSocialClubSecondary";
    Control[Control["FrontendDelete"] = 214] = "FrontendDelete";
    Control[Control["FrontendEndscreenAccept"] = 215] = "FrontendEndscreenAccept";
    Control[Control["FrontendEndscreenExpand"] = 216] = "FrontendEndscreenExpand";
    Control[Control["FrontendSelect"] = 217] = "FrontendSelect";
    Control[Control["ScriptLeftAxisX"] = 218] = "ScriptLeftAxisX";
    Control[Control["ScriptLeftAxisY"] = 219] = "ScriptLeftAxisY";
    Control[Control["ScriptRightAxisX"] = 220] = "ScriptRightAxisX";
    Control[Control["ScriptRightAxisY"] = 221] = "ScriptRightAxisY";
    Control[Control["ScriptRUp"] = 222] = "ScriptRUp";
    Control[Control["ScriptRDown"] = 223] = "ScriptRDown";
    Control[Control["ScriptRLeft"] = 224] = "ScriptRLeft";
    Control[Control["ScriptRRight"] = 225] = "ScriptRRight";
    Control[Control["ScriptLB"] = 226] = "ScriptLB";
    Control[Control["ScriptRB"] = 227] = "ScriptRB";
    Control[Control["ScriptLT"] = 228] = "ScriptLT";
    Control[Control["ScriptRT"] = 229] = "ScriptRT";
    Control[Control["ScriptLS"] = 230] = "ScriptLS";
    Control[Control["ScriptRS"] = 231] = "ScriptRS";
    Control[Control["ScriptPadUp"] = 232] = "ScriptPadUp";
    Control[Control["ScriptPadDown"] = 233] = "ScriptPadDown";
    Control[Control["ScriptPadLeft"] = 234] = "ScriptPadLeft";
    Control[Control["ScriptPadRight"] = 235] = "ScriptPadRight";
    Control[Control["ScriptSelect"] = 236] = "ScriptSelect";
    Control[Control["CursorAccept"] = 237] = "CursorAccept";
    Control[Control["CursorCancel"] = 238] = "CursorCancel";
    Control[Control["CursorX"] = 239] = "CursorX";
    Control[Control["CursorY"] = 240] = "CursorY";
    Control[Control["CursorScrollUp"] = 241] = "CursorScrollUp";
    Control[Control["CursorScrollDown"] = 242] = "CursorScrollDown";
    Control[Control["EnterCheatCode"] = 243] = "EnterCheatCode";
    Control[Control["InteractionMenu"] = 244] = "InteractionMenu";
    Control[Control["MpTextChatAll"] = 245] = "MpTextChatAll";
    Control[Control["MpTextChatTeam"] = 246] = "MpTextChatTeam";
    Control[Control["MpTextChatFriends"] = 247] = "MpTextChatFriends";
    Control[Control["MpTextChatCrew"] = 248] = "MpTextChatCrew";
    Control[Control["PushToTalk"] = 249] = "PushToTalk";
    Control[Control["CreatorLS"] = 250] = "CreatorLS";
    Control[Control["CreatorRS"] = 251] = "CreatorRS";
    Control[Control["CreatorLT"] = 252] = "CreatorLT";
    Control[Control["CreatorRT"] = 253] = "CreatorRT";
    Control[Control["CreatorMenuToggle"] = 254] = "CreatorMenuToggle";
    Control[Control["CreatorAccept"] = 255] = "CreatorAccept";
    Control[Control["CreatorDelete"] = 256] = "CreatorDelete";
    Control[Control["Attack2"] = 257] = "Attack2";
    Control[Control["RappelJump"] = 258] = "RappelJump";
    Control[Control["RappelLongJump"] = 259] = "RappelLongJump";
    Control[Control["RappelSmashWindow"] = 260] = "RappelSmashWindow";
    Control[Control["PrevWeapon"] = 261] = "PrevWeapon";
    Control[Control["NextWeapon"] = 262] = "NextWeapon";
    Control[Control["MeleeAttack1"] = 263] = "MeleeAttack1";
    Control[Control["MeleeAttack2"] = 264] = "MeleeAttack2";
    Control[Control["Whistle"] = 265] = "Whistle";
    Control[Control["MoveLeft"] = 266] = "MoveLeft";
    Control[Control["MoveRight"] = 267] = "MoveRight";
    Control[Control["MoveUp"] = 268] = "MoveUp";
    Control[Control["MoveDown"] = 269] = "MoveDown";
    Control[Control["LookLeft"] = 270] = "LookLeft";
    Control[Control["LookRight"] = 271] = "LookRight";
    Control[Control["LookUp"] = 272] = "LookUp";
    Control[Control["LookDown"] = 273] = "LookDown";
    Control[Control["SniperZoomIn"] = 274] = "SniperZoomIn";
    Control[Control["SniperZoomOut"] = 275] = "SniperZoomOut";
    Control[Control["SniperZoomInAlternate"] = 276] = "SniperZoomInAlternate";
    Control[Control["SniperZoomOutAlternate"] = 277] = "SniperZoomOutAlternate";
    Control[Control["VehicleMoveLeft"] = 278] = "VehicleMoveLeft";
    Control[Control["VehicleMoveRight"] = 279] = "VehicleMoveRight";
    Control[Control["VehicleMoveUp"] = 280] = "VehicleMoveUp";
    Control[Control["VehicleMoveDown"] = 281] = "VehicleMoveDown";
    Control[Control["VehicleGunLeft"] = 282] = "VehicleGunLeft";
    Control[Control["VehicleGunRight"] = 283] = "VehicleGunRight";
    Control[Control["VehicleGunUp"] = 284] = "VehicleGunUp";
    Control[Control["VehicleGunDown"] = 285] = "VehicleGunDown";
    Control[Control["VehicleLookLeft"] = 286] = "VehicleLookLeft";
    Control[Control["VehicleLookRight"] = 287] = "VehicleLookRight";
    Control[Control["ReplayStartStopRecording"] = 288] = "ReplayStartStopRecording";
    Control[Control["ReplayStartStopRecordingSecondary"] = 289] = "ReplayStartStopRecordingSecondary";
    Control[Control["ScaledLookLeftRight"] = 290] = "ScaledLookLeftRight";
    Control[Control["ScaledLookUpDown"] = 291] = "ScaledLookUpDown";
    Control[Control["ScaledLookUpOnly"] = 292] = "ScaledLookUpOnly";
    Control[Control["ScaledLookDownOnly"] = 293] = "ScaledLookDownOnly";
    Control[Control["ScaledLookLeftOnly"] = 294] = "ScaledLookLeftOnly";
    Control[Control["ScaledLookRightOnly"] = 295] = "ScaledLookRightOnly";
    Control[Control["ReplayMarkerDelete"] = 296] = "ReplayMarkerDelete";
    Control[Control["ReplayClipDelete"] = 297] = "ReplayClipDelete";
    Control[Control["ReplayPause"] = 298] = "ReplayPause";
    Control[Control["ReplayRewind"] = 299] = "ReplayRewind";
    Control[Control["ReplayFfwd"] = 300] = "ReplayFfwd";
    Control[Control["ReplayNewmarker"] = 301] = "ReplayNewmarker";
    Control[Control["ReplayRecord"] = 302] = "ReplayRecord";
    Control[Control["ReplayScreenshot"] = 303] = "ReplayScreenshot";
    Control[Control["ReplayHidehud"] = 304] = "ReplayHidehud";
    Control[Control["ReplayStartpoint"] = 305] = "ReplayStartpoint";
    Control[Control["ReplayEndpoint"] = 306] = "ReplayEndpoint";
    Control[Control["ReplayAdvance"] = 307] = "ReplayAdvance";
    Control[Control["ReplayBack"] = 308] = "ReplayBack";
    Control[Control["ReplayTools"] = 309] = "ReplayTools";
    Control[Control["ReplayRestart"] = 310] = "ReplayRestart";
    Control[Control["ReplayShowhotkey"] = 311] = "ReplayShowhotkey";
    Control[Control["ReplayCycleMarkerLeft"] = 312] = "ReplayCycleMarkerLeft";
    Control[Control["ReplayCycleMarkerRight"] = 313] = "ReplayCycleMarkerRight";
    Control[Control["ReplayFOVIncrease"] = 314] = "ReplayFOVIncrease";
    Control[Control["ReplayFOVDecrease"] = 315] = "ReplayFOVDecrease";
    Control[Control["ReplayCameraUp"] = 316] = "ReplayCameraUp";
    Control[Control["ReplayCameraDown"] = 317] = "ReplayCameraDown";
    Control[Control["ReplaySave"] = 318] = "ReplaySave";
    Control[Control["ReplayToggletime"] = 319] = "ReplayToggletime";
    Control[Control["ReplayToggletips"] = 320] = "ReplayToggletips";
    Control[Control["ReplayPreview"] = 321] = "ReplayPreview";
    Control[Control["ReplayToggleTimeline"] = 322] = "ReplayToggleTimeline";
    Control[Control["ReplayTimelinePickupClip"] = 323] = "ReplayTimelinePickupClip";
    Control[Control["ReplayTimelineDuplicateClip"] = 324] = "ReplayTimelineDuplicateClip";
    Control[Control["ReplayTimelinePlaceClip"] = 325] = "ReplayTimelinePlaceClip";
    Control[Control["ReplayCtrl"] = 326] = "ReplayCtrl";
    Control[Control["ReplayTimelineSave"] = 327] = "ReplayTimelineSave";
    Control[Control["ReplayPreviewAudio"] = 328] = "ReplayPreviewAudio";
    Control[Control["VehicleDriveLook"] = 329] = "VehicleDriveLook";
    Control[Control["VehicleDriveLook2"] = 330] = "VehicleDriveLook2";
    Control[Control["VehicleFlyAttack2"] = 331] = "VehicleFlyAttack2";
    Control[Control["RadioWheelUpDown"] = 332] = "RadioWheelUpDown";
    Control[Control["RadioWheelLeftRight"] = 333] = "RadioWheelLeftRight";
    Control[Control["VehicleSlowMoUpDown"] = 334] = "VehicleSlowMoUpDown";
    Control[Control["VehicleSlowMoUpOnly"] = 335] = "VehicleSlowMoUpOnly";
    Control[Control["VehicleSlowMoDownOnly"] = 336] = "VehicleSlowMoDownOnly";
    Control[Control["VehicleHydraulicsControlToggle"] = 337] = "VehicleHydraulicsControlToggle";
    Control[Control["VehicleHydraulicsControlLeft"] = 338] = "VehicleHydraulicsControlLeft";
    Control[Control["VehicleHydraulicsControlRight"] = 339] = "VehicleHydraulicsControlRight";
    Control[Control["VehicleHydraulicsControlUp"] = 340] = "VehicleHydraulicsControlUp";
    Control[Control["VehicleHydraulicsControlDown"] = 341] = "VehicleHydraulicsControlDown";
    Control[Control["VehicleHydraulicsControlUpDown"] = 342] = "VehicleHydraulicsControlUpDown";
    Control[Control["VehicleHydraulicsControlLeftRight"] = 343] = "VehicleHydraulicsControlLeftRight";
    Control[Control["SwitchVisor"] = 344] = "SwitchVisor";
    Control[Control["VehicleMeleeHold"] = 345] = "VehicleMeleeHold";
    Control[Control["VehicleMeleeLeft"] = 346] = "VehicleMeleeLeft";
    Control[Control["VehicleMeleeRight"] = 347] = "VehicleMeleeRight";
    Control[Control["MapPointOfInterest"] = 348] = "MapPointOfInterest";
    Control[Control["ReplaySnapmaticPhoto"] = 349] = "ReplaySnapmaticPhoto";
    Control[Control["VehicleCarJump"] = 350] = "VehicleCarJump";
    Control[Control["VehicleRocketBoost"] = 351] = "VehicleRocketBoost";
    Control[Control["VehicleFlyBoost"] = 352] = "VehicleFlyBoost";
    Control[Control["VehicleParachute"] = 353] = "VehicleParachute";
    Control[Control["VehicleBikeWings"] = 354] = "VehicleBikeWings";
    Control[Control["VehicleFlyBombBay"] = 355] = "VehicleFlyBombBay";
    Control[Control["VehicleFlyCounter"] = 356] = "VehicleFlyCounter";
    Control[Control["VehicleFlyTransform"] = 357] = "VehicleFlyTransform";
})(Control = exports.Control || (exports.Control = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/CursorSprite.js":
/*!**********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/CursorSprite.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CursorSprite = void 0;
var CursorSprite;
(function (CursorSprite) {
    CursorSprite[CursorSprite["Normal"] = 1] = "Normal";
    CursorSprite[CursorSprite["LightArrow"] = 2] = "LightArrow";
    CursorSprite[CursorSprite["OpenHand"] = 3] = "OpenHand";
    CursorSprite[CursorSprite["GrabHand"] = 4] = "GrabHand";
    CursorSprite[CursorSprite["MiddleFinger"] = 5] = "MiddleFinger";
    CursorSprite[CursorSprite["LeftArrow"] = 6] = "LeftArrow";
    CursorSprite[CursorSprite["RightArrow"] = 7] = "RightArrow";
    CursorSprite[CursorSprite["UpArrow"] = 8] = "UpArrow";
    CursorSprite[CursorSprite["DownArrow"] = 9] = "DownArrow";
    CursorSprite[CursorSprite["HorizontalDoubleArrow"] = 10] = "HorizontalDoubleArrow";
    CursorSprite[CursorSprite["NormalWithPlus"] = 11] = "NormalWithPlus";
    CursorSprite[CursorSprite["NormalWithMinus"] = 12] = "NormalWithMinus";
})(CursorSprite = exports.CursorSprite || (exports.CursorSprite = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Driving.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Driving.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleDrivingFlags = exports.DrivingStyle = void 0;
var DrivingStyle;
(function (DrivingStyle) {
    DrivingStyle[DrivingStyle["None"] = 0] = "None";
    DrivingStyle[DrivingStyle["Normal"] = 786603] = "Normal";
    DrivingStyle[DrivingStyle["IgnoreLights"] = 2883621] = "IgnoreLights";
    DrivingStyle[DrivingStyle["SometimesOvertakeTraffic"] = 5] = "SometimesOvertakeTraffic";
    DrivingStyle[DrivingStyle["Rushed"] = 1074528293] = "Rushed";
    DrivingStyle[DrivingStyle["AvoidTraffic"] = 786468] = "AvoidTraffic";
    DrivingStyle[DrivingStyle["AvoidTrafficExtremely"] = 6] = "AvoidTrafficExtremely";
    DrivingStyle[DrivingStyle["AvoidHighwaysWhenPossible"] = 536870912] = "AvoidHighwaysWhenPossible";
    DrivingStyle[DrivingStyle["IgnorePathing"] = 16777216] = "IgnorePathing";
    DrivingStyle[DrivingStyle["IgnoreRoads"] = 4194304] = "IgnoreRoads";
    DrivingStyle[DrivingStyle["ShortestPath"] = 262144] = "ShortestPath";
    DrivingStyle[DrivingStyle["Backwards"] = 1024] = "Backwards";
})(DrivingStyle = exports.DrivingStyle || (exports.DrivingStyle = {}));
var VehicleDrivingFlags;
(function (VehicleDrivingFlags) {
    VehicleDrivingFlags[VehicleDrivingFlags["None"] = 0] = "None";
    VehicleDrivingFlags[VehicleDrivingFlags["FollowTraffic"] = 1] = "FollowTraffic";
    VehicleDrivingFlags[VehicleDrivingFlags["YieldToPeds"] = 2] = "YieldToPeds";
    VehicleDrivingFlags[VehicleDrivingFlags["AvoidVehicles"] = 4] = "AvoidVehicles";
    VehicleDrivingFlags[VehicleDrivingFlags["AvoidEmptyVehicles"] = 8] = "AvoidEmptyVehicles";
    VehicleDrivingFlags[VehicleDrivingFlags["AvoidPeds"] = 16] = "AvoidPeds";
    VehicleDrivingFlags[VehicleDrivingFlags["AvoidObjects"] = 32] = "AvoidObjects";
    VehicleDrivingFlags[VehicleDrivingFlags["StopAtTrafficLights"] = 128] = "StopAtTrafficLights";
    VehicleDrivingFlags[VehicleDrivingFlags["UseBlinkers"] = 256] = "UseBlinkers";
    VehicleDrivingFlags[VehicleDrivingFlags["AllowGoingWrongWay"] = 512] = "AllowGoingWrongWay";
    VehicleDrivingFlags[VehicleDrivingFlags["Reverse"] = 1024] = "Reverse";
    VehicleDrivingFlags[VehicleDrivingFlags["AllowMedianCrossing"] = 262144] = "AllowMedianCrossing";
    VehicleDrivingFlags[VehicleDrivingFlags["DriveBySight"] = 4194304] = "DriveBySight";
    VehicleDrivingFlags[VehicleDrivingFlags["IgnorePathFinding"] = 16777216] = "IgnorePathFinding";
    VehicleDrivingFlags[VehicleDrivingFlags["TryToAvoidHighways"] = 536870912] = "TryToAvoidHighways";
    VehicleDrivingFlags[VehicleDrivingFlags["StopAtDestination"] = 2147483648] = "StopAtDestination";
})(VehicleDrivingFlags = exports.VehicleDrivingFlags || (exports.VehicleDrivingFlags = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/ExplosionType.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/ExplosionType.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExplosionType = void 0;
/**
 * List of explosion sources.
 */
var ExplosionType;
(function (ExplosionType) {
    ExplosionType[ExplosionType["Grenade"] = 0] = "Grenade";
    ExplosionType[ExplosionType["GrenadeL"] = 1] = "GrenadeL";
    ExplosionType[ExplosionType["StickyBomb"] = 2] = "StickyBomb";
    ExplosionType[ExplosionType["Molotov1"] = 3] = "Molotov1";
    ExplosionType[ExplosionType["Rocket"] = 4] = "Rocket";
    ExplosionType[ExplosionType["TankShell"] = 5] = "TankShell";
    ExplosionType[ExplosionType["HiOctane"] = 6] = "HiOctane";
    ExplosionType[ExplosionType["Car"] = 7] = "Car";
    ExplosionType[ExplosionType["Plane"] = 8] = "Plane";
    ExplosionType[ExplosionType["PetrolPump"] = 9] = "PetrolPump";
    ExplosionType[ExplosionType["Bike"] = 10] = "Bike";
    ExplosionType[ExplosionType["Steam"] = 11] = "Steam";
    ExplosionType[ExplosionType["Flame"] = 12] = "Flame";
    ExplosionType[ExplosionType["WaterHydrant"] = 13] = "WaterHydrant";
    ExplosionType[ExplosionType["GasCanister"] = 14] = "GasCanister";
    ExplosionType[ExplosionType["Boat"] = 15] = "Boat";
    ExplosionType[ExplosionType["ShipDestroy"] = 16] = "ShipDestroy";
    ExplosionType[ExplosionType["Truck"] = 17] = "Truck";
    ExplosionType[ExplosionType["Bullet"] = 18] = "Bullet";
    ExplosionType[ExplosionType["SmokeGL"] = 19] = "SmokeGL";
    ExplosionType[ExplosionType["SmokeG"] = 20] = "SmokeG";
    ExplosionType[ExplosionType["BZGas"] = 21] = "BZGas";
    ExplosionType[ExplosionType["Flare"] = 22] = "Flare";
    ExplosionType[ExplosionType["GasCanister2"] = 23] = "GasCanister2";
    ExplosionType[ExplosionType["Extinguisher"] = 24] = "Extinguisher";
    ExplosionType[ExplosionType["ProgramAR"] = 25] = "ProgramAR";
    ExplosionType[ExplosionType["Train"] = 26] = "Train";
    ExplosionType[ExplosionType["Barrel"] = 27] = "Barrel";
    ExplosionType[ExplosionType["Propane"] = 28] = "Propane";
    ExplosionType[ExplosionType["Blimp"] = 29] = "Blimp";
    ExplosionType[ExplosionType["FlameExplode"] = 30] = "FlameExplode";
    ExplosionType[ExplosionType["Tanker"] = 31] = "Tanker";
    ExplosionType[ExplosionType["PlaneRocket"] = 32] = "PlaneRocket";
    ExplosionType[ExplosionType["VehicleBullet"] = 33] = "VehicleBullet";
    ExplosionType[ExplosionType["GasTank"] = 34] = "GasTank";
    ExplosionType[ExplosionType["FireWork"] = 35] = "FireWork";
    ExplosionType[ExplosionType["SnowBall"] = 36] = "SnowBall";
    ExplosionType[ExplosionType["ProxMine"] = 37] = "ProxMine";
    ExplosionType[ExplosionType["Valkyrie"] = 38] = "Valkyrie";
})(ExplosionType = exports.ExplosionType || (exports.ExplosionType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Font.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Font.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Font = void 0;
var Font;
(function (Font) {
    Font[Font["ChaletLondon"] = 0] = "ChaletLondon";
    Font[Font["HouseScript"] = 1] = "HouseScript";
    Font[Font["Monospace"] = 2] = "Monospace";
    Font[Font["ChaletComprimeCologne"] = 4] = "ChaletComprimeCologne";
    Font[Font["Pricedown"] = 7] = "Pricedown";
})(Font = exports.Font || (exports.Font = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/ForceType.js":
/*!*******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/ForceType.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ForceType = void 0;
var ForceType;
(function (ForceType) {
    ForceType[ForceType["MinForce"] = 0] = "MinForce";
    ForceType[ForceType["MaxForceRot"] = 1] = "MaxForceRot";
    ForceType[ForceType["MinForce2"] = 2] = "MinForce2";
    ForceType[ForceType["MaxForceRot2"] = 3] = "MaxForceRot2";
    ForceType[ForceType["ForceNoRot"] = 4] = "ForceNoRot";
    ForceType[ForceType["ForceRotPlusForce"] = 5] = "ForceRotPlusForce";
})(ForceType = exports.ForceType || (exports.ForceType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Gender.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Gender.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/HelmetType.js":
/*!********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/HelmetType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelmetType = void 0;
var HelmetType;
(function (HelmetType) {
    HelmetType[HelmetType["RegularMotorcycleHelmet"] = 4096] = "RegularMotorcycleHelmet";
    HelmetType[HelmetType["FiremanHelmet"] = 16384] = "FiremanHelmet";
    HelmetType[HelmetType["PilotHeadset"] = 32768] = "PilotHeadset";
})(HelmetType = exports.HelmetType || (exports.HelmetType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/HudColor.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/HudColor.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HudColor = void 0;
var HudColor;
(function (HudColor) {
    HudColor[HudColor["NONE"] = -1] = "NONE";
    HudColor[HudColor["HUD_COLOUR_PURE_WHITE"] = 0] = "HUD_COLOUR_PURE_WHITE";
    HudColor[HudColor["HUD_COLOUR_WHITE"] = 1] = "HUD_COLOUR_WHITE";
    HudColor[HudColor["HUD_COLOUR_BLACK"] = 2] = "HUD_COLOUR_BLACK";
    HudColor[HudColor["HUD_COLOUR_GREY"] = 3] = "HUD_COLOUR_GREY";
    HudColor[HudColor["HUD_COLOUR_GREYLIGHT"] = 4] = "HUD_COLOUR_GREYLIGHT";
    HudColor[HudColor["HUD_COLOUR_GREYDARK"] = 5] = "HUD_COLOUR_GREYDARK";
    HudColor[HudColor["HUD_COLOUR_RED"] = 6] = "HUD_COLOUR_RED";
    HudColor[HudColor["HUD_COLOUR_REDLIGHT"] = 7] = "HUD_COLOUR_REDLIGHT";
    HudColor[HudColor["HUD_COLOUR_REDDARK"] = 8] = "HUD_COLOUR_REDDARK";
    HudColor[HudColor["HUD_COLOUR_BLUE"] = 9] = "HUD_COLOUR_BLUE";
    HudColor[HudColor["HUD_COLOUR_BLUELIGHT"] = 10] = "HUD_COLOUR_BLUELIGHT";
    HudColor[HudColor["HUD_COLOUR_BLUEDARK"] = 11] = "HUD_COLOUR_BLUEDARK";
    HudColor[HudColor["HUD_COLOUR_YELLOW"] = 12] = "HUD_COLOUR_YELLOW";
    HudColor[HudColor["HUD_COLOUR_YELLOWLIGHT"] = 13] = "HUD_COLOUR_YELLOWLIGHT";
    HudColor[HudColor["HUD_COLOUR_YELLOWDARK"] = 14] = "HUD_COLOUR_YELLOWDARK";
    HudColor[HudColor["HUD_COLOUR_ORANGE"] = 15] = "HUD_COLOUR_ORANGE";
    HudColor[HudColor["HUD_COLOUR_ORANGELIGHT"] = 16] = "HUD_COLOUR_ORANGELIGHT";
    HudColor[HudColor["HUD_COLOUR_ORANGEDARK"] = 17] = "HUD_COLOUR_ORANGEDARK";
    HudColor[HudColor["HUD_COLOUR_GREEN"] = 18] = "HUD_COLOUR_GREEN";
    HudColor[HudColor["HUD_COLOUR_GREENLIGHT"] = 19] = "HUD_COLOUR_GREENLIGHT";
    HudColor[HudColor["HUD_COLOUR_GREENDARK"] = 20] = "HUD_COLOUR_GREENDARK";
    HudColor[HudColor["HUD_COLOUR_PURPLE"] = 21] = "HUD_COLOUR_PURPLE";
    HudColor[HudColor["HUD_COLOUR_PURPLELIGHT"] = 22] = "HUD_COLOUR_PURPLELIGHT";
    HudColor[HudColor["HUD_COLOUR_PURPLEDARK"] = 23] = "HUD_COLOUR_PURPLEDARK";
    HudColor[HudColor["HUD_COLOUR_PINK"] = 24] = "HUD_COLOUR_PINK";
    HudColor[HudColor["HUD_COLOUR_RADAR_HEALTH"] = 25] = "HUD_COLOUR_RADAR_HEALTH";
    HudColor[HudColor["HUD_COLOUR_RADAR_ARMOUR"] = 26] = "HUD_COLOUR_RADAR_ARMOUR";
    HudColor[HudColor["HUD_COLOUR_RADAR_DAMAGE"] = 27] = "HUD_COLOUR_RADAR_DAMAGE";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER1"] = 28] = "HUD_COLOUR_NET_PLAYER1";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER2"] = 29] = "HUD_COLOUR_NET_PLAYER2";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER3"] = 30] = "HUD_COLOUR_NET_PLAYER3";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER4"] = 31] = "HUD_COLOUR_NET_PLAYER4";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER5"] = 32] = "HUD_COLOUR_NET_PLAYER5";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER6"] = 33] = "HUD_COLOUR_NET_PLAYER6";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER7"] = 34] = "HUD_COLOUR_NET_PLAYER7";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER8"] = 35] = "HUD_COLOUR_NET_PLAYER8";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER9"] = 36] = "HUD_COLOUR_NET_PLAYER9";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER10"] = 37] = "HUD_COLOUR_NET_PLAYER10";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER11"] = 38] = "HUD_COLOUR_NET_PLAYER11";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER12"] = 39] = "HUD_COLOUR_NET_PLAYER12";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER13"] = 40] = "HUD_COLOUR_NET_PLAYER13";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER14"] = 41] = "HUD_COLOUR_NET_PLAYER14";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER15"] = 42] = "HUD_COLOUR_NET_PLAYER15";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER16"] = 43] = "HUD_COLOUR_NET_PLAYER16";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER17"] = 44] = "HUD_COLOUR_NET_PLAYER17";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER18"] = 45] = "HUD_COLOUR_NET_PLAYER18";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER19"] = 46] = "HUD_COLOUR_NET_PLAYER19";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER20"] = 47] = "HUD_COLOUR_NET_PLAYER20";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER21"] = 48] = "HUD_COLOUR_NET_PLAYER21";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER22"] = 49] = "HUD_COLOUR_NET_PLAYER22";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER23"] = 50] = "HUD_COLOUR_NET_PLAYER23";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER24"] = 51] = "HUD_COLOUR_NET_PLAYER24";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER25"] = 52] = "HUD_COLOUR_NET_PLAYER25";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER26"] = 53] = "HUD_COLOUR_NET_PLAYER26";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER27"] = 54] = "HUD_COLOUR_NET_PLAYER27";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER28"] = 55] = "HUD_COLOUR_NET_PLAYER28";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER29"] = 56] = "HUD_COLOUR_NET_PLAYER29";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER30"] = 57] = "HUD_COLOUR_NET_PLAYER30";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER31"] = 58] = "HUD_COLOUR_NET_PLAYER31";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER32"] = 59] = "HUD_COLOUR_NET_PLAYER32";
    HudColor[HudColor["HUD_COLOUR_SIMPLEBLIP_DEFAULT"] = 60] = "HUD_COLOUR_SIMPLEBLIP_DEFAULT";
    HudColor[HudColor["HUD_COLOUR_MENU_BLUE"] = 61] = "HUD_COLOUR_MENU_BLUE";
    HudColor[HudColor["HUD_COLOUR_MENU_GREY_LIGHT"] = 62] = "HUD_COLOUR_MENU_GREY_LIGHT";
    HudColor[HudColor["HUD_COLOUR_MENU_BLUE_EXTRA_DARK"] = 63] = "HUD_COLOUR_MENU_BLUE_EXTRA_DARK";
    HudColor[HudColor["HUD_COLOUR_MENU_YELLOW"] = 64] = "HUD_COLOUR_MENU_YELLOW";
    HudColor[HudColor["HUD_COLOUR_MENU_YELLOW_DARK"] = 65] = "HUD_COLOUR_MENU_YELLOW_DARK";
    HudColor[HudColor["HUD_COLOUR_MENU_GREEN"] = 66] = "HUD_COLOUR_MENU_GREEN";
    HudColor[HudColor["HUD_COLOUR_MENU_GREY"] = 67] = "HUD_COLOUR_MENU_GREY";
    HudColor[HudColor["HUD_COLOUR_MENU_GREY_DARK"] = 68] = "HUD_COLOUR_MENU_GREY_DARK";
    HudColor[HudColor["HUD_COLOUR_MENU_HIGHLIGHT"] = 69] = "HUD_COLOUR_MENU_HIGHLIGHT";
    HudColor[HudColor["HUD_COLOUR_MENU_STANDARD"] = 70] = "HUD_COLOUR_MENU_STANDARD";
    HudColor[HudColor["HUD_COLOUR_MENU_DIMMED"] = 71] = "HUD_COLOUR_MENU_DIMMED";
    HudColor[HudColor["HUD_COLOUR_MENU_EXTRA_DIMMED"] = 72] = "HUD_COLOUR_MENU_EXTRA_DIMMED";
    HudColor[HudColor["HUD_COLOUR_BRIEF_TITLE"] = 73] = "HUD_COLOUR_BRIEF_TITLE";
    HudColor[HudColor["HUD_COLOUR_MID_GREY_MP"] = 74] = "HUD_COLOUR_MID_GREY_MP";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER1_DARK"] = 75] = "HUD_COLOUR_NET_PLAYER1_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER2_DARK"] = 76] = "HUD_COLOUR_NET_PLAYER2_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER3_DARK"] = 77] = "HUD_COLOUR_NET_PLAYER3_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER4_DARK"] = 78] = "HUD_COLOUR_NET_PLAYER4_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER5_DARK"] = 79] = "HUD_COLOUR_NET_PLAYER5_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER6_DARK"] = 80] = "HUD_COLOUR_NET_PLAYER6_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER7_DARK"] = 81] = "HUD_COLOUR_NET_PLAYER7_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER8_DARK"] = 82] = "HUD_COLOUR_NET_PLAYER8_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER9_DARK"] = 83] = "HUD_COLOUR_NET_PLAYER9_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER10_DARK"] = 84] = "HUD_COLOUR_NET_PLAYER10_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER11_DARK"] = 85] = "HUD_COLOUR_NET_PLAYER11_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER12_DARK"] = 86] = "HUD_COLOUR_NET_PLAYER12_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER13_DARK"] = 87] = "HUD_COLOUR_NET_PLAYER13_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER14_DARK"] = 88] = "HUD_COLOUR_NET_PLAYER14_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER15_DARK"] = 89] = "HUD_COLOUR_NET_PLAYER15_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER16_DARK"] = 90] = "HUD_COLOUR_NET_PLAYER16_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER17_DARK"] = 91] = "HUD_COLOUR_NET_PLAYER17_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER18_DARK"] = 92] = "HUD_COLOUR_NET_PLAYER18_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER19_DARK"] = 93] = "HUD_COLOUR_NET_PLAYER19_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER20_DARK"] = 94] = "HUD_COLOUR_NET_PLAYER20_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER21_DARK"] = 95] = "HUD_COLOUR_NET_PLAYER21_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER22_DARK"] = 96] = "HUD_COLOUR_NET_PLAYER22_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER23_DARK"] = 97] = "HUD_COLOUR_NET_PLAYER23_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER24_DARK"] = 98] = "HUD_COLOUR_NET_PLAYER24_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER25_DARK"] = 99] = "HUD_COLOUR_NET_PLAYER25_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER26_DARK"] = 100] = "HUD_COLOUR_NET_PLAYER26_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER27_DARK"] = 101] = "HUD_COLOUR_NET_PLAYER27_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER28_DARK"] = 102] = "HUD_COLOUR_NET_PLAYER28_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER29_DARK"] = 103] = "HUD_COLOUR_NET_PLAYER29_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER30_DARK"] = 104] = "HUD_COLOUR_NET_PLAYER30_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER31_DARK"] = 105] = "HUD_COLOUR_NET_PLAYER31_DARK";
    HudColor[HudColor["HUD_COLOUR_NET_PLAYER32_DARK"] = 106] = "HUD_COLOUR_NET_PLAYER32_DARK";
    HudColor[HudColor["HUD_COLOUR_BRONZE"] = 107] = "HUD_COLOUR_BRONZE";
    HudColor[HudColor["HUD_COLOUR_SILVER"] = 108] = "HUD_COLOUR_SILVER";
    HudColor[HudColor["HUD_COLOUR_GOLD"] = 109] = "HUD_COLOUR_GOLD";
    HudColor[HudColor["HUD_COLOUR_PLATINUM"] = 110] = "HUD_COLOUR_PLATINUM";
    HudColor[HudColor["HUD_COLOUR_GANG1"] = 111] = "HUD_COLOUR_GANG1";
    HudColor[HudColor["HUD_COLOUR_GANG2"] = 112] = "HUD_COLOUR_GANG2";
    HudColor[HudColor["HUD_COLOUR_GANG3"] = 113] = "HUD_COLOUR_GANG3";
    HudColor[HudColor["HUD_COLOUR_GANG4"] = 114] = "HUD_COLOUR_GANG4";
    HudColor[HudColor["HUD_COLOUR_SAME_CREW"] = 115] = "HUD_COLOUR_SAME_CREW";
    HudColor[HudColor["HUD_COLOUR_FREEMODE"] = 116] = "HUD_COLOUR_FREEMODE";
    HudColor[HudColor["HUD_COLOUR_PAUSE_BG"] = 117] = "HUD_COLOUR_PAUSE_BG";
    HudColor[HudColor["HUD_COLOUR_FRIENDLY"] = 118] = "HUD_COLOUR_FRIENDLY";
    HudColor[HudColor["HUD_COLOUR_ENEMY"] = 119] = "HUD_COLOUR_ENEMY";
    HudColor[HudColor["HUD_COLOUR_LOCATION"] = 120] = "HUD_COLOUR_LOCATION";
    HudColor[HudColor["HUD_COLOUR_PICKUP"] = 121] = "HUD_COLOUR_PICKUP";
    HudColor[HudColor["HUD_COLOUR_PAUSE_SINGLEPLAYER"] = 122] = "HUD_COLOUR_PAUSE_SINGLEPLAYER";
    HudColor[HudColor["HUD_COLOUR_FREEMODE_DARK"] = 123] = "HUD_COLOUR_FREEMODE_DARK";
    HudColor[HudColor["HUD_COLOUR_INACTIVE_MISSION"] = 124] = "HUD_COLOUR_INACTIVE_MISSION";
    HudColor[HudColor["HUD_COLOUR_DAMAGE"] = 125] = "HUD_COLOUR_DAMAGE";
    HudColor[HudColor["HUD_COLOUR_PINKLIGHT"] = 126] = "HUD_COLOUR_PINKLIGHT";
    HudColor[HudColor["HUD_COLOUR_PM_MITEM_HIGHLIGHT"] = 127] = "HUD_COLOUR_PM_MITEM_HIGHLIGHT";
    HudColor[HudColor["HUD_COLOUR_SCRIPT_VARIABLE"] = 128] = "HUD_COLOUR_SCRIPT_VARIABLE";
    HudColor[HudColor["HUD_COLOUR_YOGA"] = 129] = "HUD_COLOUR_YOGA";
    HudColor[HudColor["HUD_COLOUR_TENNIS"] = 130] = "HUD_COLOUR_TENNIS";
    HudColor[HudColor["HUD_COLOUR_GOLF"] = 131] = "HUD_COLOUR_GOLF";
    HudColor[HudColor["HUD_COLOUR_SHOOTING_RANGE"] = 132] = "HUD_COLOUR_SHOOTING_RANGE";
    HudColor[HudColor["HUD_COLOUR_FLIGHT_SCHOOL"] = 133] = "HUD_COLOUR_FLIGHT_SCHOOL";
    HudColor[HudColor["HUD_COLOUR_NORTH_BLUE"] = 134] = "HUD_COLOUR_NORTH_BLUE";
    HudColor[HudColor["HUD_COLOUR_SOCIAL_CLUB"] = 135] = "HUD_COLOUR_SOCIAL_CLUB";
    HudColor[HudColor["HUD_COLOUR_PLATFORM_BLUE"] = 136] = "HUD_COLOUR_PLATFORM_BLUE";
    HudColor[HudColor["HUD_COLOUR_PLATFORM_GREEN"] = 137] = "HUD_COLOUR_PLATFORM_GREEN";
    HudColor[HudColor["HUD_COLOUR_PLATFORM_GREY"] = 138] = "HUD_COLOUR_PLATFORM_GREY";
    HudColor[HudColor["HUD_COLOUR_FACEBOOK_BLUE"] = 139] = "HUD_COLOUR_FACEBOOK_BLUE";
    HudColor[HudColor["HUD_COLOUR_INGAME_BG"] = 140] = "HUD_COLOUR_INGAME_BG";
    HudColor[HudColor["HUD_COLOUR_DARTS"] = 141] = "HUD_COLOUR_DARTS";
    HudColor[HudColor["HUD_COLOUR_WAYPOINT"] = 142] = "HUD_COLOUR_WAYPOINT";
    HudColor[HudColor["HUD_COLOUR_MICHAEL"] = 143] = "HUD_COLOUR_MICHAEL";
    HudColor[HudColor["HUD_COLOUR_FRANKLIN"] = 144] = "HUD_COLOUR_FRANKLIN";
    HudColor[HudColor["HUD_COLOUR_TREVOR"] = 145] = "HUD_COLOUR_TREVOR";
    HudColor[HudColor["HUD_COLOUR_GOLF_P1"] = 146] = "HUD_COLOUR_GOLF_P1";
    HudColor[HudColor["HUD_COLOUR_GOLF_P2"] = 147] = "HUD_COLOUR_GOLF_P2";
    HudColor[HudColor["HUD_COLOUR_GOLF_P3"] = 148] = "HUD_COLOUR_GOLF_P3";
    HudColor[HudColor["HUD_COLOUR_GOLF_P4"] = 149] = "HUD_COLOUR_GOLF_P4";
    HudColor[HudColor["HUD_COLOUR_WAYPOINTLIGHT"] = 150] = "HUD_COLOUR_WAYPOINTLIGHT";
    HudColor[HudColor["HUD_COLOUR_WAYPOINTDARK"] = 151] = "HUD_COLOUR_WAYPOINTDARK";
    HudColor[HudColor["HUD_COLOUR_PANEL_LIGHT"] = 152] = "HUD_COLOUR_PANEL_LIGHT";
    HudColor[HudColor["HUD_COLOUR_MICHAEL_DARK"] = 153] = "HUD_COLOUR_MICHAEL_DARK";
    HudColor[HudColor["HUD_COLOUR_FRANKLIN_DARK"] = 154] = "HUD_COLOUR_FRANKLIN_DARK";
    HudColor[HudColor["HUD_COLOUR_TREVOR_DARK"] = 155] = "HUD_COLOUR_TREVOR_DARK";
    HudColor[HudColor["HUD_COLOUR_OBJECTIVE_ROUTE"] = 156] = "HUD_COLOUR_OBJECTIVE_ROUTE";
    HudColor[HudColor["HUD_COLOUR_PAUSEMAP_TINT"] = 157] = "HUD_COLOUR_PAUSEMAP_TINT";
    HudColor[HudColor["HUD_COLOUR_PAUSE_DESELECT"] = 158] = "HUD_COLOUR_PAUSE_DESELECT";
    HudColor[HudColor["HUD_COLOUR_PM_WEAPONS_PURCHASABLE"] = 159] = "HUD_COLOUR_PM_WEAPONS_PURCHASABLE";
    HudColor[HudColor["HUD_COLOUR_PM_WEAPONS_LOCKED"] = 160] = "HUD_COLOUR_PM_WEAPONS_LOCKED";
    HudColor[HudColor["HUD_COLOUR_END_SCREEN_BG"] = 161] = "HUD_COLOUR_END_SCREEN_BG";
    HudColor[HudColor["HUD_COLOUR_CHOP"] = 162] = "HUD_COLOUR_CHOP";
    HudColor[HudColor["HUD_COLOUR_PAUSEMAP_TINT_HALF"] = 163] = "HUD_COLOUR_PAUSEMAP_TINT_HALF";
    HudColor[HudColor["HUD_COLOUR_NORTH_BLUE_OFFICIAL"] = 164] = "HUD_COLOUR_NORTH_BLUE_OFFICIAL";
    HudColor[HudColor["HUD_COLOUR_SCRIPT_VARIABLE_2"] = 165] = "HUD_COLOUR_SCRIPT_VARIABLE_2";
    HudColor[HudColor["HUD_COLOUR_H"] = 166] = "HUD_COLOUR_H";
    HudColor[HudColor["HUD_COLOUR_HDARK"] = 167] = "HUD_COLOUR_HDARK";
    HudColor[HudColor["HUD_COLOUR_T"] = 168] = "HUD_COLOUR_T";
    HudColor[HudColor["HUD_COLOUR_TDARK"] = 169] = "HUD_COLOUR_TDARK";
    HudColor[HudColor["HUD_COLOUR_HSHARD"] = 170] = "HUD_COLOUR_HSHARD";
    HudColor[HudColor["HUD_COLOUR_CONTROLLER_MICHAEL"] = 171] = "HUD_COLOUR_CONTROLLER_MICHAEL";
    HudColor[HudColor["HUD_COLOUR_CONTROLLER_FRANKLIN"] = 172] = "HUD_COLOUR_CONTROLLER_FRANKLIN";
    HudColor[HudColor["HUD_COLOUR_CONTROLLER_TREVOR"] = 173] = "HUD_COLOUR_CONTROLLER_TREVOR";
    HudColor[HudColor["HUD_COLOUR_CONTROLLER_CHOP"] = 174] = "HUD_COLOUR_CONTROLLER_CHOP";
    HudColor[HudColor["HUD_COLOUR_VIDEO_EDITOR_VIDEO"] = 175] = "HUD_COLOUR_VIDEO_EDITOR_VIDEO";
    HudColor[HudColor["HUD_COLOUR_VIDEO_EDITOR_AUDIO"] = 176] = "HUD_COLOUR_VIDEO_EDITOR_AUDIO";
    HudColor[HudColor["HUD_COLOUR_VIDEO_EDITOR_TEXT"] = 177] = "HUD_COLOUR_VIDEO_EDITOR_TEXT";
    HudColor[HudColor["HUD_COLOUR_HB_BLUE"] = 178] = "HUD_COLOUR_HB_BLUE";
    HudColor[HudColor["HUD_COLOUR_HB_YELLOW"] = 179] = "HUD_COLOUR_HB_YELLOW";
})(HudColor = exports.HudColor || (exports.HudColor = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/HudComponent.js":
/*!**********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/HudComponent.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HudComponent = void 0;
var HudComponent;
(function (HudComponent) {
    HudComponent[HudComponent["WantedStars"] = 1] = "WantedStars";
    HudComponent[HudComponent["WeaponIcon"] = 2] = "WeaponIcon";
    HudComponent[HudComponent["Cash"] = 3] = "Cash";
    HudComponent[HudComponent["MpCash"] = 4] = "MpCash";
    HudComponent[HudComponent["MpMessage"] = 5] = "MpMessage";
    HudComponent[HudComponent["VehicleName"] = 6] = "VehicleName";
    HudComponent[HudComponent["AreaName"] = 7] = "AreaName";
    HudComponent[HudComponent["Unused"] = 8] = "Unused";
    HudComponent[HudComponent["StreetName"] = 9] = "StreetName";
    HudComponent[HudComponent["HelpText"] = 10] = "HelpText";
    HudComponent[HudComponent["FloatingHelpText1"] = 11] = "FloatingHelpText1";
    HudComponent[HudComponent["FloatingHelpText2"] = 12] = "FloatingHelpText2";
    HudComponent[HudComponent["CashChange"] = 13] = "CashChange";
    HudComponent[HudComponent["Reticle"] = 14] = "Reticle";
    HudComponent[HudComponent["SubtitleText"] = 15] = "SubtitleText";
    HudComponent[HudComponent["RadioStationsWheel"] = 16] = "RadioStationsWheel";
    HudComponent[HudComponent["Saving"] = 17] = "Saving";
    HudComponent[HudComponent["GamingStreamUnusde"] = 18] = "GamingStreamUnusde";
    HudComponent[HudComponent["WeaponWheel"] = 19] = "WeaponWheel";
    HudComponent[HudComponent["WeaponWheelStats"] = 20] = "WeaponWheelStats";
    HudComponent[HudComponent["DrugsPurse01"] = 21] = "DrugsPurse01";
    HudComponent[HudComponent["DrugsPurse02"] = 22] = "DrugsPurse02";
    HudComponent[HudComponent["DrugsPurse03"] = 23] = "DrugsPurse03";
    HudComponent[HudComponent["DrugsPurse04"] = 24] = "DrugsPurse04";
    HudComponent[HudComponent["MpTagCashFromBank"] = 25] = "MpTagCashFromBank";
    HudComponent[HudComponent["MpTagPackages"] = 26] = "MpTagPackages";
    HudComponent[HudComponent["MpTagCuffKeys"] = 27] = "MpTagCuffKeys";
    HudComponent[HudComponent["MpTagDownloadData"] = 28] = "MpTagDownloadData";
    HudComponent[HudComponent["MpTagIfPedFollowing"] = 29] = "MpTagIfPedFollowing";
    HudComponent[HudComponent["MpTagKeyCard"] = 30] = "MpTagKeyCard";
    HudComponent[HudComponent["MpTagRandomObject"] = 31] = "MpTagRandomObject";
    HudComponent[HudComponent["MpTagRemoteControl"] = 32] = "MpTagRemoteControl";
    HudComponent[HudComponent["MpTagCashFromSafe"] = 33] = "MpTagCashFromSafe";
    HudComponent[HudComponent["MpTagWeaponsPackage"] = 34] = "MpTagWeaponsPackage";
    HudComponent[HudComponent["MpTagKeys"] = 35] = "MpTagKeys";
    HudComponent[HudComponent["MpVehicle"] = 36] = "MpVehicle";
    HudComponent[HudComponent["MpVehicleHeli"] = 37] = "MpVehicleHeli";
    HudComponent[HudComponent["MpVehiclePlane"] = 38] = "MpVehiclePlane";
    HudComponent[HudComponent["PlayerSwitchAlert"] = 39] = "PlayerSwitchAlert";
    HudComponent[HudComponent["MpRankBar"] = 40] = "MpRankBar";
    HudComponent[HudComponent["DirectorMode"] = 41] = "DirectorMode";
    HudComponent[HudComponent["ReplayController"] = 42] = "ReplayController";
    HudComponent[HudComponent["ReplayMouse"] = 43] = "ReplayMouse";
    HudComponent[HudComponent["ReplayHeader"] = 44] = "ReplayHeader";
    HudComponent[HudComponent["ReplayOptions"] = 45] = "ReplayOptions";
    HudComponent[HudComponent["ReplayHelpText"] = 46] = "ReplayHelpText";
    HudComponent[HudComponent["ReplayMiscText"] = 47] = "ReplayMiscText";
    HudComponent[HudComponent["ReplayTopLine"] = 48] = "ReplayTopLine";
    HudComponent[HudComponent["ReplayBottomLine"] = 49] = "ReplayBottomLine";
    HudComponent[HudComponent["ReplayLeftBar"] = 50] = "ReplayLeftBar";
    HudComponent[HudComponent["ReplayTimer"] = 51] = "ReplayTimer";
})(HudComponent = exports.HudComponent || (exports.HudComponent = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/InputMode.js":
/*!*******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/InputMode.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputMode = void 0;
var InputMode;
(function (InputMode) {
    InputMode[InputMode["MouseAndKeyboard"] = 0] = "MouseAndKeyboard";
    InputMode[InputMode["GamePad"] = 2] = "GamePad";
})(InputMode = exports.InputMode || (exports.InputMode = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/IntersectOptions.js":
/*!**************************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/IntersectOptions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectOptions = void 0;
/**
 * List of possible entity intersections. Used for raycasting.
 */
var IntersectOptions;
(function (IntersectOptions) {
    IntersectOptions[IntersectOptions["Everything"] = -1] = "Everything";
    IntersectOptions[IntersectOptions["Map"] = 1] = "Map";
    IntersectOptions[IntersectOptions["MissionEntities"] = 2] = "MissionEntities";
    IntersectOptions[IntersectOptions["Peds1"] = 12] = "Peds1";
    IntersectOptions[IntersectOptions["Objects"] = 16] = "Objects";
    IntersectOptions[IntersectOptions["Unk1"] = 32] = "Unk1";
    IntersectOptions[IntersectOptions["Unk2"] = 64] = "Unk2";
    IntersectOptions[IntersectOptions["Unk3"] = 128] = "Unk3";
    IntersectOptions[IntersectOptions["Vegetation"] = 256] = "Vegetation";
    IntersectOptions[IntersectOptions["Unk4"] = 512] = "Unk4";
})(IntersectOptions = exports.IntersectOptions || (exports.IntersectOptions = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/InvertAxis.js":
/*!********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/InvertAxis.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvertAxisFlags = void 0;
var InvertAxisFlags;
(function (InvertAxisFlags) {
    InvertAxisFlags[InvertAxisFlags["None"] = 0] = "None";
    InvertAxisFlags[InvertAxisFlags["X"] = 1] = "X";
    InvertAxisFlags[InvertAxisFlags["Y"] = 2] = "Y";
    InvertAxisFlags[InvertAxisFlags["Z"] = 4] = "Z";
})(InvertAxisFlags = exports.InvertAxisFlags || (exports.InvertAxisFlags = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Language.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Language.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Language = void 0;
var Language;
(function (Language) {
    Language[Language["American"] = 0] = "American";
    Language[Language["French"] = 1] = "French";
    Language[Language["German"] = 2] = "German";
    Language[Language["Italian"] = 3] = "Italian";
    Language[Language["Spanish"] = 4] = "Spanish";
    Language[Language["Portuguese"] = 5] = "Portuguese";
    Language[Language["Polish"] = 6] = "Polish";
    Language[Language["Russian"] = 7] = "Russian";
    Language[Language["Korean"] = 8] = "Korean";
    Language[Language["Chinese"] = 9] = "Chinese";
    Language[Language["Japanese"] = 10] = "Japanese";
    Language[Language["Mexican"] = 11] = "Mexican";
})(Language = exports.Language || (exports.Language = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/LoadingSpinnerType.js":
/*!****************************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/LoadingSpinnerType.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadingSpinnerType = void 0;
var LoadingSpinnerType;
(function (LoadingSpinnerType) {
    LoadingSpinnerType[LoadingSpinnerType["Clockwise1"] = 1] = "Clockwise1";
    LoadingSpinnerType[LoadingSpinnerType["Clockwise2"] = 2] = "Clockwise2";
    LoadingSpinnerType[LoadingSpinnerType["Clockwise3"] = 3] = "Clockwise3";
    LoadingSpinnerType[LoadingSpinnerType["SocialClubSaving"] = 4] = "SocialClubSaving";
    LoadingSpinnerType[LoadingSpinnerType["RegularClockwise"] = 5] = "RegularClockwise";
})(LoadingSpinnerType = exports.LoadingSpinnerType || (exports.LoadingSpinnerType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/MarkerType.js":
/*!********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/MarkerType.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarkerType = void 0;
/**
 * List of markers. Markers are 3D visual objects in the world.
 *
 * See native [DRAW_MARKER](https://docs.fivem.net/game-references/markers/) for pictures.
 */
var MarkerType;
(function (MarkerType) {
    MarkerType[MarkerType["UpsideDownCone"] = 0] = "UpsideDownCone";
    MarkerType[MarkerType["VerticalCylinder"] = 1] = "VerticalCylinder";
    MarkerType[MarkerType["ThickChevronUp"] = 2] = "ThickChevronUp";
    MarkerType[MarkerType["ThinChevronUp"] = 3] = "ThinChevronUp";
    MarkerType[MarkerType["CheckeredFlagRect"] = 4] = "CheckeredFlagRect";
    MarkerType[MarkerType["CheckeredFlagCircle"] = 5] = "CheckeredFlagCircle";
    MarkerType[MarkerType["VerticleCircle"] = 6] = "VerticleCircle";
    MarkerType[MarkerType["PlaneModel"] = 7] = "PlaneModel";
    MarkerType[MarkerType["LostMCDark"] = 8] = "LostMCDark";
    MarkerType[MarkerType["LostMCLight"] = 9] = "LostMCLight";
    MarkerType[MarkerType["Number0"] = 10] = "Number0";
    MarkerType[MarkerType["Number1"] = 11] = "Number1";
    MarkerType[MarkerType["Number2"] = 12] = "Number2";
    MarkerType[MarkerType["Number3"] = 13] = "Number3";
    MarkerType[MarkerType["Number4"] = 14] = "Number4";
    MarkerType[MarkerType["Number5"] = 15] = "Number5";
    MarkerType[MarkerType["Number6"] = 16] = "Number6";
    MarkerType[MarkerType["Number7"] = 17] = "Number7";
    MarkerType[MarkerType["Number8"] = 18] = "Number8";
    MarkerType[MarkerType["Number9"] = 19] = "Number9";
    MarkerType[MarkerType["ChevronUpx1"] = 20] = "ChevronUpx1";
    MarkerType[MarkerType["ChevronUpx2"] = 21] = "ChevronUpx2";
    MarkerType[MarkerType["ChevronUpx3"] = 22] = "ChevronUpx3";
    MarkerType[MarkerType["HorizontalCircleFat"] = 23] = "HorizontalCircleFat";
    MarkerType[MarkerType["ReplayIcon"] = 24] = "ReplayIcon";
    MarkerType[MarkerType["HorizontalCircleSkinny"] = 25] = "HorizontalCircleSkinny";
    MarkerType[MarkerType["HorizontalCircleSkinnyArrow"] = 26] = "HorizontalCircleSkinnyArrow";
    MarkerType[MarkerType["HorizontalSplitArrowCircle"] = 27] = "HorizontalSplitArrowCircle";
    MarkerType[MarkerType["DebugSphere"] = 28] = "DebugSphere";
    MarkerType[MarkerType["DollarSign"] = 29] = "DollarSign";
    MarkerType[MarkerType["HorizontalBars"] = 30] = "HorizontalBars";
    MarkerType[MarkerType["WolfHead"] = 31] = "WolfHead";
    MarkerType[MarkerType["QuestionMark"] = 32] = "QuestionMark";
    MarkerType[MarkerType["PlaneSymbol"] = 33] = "PlaneSymbol";
    MarkerType[MarkerType["HelicopterSymbol"] = 34] = "HelicopterSymbol";
    MarkerType[MarkerType["BoatSymbol"] = 35] = "BoatSymbol";
    MarkerType[MarkerType["CarSymbol"] = 36] = "CarSymbol";
    MarkerType[MarkerType["MotorcycleSymbol"] = 37] = "MotorcycleSymbol";
    MarkerType[MarkerType["BikeSymbol"] = 38] = "BikeSymbol";
    MarkerType[MarkerType["TruckSymbol"] = 39] = "TruckSymbol";
    MarkerType[MarkerType["ParachuteSymbol"] = 40] = "ParachuteSymbol";
    MarkerType[MarkerType["SawbladeSymbol"] = 41] = "SawbladeSymbol";
})(MarkerType = exports.MarkerType || (exports.MarkerType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/NotificationType.js":
/*!**************************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/NotificationType.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationType = void 0;
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Default"] = 0] = "Default";
    NotificationType[NotificationType["Bubble"] = 1] = "Bubble";
    NotificationType[NotificationType["Mail"] = 2] = "Mail";
    NotificationType[NotificationType["FriendRequest"] = 3] = "FriendRequest";
    NotificationType[NotificationType["Default2"] = 4] = "Default2";
    NotificationType[NotificationType["Reply"] = 7] = "Reply";
    NotificationType[NotificationType["ReputationPoints"] = 8] = "ReputationPoints";
    NotificationType[NotificationType["Money"] = 9] = "Money";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Parachute.js":
/*!*******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Parachute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParachuteState = exports.ParachuteLandingType = void 0;
var ParachuteLandingType;
(function (ParachuteLandingType) {
    ParachuteLandingType[ParachuteLandingType["None"] = -1] = "None";
    ParachuteLandingType[ParachuteLandingType["Stumbling"] = 1] = "Stumbling";
    ParachuteLandingType[ParachuteLandingType["Rolling"] = 2] = "Rolling";
    ParachuteLandingType[ParachuteLandingType["Ragdoll"] = 3] = "Ragdoll";
})(ParachuteLandingType = exports.ParachuteLandingType || (exports.ParachuteLandingType = {}));
var ParachuteState;
(function (ParachuteState) {
    ParachuteState[ParachuteState["None"] = -1] = "None";
    ParachuteState[ParachuteState["FreeFalling"] = 0] = "FreeFalling";
    ParachuteState[ParachuteState["Deploying"] = 1] = "Deploying";
    ParachuteState[ParachuteState["Gliding"] = 2] = "Gliding";
    ParachuteState[ParachuteState["LandingOrFallingToDoom"] = 3] = "LandingOrFallingToDoom";
})(ParachuteState = exports.ParachuteState || (exports.ParachuteState = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/RadioStation.js":
/*!**********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/RadioStation.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RadioStation = void 0;
var RadioStation;
(function (RadioStation) {
    RadioStation["LosSantosRockRadio"] = "RADIO_01_CLASS_ROCK";
    RadioStation["NonStopPopFM"] = "RADIO_02_POP";
    RadioStation["RadioLosSantos"] = "RADIO_03_HIPHOP_NEW";
    RadioStation["ChannelX"] = "RADIO_04_PUNK";
    RadioStation["WestCoastTalkRadio"] = "RADIO_05_TALK_01";
    RadioStation["RebelRadio"] = "RADIO_06_COUNTRY";
    RadioStation["SoulwaxFM"] = "RADIO_07_DANCE_01";
    RadioStation["EastLosFM"] = "RADIO_08_MEXICAN";
    RadioStation["WestCoastClassics"] = "RADIO_09_HIPHOP_OLD";
    RadioStation["BlaineCountyRadio"] = "RADIO_11_TALK_02";
    RadioStation["TheBlueArk"] = "RADIO_12_REGGAE";
    RadioStation["WorldWideFM"] = "RADIO_13_JAZZ";
    RadioStation["FlyloFM"] = "RADIO_14_DANCE_02";
    RadioStation["TheLowdown"] = "RADIO_15_MOTOWN";
    RadioStation["RadioMirrorPark"] = "RADIO_16_SILVERLAKE";
    RadioStation["Space"] = "RADIO_17_FUNK";
    RadioStation["VinewoodBoulevardRadio"] = "RADIO_18_90S_ROCK";
    RadioStation["SelfRadio"] = "RADIO_19_USER";
    RadioStation["TheLab"] = "RADIO_20_THELAB";
    RadioStation["BlondedLosSantos"] = "RADIO_21_DLC_XM17";
    RadioStation["LosSantosUndergroundRadio"] = "RADIO_22_DLC_BATTLE_MIX1_RADIO";
    RadioStation["RadioOff"] = "OFF";
})(RadioStation = exports.RadioStation || (exports.RadioStation = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/RagdollType.js":
/*!*********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/RagdollType.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RagdollType = void 0;
var RagdollType;
(function (RagdollType) {
    RagdollType[RagdollType["Normal"] = 0] = "Normal";
    RagdollType[RagdollType["StiffLegs"] = 1] = "StiffLegs";
    RagdollType[RagdollType["NarrowLegs"] = 2] = "NarrowLegs";
    RagdollType[RagdollType["WideLegs"] = 3] = "WideLegs";
})(RagdollType = exports.RagdollType || (exports.RagdollType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Relationship.js":
/*!**********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Relationship.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Relationship = void 0;
var Relationship;
(function (Relationship) {
    Relationship[Relationship["Hate"] = 5] = "Hate";
    Relationship[Relationship["Dislike"] = 4] = "Dislike";
    Relationship[Relationship["Neutral"] = 3] = "Neutral";
    Relationship[Relationship["Like"] = 2] = "Like";
    Relationship[Relationship["Respect"] = 1] = "Respect";
    Relationship[Relationship["Companion"] = 0] = "Companion";
    Relationship[Relationship["Pedestrians"] = 255] = "Pedestrians";
})(Relationship = exports.Relationship || (exports.Relationship = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/RopeType.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/RopeType.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RopeType = void 0;
var RopeType;
(function (RopeType) {
    RopeType[RopeType["ThickRope"] = 4] = "ThickRope";
    RopeType[RopeType["ThinMetalWire"] = 5] = "ThinMetalWire";
})(RopeType = exports.RopeType || (exports.RopeType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/ScreenEffect.js":
/*!**********************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/ScreenEffect.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenEffect = void 0;
var ScreenEffect;
(function (ScreenEffect) {
    ScreenEffect[ScreenEffect["SwitchHudIn"] = 0] = "SwitchHudIn";
    ScreenEffect[ScreenEffect["SwitchHudOut"] = 1] = "SwitchHudOut";
    ScreenEffect[ScreenEffect["FocusIn"] = 2] = "FocusIn";
    ScreenEffect[ScreenEffect["FocusOut"] = 3] = "FocusOut";
    ScreenEffect[ScreenEffect["MinigameEndNeutral"] = 4] = "MinigameEndNeutral";
    ScreenEffect[ScreenEffect["MinigameEndTrevor"] = 5] = "MinigameEndTrevor";
    ScreenEffect[ScreenEffect["MinigameEndFranklin"] = 6] = "MinigameEndFranklin";
    ScreenEffect[ScreenEffect["MinigameEndMichael"] = 7] = "MinigameEndMichael";
    ScreenEffect[ScreenEffect["MinigameTransitionOut"] = 8] = "MinigameTransitionOut";
    ScreenEffect[ScreenEffect["MinigameTransitionIn"] = 9] = "MinigameTransitionIn";
    ScreenEffect[ScreenEffect["SwitchShortNeutralIn"] = 10] = "SwitchShortNeutralIn";
    ScreenEffect[ScreenEffect["SwitchShortFranklinIn"] = 11] = "SwitchShortFranklinIn";
    ScreenEffect[ScreenEffect["SwitchShortTrevorIn"] = 12] = "SwitchShortTrevorIn";
    ScreenEffect[ScreenEffect["SwitchShortMichaelIn"] = 13] = "SwitchShortMichaelIn";
    ScreenEffect[ScreenEffect["SwitchOpenMichaelIn"] = 14] = "SwitchOpenMichaelIn";
    ScreenEffect[ScreenEffect["SwitchOpenFranklinIn"] = 15] = "SwitchOpenFranklinIn";
    ScreenEffect[ScreenEffect["SwitchOpenTrevorIn"] = 16] = "SwitchOpenTrevorIn";
    ScreenEffect[ScreenEffect["SwitchHudMichaelOut"] = 17] = "SwitchHudMichaelOut";
    ScreenEffect[ScreenEffect["SwitchHudFranklinOut"] = 18] = "SwitchHudFranklinOut";
    ScreenEffect[ScreenEffect["SwitchHudTrevorOut"] = 19] = "SwitchHudTrevorOut";
    ScreenEffect[ScreenEffect["SwitchShortFranklinMid"] = 20] = "SwitchShortFranklinMid";
    ScreenEffect[ScreenEffect["SwitchShortMichaelMid"] = 21] = "SwitchShortMichaelMid";
    ScreenEffect[ScreenEffect["SwitchShortTrevorMid"] = 22] = "SwitchShortTrevorMid";
    ScreenEffect[ScreenEffect["DeathFailOut"] = 23] = "DeathFailOut";
    ScreenEffect[ScreenEffect["CamPushInNeutral"] = 24] = "CamPushInNeutral";
    ScreenEffect[ScreenEffect["CamPushInFranklin"] = 25] = "CamPushInFranklin";
    ScreenEffect[ScreenEffect["CamPushInMichael"] = 26] = "CamPushInMichael";
    ScreenEffect[ScreenEffect["CamPushInTrevor"] = 27] = "CamPushInTrevor";
    ScreenEffect[ScreenEffect["SwitchSceneFranklin"] = 28] = "SwitchSceneFranklin";
    ScreenEffect[ScreenEffect["SwitchSceneTrevor"] = 29] = "SwitchSceneTrevor";
    ScreenEffect[ScreenEffect["SwitchSceneMichael"] = 30] = "SwitchSceneMichael";
    ScreenEffect[ScreenEffect["SwitchSceneNeutral"] = 31] = "SwitchSceneNeutral";
    ScreenEffect[ScreenEffect["MpCelebWin"] = 32] = "MpCelebWin";
    ScreenEffect[ScreenEffect["MpCelebWinOut"] = 33] = "MpCelebWinOut";
    ScreenEffect[ScreenEffect["MpCelebLose"] = 34] = "MpCelebLose";
    ScreenEffect[ScreenEffect["MpCelebLoseOut"] = 35] = "MpCelebLoseOut";
    ScreenEffect[ScreenEffect["DeathFailNeutralIn"] = 36] = "DeathFailNeutralIn";
    ScreenEffect[ScreenEffect["DeathFailMpDark"] = 37] = "DeathFailMpDark";
    ScreenEffect[ScreenEffect["DeathFailMpIn"] = 38] = "DeathFailMpIn";
    ScreenEffect[ScreenEffect["MpCelebPreloadFade"] = 39] = "MpCelebPreloadFade";
    ScreenEffect[ScreenEffect["PeyoteEndOut"] = 40] = "PeyoteEndOut";
    ScreenEffect[ScreenEffect["PeyoteEndIn"] = 41] = "PeyoteEndIn";
    ScreenEffect[ScreenEffect["PeyoteIn"] = 42] = "PeyoteIn";
    ScreenEffect[ScreenEffect["PeyoteOut"] = 43] = "PeyoteOut";
    ScreenEffect[ScreenEffect["MpRaceCrash"] = 44] = "MpRaceCrash";
    ScreenEffect[ScreenEffect["SuccessFranklin"] = 45] = "SuccessFranklin";
    ScreenEffect[ScreenEffect["SuccessTrevor"] = 46] = "SuccessTrevor";
    ScreenEffect[ScreenEffect["SuccessMichael"] = 47] = "SuccessMichael";
    ScreenEffect[ScreenEffect["DrugsMichaelAliensFightIn"] = 48] = "DrugsMichaelAliensFightIn";
    ScreenEffect[ScreenEffect["DrugsMichaelAliensFight"] = 49] = "DrugsMichaelAliensFight";
    ScreenEffect[ScreenEffect["DrugsMichaelAliensFightOut"] = 50] = "DrugsMichaelAliensFightOut";
    ScreenEffect[ScreenEffect["DrugsTrevorClownsFightIn"] = 51] = "DrugsTrevorClownsFightIn";
    ScreenEffect[ScreenEffect["DrugsTrevorClownsFight"] = 52] = "DrugsTrevorClownsFight";
    ScreenEffect[ScreenEffect["DrugsTrevorClownsFightOut"] = 53] = "DrugsTrevorClownsFightOut";
    ScreenEffect[ScreenEffect["HeistCelebPass"] = 54] = "HeistCelebPass";
    ScreenEffect[ScreenEffect["HeistCelebPassBw"] = 55] = "HeistCelebPassBw";
    ScreenEffect[ScreenEffect["HeistCelebEnd"] = 56] = "HeistCelebEnd";
    ScreenEffect[ScreenEffect["HeistCelebToast"] = 57] = "HeistCelebToast";
    ScreenEffect[ScreenEffect["MenuMgHeistIn"] = 58] = "MenuMgHeistIn";
    ScreenEffect[ScreenEffect["MenuMgTournamentIn"] = 59] = "MenuMgTournamentIn";
    ScreenEffect[ScreenEffect["MenuMgSelectionIn"] = 60] = "MenuMgSelectionIn";
    ScreenEffect[ScreenEffect["ChopVision"] = 61] = "ChopVision";
    ScreenEffect[ScreenEffect["DmtFlightIntro"] = 62] = "DmtFlightIntro";
    ScreenEffect[ScreenEffect["DmtFlight"] = 63] = "DmtFlight";
    ScreenEffect[ScreenEffect["DrugsDrivingIn"] = 64] = "DrugsDrivingIn";
    ScreenEffect[ScreenEffect["DrugsDrivingOut"] = 65] = "DrugsDrivingOut";
    ScreenEffect[ScreenEffect["SwitchOpenNeutralFib5"] = 66] = "SwitchOpenNeutralFib5";
    ScreenEffect[ScreenEffect["HeistLocate"] = 67] = "HeistLocate";
    ScreenEffect[ScreenEffect["MpJobLoad"] = 68] = "MpJobLoad";
    ScreenEffect[ScreenEffect["RaceTurbo"] = 69] = "RaceTurbo";
    ScreenEffect[ScreenEffect["MpIntroLogo"] = 70] = "MpIntroLogo";
    ScreenEffect[ScreenEffect["HeistTripSkipFade"] = 71] = "HeistTripSkipFade";
    ScreenEffect[ScreenEffect["MenuMgHeistOut"] = 72] = "MenuMgHeistOut";
    ScreenEffect[ScreenEffect["MpCoronaSwitch"] = 73] = "MpCoronaSwitch";
    ScreenEffect[ScreenEffect["MenuMgSelectionTint"] = 74] = "MenuMgSelectionTint";
    ScreenEffect[ScreenEffect["SuccessNeutral"] = 75] = "SuccessNeutral";
    ScreenEffect[ScreenEffect["ExplosionJosh3"] = 76] = "ExplosionJosh3";
    ScreenEffect[ScreenEffect["SniperOverlay"] = 77] = "SniperOverlay";
    ScreenEffect[ScreenEffect["RampageOut"] = 78] = "RampageOut";
    ScreenEffect[ScreenEffect["Rampage"] = 79] = "Rampage";
    ScreenEffect[ScreenEffect["DontTazemeBro"] = 80] = "DontTazemeBro";
})(ScreenEffect = exports.ScreenEffect || (exports.ScreenEffect = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/SpeechModifier.js":
/*!************************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/SpeechModifier.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpeechModifier = void 0;
var SpeechModifier;
(function (SpeechModifier) {
    SpeechModifier[SpeechModifier["Standard"] = 0] = "Standard";
    SpeechModifier[SpeechModifier["AllowRepeat"] = 1] = "AllowRepeat";
    SpeechModifier[SpeechModifier["Beat"] = 2] = "Beat";
    SpeechModifier[SpeechModifier["Force"] = 3] = "Force";
    SpeechModifier[SpeechModifier["ForceFrontend"] = 4] = "ForceFrontend";
    SpeechModifier[SpeechModifier["ForceNoRepeatFrontend"] = 5] = "ForceNoRepeatFrontend";
    SpeechModifier[SpeechModifier["ForceNormal"] = 6] = "ForceNormal";
    SpeechModifier[SpeechModifier["ForceNormalClear"] = 7] = "ForceNormalClear";
    SpeechModifier[SpeechModifier["ForceNormalCritical"] = 8] = "ForceNormalCritical";
    SpeechModifier[SpeechModifier["ForceShouted"] = 9] = "ForceShouted";
    SpeechModifier[SpeechModifier["ForceShoutedClear"] = 10] = "ForceShoutedClear";
    SpeechModifier[SpeechModifier["ForceShoutedCritical"] = 11] = "ForceShoutedCritical";
    SpeechModifier[SpeechModifier["ForcePreloadOnly"] = 12] = "ForcePreloadOnly";
    SpeechModifier[SpeechModifier["Megaphone"] = 13] = "Megaphone";
    SpeechModifier[SpeechModifier["Helicopter"] = 14] = "Helicopter";
    SpeechModifier[SpeechModifier["ForceMegaphone"] = 15] = "ForceMegaphone";
    SpeechModifier[SpeechModifier["ForceHelicopter"] = 16] = "ForceHelicopter";
    SpeechModifier[SpeechModifier["Interrupt"] = 17] = "Interrupt";
    SpeechModifier[SpeechModifier["InterruptShouted"] = 18] = "InterruptShouted";
    SpeechModifier[SpeechModifier["InterruptShoutedClear"] = 19] = "InterruptShoutedClear";
    SpeechModifier[SpeechModifier["InterruptShoutedCritical"] = 20] = "InterruptShoutedCritical";
    SpeechModifier[SpeechModifier["InterruptNoForce"] = 21] = "InterruptNoForce";
    SpeechModifier[SpeechModifier["InterruptFrontend"] = 22] = "InterruptFrontend";
    SpeechModifier[SpeechModifier["InterruptNoForceFrontend"] = 23] = "InterruptNoForceFrontend";
    SpeechModifier[SpeechModifier["AddBlip"] = 24] = "AddBlip";
    SpeechModifier[SpeechModifier["AddBlipAllowRepeat"] = 25] = "AddBlipAllowRepeat";
    SpeechModifier[SpeechModifier["AddBlipForce"] = 26] = "AddBlipForce";
    SpeechModifier[SpeechModifier["AddBlipShouted"] = 27] = "AddBlipShouted";
    SpeechModifier[SpeechModifier["AddBlipShoutedForce"] = 28] = "AddBlipShoutedForce";
    SpeechModifier[SpeechModifier["AddBlipInterrupt"] = 29] = "AddBlipInterrupt";
    SpeechModifier[SpeechModifier["AddBlipInterruptForce"] = 30] = "AddBlipInterruptForce";
    SpeechModifier[SpeechModifier["ForcePreloadOnlyShouted"] = 31] = "ForcePreloadOnlyShouted";
    SpeechModifier[SpeechModifier["ForcePreloadOnlyShoutedClear"] = 32] = "ForcePreloadOnlyShoutedClear";
    SpeechModifier[SpeechModifier["ForcePreloadOnlyShoutedCritical"] = 33] = "ForcePreloadOnlyShoutedCritical";
    SpeechModifier[SpeechModifier["Shouted"] = 34] = "Shouted";
    SpeechModifier[SpeechModifier["ShoutedClear"] = 35] = "ShoutedClear";
    SpeechModifier[SpeechModifier["ShoutedCritical"] = 36] = "ShoutedCritical";
})(SpeechModifier = exports.SpeechModifier || (exports.SpeechModifier = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Vehicle.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Vehicle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleWheelIndex = exports.VehicleWheelType = exports.VehicleDoorIndex = exports.VehiclePaintType = exports.VehicleToggleModType = exports.VehicleModType = exports.VehicleWindowIndex = exports.VehicleWindowTint = exports.VehicleSeat = exports.VehicleRoofState = exports.VehicleNeonLight = exports.VehicleLockStatus = exports.VehicleLandingGearState = exports.VehicleColor = exports.VehicleClass = exports.LicensePlateType = exports.LicensePlateStyle = exports.CargobobHook = void 0;
var CargobobHook;
(function (CargobobHook) {
    CargobobHook[CargobobHook["Hook"] = 0] = "Hook";
    CargobobHook[CargobobHook["Magnet"] = 1] = "Magnet";
})(CargobobHook = exports.CargobobHook || (exports.CargobobHook = {}));
var LicensePlateStyle;
(function (LicensePlateStyle) {
    LicensePlateStyle[LicensePlateStyle["BlueOnWhite1"] = 3] = "BlueOnWhite1";
    LicensePlateStyle[LicensePlateStyle["BlueOnWhite2"] = 0] = "BlueOnWhite2";
    LicensePlateStyle[LicensePlateStyle["BlueOnWhite3"] = 4] = "BlueOnWhite3";
    LicensePlateStyle[LicensePlateStyle["YellowOnBlack"] = 1] = "YellowOnBlack";
    LicensePlateStyle[LicensePlateStyle["YellowOnBlue"] = 2] = "YellowOnBlue";
    LicensePlateStyle[LicensePlateStyle["NorthYankton"] = 5] = "NorthYankton";
})(LicensePlateStyle = exports.LicensePlateStyle || (exports.LicensePlateStyle = {}));
var LicensePlateType;
(function (LicensePlateType) {
    LicensePlateType[LicensePlateType["FrontAndRearPlates"] = 0] = "FrontAndRearPlates";
    LicensePlateType[LicensePlateType["FrontPlate"] = 1] = "FrontPlate";
    LicensePlateType[LicensePlateType["RearPlate"] = 2] = "RearPlate";
    LicensePlateType[LicensePlateType["None"] = 3] = "None";
})(LicensePlateType = exports.LicensePlateType || (exports.LicensePlateType = {}));
var VehicleClass;
(function (VehicleClass) {
    VehicleClass[VehicleClass["Compacts"] = 0] = "Compacts";
    VehicleClass[VehicleClass["Sedans"] = 1] = "Sedans";
    VehicleClass[VehicleClass["SUVs"] = 2] = "SUVs";
    VehicleClass[VehicleClass["Coupes"] = 3] = "Coupes";
    VehicleClass[VehicleClass["Muscle"] = 4] = "Muscle";
    VehicleClass[VehicleClass["SportsClassics"] = 5] = "SportsClassics";
    VehicleClass[VehicleClass["Sports"] = 6] = "Sports";
    VehicleClass[VehicleClass["Super"] = 7] = "Super";
    VehicleClass[VehicleClass["Motorcycles"] = 8] = "Motorcycles";
    VehicleClass[VehicleClass["OffRoad"] = 9] = "OffRoad";
    VehicleClass[VehicleClass["Industrial"] = 10] = "Industrial";
    VehicleClass[VehicleClass["Utility"] = 11] = "Utility";
    VehicleClass[VehicleClass["Vans"] = 12] = "Vans";
    VehicleClass[VehicleClass["Cycles"] = 13] = "Cycles";
    VehicleClass[VehicleClass["Boats"] = 14] = "Boats";
    VehicleClass[VehicleClass["Helicopters"] = 15] = "Helicopters";
    VehicleClass[VehicleClass["Planes"] = 16] = "Planes";
    VehicleClass[VehicleClass["Service"] = 17] = "Service";
    VehicleClass[VehicleClass["Emergency"] = 18] = "Emergency";
    VehicleClass[VehicleClass["Military"] = 19] = "Military";
    VehicleClass[VehicleClass["Commercial"] = 20] = "Commercial";
    VehicleClass[VehicleClass["Trains"] = 21] = "Trains";
})(VehicleClass = exports.VehicleClass || (exports.VehicleClass = {}));
var VehicleColor;
(function (VehicleColor) {
    VehicleColor[VehicleColor["MetallicBlack"] = 0] = "MetallicBlack";
    VehicleColor[VehicleColor["MetallicGraphiteBlack"] = 1] = "MetallicGraphiteBlack";
    VehicleColor[VehicleColor["MetallicBlackSteel"] = 2] = "MetallicBlackSteel";
    VehicleColor[VehicleColor["MetallicDarkSilver"] = 3] = "MetallicDarkSilver";
    VehicleColor[VehicleColor["MetallicSilver"] = 4] = "MetallicSilver";
    VehicleColor[VehicleColor["MetallicBlueSilver"] = 5] = "MetallicBlueSilver";
    VehicleColor[VehicleColor["MetallicSteelGray"] = 6] = "MetallicSteelGray";
    VehicleColor[VehicleColor["MetallicShadowSilver"] = 7] = "MetallicShadowSilver";
    VehicleColor[VehicleColor["MetallicStoneSilver"] = 8] = "MetallicStoneSilver";
    VehicleColor[VehicleColor["MetallicMidnightSilver"] = 9] = "MetallicMidnightSilver";
    VehicleColor[VehicleColor["MetallicGunMetal"] = 10] = "MetallicGunMetal";
    VehicleColor[VehicleColor["MetallicAnthraciteGray"] = 11] = "MetallicAnthraciteGray";
    VehicleColor[VehicleColor["MatteBlack"] = 12] = "MatteBlack";
    VehicleColor[VehicleColor["MatteGray"] = 13] = "MatteGray";
    VehicleColor[VehicleColor["MatteLightGray"] = 14] = "MatteLightGray";
    VehicleColor[VehicleColor["UtilBlack"] = 15] = "UtilBlack";
    VehicleColor[VehicleColor["UtilBlackPoly"] = 16] = "UtilBlackPoly";
    VehicleColor[VehicleColor["UtilDarksilver"] = 17] = "UtilDarksilver";
    VehicleColor[VehicleColor["UtilSilver"] = 18] = "UtilSilver";
    VehicleColor[VehicleColor["UtilGunMetal"] = 19] = "UtilGunMetal";
    VehicleColor[VehicleColor["UtilShadowSilver"] = 20] = "UtilShadowSilver";
    VehicleColor[VehicleColor["WornBlack"] = 21] = "WornBlack";
    VehicleColor[VehicleColor["WornGraphite"] = 22] = "WornGraphite";
    VehicleColor[VehicleColor["WornSilverGray"] = 23] = "WornSilverGray";
    VehicleColor[VehicleColor["WornSilver"] = 24] = "WornSilver";
    VehicleColor[VehicleColor["WornBlueSilver"] = 25] = "WornBlueSilver";
    VehicleColor[VehicleColor["WornShadowSilver"] = 26] = "WornShadowSilver";
    VehicleColor[VehicleColor["MetallicRed"] = 27] = "MetallicRed";
    VehicleColor[VehicleColor["MetallicTorinoRed"] = 28] = "MetallicTorinoRed";
    VehicleColor[VehicleColor["MetallicFormulaRed"] = 29] = "MetallicFormulaRed";
    VehicleColor[VehicleColor["MetallicBlazeRed"] = 30] = "MetallicBlazeRed";
    VehicleColor[VehicleColor["MetallicGracefulRed"] = 31] = "MetallicGracefulRed";
    VehicleColor[VehicleColor["MetallicGarnetRed"] = 32] = "MetallicGarnetRed";
    VehicleColor[VehicleColor["MetallicDesertRed"] = 33] = "MetallicDesertRed";
    VehicleColor[VehicleColor["MetallicCabernetRed"] = 34] = "MetallicCabernetRed";
    VehicleColor[VehicleColor["MetallicCandyRed"] = 35] = "MetallicCandyRed";
    VehicleColor[VehicleColor["MetallicSunriseOrange"] = 36] = "MetallicSunriseOrange";
    VehicleColor[VehicleColor["MetallicClassicGold"] = 37] = "MetallicClassicGold";
    VehicleColor[VehicleColor["MetallicOrange"] = 38] = "MetallicOrange";
    VehicleColor[VehicleColor["MatteRed"] = 39] = "MatteRed";
    VehicleColor[VehicleColor["MatteDarkRed"] = 40] = "MatteDarkRed";
    VehicleColor[VehicleColor["MatteOrange"] = 41] = "MatteOrange";
    VehicleColor[VehicleColor["MatteYellow"] = 42] = "MatteYellow";
    VehicleColor[VehicleColor["UtilRed"] = 43] = "UtilRed";
    VehicleColor[VehicleColor["UtilBrightRed"] = 44] = "UtilBrightRed";
    VehicleColor[VehicleColor["UtilGarnetRed"] = 45] = "UtilGarnetRed";
    VehicleColor[VehicleColor["WornRed"] = 46] = "WornRed";
    VehicleColor[VehicleColor["WornGoldenRed"] = 47] = "WornGoldenRed";
    VehicleColor[VehicleColor["WornDarkRed"] = 48] = "WornDarkRed";
    VehicleColor[VehicleColor["MetallicDarkGreen"] = 49] = "MetallicDarkGreen";
    VehicleColor[VehicleColor["MetallicRacingGreen"] = 50] = "MetallicRacingGreen";
    VehicleColor[VehicleColor["MetallicSeaGreen"] = 51] = "MetallicSeaGreen";
    VehicleColor[VehicleColor["MetallicOliveGreen"] = 52] = "MetallicOliveGreen";
    VehicleColor[VehicleColor["MetallicGreen"] = 53] = "MetallicGreen";
    VehicleColor[VehicleColor["MetallicGasolineBlueGreen"] = 54] = "MetallicGasolineBlueGreen";
    VehicleColor[VehicleColor["MatteLimeGreen"] = 55] = "MatteLimeGreen";
    VehicleColor[VehicleColor["UtilDarkGreen"] = 56] = "UtilDarkGreen";
    VehicleColor[VehicleColor["UtilGreen"] = 57] = "UtilGreen";
    VehicleColor[VehicleColor["WornDarkGreen"] = 58] = "WornDarkGreen";
    VehicleColor[VehicleColor["WornGreen"] = 59] = "WornGreen";
    VehicleColor[VehicleColor["WornSeaWash"] = 60] = "WornSeaWash";
    VehicleColor[VehicleColor["MetallicMidnightBlue"] = 61] = "MetallicMidnightBlue";
    VehicleColor[VehicleColor["MetallicDarkBlue"] = 62] = "MetallicDarkBlue";
    VehicleColor[VehicleColor["MetallicSaxonyBlue"] = 63] = "MetallicSaxonyBlue";
    VehicleColor[VehicleColor["MetallicBlue"] = 64] = "MetallicBlue";
    VehicleColor[VehicleColor["MetallicMarinerBlue"] = 65] = "MetallicMarinerBlue";
    VehicleColor[VehicleColor["MetallicHarborBlue"] = 66] = "MetallicHarborBlue";
    VehicleColor[VehicleColor["MetallicDiamondBlue"] = 67] = "MetallicDiamondBlue";
    VehicleColor[VehicleColor["MetallicSurfBlue"] = 68] = "MetallicSurfBlue";
    VehicleColor[VehicleColor["MetallicNauticalBlue"] = 69] = "MetallicNauticalBlue";
    VehicleColor[VehicleColor["MetallicBrightBlue"] = 70] = "MetallicBrightBlue";
    VehicleColor[VehicleColor["MetallicPurpleBlue"] = 71] = "MetallicPurpleBlue";
    VehicleColor[VehicleColor["MetallicSpinnakerBlue"] = 72] = "MetallicSpinnakerBlue";
    VehicleColor[VehicleColor["MetallicUltraBlue"] = 73] = "MetallicUltraBlue";
    VehicleColor[VehicleColor["UtilDarkBlue"] = 75] = "UtilDarkBlue";
    VehicleColor[VehicleColor["UtilMidnightBlue"] = 76] = "UtilMidnightBlue";
    VehicleColor[VehicleColor["UtilBlue"] = 77] = "UtilBlue";
    VehicleColor[VehicleColor["UtilSeaFoamBlue"] = 78] = "UtilSeaFoamBlue";
    VehicleColor[VehicleColor["UtilLightningBlue"] = 79] = "UtilLightningBlue";
    VehicleColor[VehicleColor["UtilMauiBluePoly"] = 80] = "UtilMauiBluePoly";
    VehicleColor[VehicleColor["UtilBrightBlue"] = 81] = "UtilBrightBlue";
    VehicleColor[VehicleColor["MatteDarkBlue"] = 82] = "MatteDarkBlue";
    VehicleColor[VehicleColor["MatteBlue"] = 83] = "MatteBlue";
    VehicleColor[VehicleColor["MatteMidnightBlue"] = 84] = "MatteMidnightBlue";
    VehicleColor[VehicleColor["WornDarkBlue"] = 85] = "WornDarkBlue";
    VehicleColor[VehicleColor["WornBlue"] = 86] = "WornBlue";
    VehicleColor[VehicleColor["WornLightBlue"] = 87] = "WornLightBlue";
    VehicleColor[VehicleColor["MetallicTaxiYellow"] = 88] = "MetallicTaxiYellow";
    VehicleColor[VehicleColor["MetallicRaceYellow"] = 89] = "MetallicRaceYellow";
    VehicleColor[VehicleColor["MetallicBronze"] = 90] = "MetallicBronze";
    VehicleColor[VehicleColor["MetallicYellowBird"] = 91] = "MetallicYellowBird";
    VehicleColor[VehicleColor["MetallicLime"] = 92] = "MetallicLime";
    VehicleColor[VehicleColor["MetallicChampagne"] = 93] = "MetallicChampagne";
    VehicleColor[VehicleColor["MetallicPuebloBeige"] = 94] = "MetallicPuebloBeige";
    VehicleColor[VehicleColor["MetallicDarkIvory"] = 95] = "MetallicDarkIvory";
    VehicleColor[VehicleColor["MetallicChocoBrown"] = 96] = "MetallicChocoBrown";
    VehicleColor[VehicleColor["MetallicGoldenBrown"] = 97] = "MetallicGoldenBrown";
    VehicleColor[VehicleColor["MetallicLightBrown"] = 98] = "MetallicLightBrown";
    VehicleColor[VehicleColor["MetallicStrawBeige"] = 99] = "MetallicStrawBeige";
    VehicleColor[VehicleColor["MetallicMossBrown"] = 100] = "MetallicMossBrown";
    VehicleColor[VehicleColor["MetallicBistonBrown"] = 101] = "MetallicBistonBrown";
    VehicleColor[VehicleColor["MetallicBeechwood"] = 102] = "MetallicBeechwood";
    VehicleColor[VehicleColor["MetallicDarkBeechwood"] = 103] = "MetallicDarkBeechwood";
    VehicleColor[VehicleColor["MetallicChocoOrange"] = 104] = "MetallicChocoOrange";
    VehicleColor[VehicleColor["MetallicBeachSand"] = 105] = "MetallicBeachSand";
    VehicleColor[VehicleColor["MetallicSunBleechedSand"] = 106] = "MetallicSunBleechedSand";
    VehicleColor[VehicleColor["MetallicCream"] = 107] = "MetallicCream";
    VehicleColor[VehicleColor["UtilBrown"] = 108] = "UtilBrown";
    VehicleColor[VehicleColor["UtilMediumBrown"] = 109] = "UtilMediumBrown";
    VehicleColor[VehicleColor["UtilLightBrown"] = 110] = "UtilLightBrown";
    VehicleColor[VehicleColor["MetallicWhite"] = 111] = "MetallicWhite";
    VehicleColor[VehicleColor["MetallicFrostWhite"] = 112] = "MetallicFrostWhite";
    VehicleColor[VehicleColor["WornHoneyBeige"] = 113] = "WornHoneyBeige";
    VehicleColor[VehicleColor["WornBrown"] = 114] = "WornBrown";
    VehicleColor[VehicleColor["WornDarkBrown"] = 115] = "WornDarkBrown";
    VehicleColor[VehicleColor["WornStrawBeige"] = 116] = "WornStrawBeige";
    VehicleColor[VehicleColor["BrushedSteel"] = 117] = "BrushedSteel";
    VehicleColor[VehicleColor["BrushedBlackSteel"] = 118] = "BrushedBlackSteel";
    VehicleColor[VehicleColor["BrushedAluminium"] = 119] = "BrushedAluminium";
    VehicleColor[VehicleColor["Chrome"] = 120] = "Chrome";
    VehicleColor[VehicleColor["WornOffWhite"] = 121] = "WornOffWhite";
    VehicleColor[VehicleColor["UtilOffWhite"] = 122] = "UtilOffWhite";
    VehicleColor[VehicleColor["WornOrange"] = 123] = "WornOrange";
    VehicleColor[VehicleColor["WornLightOrange"] = 124] = "WornLightOrange";
    VehicleColor[VehicleColor["MetallicSecuricorGreen"] = 125] = "MetallicSecuricorGreen";
    VehicleColor[VehicleColor["WornTaxiYellow"] = 126] = "WornTaxiYellow";
    VehicleColor[VehicleColor["PoliceCarBlue"] = 127] = "PoliceCarBlue";
    VehicleColor[VehicleColor["MatteGreen"] = 128] = "MatteGreen";
    VehicleColor[VehicleColor["MatteBrown"] = 129] = "MatteBrown";
    VehicleColor[VehicleColor["MatteWhite"] = 131] = "MatteWhite";
    VehicleColor[VehicleColor["WornWhite"] = 132] = "WornWhite";
    VehicleColor[VehicleColor["WornOliveArmyGreen"] = 133] = "WornOliveArmyGreen";
    VehicleColor[VehicleColor["PureWhite"] = 134] = "PureWhite";
    VehicleColor[VehicleColor["HotPink"] = 135] = "HotPink";
    VehicleColor[VehicleColor["Salmonpink"] = 136] = "Salmonpink";
    VehicleColor[VehicleColor["MetallicVermillionPink"] = 137] = "MetallicVermillionPink";
    VehicleColor[VehicleColor["Orange"] = 138] = "Orange";
    VehicleColor[VehicleColor["Green"] = 139] = "Green";
    VehicleColor[VehicleColor["Blue"] = 140] = "Blue";
    VehicleColor[VehicleColor["MettalicBlackBlue"] = 141] = "MettalicBlackBlue";
    VehicleColor[VehicleColor["MetallicBlackPurple"] = 142] = "MetallicBlackPurple";
    VehicleColor[VehicleColor["MetallicBlackRed"] = 143] = "MetallicBlackRed";
    VehicleColor[VehicleColor["HunterGreen"] = 144] = "HunterGreen";
    VehicleColor[VehicleColor["MetallicPurple"] = 145] = "MetallicPurple";
    VehicleColor[VehicleColor["MetaillicVDarkBlue"] = 146] = "MetaillicVDarkBlue";
    VehicleColor[VehicleColor["ModshopBlack1"] = 147] = "ModshopBlack1";
    VehicleColor[VehicleColor["MattePurple"] = 148] = "MattePurple";
    VehicleColor[VehicleColor["MatteDarkPurple"] = 149] = "MatteDarkPurple";
    VehicleColor[VehicleColor["MetallicLavaRed"] = 150] = "MetallicLavaRed";
    VehicleColor[VehicleColor["MatteForestGreen"] = 151] = "MatteForestGreen";
    VehicleColor[VehicleColor["MatteOliveDrab"] = 152] = "MatteOliveDrab";
    VehicleColor[VehicleColor["MatteDesertBrown"] = 153] = "MatteDesertBrown";
    VehicleColor[VehicleColor["MatteDesertTan"] = 154] = "MatteDesertTan";
    VehicleColor[VehicleColor["MatteFoliageGreen"] = 155] = "MatteFoliageGreen";
    VehicleColor[VehicleColor["DefaultAlloyColor"] = 156] = "DefaultAlloyColor";
    VehicleColor[VehicleColor["EpsilonBlue"] = 157] = "EpsilonBlue";
    VehicleColor[VehicleColor["PureGold"] = 158] = "PureGold";
    VehicleColor[VehicleColor["BrushedGold"] = 159] = "BrushedGold";
})(VehicleColor = exports.VehicleColor || (exports.VehicleColor = {}));
var VehicleLandingGearState;
(function (VehicleLandingGearState) {
    VehicleLandingGearState[VehicleLandingGearState["Deployed"] = 0] = "Deployed";
    VehicleLandingGearState[VehicleLandingGearState["Closing"] = 1] = "Closing";
    VehicleLandingGearState[VehicleLandingGearState["Opening"] = 2] = "Opening";
    VehicleLandingGearState[VehicleLandingGearState["Retracted"] = 3] = "Retracted";
})(VehicleLandingGearState = exports.VehicleLandingGearState || (exports.VehicleLandingGearState = {}));
var VehicleLockStatus;
(function (VehicleLockStatus) {
    VehicleLockStatus[VehicleLockStatus["None"] = 0] = "None";
    VehicleLockStatus[VehicleLockStatus["Unlocked"] = 1] = "Unlocked";
    VehicleLockStatus[VehicleLockStatus["Locked"] = 2] = "Locked";
    VehicleLockStatus[VehicleLockStatus["LockedForPlayer"] = 3] = "LockedForPlayer";
    VehicleLockStatus[VehicleLockStatus["StickPlayerInside"] = 4] = "StickPlayerInside";
    VehicleLockStatus[VehicleLockStatus["CanBeBrokenInto"] = 7] = "CanBeBrokenInto";
    VehicleLockStatus[VehicleLockStatus["CanBeBrokenIntoPersist"] = 8] = "CanBeBrokenIntoPersist";
    VehicleLockStatus[VehicleLockStatus["CannotBeTriedToEnter"] = 10] = "CannotBeTriedToEnter";
})(VehicleLockStatus = exports.VehicleLockStatus || (exports.VehicleLockStatus = {}));
var VehicleNeonLight;
(function (VehicleNeonLight) {
    VehicleNeonLight[VehicleNeonLight["Left"] = 0] = "Left";
    VehicleNeonLight[VehicleNeonLight["Right"] = 1] = "Right";
    VehicleNeonLight[VehicleNeonLight["Front"] = 2] = "Front";
    VehicleNeonLight[VehicleNeonLight["Back"] = 3] = "Back";
})(VehicleNeonLight = exports.VehicleNeonLight || (exports.VehicleNeonLight = {}));
var VehicleRoofState;
(function (VehicleRoofState) {
    VehicleRoofState[VehicleRoofState["Closed"] = 0] = "Closed";
    VehicleRoofState[VehicleRoofState["Opening"] = 1] = "Opening";
    VehicleRoofState[VehicleRoofState["Opened"] = 2] = "Opened";
    VehicleRoofState[VehicleRoofState["Closing"] = 3] = "Closing";
})(VehicleRoofState = exports.VehicleRoofState || (exports.VehicleRoofState = {}));
var VehicleSeat;
(function (VehicleSeat) {
    VehicleSeat[VehicleSeat["None"] = -3] = "None";
    VehicleSeat[VehicleSeat["Any"] = -2] = "Any";
    VehicleSeat[VehicleSeat["Driver"] = -1] = "Driver";
    VehicleSeat[VehicleSeat["Passenger"] = 0] = "Passenger";
    VehicleSeat[VehicleSeat["LeftFront"] = -1] = "LeftFront";
    VehicleSeat[VehicleSeat["RightFront"] = 0] = "RightFront";
    VehicleSeat[VehicleSeat["LeftRear"] = 1] = "LeftRear";
    VehicleSeat[VehicleSeat["RightRear"] = 2] = "RightRear";
    VehicleSeat[VehicleSeat["ExtraSeat1"] = 3] = "ExtraSeat1";
    VehicleSeat[VehicleSeat["ExtraSeat2"] = 4] = "ExtraSeat2";
    VehicleSeat[VehicleSeat["ExtraSeat3"] = 5] = "ExtraSeat3";
    VehicleSeat[VehicleSeat["ExtraSeat4"] = 6] = "ExtraSeat4";
    VehicleSeat[VehicleSeat["ExtraSeat5"] = 7] = "ExtraSeat5";
    VehicleSeat[VehicleSeat["ExtraSeat6"] = 8] = "ExtraSeat6";
    VehicleSeat[VehicleSeat["ExtraSeat7"] = 9] = "ExtraSeat7";
    VehicleSeat[VehicleSeat["ExtraSeat8"] = 10] = "ExtraSeat8";
    VehicleSeat[VehicleSeat["ExtraSeat9"] = 11] = "ExtraSeat9";
    VehicleSeat[VehicleSeat["ExtraSeat10"] = 12] = "ExtraSeat10";
    VehicleSeat[VehicleSeat["ExtraSeat11"] = 13] = "ExtraSeat11";
    VehicleSeat[VehicleSeat["ExtraSeat12"] = 14] = "ExtraSeat12";
})(VehicleSeat = exports.VehicleSeat || (exports.VehicleSeat = {}));
var VehicleWindowTint;
(function (VehicleWindowTint) {
    VehicleWindowTint[VehicleWindowTint["None"] = 0] = "None";
    VehicleWindowTint[VehicleWindowTint["PureBlack"] = 1] = "PureBlack";
    VehicleWindowTint[VehicleWindowTint["DarkSmoke"] = 2] = "DarkSmoke";
    VehicleWindowTint[VehicleWindowTint["LightSmoke"] = 3] = "LightSmoke";
    VehicleWindowTint[VehicleWindowTint["Stock"] = 4] = "Stock";
    VehicleWindowTint[VehicleWindowTint["Limo"] = 5] = "Limo";
    VehicleWindowTint[VehicleWindowTint["Green"] = 6] = "Green";
})(VehicleWindowTint = exports.VehicleWindowTint || (exports.VehicleWindowTint = {}));
var VehicleWindowIndex;
(function (VehicleWindowIndex) {
    VehicleWindowIndex[VehicleWindowIndex["FrontRightWindow"] = 1] = "FrontRightWindow";
    VehicleWindowIndex[VehicleWindowIndex["FrontLeftWindow"] = 0] = "FrontLeftWindow";
    VehicleWindowIndex[VehicleWindowIndex["BackRightWindow"] = 3] = "BackRightWindow";
    VehicleWindowIndex[VehicleWindowIndex["BackLeftWindow"] = 2] = "BackLeftWindow";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow1"] = 4] = "ExtraWindow1";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow2"] = 5] = "ExtraWindow2";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow3"] = 6] = "ExtraWindow3";
    VehicleWindowIndex[VehicleWindowIndex["ExtraWindow4"] = 7] = "ExtraWindow4";
})(VehicleWindowIndex = exports.VehicleWindowIndex || (exports.VehicleWindowIndex = {}));
var VehicleModType;
(function (VehicleModType) {
    VehicleModType[VehicleModType["Spoilers"] = 0] = "Spoilers";
    VehicleModType[VehicleModType["FrontBumper"] = 1] = "FrontBumper";
    VehicleModType[VehicleModType["RearBumper"] = 2] = "RearBumper";
    VehicleModType[VehicleModType["SideSkirt"] = 3] = "SideSkirt";
    VehicleModType[VehicleModType["Exhaust"] = 4] = "Exhaust";
    VehicleModType[VehicleModType["Frame"] = 5] = "Frame";
    VehicleModType[VehicleModType["Grille"] = 6] = "Grille";
    VehicleModType[VehicleModType["Hood"] = 7] = "Hood";
    VehicleModType[VehicleModType["Fender"] = 8] = "Fender";
    VehicleModType[VehicleModType["RightFender"] = 9] = "RightFender";
    VehicleModType[VehicleModType["Roof"] = 10] = "Roof";
    VehicleModType[VehicleModType["Engine"] = 11] = "Engine";
    VehicleModType[VehicleModType["Brakes"] = 12] = "Brakes";
    VehicleModType[VehicleModType["Transmission"] = 13] = "Transmission";
    VehicleModType[VehicleModType["Horns"] = 14] = "Horns";
    VehicleModType[VehicleModType["Suspension"] = 15] = "Suspension";
    VehicleModType[VehicleModType["Armor"] = 16] = "Armor";
    VehicleModType[VehicleModType["FrontWheel"] = 23] = "FrontWheel";
    VehicleModType[VehicleModType["RearWheel"] = 24] = "RearWheel";
    VehicleModType[VehicleModType["PlateHolder"] = 25] = "PlateHolder";
    VehicleModType[VehicleModType["VanityPlates"] = 26] = "VanityPlates";
    VehicleModType[VehicleModType["TrimDesign"] = 27] = "TrimDesign";
    VehicleModType[VehicleModType["Ornaments"] = 28] = "Ornaments";
    VehicleModType[VehicleModType["Dashboard"] = 29] = "Dashboard";
    VehicleModType[VehicleModType["DialDesign"] = 30] = "DialDesign";
    VehicleModType[VehicleModType["DoorSpeakers"] = 31] = "DoorSpeakers";
    VehicleModType[VehicleModType["Seats"] = 32] = "Seats";
    VehicleModType[VehicleModType["SteeringWheels"] = 33] = "SteeringWheels";
    VehicleModType[VehicleModType["ColumnShifterLevers"] = 34] = "ColumnShifterLevers";
    VehicleModType[VehicleModType["Plaques"] = 35] = "Plaques";
    VehicleModType[VehicleModType["Speakers"] = 36] = "Speakers";
    VehicleModType[VehicleModType["Trunk"] = 37] = "Trunk";
    VehicleModType[VehicleModType["Hydraulics"] = 38] = "Hydraulics";
    VehicleModType[VehicleModType["EngineBlock"] = 39] = "EngineBlock";
    VehicleModType[VehicleModType["AirFilter"] = 40] = "AirFilter";
    VehicleModType[VehicleModType["Struts"] = 41] = "Struts";
    VehicleModType[VehicleModType["ArchCover"] = 42] = "ArchCover";
    VehicleModType[VehicleModType["Aerials"] = 43] = "Aerials";
    VehicleModType[VehicleModType["Trim"] = 44] = "Trim";
    VehicleModType[VehicleModType["Tank"] = 45] = "Tank";
    VehicleModType[VehicleModType["Windows"] = 46] = "Windows";
    VehicleModType[VehicleModType["Livery"] = 48] = "Livery";
})(VehicleModType = exports.VehicleModType || (exports.VehicleModType = {}));
var VehicleToggleModType;
(function (VehicleToggleModType) {
    VehicleToggleModType[VehicleToggleModType["Turbo"] = 18] = "Turbo";
    VehicleToggleModType[VehicleToggleModType["TireSmoke"] = 20] = "TireSmoke";
    VehicleToggleModType[VehicleToggleModType["XenonHeadlights"] = 22] = "XenonHeadlights";
})(VehicleToggleModType = exports.VehicleToggleModType || (exports.VehicleToggleModType = {}));
var VehiclePaintType;
(function (VehiclePaintType) {
    VehiclePaintType[VehiclePaintType["Normal"] = 0] = "Normal";
    VehiclePaintType[VehiclePaintType["Metallic"] = 1] = "Metallic";
    VehiclePaintType[VehiclePaintType["Pearl"] = 2] = "Pearl";
    VehiclePaintType[VehiclePaintType["Matte"] = 3] = "Matte";
    VehiclePaintType[VehiclePaintType["Metal"] = 4] = "Metal";
    VehiclePaintType[VehiclePaintType["Chrome"] = 5] = "Chrome";
})(VehiclePaintType = exports.VehiclePaintType || (exports.VehiclePaintType = {}));
var VehicleDoorIndex;
(function (VehicleDoorIndex) {
    VehicleDoorIndex[VehicleDoorIndex["FrontRightDoor"] = 1] = "FrontRightDoor";
    VehicleDoorIndex[VehicleDoorIndex["FrontLeftDoor"] = 0] = "FrontLeftDoor";
    VehicleDoorIndex[VehicleDoorIndex["BackRightDoor"] = 3] = "BackRightDoor";
    VehicleDoorIndex[VehicleDoorIndex["BackLeftDoor"] = 2] = "BackLeftDoor";
    VehicleDoorIndex[VehicleDoorIndex["Hood"] = 4] = "Hood";
    VehicleDoorIndex[VehicleDoorIndex["Trunk"] = 5] = "Trunk";
})(VehicleDoorIndex = exports.VehicleDoorIndex || (exports.VehicleDoorIndex = {}));
var VehicleWheelType;
(function (VehicleWheelType) {
    VehicleWheelType[VehicleWheelType["Sport"] = 0] = "Sport";
    VehicleWheelType[VehicleWheelType["Muscle"] = 1] = "Muscle";
    VehicleWheelType[VehicleWheelType["Lowrider"] = 2] = "Lowrider";
    VehicleWheelType[VehicleWheelType["SUV"] = 3] = "SUV";
    VehicleWheelType[VehicleWheelType["Offroad"] = 4] = "Offroad";
    VehicleWheelType[VehicleWheelType["Tuner"] = 5] = "Tuner";
    VehicleWheelType[VehicleWheelType["BikeWheels"] = 6] = "BikeWheels";
    VehicleWheelType[VehicleWheelType["HighEnd"] = 7] = "HighEnd";
    VehicleWheelType[VehicleWheelType["BennysOriginals"] = 8] = "BennysOriginals";
    VehicleWheelType[VehicleWheelType["BennysBespoke"] = 9] = "BennysBespoke";
})(VehicleWheelType = exports.VehicleWheelType || (exports.VehicleWheelType = {}));
var VehicleWheelIndex;
(function (VehicleWheelIndex) {
    VehicleWheelIndex[VehicleWheelIndex["FrontLeftWheel"] = 0] = "FrontLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["FrontRightWheel"] = 1] = "FrontRightWheel";
    VehicleWheelIndex[VehicleWheelIndex["MidLeftWheel"] = 2] = "MidLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["MidRightWheel"] = 3] = "MidRightWheel";
    VehicleWheelIndex[VehicleWheelIndex["RearLeftWheel"] = 4] = "RearLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["RearRightWheel"] = 5] = "RearRightWheel";
    VehicleWheelIndex[VehicleWheelIndex["TrailerMidLeftWheel"] = 45] = "TrailerMidLeftWheel";
    VehicleWheelIndex[VehicleWheelIndex["TrailerMidRightWheel"] = 47] = "TrailerMidRightWheel";
})(VehicleWheelIndex = exports.VehicleWheelIndex || (exports.VehicleWheelIndex = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/Weather.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/Weather.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Weather = void 0;
/**
 * List of weather types. Used for manipulating weather.
 */
var Weather;
(function (Weather) {
    Weather[Weather["Unknown"] = -1] = "Unknown";
    Weather[Weather["ExtraSunny"] = 0] = "ExtraSunny";
    Weather[Weather["Clear"] = 1] = "Clear";
    Weather[Weather["Clouds"] = 2] = "Clouds";
    Weather[Weather["Smog"] = 3] = "Smog";
    Weather[Weather["Foggy"] = 4] = "Foggy";
    Weather[Weather["Overcast"] = 5] = "Overcast";
    Weather[Weather["Raining"] = 6] = "Raining";
    Weather[Weather["ThunderStorm"] = 7] = "ThunderStorm";
    Weather[Weather["Clearing"] = 8] = "Clearing";
    Weather[Weather["Neutral"] = 9] = "Neutral";
    Weather[Weather["Snowing"] = 10] = "Snowing";
    Weather[Weather["Blizzard"] = 11] = "Blizzard";
    Weather[Weather["Snowlight"] = 12] = "Snowlight";
    Weather[Weather["Christmas"] = 13] = "Christmas";
    Weather[Weather["Halloween"] = 14] = "Halloween";
})(Weather = exports.Weather || (exports.Weather = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/ZoneID.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/ZoneID.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoneID = void 0;
/**
 * List of Zones. Useful for using world zone related natives.
 */
var ZoneID;
(function (ZoneID) {
    ZoneID[ZoneID["AIRP"] = 0] = "AIRP";
    ZoneID[ZoneID["ALAMO"] = 1] = "ALAMO";
    ZoneID[ZoneID["ALTA"] = 2] = "ALTA";
    ZoneID[ZoneID["ARMYB"] = 3] = "ARMYB";
    ZoneID[ZoneID["BANHAMC"] = 4] = "BANHAMC";
    ZoneID[ZoneID["BANNING"] = 5] = "BANNING";
    ZoneID[ZoneID["BEACH"] = 6] = "BEACH";
    ZoneID[ZoneID["BHAMCA"] = 7] = "BHAMCA";
    ZoneID[ZoneID["BRADP"] = 8] = "BRADP";
    ZoneID[ZoneID["BRADT"] = 9] = "BRADT";
    ZoneID[ZoneID["BURTON"] = 10] = "BURTON";
    ZoneID[ZoneID["CALAFB"] = 11] = "CALAFB";
    ZoneID[ZoneID["CANNY"] = 12] = "CANNY";
    ZoneID[ZoneID["CCREAK"] = 13] = "CCREAK";
    ZoneID[ZoneID["CHAMH"] = 14] = "CHAMH";
    ZoneID[ZoneID["CHIL"] = 15] = "CHIL";
    ZoneID[ZoneID["CHU"] = 16] = "CHU";
    ZoneID[ZoneID["CMSW"] = 17] = "CMSW";
    ZoneID[ZoneID["CYPRE"] = 18] = "CYPRE";
    ZoneID[ZoneID["DAVIS"] = 19] = "DAVIS";
    ZoneID[ZoneID["DELBE"] = 20] = "DELBE";
    ZoneID[ZoneID["DELPE"] = 21] = "DELPE";
    ZoneID[ZoneID["DELSOL"] = 22] = "DELSOL";
    ZoneID[ZoneID["DESRT"] = 23] = "DESRT";
    ZoneID[ZoneID["DOWNT"] = 24] = "DOWNT";
    ZoneID[ZoneID["DTVINE"] = 25] = "DTVINE";
    ZoneID[ZoneID["EAST_V"] = 26] = "EAST_V";
    ZoneID[ZoneID["EBURO"] = 27] = "EBURO";
    ZoneID[ZoneID["ELGORL"] = 28] = "ELGORL";
    ZoneID[ZoneID["ELYSIAN"] = 29] = "ELYSIAN";
    ZoneID[ZoneID["GALFISH"] = 30] = "GALFISH";
    ZoneID[ZoneID["golf"] = 31] = "golf";
    ZoneID[ZoneID["GRAPES"] = 32] = "GRAPES";
    ZoneID[ZoneID["GREATC"] = 33] = "GREATC";
    ZoneID[ZoneID["HARMO"] = 34] = "HARMO";
    ZoneID[ZoneID["HAWICK"] = 35] = "HAWICK";
    ZoneID[ZoneID["HORS"] = 36] = "HORS";
    ZoneID[ZoneID["HUMLAB"] = 37] = "HUMLAB";
    ZoneID[ZoneID["JAIL"] = 38] = "JAIL";
    ZoneID[ZoneID["KOREAT"] = 39] = "KOREAT";
    ZoneID[ZoneID["LACT"] = 40] = "LACT";
    ZoneID[ZoneID["LAGO"] = 41] = "LAGO";
    ZoneID[ZoneID["LDAM"] = 42] = "LDAM";
    ZoneID[ZoneID["LEGSQU"] = 43] = "LEGSQU";
    ZoneID[ZoneID["LMESA"] = 44] = "LMESA";
    ZoneID[ZoneID["LOSPUER"] = 45] = "LOSPUER";
    ZoneID[ZoneID["MIRR"] = 46] = "MIRR";
    ZoneID[ZoneID["MORN"] = 47] = "MORN";
    ZoneID[ZoneID["MOVIE"] = 48] = "MOVIE";
    ZoneID[ZoneID["MTCHIL"] = 49] = "MTCHIL";
    ZoneID[ZoneID["MTGORDO"] = 50] = "MTGORDO";
    ZoneID[ZoneID["MTJOSE"] = 51] = "MTJOSE";
    ZoneID[ZoneID["MURRI"] = 52] = "MURRI";
    ZoneID[ZoneID["NCHU"] = 53] = "NCHU";
    ZoneID[ZoneID["NOOSE"] = 54] = "NOOSE";
    ZoneID[ZoneID["OCEANA"] = 55] = "OCEANA";
    ZoneID[ZoneID["PALCOV"] = 56] = "PALCOV";
    ZoneID[ZoneID["PALETO"] = 57] = "PALETO";
    ZoneID[ZoneID["PALFOR"] = 58] = "PALFOR";
    ZoneID[ZoneID["PALHIGH"] = 59] = "PALHIGH";
    ZoneID[ZoneID["PALMPOW"] = 60] = "PALMPOW";
    ZoneID[ZoneID["PBLUFF"] = 61] = "PBLUFF";
    ZoneID[ZoneID["PBOX"] = 62] = "PBOX";
    ZoneID[ZoneID["PROCOB"] = 63] = "PROCOB";
    ZoneID[ZoneID["RANCHO"] = 64] = "RANCHO";
    ZoneID[ZoneID["RGLEN"] = 65] = "RGLEN";
    ZoneID[ZoneID["RICHM"] = 66] = "RICHM";
    ZoneID[ZoneID["ROCKF"] = 67] = "ROCKF";
    ZoneID[ZoneID["RTRAK"] = 68] = "RTRAK";
    ZoneID[ZoneID["SanAnd"] = 69] = "SanAnd";
    ZoneID[ZoneID["SANCHIA"] = 70] = "SANCHIA";
    ZoneID[ZoneID["SANDY"] = 71] = "SANDY";
    ZoneID[ZoneID["SKID"] = 72] = "SKID";
    ZoneID[ZoneID["SLAB"] = 73] = "SLAB";
    ZoneID[ZoneID["STAD"] = 74] = "STAD";
    ZoneID[ZoneID["STRAW"] = 75] = "STRAW";
    ZoneID[ZoneID["TATAMO"] = 76] = "TATAMO";
    ZoneID[ZoneID["TERMINA"] = 77] = "TERMINA";
    ZoneID[ZoneID["TEXTI"] = 78] = "TEXTI";
    ZoneID[ZoneID["TONGVAH"] = 79] = "TONGVAH";
    ZoneID[ZoneID["TONGVAV"] = 80] = "TONGVAV";
    ZoneID[ZoneID["VCANA"] = 81] = "VCANA";
    ZoneID[ZoneID["VESP"] = 82] = "VESP";
    ZoneID[ZoneID["VINE"] = 83] = "VINE";
    ZoneID[ZoneID["WINDF"] = 84] = "WINDF";
    ZoneID[ZoneID["WVINE"] = 85] = "WVINE";
    ZoneID[ZoneID["ZANCUDO"] = 86] = "ZANCUDO";
    ZoneID[ZoneID["ZP_ORT"] = 87] = "ZP_ORT";
    ZoneID[ZoneID["ZQ_UAR"] = 88] = "ZQ_UAR";
})(ZoneID = exports.ZoneID || (exports.ZoneID = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/enums/index.js":
/*!***************************************************!*\
  !*** ../node_modules/fivem-js/lib/enums/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleDoorIndex = exports.VehiclePaintType = exports.VehicleToggleModType = exports.VehicleModType = exports.VehicleWindowIndex = exports.VehicleWindowTint = exports.VehicleSeat = exports.VehicleRoofState = exports.VehicleNeonLight = exports.VehicleLockStatus = exports.VehicleLandingGearState = exports.VehicleColor = exports.VehicleClass = exports.SpeechModifier = exports.ScreenEffect = exports.RopeType = exports.Relationship = exports.RagdollType = exports.RadioStation = exports.ParachuteState = exports.ParachuteLandingType = exports.NotificationType = exports.MarkerType = exports.LoadingSpinnerType = exports.Language = exports.InvertAxisFlags = exports.IntersectOptions = exports.InputMode = exports.HudComponent = exports.HudColor = exports.HelmetType = exports.Gender = exports.ForceType = exports.Font = exports.ExplosionType = exports.VehicleDrivingFlags = exports.DrivingStyle = exports.CursorSprite = exports.Control = exports.CloudHat = exports.CheckpointIcon = exports.CheckpointCustomIconStyle = exports.CheckboxStyle = exports.CameraShake = exports.Bone = exports.BlipSprite = exports.BlipColor = exports.BadgeStyle = exports.AudioFlag = exports.Alignment = void 0;
exports.ZoneID = exports.Weather = exports.VehicleWheelIndex = exports.VehicleWheelType = void 0;
var Alignment_1 = __webpack_require__(/*! ./Alignment */ "../node_modules/fivem-js/lib/enums/Alignment.js");
Object.defineProperty(exports, "Alignment", ({ enumerable: true, get: function () { return Alignment_1.Alignment; } }));
var AudioFlag_1 = __webpack_require__(/*! ./AudioFlag */ "../node_modules/fivem-js/lib/enums/AudioFlag.js");
Object.defineProperty(exports, "AudioFlag", ({ enumerable: true, get: function () { return AudioFlag_1.AudioFlag; } }));
var BadgeStyle_1 = __webpack_require__(/*! ./BadgeStyle */ "../node_modules/fivem-js/lib/enums/BadgeStyle.js");
Object.defineProperty(exports, "BadgeStyle", ({ enumerable: true, get: function () { return BadgeStyle_1.BadgeStyle; } }));
var Blip_1 = __webpack_require__(/*! ./Blip */ "../node_modules/fivem-js/lib/enums/Blip.js");
Object.defineProperty(exports, "BlipColor", ({ enumerable: true, get: function () { return Blip_1.BlipColor; } }));
Object.defineProperty(exports, "BlipSprite", ({ enumerable: true, get: function () { return Blip_1.BlipSprite; } }));
var Bone_1 = __webpack_require__(/*! ./Bone */ "../node_modules/fivem-js/lib/enums/Bone.js");
Object.defineProperty(exports, "Bone", ({ enumerable: true, get: function () { return Bone_1.Bone; } }));
var CameraShake_1 = __webpack_require__(/*! ./CameraShake */ "../node_modules/fivem-js/lib/enums/CameraShake.js");
Object.defineProperty(exports, "CameraShake", ({ enumerable: true, get: function () { return CameraShake_1.CameraShake; } }));
var CheckboxStyle_1 = __webpack_require__(/*! ./CheckboxStyle */ "../node_modules/fivem-js/lib/enums/CheckboxStyle.js");
Object.defineProperty(exports, "CheckboxStyle", ({ enumerable: true, get: function () { return CheckboxStyle_1.CheckboxStyle; } }));
var Checkpoint_1 = __webpack_require__(/*! ./Checkpoint */ "../node_modules/fivem-js/lib/enums/Checkpoint.js");
Object.defineProperty(exports, "CheckpointCustomIconStyle", ({ enumerable: true, get: function () { return Checkpoint_1.CheckpointCustomIconStyle; } }));
Object.defineProperty(exports, "CheckpointIcon", ({ enumerable: true, get: function () { return Checkpoint_1.CheckpointIcon; } }));
var CloudHat_1 = __webpack_require__(/*! ./CloudHat */ "../node_modules/fivem-js/lib/enums/CloudHat.js");
Object.defineProperty(exports, "CloudHat", ({ enumerable: true, get: function () { return CloudHat_1.CloudHat; } }));
var Control_1 = __webpack_require__(/*! ./Control */ "../node_modules/fivem-js/lib/enums/Control.js");
Object.defineProperty(exports, "Control", ({ enumerable: true, get: function () { return Control_1.Control; } }));
var CursorSprite_1 = __webpack_require__(/*! ./CursorSprite */ "../node_modules/fivem-js/lib/enums/CursorSprite.js");
Object.defineProperty(exports, "CursorSprite", ({ enumerable: true, get: function () { return CursorSprite_1.CursorSprite; } }));
var Driving_1 = __webpack_require__(/*! ./Driving */ "../node_modules/fivem-js/lib/enums/Driving.js");
Object.defineProperty(exports, "DrivingStyle", ({ enumerable: true, get: function () { return Driving_1.DrivingStyle; } }));
Object.defineProperty(exports, "VehicleDrivingFlags", ({ enumerable: true, get: function () { return Driving_1.VehicleDrivingFlags; } }));
var ExplosionType_1 = __webpack_require__(/*! ./ExplosionType */ "../node_modules/fivem-js/lib/enums/ExplosionType.js");
Object.defineProperty(exports, "ExplosionType", ({ enumerable: true, get: function () { return ExplosionType_1.ExplosionType; } }));
var Font_1 = __webpack_require__(/*! ./Font */ "../node_modules/fivem-js/lib/enums/Font.js");
Object.defineProperty(exports, "Font", ({ enumerable: true, get: function () { return Font_1.Font; } }));
var ForceType_1 = __webpack_require__(/*! ./ForceType */ "../node_modules/fivem-js/lib/enums/ForceType.js");
Object.defineProperty(exports, "ForceType", ({ enumerable: true, get: function () { return ForceType_1.ForceType; } }));
var Gender_1 = __webpack_require__(/*! ./Gender */ "../node_modules/fivem-js/lib/enums/Gender.js");
Object.defineProperty(exports, "Gender", ({ enumerable: true, get: function () { return Gender_1.Gender; } }));
var HelmetType_1 = __webpack_require__(/*! ./HelmetType */ "../node_modules/fivem-js/lib/enums/HelmetType.js");
Object.defineProperty(exports, "HelmetType", ({ enumerable: true, get: function () { return HelmetType_1.HelmetType; } }));
var HudColor_1 = __webpack_require__(/*! ./HudColor */ "../node_modules/fivem-js/lib/enums/HudColor.js");
Object.defineProperty(exports, "HudColor", ({ enumerable: true, get: function () { return HudColor_1.HudColor; } }));
var HudComponent_1 = __webpack_require__(/*! ./HudComponent */ "../node_modules/fivem-js/lib/enums/HudComponent.js");
Object.defineProperty(exports, "HudComponent", ({ enumerable: true, get: function () { return HudComponent_1.HudComponent; } }));
var InputMode_1 = __webpack_require__(/*! ./InputMode */ "../node_modules/fivem-js/lib/enums/InputMode.js");
Object.defineProperty(exports, "InputMode", ({ enumerable: true, get: function () { return InputMode_1.InputMode; } }));
var IntersectOptions_1 = __webpack_require__(/*! ./IntersectOptions */ "../node_modules/fivem-js/lib/enums/IntersectOptions.js");
Object.defineProperty(exports, "IntersectOptions", ({ enumerable: true, get: function () { return IntersectOptions_1.IntersectOptions; } }));
var InvertAxis_1 = __webpack_require__(/*! ./InvertAxis */ "../node_modules/fivem-js/lib/enums/InvertAxis.js");
Object.defineProperty(exports, "InvertAxisFlags", ({ enumerable: true, get: function () { return InvertAxis_1.InvertAxisFlags; } }));
var Language_1 = __webpack_require__(/*! ./Language */ "../node_modules/fivem-js/lib/enums/Language.js");
Object.defineProperty(exports, "Language", ({ enumerable: true, get: function () { return Language_1.Language; } }));
var LoadingSpinnerType_1 = __webpack_require__(/*! ./LoadingSpinnerType */ "../node_modules/fivem-js/lib/enums/LoadingSpinnerType.js");
Object.defineProperty(exports, "LoadingSpinnerType", ({ enumerable: true, get: function () { return LoadingSpinnerType_1.LoadingSpinnerType; } }));
var MarkerType_1 = __webpack_require__(/*! ./MarkerType */ "../node_modules/fivem-js/lib/enums/MarkerType.js");
Object.defineProperty(exports, "MarkerType", ({ enumerable: true, get: function () { return MarkerType_1.MarkerType; } }));
var NotificationType_1 = __webpack_require__(/*! ./NotificationType */ "../node_modules/fivem-js/lib/enums/NotificationType.js");
Object.defineProperty(exports, "NotificationType", ({ enumerable: true, get: function () { return NotificationType_1.NotificationType; } }));
var Parachute_1 = __webpack_require__(/*! ./Parachute */ "../node_modules/fivem-js/lib/enums/Parachute.js");
Object.defineProperty(exports, "ParachuteLandingType", ({ enumerable: true, get: function () { return Parachute_1.ParachuteLandingType; } }));
Object.defineProperty(exports, "ParachuteState", ({ enumerable: true, get: function () { return Parachute_1.ParachuteState; } }));
var RadioStation_1 = __webpack_require__(/*! ./RadioStation */ "../node_modules/fivem-js/lib/enums/RadioStation.js");
Object.defineProperty(exports, "RadioStation", ({ enumerable: true, get: function () { return RadioStation_1.RadioStation; } }));
var RagdollType_1 = __webpack_require__(/*! ./RagdollType */ "../node_modules/fivem-js/lib/enums/RagdollType.js");
Object.defineProperty(exports, "RagdollType", ({ enumerable: true, get: function () { return RagdollType_1.RagdollType; } }));
var Relationship_1 = __webpack_require__(/*! ./Relationship */ "../node_modules/fivem-js/lib/enums/Relationship.js");
Object.defineProperty(exports, "Relationship", ({ enumerable: true, get: function () { return Relationship_1.Relationship; } }));
var RopeType_1 = __webpack_require__(/*! ./RopeType */ "../node_modules/fivem-js/lib/enums/RopeType.js");
Object.defineProperty(exports, "RopeType", ({ enumerable: true, get: function () { return RopeType_1.RopeType; } }));
var ScreenEffect_1 = __webpack_require__(/*! ./ScreenEffect */ "../node_modules/fivem-js/lib/enums/ScreenEffect.js");
Object.defineProperty(exports, "ScreenEffect", ({ enumerable: true, get: function () { return ScreenEffect_1.ScreenEffect; } }));
var SpeechModifier_1 = __webpack_require__(/*! ./SpeechModifier */ "../node_modules/fivem-js/lib/enums/SpeechModifier.js");
Object.defineProperty(exports, "SpeechModifier", ({ enumerable: true, get: function () { return SpeechModifier_1.SpeechModifier; } }));
var Vehicle_1 = __webpack_require__(/*! ./Vehicle */ "../node_modules/fivem-js/lib/enums/Vehicle.js");
Object.defineProperty(exports, "VehicleClass", ({ enumerable: true, get: function () { return Vehicle_1.VehicleClass; } }));
Object.defineProperty(exports, "VehicleColor", ({ enumerable: true, get: function () { return Vehicle_1.VehicleColor; } }));
Object.defineProperty(exports, "VehicleLandingGearState", ({ enumerable: true, get: function () { return Vehicle_1.VehicleLandingGearState; } }));
Object.defineProperty(exports, "VehicleLockStatus", ({ enumerable: true, get: function () { return Vehicle_1.VehicleLockStatus; } }));
Object.defineProperty(exports, "VehicleNeonLight", ({ enumerable: true, get: function () { return Vehicle_1.VehicleNeonLight; } }));
Object.defineProperty(exports, "VehicleRoofState", ({ enumerable: true, get: function () { return Vehicle_1.VehicleRoofState; } }));
Object.defineProperty(exports, "VehicleSeat", ({ enumerable: true, get: function () { return Vehicle_1.VehicleSeat; } }));
Object.defineProperty(exports, "VehicleWindowTint", ({ enumerable: true, get: function () { return Vehicle_1.VehicleWindowTint; } }));
Object.defineProperty(exports, "VehicleWindowIndex", ({ enumerable: true, get: function () { return Vehicle_1.VehicleWindowIndex; } }));
Object.defineProperty(exports, "VehicleModType", ({ enumerable: true, get: function () { return Vehicle_1.VehicleModType; } }));
Object.defineProperty(exports, "VehicleToggleModType", ({ enumerable: true, get: function () { return Vehicle_1.VehicleToggleModType; } }));
Object.defineProperty(exports, "VehiclePaintType", ({ enumerable: true, get: function () { return Vehicle_1.VehiclePaintType; } }));
Object.defineProperty(exports, "VehicleDoorIndex", ({ enumerable: true, get: function () { return Vehicle_1.VehicleDoorIndex; } }));
Object.defineProperty(exports, "VehicleWheelType", ({ enumerable: true, get: function () { return Vehicle_1.VehicleWheelType; } }));
Object.defineProperty(exports, "VehicleWheelIndex", ({ enumerable: true, get: function () { return Vehicle_1.VehicleWheelIndex; } }));
var Weather_1 = __webpack_require__(/*! ./Weather */ "../node_modules/fivem-js/lib/enums/Weather.js");
Object.defineProperty(exports, "Weather", ({ enumerable: true, get: function () { return Weather_1.Weather; } }));
var ZoneID_1 = __webpack_require__(/*! ./ZoneID */ "../node_modules/fivem-js/lib/enums/ZoneID.js");
Object.defineProperty(exports, "ZoneID", ({ enumerable: true, get: function () { return ZoneID_1.ZoneID; } }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/hashes/MaterialHash.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/hashes/MaterialHash.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialHash = void 0;
var MaterialHash;
(function (MaterialHash) {
    MaterialHash[MaterialHash["None"] = 0] = "None";
    MaterialHash[MaterialHash["Unk"] = 2519482235] = "Unk";
    MaterialHash[MaterialHash["Concrete"] = 1187676648] = "Concrete";
    MaterialHash[MaterialHash["ConcretePothole"] = 359120722] = "ConcretePothole";
    MaterialHash[MaterialHash["ConcreteDusty"] = 3210327185] = "ConcreteDusty";
    MaterialHash[MaterialHash["Tarmac"] = 282940568] = "Tarmac";
    MaterialHash[MaterialHash["TarmacPainted"] = 2993614768] = "TarmacPainted";
    MaterialHash[MaterialHash["TarmacPothole"] = 1886546517] = "TarmacPothole";
    MaterialHash[MaterialHash["RumbleStrip"] = 4044799021] = "RumbleStrip";
    MaterialHash[MaterialHash["BreezeBlock"] = 3340854742] = "BreezeBlock";
    MaterialHash[MaterialHash["Rock"] = 3454750755] = "Rock";
    MaterialHash[MaterialHash["RockMossy"] = 4170197704] = "RockMossy";
    MaterialHash[MaterialHash["Stone"] = 765206029] = "Stone";
    MaterialHash[MaterialHash["Cobblestone"] = 576169331] = "Cobblestone";
    MaterialHash[MaterialHash["Brick"] = 1639053622] = "Brick";
    MaterialHash[MaterialHash["Marble"] = 1945073303] = "Marble";
    MaterialHash[MaterialHash["PavingSlab"] = 1907048430] = "PavingSlab";
    MaterialHash[MaterialHash["SandstoneSolid"] = 592446772] = "SandstoneSolid";
    MaterialHash[MaterialHash["SandstoneBrittle"] = 1913209870] = "SandstoneBrittle";
    MaterialHash[MaterialHash["SandLoose"] = 2699818980] = "SandLoose";
    MaterialHash[MaterialHash["SandCompact"] = 510490462] = "SandCompact";
    MaterialHash[MaterialHash["SandWet"] = 909950165] = "SandWet";
    MaterialHash[MaterialHash["SandTrack"] = 2387446527] = "SandTrack";
    MaterialHash[MaterialHash["SandUnderwater"] = 3158909604] = "SandUnderwater";
    MaterialHash[MaterialHash["SandDryDeep"] = 509508168] = "SandDryDeep";
    MaterialHash[MaterialHash["SandWetDeep"] = 1288448767] = "SandWetDeep";
    MaterialHash[MaterialHash["Ice"] = 3508906581] = "Ice";
    MaterialHash[MaterialHash["IceTarmac"] = 2363942873] = "IceTarmac";
    MaterialHash[MaterialHash["SnowLoose"] = 2357397706] = "SnowLoose";
    MaterialHash[MaterialHash["SnowCompact"] = 3416406407] = "SnowCompact";
    MaterialHash[MaterialHash["SnowDeep"] = 1619704960] = "SnowDeep";
    MaterialHash[MaterialHash["SnowTarmac"] = 1550304810] = "SnowTarmac";
    MaterialHash[MaterialHash["GravelSmall"] = 951832588] = "GravelSmall";
    MaterialHash[MaterialHash["GravelLarge"] = 2128369009] = "GravelLarge";
    MaterialHash[MaterialHash["GravelDeep"] = 3938260814] = "GravelDeep";
    MaterialHash[MaterialHash["GravelTrainTrack"] = 1925605558] = "GravelTrainTrack";
    MaterialHash[MaterialHash["DirtTrack"] = 2409420175] = "DirtTrack";
    MaterialHash[MaterialHash["MudHard"] = 2352068586] = "MudHard";
    MaterialHash[MaterialHash["MudPothole"] = 312396330] = "MudPothole";
    MaterialHash[MaterialHash["MudSoft"] = 1635937914] = "MudSoft";
    MaterialHash[MaterialHash["MudUnderwater"] = 4021477129] = "MudUnderwater";
    MaterialHash[MaterialHash["MudDeep"] = 1109728704] = "MudDeep";
    MaterialHash[MaterialHash["Marsh"] = 223086562] = "Marsh";
    MaterialHash[MaterialHash["MarshDeep"] = 1584636462] = "MarshDeep";
    MaterialHash[MaterialHash["Soil"] = 3594309083] = "Soil";
    MaterialHash[MaterialHash["ClayHard"] = 1144315879] = "ClayHard";
    MaterialHash[MaterialHash["ClaySoft"] = 560985072] = "ClaySoft";
    MaterialHash[MaterialHash["GrassLong"] = 3833216577] = "GrassLong";
    MaterialHash[MaterialHash["Grass"] = 1333033863] = "Grass";
    MaterialHash[MaterialHash["GrassShort"] = 3008270349] = "GrassShort";
    MaterialHash[MaterialHash["Hay"] = 2461440131] = "Hay";
    MaterialHash[MaterialHash["Bushes"] = 581794674] = "Bushes";
    MaterialHash[MaterialHash["Twigs"] = 3381615457] = "Twigs";
    MaterialHash[MaterialHash["Leaves"] = 2253637325] = "Leaves";
    MaterialHash[MaterialHash["Woodchips"] = 3985845843] = "Woodchips";
    MaterialHash[MaterialHash["TreeBark"] = 2379541433] = "TreeBark";
    MaterialHash[MaterialHash["MetalSolidSmall"] = 2847687191] = "MetalSolidSmall";
    MaterialHash[MaterialHash["MetalSolidMedium"] = 3929336056] = "MetalSolidMedium";
    MaterialHash[MaterialHash["MetalSolidLarge"] = 752131025] = "MetalSolidLarge";
    MaterialHash[MaterialHash["MetalHollowSmall"] = 15972667] = "MetalHollowSmall";
    MaterialHash[MaterialHash["MetalHollowMedium"] = 1849540536] = "MetalHollowMedium";
    MaterialHash[MaterialHash["MetalHollowLarge"] = 3711753465] = "MetalHollowLarge";
    MaterialHash[MaterialHash["MetalChainlinkSmall"] = 762193613] = "MetalChainlinkSmall";
    MaterialHash[MaterialHash["MetalChainlinkLarge"] = 125958708] = "MetalChainlinkLarge";
    MaterialHash[MaterialHash["MetalCorrugatedIron"] = 834144982] = "MetalCorrugatedIron";
    MaterialHash[MaterialHash["MetalGrille"] = 3868849285] = "MetalGrille";
    MaterialHash[MaterialHash["MetalRailing"] = 2100727187] = "MetalRailing";
    MaterialHash[MaterialHash["MetalDuct"] = 1761524221] = "MetalDuct";
    MaterialHash[MaterialHash["MetalGarageDoor"] = 4063706601] = "MetalGarageDoor";
    MaterialHash[MaterialHash["MetalManhole"] = 3539969597] = "MetalManhole";
    MaterialHash[MaterialHash["WoodSolidSmall"] = 3895095068] = "WoodSolidSmall";
    MaterialHash[MaterialHash["WoodSolidMedium"] = 555004797] = "WoodSolidMedium";
    MaterialHash[MaterialHash["WoodSolidLarge"] = 815762359] = "WoodSolidLarge";
    MaterialHash[MaterialHash["WoodSolidPolished"] = 126470059] = "WoodSolidPolished";
    MaterialHash[MaterialHash["WoodFloorDusty"] = 3545514974] = "WoodFloorDusty";
    MaterialHash[MaterialHash["WoodHollowSmall"] = 1993976879] = "WoodHollowSmall";
    MaterialHash[MaterialHash["WoodHollowMedium"] = 3929491133] = "WoodHollowMedium";
    MaterialHash[MaterialHash["WoodHollowLarge"] = 3369548007] = "WoodHollowLarge";
    MaterialHash[MaterialHash["WoodChipboard"] = 1176309403] = "WoodChipboard";
    MaterialHash[MaterialHash["WoodOldCreaky"] = 722686013] = "WoodOldCreaky";
    MaterialHash[MaterialHash["WoodHighDensity"] = 2552123904] = "WoodHighDensity";
    MaterialHash[MaterialHash["WoodLattice"] = 2011204130] = "WoodLattice";
    MaterialHash[MaterialHash["Ceramic"] = 3108646581] = "Ceramic";
    MaterialHash[MaterialHash["RoofTile"] = 1755188853] = "RoofTile";
    MaterialHash[MaterialHash["RoofFelt"] = 2877802565] = "RoofFelt";
    MaterialHash[MaterialHash["Fibreglass"] = 1354180827] = "Fibreglass";
    MaterialHash[MaterialHash["Tarpaulin"] = 3652308448] = "Tarpaulin";
    MaterialHash[MaterialHash["Plastic"] = 2221655295] = "Plastic";
    MaterialHash[MaterialHash["PlasticHollow"] = 627123000] = "PlasticHollow";
    MaterialHash[MaterialHash["PlasticHighDensity"] = 2668971817] = "PlasticHighDensity";
    MaterialHash[MaterialHash["PlasticClear"] = 2435246283] = "PlasticClear";
    MaterialHash[MaterialHash["PlasticHollowClear"] = 772722531] = "PlasticHollowClear";
    MaterialHash[MaterialHash["PlasticHighDensityClear"] = 2956494126] = "PlasticHighDensityClear";
    MaterialHash[MaterialHash["FibreglassHollow"] = 3528912198] = "FibreglassHollow";
    MaterialHash[MaterialHash["Rubber"] = 4149231379] = "Rubber";
    MaterialHash[MaterialHash["RubberHollow"] = 3511032624] = "RubberHollow";
    MaterialHash[MaterialHash["Linoleum"] = 289630530] = "Linoleum";
    MaterialHash[MaterialHash["Laminate"] = 1845676458] = "Laminate";
    MaterialHash[MaterialHash["CarpetSolid"] = 669292054] = "CarpetSolid";
    MaterialHash[MaterialHash["CarpetSolidDusty"] = 158576196] = "CarpetSolidDusty";
    MaterialHash[MaterialHash["CarpetFloorboard"] = 2898482353] = "CarpetFloorboard";
    MaterialHash[MaterialHash["Cloth"] = 122789469] = "Cloth";
    MaterialHash[MaterialHash["PlasterSolid"] = 3720844863] = "PlasterSolid";
    MaterialHash[MaterialHash["PlasterBrittle"] = 4043078398] = "PlasterBrittle";
    MaterialHash[MaterialHash["CardboardSheet"] = 236511221] = "CardboardSheet";
    MaterialHash[MaterialHash["CardboardBox"] = 2885912856] = "CardboardBox";
    MaterialHash[MaterialHash["Paper"] = 474149820] = "Paper";
    MaterialHash[MaterialHash["Foam"] = 808719444] = "Foam";
    MaterialHash[MaterialHash["FeatherPillow"] = 1341866303] = "FeatherPillow";
    MaterialHash[MaterialHash["Polystyrene"] = 2538039965] = "Polystyrene";
    MaterialHash[MaterialHash["Leather"] = 3724496396] = "Leather";
    MaterialHash[MaterialHash["Tvscreen"] = 1429989756] = "Tvscreen";
    MaterialHash[MaterialHash["SlattedBlinds"] = 673696729] = "SlattedBlinds";
    MaterialHash[MaterialHash["GlassShootThrough"] = 937503243] = "GlassShootThrough";
    MaterialHash[MaterialHash["GlassBulletproof"] = 244521486] = "GlassBulletproof";
    MaterialHash[MaterialHash["GlassOpaque"] = 1500272081] = "GlassOpaque";
    MaterialHash[MaterialHash["Perspex"] = 2675173228] = "Perspex";
    MaterialHash[MaterialHash["CarMetal"] = 4201905313] = "CarMetal";
    MaterialHash[MaterialHash["CarPlastic"] = 2137197282] = "CarPlastic";
    MaterialHash[MaterialHash["CarSofttop"] = 3315319434] = "CarSofttop";
    MaterialHash[MaterialHash["CarSofttopClear"] = 2130571536] = "CarSofttopClear";
    MaterialHash[MaterialHash["CarGlassWeak"] = 1247281098] = "CarGlassWeak";
    MaterialHash[MaterialHash["CarGlassMedium"] = 602884284] = "CarGlassMedium";
    MaterialHash[MaterialHash["CarGlassStrong"] = 1070994698] = "CarGlassStrong";
    MaterialHash[MaterialHash["CarGlassBulletproof"] = 2573051366] = "CarGlassBulletproof";
    MaterialHash[MaterialHash["CarGlassOpaque"] = 513061559] = "CarGlassOpaque";
    MaterialHash[MaterialHash["Water"] = 435688960] = "Water";
    MaterialHash[MaterialHash["Blood"] = 5236042] = "Blood";
    MaterialHash[MaterialHash["Oil"] = 3660485991] = "Oil";
    MaterialHash[MaterialHash["Petrol"] = 2660782956] = "Petrol";
    MaterialHash[MaterialHash["FreshMeat"] = 868733839] = "FreshMeat";
    MaterialHash[MaterialHash["DriedMeat"] = 2849806867] = "DriedMeat";
    MaterialHash[MaterialHash["EmissiveGlass"] = 1501078253] = "EmissiveGlass";
    MaterialHash[MaterialHash["EmissivePlastic"] = 1059629996] = "EmissivePlastic";
    MaterialHash[MaterialHash["VfxMetalElectrified"] = 3985833031] = "VfxMetalElectrified";
    MaterialHash[MaterialHash["VfxMetalWaterTower"] = 611561919] = "VfxMetalWaterTower";
    MaterialHash[MaterialHash["VfxMetalSteam"] = 3603690002] = "VfxMetalSteam";
    MaterialHash[MaterialHash["VfxMetalFlame"] = 332778253] = "VfxMetalFlame";
    MaterialHash[MaterialHash["PhysNoFriction"] = 1666473731] = "PhysNoFriction";
    MaterialHash[MaterialHash["PhysGolfBall"] = 2601153738] = "PhysGolfBall";
    MaterialHash[MaterialHash["PhysTennisBall"] = 4038262533] = "PhysTennisBall";
    MaterialHash[MaterialHash["PhysCaster"] = 4059664613] = "PhysCaster";
    MaterialHash[MaterialHash["PhysCasterRusty"] = 2016463089] = "PhysCasterRusty";
    MaterialHash[MaterialHash["PhysCarVoid"] = 1345867677] = "PhysCarVoid";
    MaterialHash[MaterialHash["PhysPedCapsule"] = 4003336261] = "PhysPedCapsule";
    MaterialHash[MaterialHash["PhysElectricFence"] = 3124923563] = "PhysElectricFence";
    MaterialHash[MaterialHash["PhysElectricMetal"] = 2281206151] = "PhysElectricMetal";
    MaterialHash[MaterialHash["PhysBarbedWire"] = 2751643840] = "PhysBarbedWire";
    MaterialHash[MaterialHash["PhysPooltableSurface"] = 605776921] = "PhysPooltableSurface";
    MaterialHash[MaterialHash["PhysPooltableCushion"] = 972939963] = "PhysPooltableCushion";
    MaterialHash[MaterialHash["PhysPooltableBall"] = 3546625734] = "PhysPooltableBall";
    MaterialHash[MaterialHash["Buttocks"] = 483400232] = "Buttocks";
    MaterialHash[MaterialHash["ThighLeft"] = 3834431425] = "ThighLeft";
    MaterialHash[MaterialHash["ShinLeft"] = 652772852] = "ShinLeft";
    MaterialHash[MaterialHash["FootLeft"] = 1926285543] = "FootLeft";
    MaterialHash[MaterialHash["ThighRight"] = 4057986041] = "ThighRight";
    MaterialHash[MaterialHash["ShinRight"] = 3848931141] = "ShinRight";
    MaterialHash[MaterialHash["FootRight"] = 2925830612] = "FootRight";
    MaterialHash[MaterialHash["Spine0"] = 2372680412] = "Spine0";
    MaterialHash[MaterialHash["Spine1"] = 3154854427] = "Spine1";
    MaterialHash[MaterialHash["Spine2"] = 1457572381] = "Spine2";
    MaterialHash[MaterialHash["Spine3"] = 32752644] = "Spine3";
    MaterialHash[MaterialHash["ClavicleLeft"] = 2825350831] = "ClavicleLeft";
    MaterialHash[MaterialHash["UpperArmLeft"] = 3784624938] = "UpperArmLeft";
    MaterialHash[MaterialHash["LowerArmLeft"] = 1045062756] = "LowerArmLeft";
    MaterialHash[MaterialHash["HandLeft"] = 113101985] = "HandLeft";
    MaterialHash[MaterialHash["ClavicleRight"] = 2737678298] = "ClavicleRight";
    MaterialHash[MaterialHash["UpperArmRight"] = 1501153539] = "UpperArmRight";
    MaterialHash[MaterialHash["LowerArmRight"] = 1777921590] = "LowerArmRight";
    MaterialHash[MaterialHash["HandRight"] = 2000961972] = "HandRight";
    MaterialHash[MaterialHash["Neck"] = 1718294164] = "Neck";
    MaterialHash[MaterialHash["Head"] = 3559574543] = "Head";
    MaterialHash[MaterialHash["AnimalDefault"] = 286224918] = "AnimalDefault";
    MaterialHash[MaterialHash["CarEngine"] = 2378027672] = "CarEngine";
    MaterialHash[MaterialHash["Puddle"] = 999829011] = "Puddle";
    MaterialHash[MaterialHash["ConcretePavement"] = 2015599386] = "ConcretePavement";
    MaterialHash[MaterialHash["BrickPavement"] = 3147605720] = "BrickPavement";
    MaterialHash[MaterialHash["PhysDynamicCoverBound"] = 2247498441] = "PhysDynamicCoverBound";
    MaterialHash[MaterialHash["VfxWoodBeerBarrel"] = 998201806] = "VfxWoodBeerBarrel";
    MaterialHash[MaterialHash["WoodHighFriction"] = 2154880249] = "WoodHighFriction";
    MaterialHash[MaterialHash["RockNoinst"] = 127813971] = "RockNoinst";
    MaterialHash[MaterialHash["BushesNoinst"] = 1441114862] = "BushesNoinst";
    MaterialHash[MaterialHash["MetalSolidRoadSurface"] = 3565854962] = "MetalSolidRoadSurface";
    MaterialHash[MaterialHash["StuntRampSurface"] = 2206792300] = "StuntRampSurface";
    MaterialHash[MaterialHash["Temp01"] = 746881105] = "Temp01";
    MaterialHash[MaterialHash["Temp02"] = 2316997185] = "Temp02";
    MaterialHash[MaterialHash["Temp03"] = 1911121241] = "Temp03";
    MaterialHash[MaterialHash["Temp04"] = 1923995104] = "Temp04";
    MaterialHash[MaterialHash["Temp05"] = 2901304848] = "Temp05";
    MaterialHash[MaterialHash["Temp06"] = 1061250033] = "Temp06";
    MaterialHash[MaterialHash["Temp07"] = 2529443614] = "Temp07";
    MaterialHash[MaterialHash["Temp08"] = 1343679702] = "Temp08";
    MaterialHash[MaterialHash["Temp09"] = 1026054937] = "Temp09";
    MaterialHash[MaterialHash["Temp10"] = 63305994] = "Temp10";
    MaterialHash[MaterialHash["Temp11"] = 47470226] = "Temp11";
    MaterialHash[MaterialHash["Temp12"] = 702596674] = "Temp12";
    MaterialHash[MaterialHash["Temp13"] = 2657481383] = "Temp13";
    MaterialHash[MaterialHash["Temp14"] = 3649011722] = "Temp14";
    MaterialHash[MaterialHash["Temp15"] = 2710969365] = "Temp15";
    MaterialHash[MaterialHash["Temp16"] = 2782232023] = "Temp16";
    MaterialHash[MaterialHash["Temp17"] = 1011960114] = "Temp17";
    MaterialHash[MaterialHash["Temp18"] = 1354993138] = "Temp18";
    MaterialHash[MaterialHash["Temp19"] = 3493162850] = "Temp19";
    MaterialHash[MaterialHash["Temp20"] = 2242086891] = "Temp20";
    MaterialHash[MaterialHash["Temp21"] = 3257211236] = "Temp21";
    MaterialHash[MaterialHash["Temp22"] = 3674578943] = "Temp22";
    MaterialHash[MaterialHash["Temp23"] = 465002639] = "Temp23";
    MaterialHash[MaterialHash["Temp24"] = 1963820161] = "Temp24";
    MaterialHash[MaterialHash["Temp25"] = 1952288305] = "Temp25";
    MaterialHash[MaterialHash["Temp26"] = 3178714198] = "Temp26";
    MaterialHash[MaterialHash["Temp27"] = 889255498] = "Temp27";
    MaterialHash[MaterialHash["Temp28"] = 3115293198] = "Temp28";
    MaterialHash[MaterialHash["Temp29"] = 1078418101] = "Temp29";
    MaterialHash[MaterialHash["Temp30"] = 13626292] = "Temp30";
})(MaterialHash = exports.MaterialHash || (exports.MaterialHash = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/hashes/PedHash.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/hashes/PedHash.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PedHash = void 0;
var PedHash;
(function (PedHash) {
    PedHash[PedHash["Michael"] = 225514697] = "Michael";
    PedHash[PedHash["Franklin"] = 2602752943] = "Franklin";
    PedHash[PedHash["Trevor"] = 2608926626] = "Trevor";
    PedHash[PedHash["Abigail"] = 1074457665] = "Abigail";
    PedHash[PedHash["Agent"] = 3614493108] = "Agent";
    PedHash[PedHash["Agent14"] = 4227433577] = "Agent14";
    PedHash[PedHash["AmandaTownley"] = 1830688247] = "AmandaTownley";
    PedHash[PedHash["Andreas"] = 1206185632] = "Andreas";
    PedHash[PedHash["Ashley"] = 2129936603] = "Ashley";
    PedHash[PedHash["AviSchwartzman"] = 939183526] = "AviSchwartzman";
    PedHash[PedHash["Ballasog"] = 2802535058] = "Ballasog";
    PedHash[PedHash["Bankman"] = 2426248831] = "Bankman";
    PedHash[PedHash["Barry"] = 797459875] = "Barry";
    PedHash[PedHash["Bestmen"] = 1464257942] = "Bestmen";
    PedHash[PedHash["Beverly"] = 3181518428] = "Beverly";
    PedHash[PedHash["Brad"] = 3183167778] = "Brad";
    PedHash[PedHash["Bride"] = 1633872967] = "Bride";
    PedHash[PedHash["Car3Guy1"] = 2230970679] = "Car3Guy1";
    PedHash[PedHash["Car3Guy2"] = 1975732938] = "Car3Guy2";
    PedHash[PedHash["Casey"] = 3774489940] = "Casey";
    PedHash[PedHash["Chef"] = 1240128502] = "Chef";
    PedHash[PedHash["Chef2"] = 2240322243] = "Chef2";
    PedHash[PedHash["Clay"] = 1825562762] = "Clay";
    PedHash[PedHash["Claypain"] = 2634057640] = "Claypain";
    PedHash[PedHash["Cletus"] = 3865252245] = "Cletus";
    PedHash[PedHash["CrisFormage"] = 678319271] = "CrisFormage";
    PedHash[PedHash["Dale"] = 1182012905] = "Dale";
    PedHash[PedHash["DaveNorton"] = 365775923] = "DaveNorton";
    PedHash[PedHash["Denise"] = 2181772221] = "Denise";
    PedHash[PedHash["Devin"] = 1952555184] = "Devin";
    PedHash[PedHash["DoaMan"] = 1646160893] = "DoaMan";
    PedHash[PedHash["Dom"] = 2620240008] = "Dom";
    PedHash[PedHash["Dreyfuss"] = 3666413874] = "Dreyfuss";
    PedHash[PedHash["DrFriedlander"] = 3422293493] = "DrFriedlander";
    PedHash[PedHash["EdToh"] = 712602007] = "EdToh";
    PedHash[PedHash["Fabien"] = 3499148112] = "Fabien";
    PedHash[PedHash["FbiSuit01"] = 988062523] = "FbiSuit01";
    PedHash[PedHash["Floyd"] = 2981205682] = "Floyd";
    PedHash[PedHash["G"] = 2216405299] = "G";
    PedHash[PedHash["Groom"] = 4274948997] = "Groom";
    PedHash[PedHash["Hao"] = 1704428387] = "Hao";
    PedHash[PedHash["Hunter"] = 3457361118] = "Hunter";
    PedHash[PedHash["Janet"] = 225287241] = "Janet";
    PedHash[PedHash["JayNorris"] = 2050158196] = "JayNorris";
    PedHash[PedHash["Jewelass"] = 257763003] = "Jewelass";
    PedHash[PedHash["JimmyBoston"] = 3986688045] = "JimmyBoston";
    PedHash[PedHash["JimmyDisanto"] = 1459905209] = "JimmyDisanto";
    PedHash[PedHash["JoeMinuteman"] = 3189787803] = "JoeMinuteman";
    PedHash[PedHash["JohnnyKlebitz"] = 2278195374] = "JohnnyKlebitz";
    PedHash[PedHash["Josef"] = 3776618420] = "Josef";
    PedHash[PedHash["Josh"] = 2040438510] = "Josh";
    PedHash[PedHash["KarenDaniels"] = 3948009817] = "KarenDaniels";
    PedHash[PedHash["KerryMcintosh"] = 1530648845] = "KerryMcintosh";
    PedHash[PedHash["LamarDavis"] = 1706635382] = "LamarDavis";
    PedHash[PedHash["Lazlow"] = 3756278757] = "Lazlow";
    PedHash[PedHash["LesterCrest"] = 1302784073] = "LesterCrest";
    PedHash[PedHash["Lifeinvad01"] = 1401530684] = "Lifeinvad01";
    PedHash[PedHash["Lifeinvad02"] = 666718676] = "Lifeinvad02";
    PedHash[PedHash["Magenta"] = 4242313482] = "Magenta";
    PedHash[PedHash["Malc"] = 4055673113] = "Malc";
    PedHash[PedHash["Manuel"] = 4248931856] = "Manuel";
    PedHash[PedHash["Marnie"] = 411185872] = "Marnie";
    PedHash[PedHash["MaryAnn"] = 2741999622] = "MaryAnn";
    PedHash[PedHash["Maude"] = 1005070462] = "Maude";
    PedHash[PedHash["Michelle"] = 3214308084] = "Michelle";
    PedHash[PedHash["Milton"] = 3408943538] = "Milton";
    PedHash[PedHash["Molly"] = 2936266209] = "Molly";
    PedHash[PedHash["MrK"] = 3990661997] = "MrK";
    PedHash[PedHash["MrsPhillips"] = 946007720] = "MrsPhillips";
    PedHash[PedHash["MrsThornhill"] = 503621995] = "MrsThornhill";
    PedHash[PedHash["Natalia"] = 3726105915] = "Natalia";
    PedHash[PedHash["NervousRon"] = 3170921201] = "NervousRon";
    PedHash[PedHash["Nigel"] = 3367442045] = "Nigel";
    PedHash[PedHash["OldMan1a"] = 1906124788] = "OldMan1a";
    PedHash[PedHash["OldMan2"] = 4011150407] = "OldMan2";
    PedHash[PedHash["Omega"] = 1625728984] = "Omega";
    PedHash[PedHash["ONeil"] = 768005095] = "ONeil";
    PedHash[PedHash["Orleans"] = 1641334641] = "Orleans";
    PedHash[PedHash["Ortega"] = 648372919] = "Ortega";
    PedHash[PedHash["Paper"] = 2577072326] = "Paper";
    PedHash[PedHash["Patricia"] = 3312325004] = "Patricia";
    PedHash[PedHash["Popov"] = 645279998] = "Popov";
    PedHash[PedHash["Paige"] = 357551935] = "Paige";
    PedHash[PedHash["Priest"] = 1681385341] = "Priest";
    PedHash[PedHash["PrologueDriver"] = 2237544099] = "PrologueDriver";
    PedHash[PedHash["PrologueSec01"] = 1888624839] = "PrologueSec01";
    PedHash[PedHash["PrologueSec02"] = 666086773] = "PrologueSec02";
    PedHash[PedHash["RampGang"] = 3845001836] = "RampGang";
    PedHash[PedHash["RampHic"] = 1165307954] = "RampHic";
    PedHash[PedHash["RampHipster"] = 3740245870] = "RampHipster";
    PedHash[PedHash["RampMex"] = 3870061732] = "RampMex";
    PedHash[PedHash["Rashkovsky"] = 940326374] = "Rashkovsky";
    PedHash[PedHash["RoccoPelosi"] = 3585757951] = "RoccoPelosi";
    PedHash[PedHash["RussianDrunk"] = 1024089777] = "RussianDrunk";
    PedHash[PedHash["ScreenWriter"] = 4293277303] = "ScreenWriter";
    PedHash[PedHash["SiemonYetarian"] = 1283141381] = "SiemonYetarian";
    PedHash[PedHash["Solomon"] = 2260598310] = "Solomon";
    PedHash[PedHash["SteveHains"] = 941695432] = "SteveHains";
    PedHash[PedHash["Stretch"] = 915948376] = "Stretch";
    PedHash[PedHash["Talina"] = 3885222120] = "Talina";
    PedHash[PedHash["Tanisha"] = 226559113] = "Tanisha";
    PedHash[PedHash["TaoCheng"] = 3697041061] = "TaoCheng";
    PedHash[PedHash["TaosTranslator"] = 2089096292] = "TaosTranslator";
    PedHash[PedHash["TennisCoach"] = 2721800023] = "TennisCoach";
    PedHash[PedHash["Terry"] = 1728056212] = "Terry";
    PedHash[PedHash["TomEpsilon"] = 3447159466] = "TomEpsilon";
    PedHash[PedHash["Tonya"] = 3402126148] = "Tonya";
    PedHash[PedHash["TracyDisanto"] = 3728026165] = "TracyDisanto";
    PedHash[PedHash["TrafficWarden"] = 1461287021] = "TrafficWarden";
    PedHash[PedHash["TylerDixon"] = 1382414087] = "TylerDixon";
    PedHash[PedHash["VagosSpeak"] = 4194109068] = "VagosSpeak";
    PedHash[PedHash["Wade"] = 2459507570] = "Wade";
    PedHash[PedHash["WeiCheng"] = 2867128955] = "WeiCheng";
    PedHash[PedHash["Zimbor"] = 188012277] = "Zimbor";
    PedHash[PedHash["AbigailCutscene"] = 2306246977] = "AbigailCutscene";
    PedHash[PedHash["AgentCutscene"] = 3614493108] = "AgentCutscene";
    PedHash[PedHash["Agent14Cutscene"] = 1841036427] = "Agent14Cutscene";
    PedHash[PedHash["AmandaTownleyCutscene"] = 2515474659] = "AmandaTownleyCutscene";
    PedHash[PedHash["AndreasCutscene"] = 3881194279] = "AndreasCutscene";
    PedHash[PedHash["AnitaCutscene"] = 117698822] = "AnitaCutscene";
    PedHash[PedHash["AntonCutscene"] = 2781317046] = "AntonCutscene";
    PedHash[PedHash["AshleyCutscene"] = 650367097] = "AshleyCutscene";
    PedHash[PedHash["AviSchwartzmanCutscene"] = 2560490906] = "AviSchwartzmanCutscene";
    PedHash[PedHash["BallasogCutscene"] = 2884567044] = "BallasogCutscene";
    PedHash[PedHash["BankmanCutscene"] = 2539657518] = "BankmanCutscene";
    PedHash[PedHash["BarryCutscene"] = 1767447799] = "BarryCutscene";
    PedHash[PedHash["BeverlyCutscene"] = 3027157846] = "BeverlyCutscene";
    PedHash[PedHash["BradCutscene"] = 4024807398] = "BradCutscene";
    PedHash[PedHash["BradCadaverCutscene"] = 1915268960] = "BradCadaverCutscene";
    PedHash[PedHash["BrideCutscene"] = 2193587873] = "BrideCutscene";
    PedHash[PedHash["BurgerDrugCutscene"] = 2363277399] = "BurgerDrugCutscene";
    PedHash[PedHash["Car3Guy1Cutscene"] = 71501447] = "Car3Guy1Cutscene";
    PedHash[PedHash["Car3Guy2Cutscene"] = 327394568] = "Car3Guy2Cutscene";
    PedHash[PedHash["CarBuyerCutscene"] = 2362341647] = "CarBuyerCutscene";
    PedHash[PedHash["CaseyCutscene"] = 3935738944] = "CaseyCutscene";
    PedHash[PedHash["ChefCutscene"] = 2739391114] = "ChefCutscene";
    PedHash[PedHash["Chef2Cutscene"] = 2925257274] = "Chef2Cutscene";
    PedHash[PedHash["ChinGoonCutscene"] = 2831296918] = "ChinGoonCutscene";
    PedHash[PedHash["ClayCutscene"] = 3687553076] = "ClayCutscene";
    PedHash[PedHash["CletusCutscene"] = 3404326357] = "CletusCutscene";
    PedHash[PedHash["CopCutscene"] = 2595446627] = "CopCutscene";
    PedHash[PedHash["CrisFormageCutscene"] = 3253960934] = "CrisFormageCutscene";
    PedHash[PedHash["CustomerCutscene"] = 2756669323] = "CustomerCutscene";
    PedHash[PedHash["DaleCutscene"] = 216536661] = "DaleCutscene";
    PedHash[PedHash["DaveNortonCutscene"] = 2240226444] = "DaveNortonCutscene";
    PedHash[PedHash["DebraCutscene"] = 3973074921] = "DebraCutscene";
    PedHash[PedHash["DeniseCutscene"] = 1870669624] = "DeniseCutscene";
    PedHash[PedHash["DeniseFriendCutscene"] = 3045926185] = "DeniseFriendCutscene";
    PedHash[PedHash["DevinCutscene"] = 788622594] = "DevinCutscene";
    PedHash[PedHash["DomCutscene"] = 1198698306] = "DomCutscene";
    PedHash[PedHash["DreyfussCutscene"] = 1012965715] = "DreyfussCutscene";
    PedHash[PedHash["DrFriedlanderCutscene"] = 2745392175] = "DrFriedlanderCutscene";
    PedHash[PedHash["FabienCutscene"] = 1191403201] = "FabienCutscene";
    PedHash[PedHash["FbiSuit01Cutscene"] = 1482427218] = "FbiSuit01Cutscene";
    PedHash[PedHash["FloydCutscene"] = 103106535] = "FloydCutscene";
    PedHash[PedHash["FosRepCutscene"] = 466359675] = "FosRepCutscene";
    PedHash[PedHash["GCutscene"] = 2727244247] = "GCutscene";
    PedHash[PedHash["GroomCutscene"] = 2058033618] = "GroomCutscene";
    PedHash[PedHash["GroveStrDlrCutscene"] = 3898166818] = "GroveStrDlrCutscene";
    PedHash[PedHash["GuadalopeCutscene"] = 261428209] = "GuadalopeCutscene";
    PedHash[PedHash["GurkCutscene"] = 3272931111] = "GurkCutscene";
    PedHash[PedHash["HaoCutscene"] = 3969814300] = "HaoCutscene";
    PedHash[PedHash["HughCutscene"] = 1863555924] = "HughCutscene";
    PedHash[PedHash["HunterCutscene"] = 1531218220] = "HunterCutscene";
    PedHash[PedHash["ImranCutscene"] = 3812756443] = "ImranCutscene";
    PedHash[PedHash["JackHowitzerCutscene"] = 1153203121] = "JackHowitzerCutscene";
    PedHash[PedHash["JanetCutscene"] = 808778210] = "JanetCutscene";
    PedHash[PedHash["JanitorCutscene"] = 3254803008] = "JanitorCutscene";
    PedHash[PedHash["JewelassCutscene"] = 1145088004] = "JewelassCutscene";
    PedHash[PedHash["JimmyBostonCutscene"] = 60192701] = "JimmyBostonCutscene";
    PedHash[PedHash["JimmyDisantoCutscene"] = 3100414644] = "JimmyDisantoCutscene";
    PedHash[PedHash["JoeMinutemanCutscene"] = 4036845097] = "JoeMinutemanCutscene";
    PedHash[PedHash["JohnnyKlebitzCutscene"] = 4203395201] = "JohnnyKlebitzCutscene";
    PedHash[PedHash["JosefCutscene"] = 1167549130] = "JosefCutscene";
    PedHash[PedHash["JoshCutscene"] = 1158606749] = "JoshCutscene";
    PedHash[PedHash["KarenDanielsCutscene"] = 1269774364] = "KarenDanielsCutscene";
    PedHash[PedHash["LamarDavisCutscene"] = 1162230285] = "LamarDavisCutscene";
    PedHash[PedHash["LazlowCutscene"] = 949295643] = "LazlowCutscene";
    PedHash[PedHash["LesterCrestCutscene"] = 3046438339] = "LesterCrestCutscene";
    PedHash[PedHash["Lifeinvad01Cutscene"] = 1918178165] = "Lifeinvad01Cutscene";
    PedHash[PedHash["MagentaCutscene"] = 1477887514] = "MagentaCutscene";
    PedHash[PedHash["ManuelCutscene"] = 4222842058] = "ManuelCutscene";
    PedHash[PedHash["MarnieCutscene"] = 1464721716] = "MarnieCutscene";
    PedHash[PedHash["MartinMadrazoCutscene"] = 1129928304] = "MartinMadrazoCutscene";
    PedHash[PedHash["MaryannCutscene"] = 161007533] = "MaryannCutscene";
    PedHash[PedHash["MaudeCutscene"] = 3166991819] = "MaudeCutscene";
    PedHash[PedHash["MerryWeatherCutscene"] = 1631478380] = "MerryWeatherCutscene";
    PedHash[PedHash["MichelleCutscene"] = 1890499016] = "MichelleCutscene";
    PedHash[PedHash["MiltonCutscene"] = 3077190415] = "MiltonCutscene";
    PedHash[PedHash["MollyCutscene"] = 1167167044] = "MollyCutscene";
    PedHash[PedHash["MoviePremFemaleCutscene"] = 1270514905] = "MoviePremFemaleCutscene";
    PedHash[PedHash["MoviePremMaleCutscene"] = 2372398717] = "MoviePremMaleCutscene";
    PedHash[PedHash["MrKCutscene"] = 3284966005] = "MrKCutscene";
    PedHash[PedHash["MrsPhillipsCutscene"] = 3422397391] = "MrsPhillipsCutscene";
    PedHash[PedHash["MrsThornhillCutscene"] = 1334976110] = "MrsThornhillCutscene";
    PedHash[PedHash["NataliaCutscene"] = 1325314544] = "NataliaCutscene";
    PedHash[PedHash["NervousRonCutscene"] = 2023152276] = "NervousRonCutscene";
    PedHash[PedHash["NigelCutscene"] = 3779566603] = "NigelCutscene";
    PedHash[PedHash["OldMan1aCutscene"] = 518814684] = "OldMan1aCutscene";
    PedHash[PedHash["OldMan2Cutscene"] = 2566514544] = "OldMan2Cutscene";
    PedHash[PedHash["OmegaCutscene"] = 2339419141] = "OmegaCutscene";
    PedHash[PedHash["OrleansCutscene"] = 2905870170] = "OrleansCutscene";
    PedHash[PedHash["OrtegaCutscene"] = 3235579087] = "OrtegaCutscene";
    PedHash[PedHash["OscarCutscene"] = 4095687067] = "OscarCutscene";
    PedHash[PedHash["PaigeCutscene"] = 1528799427] = "PaigeCutscene";
    PedHash[PedHash["PaperCutscene"] = 1798879480] = "PaperCutscene";
    PedHash[PedHash["PopovCutscene"] = 1635617250] = "PopovCutscene";
    PedHash[PedHash["PatriciaCutscene"] = 3750433537] = "PatriciaCutscene";
    PedHash[PedHash["PornDudesCutscene"] = 793443893] = "PornDudesCutscene";
    PedHash[PedHash["PriestCutscene"] = 1299047806] = "PriestCutscene";
    PedHash[PedHash["PrologueDriverCutscene"] = 4027271643] = "PrologueDriverCutscene";
    PedHash[PedHash["PrologueSec01Cutscene"] = 2141384740] = "PrologueSec01Cutscene";
    PedHash[PedHash["PrologueSec02Cutscene"] = 512955554] = "PrologueSec02Cutscene";
    PedHash[PedHash["RampGangCutscene"] = 3263172030] = "RampGangCutscene";
    PedHash[PedHash["RampHicCutscene"] = 2240582840] = "RampHicCutscene";
    PedHash[PedHash["RampHipsterCutscene"] = 569740212] = "RampHipsterCutscene";
    PedHash[PedHash["RampMarineCutscene"] = 1634506681] = "RampMarineCutscene";
    PedHash[PedHash["RampMexCutscene"] = 4132362192] = "RampMexCutscene";
    PedHash[PedHash["RashkovskyCutscene"] = 411081129] = "RashkovskyCutscene";
    PedHash[PedHash["ReporterCutscene"] = 776079908] = "ReporterCutscene";
    PedHash[PedHash["RoccoPelosiCutscene"] = 2858686092] = "RoccoPelosiCutscene";
    PedHash[PedHash["RussianDrunkCutscene"] = 1179785778] = "RussianDrunkCutscene";
    PedHash[PedHash["ScreenWriterCutscene"] = 2346790124] = "ScreenWriterCutscene";
    PedHash[PedHash["SiemonYetarianCutscene"] = 3230888450] = "SiemonYetarianCutscene";
    PedHash[PedHash["SolomonCutscene"] = 4140949582] = "SolomonCutscene";
    PedHash[PedHash["SteveHainsCutscene"] = 2766184958] = "SteveHainsCutscene";
    PedHash[PedHash["StretchCutscene"] = 2302502917] = "StretchCutscene";
    PedHash[PedHash["Stripper01Cutscene"] = 2934601397] = "Stripper01Cutscene";
    PedHash[PedHash["Stripper02Cutscene"] = 2168724337] = "Stripper02Cutscene";
    PedHash[PedHash["TanishaCutscene"] = 1123963760] = "TanishaCutscene";
    PedHash[PedHash["TaoChengCutscene"] = 2288257085] = "TaoChengCutscene";
    PedHash[PedHash["TaosTranslatorCutscene"] = 1397974313] = "TaosTranslatorCutscene";
    PedHash[PedHash["TennisCoachCutscene"] = 1545995274] = "TennisCoachCutscene";
    PedHash[PedHash["TerryCutscene"] = 978452933] = "TerryCutscene";
    PedHash[PedHash["TomCutscene"] = 1776856003] = "TomCutscene";
    PedHash[PedHash["TomEpsilonCutscene"] = 2349847778] = "TomEpsilonCutscene";
    PedHash[PedHash["TonyaCutscene"] = 1665391897] = "TonyaCutscene";
    PedHash[PedHash["TracyDisantoCutscene"] = 101298480] = "TracyDisantoCutscene";
    PedHash[PedHash["TrafficWardenCutscene"] = 3727243251] = "TrafficWardenCutscene";
    PedHash[PedHash["UndercoverCopCutscene"] = 4017642090] = "UndercoverCopCutscene";
    PedHash[PedHash["VagosSpeakCutscene"] = 1224690857] = "VagosSpeakCutscene";
    PedHash[PedHash["WadeCutscene"] = 3529955798] = "WadeCutscene";
    PedHash[PedHash["WeiChengCutscene"] = 819699067] = "WeiChengCutscene";
    PedHash[PedHash["ZimborCutscene"] = 3937184496] = "ZimborCutscene";
    PedHash[PedHash["Boar"] = 3462393972] = "Boar";
    PedHash[PedHash["Cat"] = 1462895032] = "Cat";
    PedHash[PedHash["ChickenHawk"] = 2864127842] = "ChickenHawk";
    PedHash[PedHash["Chimp"] = 2825402133] = "Chimp";
    PedHash[PedHash["Chop"] = 351016938] = "Chop";
    PedHash[PedHash["Cormorant"] = 1457690978] = "Cormorant";
    PedHash[PedHash["Cow"] = 4244282910] = "Cow";
    PedHash[PedHash["Coyote"] = 1682622302] = "Coyote";
    PedHash[PedHash["Crow"] = 402729631] = "Crow";
    PedHash[PedHash["Deer"] = 3630914197] = "Deer";
    PedHash[PedHash["Dolphin"] = 2344268885] = "Dolphin";
    PedHash[PedHash["Fish"] = 802685111] = "Fish";
    PedHash[PedHash["Hen"] = 1794449327] = "Hen";
    PedHash[PedHash["HammerShark"] = 1015224100] = "HammerShark";
    PedHash[PedHash["Humpback"] = 1193010354] = "Humpback";
    PedHash[PedHash["Husky"] = 1318032802] = "Husky";
    PedHash[PedHash["KillerWhale"] = 2374682809] = "KillerWhale";
    PedHash[PedHash["MountainLion"] = 307287994] = "MountainLion";
    PedHash[PedHash["Pig"] = 2971380566] = "Pig";
    PedHash[PedHash["Pigeon"] = 111281960] = "Pigeon";
    PedHash[PedHash["Poodle"] = 1125994524] = "Poodle";
    PedHash[PedHash["Pug"] = 1832265812] = "Pug";
    PedHash[PedHash["Rabbit"] = 3753204865] = "Rabbit";
    PedHash[PedHash["Rat"] = 3283429734] = "Rat";
    PedHash[PedHash["Retriever"] = 882848737] = "Retriever";
    PedHash[PedHash["Rhesus"] = 3268439891] = "Rhesus";
    PedHash[PedHash["Rottweiler"] = 2506301981] = "Rottweiler";
    PedHash[PedHash["Seagull"] = 3549666813] = "Seagull";
    PedHash[PedHash["Shepherd"] = 1126154828] = "Shepherd";
    PedHash[PedHash["Stingray"] = 2705875277] = "Stingray";
    PedHash[PedHash["TigerShark"] = 113504370] = "TigerShark";
    PedHash[PedHash["Westy"] = 2910340283] = "Westy";
    PedHash[PedHash["Abner"] = 4037813798] = "Abner";
    PedHash[PedHash["AlDiNapoli"] = 4042020578] = "AlDiNapoli";
    PedHash[PedHash["Antonb"] = 3479321132] = "Antonb";
    PedHash[PedHash["Armoured01"] = 3455013896] = "Armoured01";
    PedHash[PedHash["Babyd"] = 3658575486] = "Babyd";
    PedHash[PedHash["Bankman01"] = 3272005365] = "Bankman01";
    PedHash[PedHash["Baygor"] = 1380197501] = "Baygor";
    PedHash[PedHash["Benny"] = 3300333010] = "Benny";
    PedHash[PedHash["BikeHire01"] = 1984382277] = "BikeHire01";
    PedHash[PedHash["BikerChic"] = 4198014287] = "BikerChic";
    PedHash[PedHash["BoatStaff01M"] = 3361671816] = "BoatStaff01M";
    PedHash[PedHash["BoatStaff01F"] = 848542878] = "BoatStaff01F";
    PedHash[PedHash["BurgerDrug"] = 2340239206] = "BurgerDrug";
    PedHash[PedHash["Chip"] = 610290475] = "Chip";
    PedHash[PedHash["Claude01"] = 3237179831] = "Claude01";
    PedHash[PedHash["ClubHouseBar01"] = 1914945105] = "ClubHouseBar01";
    PedHash[PedHash["CocaineFemale01"] = 1897303236] = "CocaineFemale01";
    PedHash[PedHash["CocaineMale01"] = 3455927962] = "CocaineMale01";
    PedHash[PedHash["ComJane"] = 3064628686] = "ComJane";
    PedHash[PedHash["Corpse01"] = 773063444] = "Corpse01";
    PedHash[PedHash["Corpse02"] = 228356856] = "Corpse02";
    PedHash[PedHash["CounterfeitFemale01"] = 1074385436] = "CounterfeitFemale01";
    PedHash[PedHash["CounterfeitMale01"] = 2625926338] = "CounterfeitMale01";
    PedHash[PedHash["Cyclist01"] = 755956971] = "Cyclist01";
    PedHash[PedHash["DeadHooker"] = 1943971979] = "DeadHooker";
    PedHash[PedHash["Drowned"] = 1943971979] = "Drowned";
    PedHash[PedHash["ExArmy01"] = 1161072059] = "ExArmy01";
    PedHash[PedHash["ExecutivePAMale01"] = 983887149] = "ExecutivePAMale01";
    PedHash[PedHash["ExecutivePAFemale01"] = 2913175640] = "ExecutivePAFemale01";
    PedHash[PedHash["Famdd01"] = 866411749] = "Famdd01";
    PedHash[PedHash["FibArchitect"] = 874722259] = "FibArchitect";
    PedHash[PedHash["FibMugger01"] = 2243544680] = "FibMugger01";
    PedHash[PedHash["FibSec01"] = 1558115333] = "FibSec01";
    PedHash[PedHash["FilmDirector"] = 728636342] = "FilmDirector";
    PedHash[PedHash["FilmNoir"] = 732742363] = "FilmNoir";
    PedHash[PedHash["Finguru01"] = 1189322339] = "Finguru01";
    PedHash[PedHash["ForgeryFemale01"] = 3691903615] = "ForgeryFemale01";
    PedHash[PedHash["ForgeryMale01"] = 325317957] = "ForgeryMale01";
    PedHash[PedHash["FreemodeFemale01"] = 2627665880] = "FreemodeFemale01";
    PedHash[PedHash["FreemodeMale01"] = 1885233650] = "FreemodeMale01";
    PedHash[PedHash["Glenstank01"] = 1169888870] = "Glenstank01";
    PedHash[PedHash["Griff01"] = 3293887675] = "Griff01";
    PedHash[PedHash["Guido01"] = 3333724719] = "Guido01";
    PedHash[PedHash["GunVend01"] = 3005388626] = "GunVend01";
    PedHash[PedHash["Hacker"] = 2579169528] = "Hacker";
    PedHash[PedHash["HeliStaff01"] = 431423238] = "HeliStaff01";
    PedHash[PedHash["Hippie01"] = 4030826507] = "Hippie01";
    PedHash[PedHash["Hotposh01"] = 2526768638] = "Hotposh01";
    PedHash[PedHash["Imporage"] = 880829941] = "Imporage";
    PedHash[PedHash["Jesus01"] = 3459037009] = "Jesus01";
    PedHash[PedHash["Jewelass01"] = 4040474158] = "Jewelass01";
    PedHash[PedHash["JewelSec01"] = 2899099062] = "JewelSec01";
    PedHash[PedHash["JewelThief"] = 3872144604] = "JewelThief";
    PedHash[PedHash["Justin"] = 2109968527] = "Justin";
    PedHash[PedHash["Mani"] = 3367706194] = "Mani";
    PedHash[PedHash["Markfost"] = 479578891] = "Markfost";
    PedHash[PedHash["Marston01"] = 943915367] = "Marston01";
    PedHash[PedHash["MethFemale01"] = 3778572496] = "MethFemale01";
    PedHash[PedHash["MethMale01"] = 1293671805] = "MethMale01";
    PedHash[PedHash["MilitaryBum"] = 1191548746] = "MilitaryBum";
    PedHash[PedHash["Miranda"] = 1095737979] = "Miranda";
    PedHash[PedHash["Mistress"] = 1573528872] = "Mistress";
    PedHash[PedHash["Misty01"] = 3509125021] = "Misty01";
    PedHash[PedHash["MovieStar"] = 894928436] = "MovieStar";
    PedHash[PedHash["MPros01"] = 1822283721] = "MPros01";
    PedHash[PedHash["Niko01"] = 4007317449] = "Niko01";
    PedHash[PedHash["Paparazzi"] = 1346941736] = "Paparazzi";
    PedHash[PedHash["Party01"] = 921110016] = "Party01";
    PedHash[PedHash["PartyTarget"] = 2180468199] = "PartyTarget";
    PedHash[PedHash["PestContDriver"] = 994527967] = "PestContDriver";
    PedHash[PedHash["PestContGunman"] = 193469166] = "PestContGunman";
    PedHash[PedHash["Pogo01"] = 3696858125] = "Pogo01";
    PedHash[PedHash["Poppymich"] = 602513566] = "Poppymich";
    PedHash[PedHash["Princess"] = 3538133636] = "Princess";
    PedHash[PedHash["Prisoner01"] = 2073775040] = "Prisoner01";
    PedHash[PedHash["PrologueHostage01"] = 3306347811] = "PrologueHostage01";
    PedHash[PedHash["PrologueMournFemale01"] = 2718472679] = "PrologueMournFemale01";
    PedHash[PedHash["PrologueMournMale01"] = 3465937675] = "PrologueMournMale01";
    PedHash[PedHash["RivalPaparazzi"] = 1624626906] = "RivalPaparazzi";
    PedHash[PedHash["ShopKeep01"] = 416176080] = "ShopKeep01";
    PedHash[PedHash["SpyActor"] = 2886641112] = "SpyActor";
    PedHash[PedHash["SpyActress"] = 1535236204] = "SpyActress";
    PedHash[PedHash["StripperLite"] = 695248020] = "StripperLite";
    PedHash[PedHash["Taphillbilly"] = 2585681490] = "Taphillbilly";
    PedHash[PedHash["Tramp01"] = 1787764635] = "Tramp01";
    PedHash[PedHash["VagosFun01"] = 3299219389] = "VagosFun01";
    PedHash[PedHash["WillyFist"] = 2423691919] = "WillyFist";
    PedHash[PedHash["WeedFemale01"] = 1596374223] = "WeedFemale01";
    PedHash[PedHash["WeedMale01"] = 2648833641] = "WeedMale01";
    PedHash[PedHash["Zombie01"] = 2890614022] = "Zombie01";
    PedHash[PedHash["Acult01AMM"] = 1413662315] = "Acult01AMM";
    PedHash[PedHash["Acult01AMO"] = 1430544400] = "Acult01AMO";
    PedHash[PedHash["Acult01AMY"] = 3043264555] = "Acult01AMY";
    PedHash[PedHash["Acult02AMO"] = 1268862154] = "Acult02AMO";
    PedHash[PedHash["Acult02AMY"] = 2162532142] = "Acult02AMY";
    PedHash[PedHash["AfriAmer01AMM"] = 3513928062] = "AfriAmer01AMM";
    PedHash[PedHash["Airhostess01SFY"] = 1567728751] = "Airhostess01SFY";
    PedHash[PedHash["AirworkerSMY"] = 1644266841] = "AirworkerSMY";
    PedHash[PedHash["Ammucity01SMY"] = 2651349821] = "Ammucity01SMY";
    PedHash[PedHash["AmmuCountrySMM"] = 233415434] = "AmmuCountrySMM";
    PedHash[PedHash["ArmBoss01GMM"] = 4058522530] = "ArmBoss01GMM";
    PedHash[PedHash["ArmGoon01GMM"] = 4255728232] = "ArmGoon01GMM";
    PedHash[PedHash["ArmGoon02GMY"] = 3310258058] = "ArmGoon02GMY";
    PedHash[PedHash["ArmLieut01GMM"] = 3882958867] = "ArmLieut01GMM";
    PedHash[PedHash["Armoured01SMM"] = 2512875213] = "Armoured01SMM";
    PedHash[PedHash["Armoured02SMM"] = 1669696074] = "Armoured02SMM";
    PedHash[PedHash["Armymech01SMY"] = 1657546978] = "Armymech01SMY";
    PedHash[PedHash["Autopsy01SMY"] = 2988916046] = "Autopsy01SMY";
    PedHash[PedHash["Autoshop01SMM"] = 68070371] = "Autoshop01SMM";
    PedHash[PedHash["Autoshop02SMM"] = 4033578141] = "Autoshop02SMM";
    PedHash[PedHash["Azteca01GMY"] = 1752208920] = "Azteca01GMY";
    PedHash[PedHash["BallaEast01GMY"] = 4096714883] = "BallaEast01GMY";
    PedHash[PedHash["BallaOrig01GMY"] = 588969535] = "BallaOrig01GMY";
    PedHash[PedHash["Ballas01GFY"] = 361513884] = "Ballas01GFY";
    PedHash[PedHash["BallaSout01GMY"] = 599294057] = "BallaSout01GMY";
    PedHash[PedHash["Barman01SMY"] = 3852538118] = "Barman01SMY";
    PedHash[PedHash["Bartender01SFY"] = 2014052797] = "Bartender01SFY";
    PedHash[PedHash["Baywatch01SFY"] = 1250841910] = "Baywatch01SFY";
    PedHash[PedHash["Baywatch01SMY"] = 189425762] = "Baywatch01SMY";
    PedHash[PedHash["Beach01AFM"] = 808859815] = "Beach01AFM";
    PedHash[PedHash["Beach01AFY"] = 3349113128] = "Beach01AFY";
    PedHash[PedHash["Beach01AMM"] = 1077785853] = "Beach01AMM";
    PedHash[PedHash["Beach01AMO"] = 2217202584] = "Beach01AMO";
    PedHash[PedHash["Beach01AMY"] = 3523131524] = "Beach01AMY";
    PedHash[PedHash["Beach02AMM"] = 2021631368] = "Beach02AMM";
    PedHash[PedHash["Beach02AMY"] = 600300561] = "Beach02AMY";
    PedHash[PedHash["Beach03AMY"] = 3886638041] = "Beach03AMY";
    PedHash[PedHash["Beachvesp01AMY"] = 2114544056] = "Beachvesp01AMY";
    PedHash[PedHash["Beachvesp02AMY"] = 3394697810] = "Beachvesp02AMY";
    PedHash[PedHash["Bevhills01AFM"] = 3188223741] = "Bevhills01AFM";
    PedHash[PedHash["Bevhills01AFY"] = 1146800212] = "Bevhills01AFY";
    PedHash[PedHash["Bevhills01AMM"] = 1423699487] = "Bevhills01AMM";
    PedHash[PedHash["Bevhills01AMY"] = 1982350912] = "Bevhills01AMY";
    PedHash[PedHash["Bevhills02AFM"] = 2688103263] = "Bevhills02AFM";
    PedHash[PedHash["Bevhills02AFY"] = 1546450936] = "Bevhills02AFY";
    PedHash[PedHash["Bevhills02AMM"] = 1068876755] = "Bevhills02AMM";
    PedHash[PedHash["Bevhills02AMY"] = 1720428295] = "Bevhills02AMY";
    PedHash[PedHash["Bevhills03AFY"] = 549978415] = "Bevhills03AFY";
    PedHash[PedHash["Bevhills04AFY"] = 920595805] = "Bevhills04AFY";
    PedHash[PedHash["Blackops01SMY"] = 3019107892] = "Blackops01SMY";
    PedHash[PedHash["Blackops02SMY"] = 2047212121] = "Blackops02SMY";
    PedHash[PedHash["Blackops03SMY"] = 1349953339] = "Blackops03SMY";
    PedHash[PedHash["Bodybuild01AFM"] = 1004114196] = "Bodybuild01AFM";
    PedHash[PedHash["Bouncer01SMM"] = 2681481517] = "Bouncer01SMM";
    PedHash[PedHash["Breakdance01AMY"] = 933205398] = "Breakdance01AMY";
    PedHash[PedHash["Busboy01SMY"] = 3640249671] = "Busboy01SMY";
    PedHash[PedHash["Busicas01AMY"] = 2597531625] = "Busicas01AMY";
    PedHash[PedHash["Business01AFY"] = 664399832] = "Business01AFY";
    PedHash[PedHash["Business01AMM"] = 2120901815] = "Business01AMM";
    PedHash[PedHash["Business01AMY"] = 3382649284] = "Business01AMY";
    PedHash[PedHash["Business02AFM"] = 532905404] = "Business02AFM";
    PedHash[PedHash["Business02AFY"] = 826475330] = "Business02AFY";
    PedHash[PedHash["Business02AMY"] = 3014915558] = "Business02AMY";
    PedHash[PedHash["Business03AFY"] = 2928082356] = "Business03AFY";
    PedHash[PedHash["Business03AMY"] = 2705543429] = "Business03AMY";
    PedHash[PedHash["Business04AFY"] = 3083210802] = "Business04AFY";
    PedHash[PedHash["Busker01SMO"] = 2912874939] = "Busker01SMO";
    PedHash[PedHash["CCrew01SMM"] = 3387290987] = "CCrew01SMM";
    PedHash[PedHash["Chef01SMY"] = 261586155] = "Chef01SMY";
    PedHash[PedHash["ChemSec01SMM"] = 788443093] = "ChemSec01SMM";
    PedHash[PedHash["ChemWork01GMM"] = 4128603535] = "ChemWork01GMM";
    PedHash[PedHash["ChiBoss01GMM"] = 3118269184] = "ChiBoss01GMM";
    PedHash[PedHash["ChiCold01GMM"] = 275618457] = "ChiCold01GMM";
    PedHash[PedHash["ChiGoon01GMM"] = 2119136831] = "ChiGoon01GMM";
    PedHash[PedHash["ChiGoon02GMM"] = 4285659174] = "ChiGoon02GMM";
    PedHash[PedHash["CiaSec01SMM"] = 1650288984] = "CiaSec01SMM";
    PedHash[PedHash["Clown01SMY"] = 71929310] = "Clown01SMY";
    PedHash[PedHash["Cntrybar01SMM"] = 436345731] = "Cntrybar01SMM";
    PedHash[PedHash["Construct01SMY"] = 3621428889] = "Construct01SMY";
    PedHash[PedHash["Construct02SMY"] = 3321821918] = "Construct02SMY";
    PedHash[PedHash["Cop01SFY"] = 368603149] = "Cop01SFY";
    PedHash[PedHash["Cop01SMY"] = 1581098148] = "Cop01SMY";
    PedHash[PedHash["Cyclist01AMY"] = 4257633223] = "Cyclist01AMY";
    PedHash[PedHash["Dealer01SMY"] = 3835149295] = "Dealer01SMY";
    PedHash[PedHash["Devinsec01SMY"] = 2606068340] = "Devinsec01SMY";
    PedHash[PedHash["Dhill01AMY"] = 4282288299] = "Dhill01AMY";
    PedHash[PedHash["Dockwork01SMM"] = 349680864] = "Dockwork01SMM";
    PedHash[PedHash["Dockwork01SMY"] = 2255894993] = "Dockwork01SMY";
    PedHash[PedHash["Doctor01SMM"] = 3564307372] = "Doctor01SMM";
    PedHash[PedHash["Doorman01SMY"] = 579932932] = "Doorman01SMY";
    PedHash[PedHash["Downtown01AFM"] = 1699403886] = "Downtown01AFM";
    PedHash[PedHash["Downtown01AMY"] = 766375082] = "Downtown01AMY";
    PedHash[PedHash["DwService01SMY"] = 1976765073] = "DwService01SMY";
    PedHash[PedHash["DwService02SMY"] = 4119890438] = "DwService02SMY";
    PedHash[PedHash["Eastsa01AFM"] = 2638072698] = "Eastsa01AFM";
    PedHash[PedHash["Eastsa01AFY"] = 4121954205] = "Eastsa01AFY";
    PedHash[PedHash["Eastsa01AMM"] = 4188468543] = "Eastsa01AMM";
    PedHash[PedHash["Eastsa01AMY"] = 2756120947] = "Eastsa01AMY";
    PedHash[PedHash["Eastsa02AFM"] = 1674107025] = "Eastsa02AFM";
    PedHash[PedHash["Eastsa02AFY"] = 70821038] = "Eastsa02AFY";
    PedHash[PedHash["Eastsa02AMM"] = 131961260] = "Eastsa02AMM";
    PedHash[PedHash["Eastsa02AMY"] = 377976310] = "Eastsa02AMY";
    PedHash[PedHash["Eastsa03AFY"] = 1371553700] = "Eastsa03AFY";
    PedHash[PedHash["Epsilon01AFY"] = 1755064960] = "Epsilon01AFY";
    PedHash[PedHash["Epsilon01AMY"] = 2010389054] = "Epsilon01AMY";
    PedHash[PedHash["Epsilon02AMY"] = 2860711835] = "Epsilon02AMY";
    PedHash[PedHash["Factory01SFY"] = 1777626099] = "Factory01SFY";
    PedHash[PedHash["Factory01SMY"] = 1097048408] = "Factory01SMY";
    PedHash[PedHash["Famca01GMY"] = 3896218551] = "Famca01GMY";
    PedHash[PedHash["Famdnf01GMY"] = 3681718840] = "Famdnf01GMY";
    PedHash[PedHash["Famfor01GMY"] = 2217749257] = "Famfor01GMY";
    PedHash[PedHash["Families01GFY"] = 1309468115] = "Families01GFY";
    PedHash[PedHash["Farmer01AMM"] = 2488675799] = "Farmer01AMM";
    PedHash[PedHash["FatBla01AFM"] = 4206136267] = "FatBla01AFM";
    PedHash[PedHash["FatCult01AFM"] = 3050275044] = "FatCult01AFM";
    PedHash[PedHash["Fatlatin01AMM"] = 1641152947] = "Fatlatin01AMM";
    PedHash[PedHash["FatWhite01AFM"] = 951767867] = "FatWhite01AFM";
    PedHash[PedHash["FemBarberSFM"] = 373000027] = "FemBarberSFM";
    PedHash[PedHash["FibOffice01SMM"] = 3988550982] = "FibOffice01SMM";
    PedHash[PedHash["FibOffice02SMM"] = 653289389] = "FibOffice02SMM";
    PedHash[PedHash["FibSec01SMM"] = 2072724299] = "FibSec01SMM";
    PedHash[PedHash["Fireman01SMY"] = 3065114024] = "Fireman01SMY";
    PedHash[PedHash["Fitness01AFY"] = 1165780219] = "Fitness01AFY";
    PedHash[PedHash["Fitness02AFY"] = 331645324] = "Fitness02AFY";
    PedHash[PedHash["Gaffer01SMM"] = 2841034142] = "Gaffer01SMM";
    PedHash[PedHash["GarbageSMY"] = 4000686095] = "GarbageSMY";
    PedHash[PedHash["Gardener01SMM"] = 1240094341] = "Gardener01SMM";
    PedHash[PedHash["Gay01AMY"] = 3519864886] = "Gay01AMY";
    PedHash[PedHash["Gay02AMY"] = 2775713665] = "Gay02AMY";
    PedHash[PedHash["Genfat01AMM"] = 115168927] = "Genfat01AMM";
    PedHash[PedHash["Genfat02AMM"] = 330231874] = "Genfat02AMM";
    PedHash[PedHash["Genhot01AFY"] = 793439294] = "Genhot01AFY";
    PedHash[PedHash["Genstreet01AFO"] = 1640504453] = "Genstreet01AFO";
    PedHash[PedHash["Genstreet01AMO"] = 2908022696] = "Genstreet01AMO";
    PedHash[PedHash["Genstreet01AMY"] = 2557996913] = "Genstreet01AMY";
    PedHash[PedHash["Genstreet02AMY"] = 891398354] = "Genstreet02AMY";
    PedHash[PedHash["GentransportSMM"] = 411102470] = "GentransportSMM";
    PedHash[PedHash["Golfer01AFY"] = 2111372120] = "Golfer01AFY";
    PedHash[PedHash["Golfer01AMM"] = 2850754114] = "Golfer01AMM";
    PedHash[PedHash["Golfer01AMY"] = 3609190705] = "Golfer01AMY";
    PedHash[PedHash["Grip01SMY"] = 815693290] = "Grip01SMY";
    PedHash[PedHash["Hairdress01SMM"] = 1099825042] = "Hairdress01SMM";
    PedHash[PedHash["Hasjew01AMM"] = 1809430156] = "Hasjew01AMM";
    PedHash[PedHash["Hasjew01AMY"] = 3782053633] = "Hasjew01AMY";
    PedHash[PedHash["Highsec01SMM"] = 4049719826] = "Highsec01SMM";
    PedHash[PedHash["Highsec02SMM"] = 691061163] = "Highsec02SMM";
    PedHash[PedHash["Hiker01AFY"] = 813893651] = "Hiker01AFY";
    PedHash[PedHash["Hiker01AMY"] = 1358380044] = "Hiker01AMY";
    PedHash[PedHash["Hillbilly01AMM"] = 1822107721] = "Hillbilly01AMM";
    PedHash[PedHash["Hillbilly02AMM"] = 2064532783] = "Hillbilly02AMM";
    PedHash[PedHash["Hippie01AFY"] = 343259175] = "Hippie01AFY";
    PedHash[PedHash["Hippy01AMY"] = 2097407511] = "Hippy01AMY";
    PedHash[PedHash["Hipster01AFY"] = 2185745201] = "Hipster01AFY";
    PedHash[PedHash["Hipster01AMY"] = 587703123] = "Hipster01AMY";
    PedHash[PedHash["Hipster02AFY"] = 2549481101] = "Hipster02AFY";
    PedHash[PedHash["Hipster02AMY"] = 349505262] = "Hipster02AMY";
    PedHash[PedHash["Hipster03AFY"] = 2780469782] = "Hipster03AFY";
    PedHash[PedHash["Hipster03AMY"] = 1312913862] = "Hipster03AMY";
    PedHash[PedHash["Hipster04AFY"] = 429425116] = "Hipster04AFY";
    PedHash[PedHash["Hooker01SFY"] = 42647445] = "Hooker01SFY";
    PedHash[PedHash["Hooker02SFY"] = 348382215] = "Hooker02SFY";
    PedHash[PedHash["Hooker03SFY"] = 51789996] = "Hooker03SFY";
    PedHash[PedHash["Hwaycop01SMY"] = 1939545845] = "Hwaycop01SMY";
    PedHash[PedHash["Indian01AFO"] = 3134700416] = "Indian01AFO";
    PedHash[PedHash["Indian01AFY"] = 153984193] = "Indian01AFY";
    PedHash[PedHash["Indian01AMM"] = 3721046572] = "Indian01AMM";
    PedHash[PedHash["Indian01AMY"] = 706935758] = "Indian01AMY";
    PedHash[PedHash["JanitorSMM"] = 2842417644] = "JanitorSMM";
    PedHash[PedHash["Jetski01AMY"] = 767028979] = "Jetski01AMY";
    PedHash[PedHash["Juggalo01AFY"] = 3675473203] = "Juggalo01AFY";
    PedHash[PedHash["Juggalo01AMY"] = 2445950508] = "Juggalo01AMY";
    PedHash[PedHash["KorBoss01GMM"] = 891945583] = "KorBoss01GMM";
    PedHash[PedHash["Korean01GMY"] = 611648169] = "Korean01GMY";
    PedHash[PedHash["Korean02GMY"] = 2414729609] = "Korean02GMY";
    PedHash[PedHash["KorLieut01GMY"] = 2093736314] = "KorLieut01GMY";
    PedHash[PedHash["Ktown01AFM"] = 1388848350] = "Ktown01AFM";
    PedHash[PedHash["Ktown01AFO"] = 1204772502] = "Ktown01AFO";
    PedHash[PedHash["Ktown01AMM"] = 3512565361] = "Ktown01AMM";
    PedHash[PedHash["Ktown01AMO"] = 355916122] = "Ktown01AMO";
    PedHash[PedHash["Ktown01AMY"] = 452351020] = "Ktown01AMY";
    PedHash[PedHash["Ktown02AFM"] = 1090617681] = "Ktown02AFM";
    PedHash[PedHash["Ktown02AMY"] = 696250687] = "Ktown02AMY";
    PedHash[PedHash["Lathandy01SMM"] = 2659242702] = "Lathandy01SMM";
    PedHash[PedHash["Latino01AMY"] = 321657486] = "Latino01AMY";
    PedHash[PedHash["Lifeinvad01SMM"] = 3724572669] = "Lifeinvad01SMM";
    PedHash[PedHash["LinecookSMM"] = 3684436375] = "LinecookSMM";
    PedHash[PedHash["Lost01GFY"] = 4250220510] = "Lost01GFY";
    PedHash[PedHash["Lost01GMY"] = 1330042375] = "Lost01GMY";
    PedHash[PedHash["Lost02GMY"] = 1032073858] = "Lost02GMY";
    PedHash[PedHash["Lost03GMY"] = 850468060] = "Lost03GMY";
    PedHash[PedHash["Lsmetro01SMM"] = 1985653476] = "Lsmetro01SMM";
    PedHash[PedHash["Maid01SFM"] = 3767780806] = "Maid01SFM";
    PedHash[PedHash["Malibu01AMM"] = 803106487] = "Malibu01AMM";
    PedHash[PedHash["Mariachi01SMM"] = 2124742566] = "Mariachi01SMM";
    PedHash[PedHash["Marine01SMM"] = 4074414829] = "Marine01SMM";
    PedHash[PedHash["Marine01SMY"] = 1702441027] = "Marine01SMY";
    PedHash[PedHash["Marine02SMM"] = 4028996995] = "Marine02SMM";
    PedHash[PedHash["Marine02SMY"] = 1490458366] = "Marine02SMY";
    PedHash[PedHash["Marine03SMY"] = 1925237458] = "Marine03SMY";
    PedHash[PedHash["Methhead01AMY"] = 1768677545] = "Methhead01AMY";
    PedHash[PedHash["MexBoss01GMM"] = 1466037421] = "MexBoss01GMM";
    PedHash[PedHash["MexBoss02GMM"] = 1226102803] = "MexBoss02GMM";
    PedHash[PedHash["MexCntry01AMM"] = 3716251309] = "MexCntry01AMM";
    PedHash[PedHash["MexGang01GMY"] = 3185399110] = "MexGang01GMY";
    PedHash[PedHash["MexGoon01GMY"] = 653210662] = "MexGoon01GMY";
    PedHash[PedHash["MexGoon02GMY"] = 832784782] = "MexGoon02GMY";
    PedHash[PedHash["MexGoon03GMY"] = 2521633500] = "MexGoon03GMY";
    PedHash[PedHash["MexLabor01AMM"] = 2992445106] = "MexLabor01AMM";
    PedHash[PedHash["MexThug01AMY"] = 810804565] = "MexThug01AMY";
    PedHash[PedHash["Migrant01SFY"] = 3579522037] = "Migrant01SFY";
    PedHash[PedHash["Migrant01SMM"] = 3977045190] = "Migrant01SMM";
    PedHash[PedHash["MimeSMY"] = 1021093698] = "MimeSMY";
    PedHash[PedHash["Motox01AMY"] = 1694362237] = "Motox01AMY";
    PedHash[PedHash["Motox02AMY"] = 2007797722] = "Motox02AMY";
    PedHash[PedHash["MovAlien01"] = 1684083350] = "MovAlien01";
    PedHash[PedHash["MovPrem01SFY"] = 587253782] = "MovPrem01SFY";
    PedHash[PedHash["Movprem01SMM"] = 3630066984] = "Movprem01SMM";
    PedHash[PedHash["Movspace01SMM"] = 3887273010] = "Movspace01SMM";
    PedHash[PedHash["Musclbeac01AMY"] = 1264920838] = "Musclbeac01AMY";
    PedHash[PedHash["Musclbeac02AMY"] = 3374523516] = "Musclbeac02AMY";
    PedHash[PedHash["OgBoss01AMM"] = 1746653202] = "OgBoss01AMM";
    PedHash[PedHash["Paparazzi01AMM"] = 3972697109] = "Paparazzi01AMM";
    PedHash[PedHash["Paramedic01SMM"] = 3008586398] = "Paramedic01SMM";
    PedHash[PedHash["PestCont01SMY"] = 1209091352] = "PestCont01SMY";
    PedHash[PedHash["Pilot01SMM"] = 3881519900] = "Pilot01SMM";
    PedHash[PedHash["Pilot01SMY"] = 2872052743] = "Pilot01SMY";
    PedHash[PedHash["Pilot02SMM"] = 4131252449] = "Pilot02SMM";
    PedHash[PedHash["PoloGoon01GMY"] = 1329576454] = "PoloGoon01GMY";
    PedHash[PedHash["PoloGoon02GMY"] = 2733138262] = "PoloGoon02GMY";
    PedHash[PedHash["Polynesian01AMM"] = 2849617566] = "Polynesian01AMM";
    PedHash[PedHash["Polynesian01AMY"] = 2206530719] = "Polynesian01AMY";
    PedHash[PedHash["Postal01SMM"] = 1650036788] = "Postal01SMM";
    PedHash[PedHash["Postal02SMM"] = 1936142927] = "Postal02SMM";
    PedHash[PedHash["Prisguard01SMM"] = 1456041926] = "Prisguard01SMM";
    PedHash[PedHash["PrisMuscl01SMY"] = 1596003233] = "PrisMuscl01SMY";
    PedHash[PedHash["Prisoner01SMY"] = 2981862233] = "Prisoner01SMY";
    PedHash[PedHash["PrologueHostage01AFM"] = 379310561] = "PrologueHostage01AFM";
    PedHash[PedHash["PrologueHostage01AMM"] = 2534589327] = "PrologueHostage01AMM";
    PedHash[PedHash["Ranger01SFY"] = 2680682039] = "Ranger01SFY";
    PedHash[PedHash["Ranger01SMY"] = 4017173934] = "Ranger01SMY";
    PedHash[PedHash["Roadcyc01AMY"] = 4116817094] = "Roadcyc01AMY";
    PedHash[PedHash["Robber01SMY"] = 3227390873] = "Robber01SMY";
    PedHash[PedHash["RsRanger01AMO"] = 1011059922] = "RsRanger01AMO";
    PedHash[PedHash["Runner01AFY"] = 3343476521] = "Runner01AFY";
    PedHash[PedHash["Runner01AMY"] = 623927022] = "Runner01AMY";
    PedHash[PedHash["Runner02AMY"] = 2218630415] = "Runner02AMY";
    PedHash[PedHash["Rurmeth01AFY"] = 1064866854] = "Rurmeth01AFY";
    PedHash[PedHash["Rurmeth01AMM"] = 1001210244] = "Rurmeth01AMM";
    PedHash[PedHash["Salton01AFM"] = 3725461865] = "Salton01AFM";
    PedHash[PedHash["Salton01AFO"] = 3439295882] = "Salton01AFO";
    PedHash[PedHash["Salton01AMM"] = 1328415626] = "Salton01AMM";
    PedHash[PedHash["Salton01AMO"] = 539004493] = "Salton01AMO";
    PedHash[PedHash["Salton01AMY"] = 3613420592] = "Salton01AMY";
    PedHash[PedHash["Salton02AMM"] = 1626646295] = "Salton02AMM";
    PedHash[PedHash["Salton03AMM"] = 2995538501] = "Salton03AMM";
    PedHash[PedHash["Salton04AMM"] = 2521108919] = "Salton04AMM";
    PedHash[PedHash["SalvaBoss01GMY"] = 2422005962] = "SalvaBoss01GMY";
    PedHash[PedHash["SalvaGoon01GMY"] = 663522487] = "SalvaGoon01GMY";
    PedHash[PedHash["SalvaGoon02GMY"] = 846439045] = "SalvaGoon02GMY";
    PedHash[PedHash["SalvaGoon03GMY"] = 62440720] = "SalvaGoon03GMY";
    PedHash[PedHash["SbikeAMO"] = 1794381917] = "SbikeAMO";
    PedHash[PedHash["Scdressy01AFY"] = 3680420864] = "Scdressy01AFY";
    PedHash[PedHash["Scientist01SMM"] = 1092080539] = "Scientist01SMM";
    PedHash[PedHash["Scrubs01SFY"] = 2874755766] = "Scrubs01SFY";
    PedHash[PedHash["Security01SMM"] = 3613962792] = "Security01SMM";
    PedHash[PedHash["Sheriff01SFY"] = 1096929346] = "Sheriff01SFY";
    PedHash[PedHash["Sheriff01SMY"] = 2974087609] = "Sheriff01SMY";
    PedHash[PedHash["ShopHighSFM"] = 2923947184] = "ShopHighSFM";
    PedHash[PedHash["ShopLowSFY"] = 2842568196] = "ShopLowSFY";
    PedHash[PedHash["ShopMaskSMY"] = 1846684678] = "ShopMaskSMY";
    PedHash[PedHash["ShopMidSFY"] = 1055701597] = "ShopMidSFY";
    PedHash[PedHash["Skater01AFY"] = 1767892582] = "Skater01AFY";
    PedHash[PedHash["Skater01AMM"] = 3654768780] = "Skater01AMM";
    PedHash[PedHash["Skater01AMY"] = 3250873975] = "Skater01AMY";
    PedHash[PedHash["Skater02AMY"] = 2952446692] = "Skater02AMY";
    PedHash[PedHash["Skidrow01AFM"] = 2962707003] = "Skidrow01AFM";
    PedHash[PedHash["Skidrow01AMM"] = 32417469] = "Skidrow01AMM";
    PedHash[PedHash["Snowcop01SMM"] = 451459928] = "Snowcop01SMM";
    PedHash[PedHash["Socenlat01AMM"] = 193817059] = "Socenlat01AMM";
    PedHash[PedHash["Soucent01AFM"] = 1951946145] = "Soucent01AFM";
    PedHash[PedHash["Soucent01AFO"] = 1039800368] = "Soucent01AFO";
    PedHash[PedHash["Soucent01AFY"] = 744758650] = "Soucent01AFY";
    PedHash[PedHash["Soucent01AMM"] = 1750583735] = "Soucent01AMM";
    PedHash[PedHash["Soucent01AMO"] = 718836251] = "Soucent01AMO";
    PedHash[PedHash["Soucent01AMY"] = 3877027275] = "Soucent01AMY";
    PedHash[PedHash["Soucent02AFM"] = 4079145784] = "Soucent02AFM";
    PedHash[PedHash["Soucent02AFO"] = 2775443222] = "Soucent02AFO";
    PedHash[PedHash["Soucent02AFY"] = 1519319503] = "Soucent02AFY";
    PedHash[PedHash["Soucent02AMM"] = 2674735073] = "Soucent02AMM";
    PedHash[PedHash["Soucent02AMO"] = 1082572151] = "Soucent02AMO";
    PedHash[PedHash["Soucent02AMY"] = 2896414922] = "Soucent02AMY";
    PedHash[PedHash["Soucent03AFY"] = 2276611093] = "Soucent03AFY";
    PedHash[PedHash["Soucent03AMM"] = 2346291386] = "Soucent03AMM";
    PedHash[PedHash["Soucent03AMO"] = 238213328] = "Soucent03AMO";
    PedHash[PedHash["Soucent03AMY"] = 3287349092] = "Soucent03AMY";
    PedHash[PedHash["Soucent04AMM"] = 3271294718] = "Soucent04AMM";
    PedHash[PedHash["Soucent04AMY"] = 2318861297] = "Soucent04AMY";
    PedHash[PedHash["Soucentmc01AFM"] = 3454621138] = "Soucentmc01AFM";
    PedHash[PedHash["Staggrm01AMO"] = 2442448387] = "Staggrm01AMO";
    PedHash[PedHash["Stbla01AMY"] = 3482496489] = "Stbla01AMY";
    PedHash[PedHash["Stbla02AMY"] = 2563194959] = "Stbla02AMY";
    PedHash[PedHash["Stlat01AMY"] = 2255803900] = "Stlat01AMY";
    PedHash[PedHash["Stlat02AMM"] = 3265820418] = "Stlat02AMM";
    PedHash[PedHash["Stripper01SFY"] = 1381498905] = "Stripper01SFY";
    PedHash[PedHash["Stripper02SFY"] = 1846523796] = "Stripper02SFY";
    PedHash[PedHash["StripperLiteSFY"] = 1544875514] = "StripperLiteSFY";
    PedHash[PedHash["Strperf01SMM"] = 2035992488] = "Strperf01SMM";
    PedHash[PedHash["Strpreach01SMM"] = 469792763] = "Strpreach01SMM";
    PedHash[PedHash["StrPunk01GMY"] = 4246489531] = "StrPunk01GMY";
    PedHash[PedHash["StrPunk02GMY"] = 228715206] = "StrPunk02GMY";
    PedHash[PedHash["Strvend01SMM"] = 3465614249] = "Strvend01SMM";
    PedHash[PedHash["Strvend01SMY"] = 2457805603] = "Strvend01SMY";
    PedHash[PedHash["Stwhi01AMY"] = 605602864] = "Stwhi01AMY";
    PedHash[PedHash["Stwhi02AMY"] = 919005580] = "Stwhi02AMY";
    PedHash[PedHash["Sunbathe01AMY"] = 3072929548] = "Sunbathe01AMY";
    PedHash[PedHash["Surfer01AMY"] = 3938633710] = "Surfer01AMY";
    PedHash[PedHash["Swat01SMY"] = 2374966032] = "Swat01SMY";
    PedHash[PedHash["Sweatshop01SFM"] = 824925120] = "Sweatshop01SFM";
    PedHash[PedHash["Sweatshop01SFY"] = 2231547570] = "Sweatshop01SFY";
    PedHash[PedHash["Tattoo01AMO"] = 2494442380] = "Tattoo01AMO";
    PedHash[PedHash["Tennis01AFY"] = 1426880966] = "Tennis01AFY";
    PedHash[PedHash["Tennis01AMM"] = 1416254276] = "Tennis01AMM";
    PedHash[PedHash["Topless01AFY"] = 2633130371] = "Topless01AFY";
    PedHash[PedHash["Tourist01AFM"] = 1347814329] = "Tourist01AFM";
    PedHash[PedHash["Tourist01AFY"] = 1446741360] = "Tourist01AFY";
    PedHash[PedHash["Tourist01AMM"] = 3365863812] = "Tourist01AMM";
    PedHash[PedHash["Tourist02AFY"] = 2435054400] = "Tourist02AFY";
    PedHash[PedHash["Tramp01AFM"] = 1224306523] = "Tramp01AFM";
    PedHash[PedHash["Tramp01AMM"] = 516505552] = "Tramp01AMM";
    PedHash[PedHash["Tramp01AMO"] = 390939205] = "Tramp01AMO";
    PedHash[PedHash["TrampBeac01AFM"] = 2359345766] = "TrampBeac01AFM";
    PedHash[PedHash["TrampBeac01AMM"] = 1404403376] = "TrampBeac01AMM";
    PedHash[PedHash["Tranvest01AMM"] = 3773208948] = "Tranvest01AMM";
    PedHash[PedHash["Tranvest02AMM"] = 4144940484] = "Tranvest02AMM";
    PedHash[PedHash["Trucker01SMM"] = 1498487404] = "Trucker01SMM";
    PedHash[PedHash["Ups01SMM"] = 2680389410] = "Ups01SMM";
    PedHash[PedHash["Ups02SMM"] = 3502104854] = "Ups02SMM";
    PedHash[PedHash["Uscg01SMY"] = 3389018345] = "Uscg01SMY";
    PedHash[PedHash["Vagos01GFY"] = 1520708641] = "Vagos01GFY";
    PedHash[PedHash["Valet01SMY"] = 999748158] = "Valet01SMY";
    PedHash[PedHash["Vindouche01AMY"] = 3247667175] = "Vindouche01AMY";
    PedHash[PedHash["Vinewood01AFY"] = 435429221] = "Vinewood01AFY";
    PedHash[PedHash["Vinewood01AMY"] = 1264851357] = "Vinewood01AMY";
    PedHash[PedHash["Vinewood02AFY"] = 3669401835] = "Vinewood02AFY";
    PedHash[PedHash["Vinewood02AMY"] = 1561705728] = "Vinewood02AMY";
    PedHash[PedHash["Vinewood03AFY"] = 933092024] = "Vinewood03AFY";
    PedHash[PedHash["Vinewood03AMY"] = 534725268] = "Vinewood03AMY";
    PedHash[PedHash["Vinewood04AFY"] = 4209271110] = "Vinewood04AFY";
    PedHash[PedHash["Vinewood04AMY"] = 835315305] = "Vinewood04AMY";
    PedHash[PedHash["Waiter01SMY"] = 2907468364] = "Waiter01SMY";
    PedHash[PedHash["WinClean01SMY"] = 1426951581] = "WinClean01SMY";
    PedHash[PedHash["Xmech01SMY"] = 1142162924] = "Xmech01SMY";
    PedHash[PedHash["Xmech02SMY"] = 3189832196] = "Xmech02SMY";
    PedHash[PedHash["Xmech02SMYMP"] = 1755203590] = "Xmech02SMYMP";
    PedHash[PedHash["Yoga01AFY"] = 3290105390] = "Yoga01AFY";
    PedHash[PedHash["Yoga01AMY"] = 2869588309] = "Yoga01AMY";
})(PedHash = exports.PedHash || (exports.PedHash = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/hashes/VehicleHash.js":
/*!**********************************************************!*\
  !*** ../node_modules/fivem-js/lib/hashes/VehicleHash.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleHash = void 0;
var VehicleHash;
(function (VehicleHash) {
    VehicleHash[VehicleHash["Adder"] = 3078201489] = "Adder";
    VehicleHash[VehicleHash["Airbus"] = 1283517198] = "Airbus";
    VehicleHash[VehicleHash["Airtug"] = 1560980623] = "Airtug";
    VehicleHash[VehicleHash["Akuma"] = 1672195559] = "Akuma";
    VehicleHash[VehicleHash["Alpha"] = 767087018] = "Alpha";
    VehicleHash[VehicleHash["Ambulance"] = 1171614426] = "Ambulance";
    VehicleHash[VehicleHash["Annihilator"] = 837858166] = "Annihilator";
    VehicleHash[VehicleHash["Apc"] = 562680400] = "Apc";
    VehicleHash[VehicleHash["Ardent"] = 159274291] = "Ardent";
    VehicleHash[VehicleHash["ArmyTanker"] = 3087536137] = "ArmyTanker";
    VehicleHash[VehicleHash["ArmyTrailer"] = 2818520053] = "ArmyTrailer";
    VehicleHash[VehicleHash["ArmyTrailer2"] = 2657817814] = "ArmyTrailer2";
    VehicleHash[VehicleHash["Asea"] = 2485144969] = "Asea";
    VehicleHash[VehicleHash["Asea2"] = 2487343317] = "Asea2";
    VehicleHash[VehicleHash["Asterope"] = 2391954683] = "Asterope";
    VehicleHash[VehicleHash["Avarus"] = 2179174271] = "Avarus";
    VehicleHash[VehicleHash["Bagger"] = 2154536131] = "Bagger";
    VehicleHash[VehicleHash["BaleTrailer"] = 3895125590] = "BaleTrailer";
    VehicleHash[VehicleHash["Baller"] = 3486135912] = "Baller";
    VehicleHash[VehicleHash["Baller2"] = 142944341] = "Baller2";
    VehicleHash[VehicleHash["Baller3"] = 1878062887] = "Baller3";
    VehicleHash[VehicleHash["Baller4"] = 634118882] = "Baller4";
    VehicleHash[VehicleHash["Baller5"] = 470404958] = "Baller5";
    VehicleHash[VehicleHash["Baller6"] = 666166960] = "Baller6";
    VehicleHash[VehicleHash["Banshee"] = 3253274834] = "Banshee";
    VehicleHash[VehicleHash["Banshee2"] = 633712403] = "Banshee2";
    VehicleHash[VehicleHash["Barracks"] = 3471458123] = "Barracks";
    VehicleHash[VehicleHash["Barracks2"] = 1074326203] = "Barracks2";
    VehicleHash[VehicleHash["Barracks3"] = 630371791] = "Barracks3";
    VehicleHash[VehicleHash["Bati"] = 4180675781] = "Bati";
    VehicleHash[VehicleHash["Bati2"] = 3403504941] = "Bati2";
    VehicleHash[VehicleHash["Benson"] = 2053223216] = "Benson";
    VehicleHash[VehicleHash["Besra"] = 1824333165] = "Besra";
    VehicleHash[VehicleHash["BestiaGTS"] = 1274868363] = "BestiaGTS";
    VehicleHash[VehicleHash["BF400"] = 86520421] = "BF400";
    VehicleHash[VehicleHash["BfInjection"] = 1126868326] = "BfInjection";
    VehicleHash[VehicleHash["Biff"] = 850991848] = "Biff";
    VehicleHash[VehicleHash["Bifta"] = 3945366167] = "Bifta";
    VehicleHash[VehicleHash["Bison"] = 4278019151] = "Bison";
    VehicleHash[VehicleHash["Bison2"] = 2072156101] = "Bison2";
    VehicleHash[VehicleHash["Bison3"] = 1739845664] = "Bison3";
    VehicleHash[VehicleHash["BJXL"] = 850565707] = "BJXL";
    VehicleHash[VehicleHash["Blade"] = 3089165662] = "Blade";
    VehicleHash[VehicleHash["Blazer"] = 2166734073] = "Blazer";
    VehicleHash[VehicleHash["Blazer2"] = 4246935337] = "Blazer2";
    VehicleHash[VehicleHash["Blazer3"] = 3025077634] = "Blazer3";
    VehicleHash[VehicleHash["Blazer4"] = 3854198872] = "Blazer4";
    VehicleHash[VehicleHash["Blazer5"] = 2704629607] = "Blazer5";
    VehicleHash[VehicleHash["Blimp"] = 4143991942] = "Blimp";
    VehicleHash[VehicleHash["Blimp2"] = 3681241380] = "Blimp2";
    VehicleHash[VehicleHash["Blista"] = 3950024287] = "Blista";
    VehicleHash[VehicleHash["Blista2"] = 1039032026] = "Blista2";
    VehicleHash[VehicleHash["Blista3"] = 3703315515] = "Blista3";
    VehicleHash[VehicleHash["Bmx"] = 1131912276] = "Bmx";
    VehicleHash[VehicleHash["BoatTrailer"] = 524108981] = "BoatTrailer";
    VehicleHash[VehicleHash["BobcatXL"] = 1069929536] = "BobcatXL";
    VehicleHash[VehicleHash["Bodhi2"] = 2859047862] = "Bodhi2";
    VehicleHash[VehicleHash["Boxville"] = 2307837162] = "Boxville";
    VehicleHash[VehicleHash["Boxville2"] = 4061868990] = "Boxville2";
    VehicleHash[VehicleHash["Boxville3"] = 121658888] = "Boxville3";
    VehicleHash[VehicleHash["Boxville4"] = 444171386] = "Boxville4";
    VehicleHash[VehicleHash["Boxville5"] = 682434785] = "Boxville5";
    VehicleHash[VehicleHash["Brawler"] = 2815302597] = "Brawler";
    VehicleHash[VehicleHash["Brickade"] = 3989239879] = "Brickade";
    VehicleHash[VehicleHash["Brioso"] = 1549126457] = "Brioso";
    VehicleHash[VehicleHash["BType"] = 117401876] = "BType";
    VehicleHash[VehicleHash["BType2"] = 3463132580] = "BType2";
    VehicleHash[VehicleHash["BType3"] = 3692679425] = "BType3";
    VehicleHash[VehicleHash["Buccaneer"] = 3612755468] = "Buccaneer";
    VehicleHash[VehicleHash["Buccaneer2"] = 3281516360] = "Buccaneer2";
    VehicleHash[VehicleHash["Buffalo"] = 3990165190] = "Buffalo";
    VehicleHash[VehicleHash["Buffalo2"] = 736902334] = "Buffalo2";
    VehicleHash[VehicleHash["Buffalo3"] = 237764926] = "Buffalo3";
    VehicleHash[VehicleHash["Bulldozer"] = 1886712733] = "Bulldozer";
    VehicleHash[VehicleHash["Bullet"] = 2598821281] = "Bullet";
    VehicleHash[VehicleHash["Burrito"] = 2948279460] = "Burrito";
    VehicleHash[VehicleHash["Burrito2"] = 3387490166] = "Burrito2";
    VehicleHash[VehicleHash["Burrito3"] = 2551651283] = "Burrito3";
    VehicleHash[VehicleHash["Burrito4"] = 893081117] = "Burrito4";
    VehicleHash[VehicleHash["Burrito5"] = 1132262048] = "Burrito5";
    VehicleHash[VehicleHash["Bus"] = 3581397346] = "Bus";
    VehicleHash[VehicleHash["Buzzard"] = 788747387] = "Buzzard";
    VehicleHash[VehicleHash["Buzzard2"] = 745926877] = "Buzzard2";
    VehicleHash[VehicleHash["CableCar"] = 3334677549] = "CableCar";
    VehicleHash[VehicleHash["Caddy"] = 1147287684] = "Caddy";
    VehicleHash[VehicleHash["Caddy2"] = 3757070668] = "Caddy2";
    VehicleHash[VehicleHash["Caddy3"] = 3525819835] = "Caddy3";
    VehicleHash[VehicleHash["Camper"] = 1876516712] = "Camper";
    VehicleHash[VehicleHash["Carbonizzare"] = 2072687711] = "Carbonizzare";
    VehicleHash[VehicleHash["CarbonRS"] = 11251904] = "CarbonRS";
    VehicleHash[VehicleHash["Cargobob"] = 4244420235] = "Cargobob";
    VehicleHash[VehicleHash["Cargobob2"] = 1621617168] = "Cargobob2";
    VehicleHash[VehicleHash["Cargobob3"] = 1394036463] = "Cargobob3";
    VehicleHash[VehicleHash["Cargobob4"] = 2025593404] = "Cargobob4";
    VehicleHash[VehicleHash["CargoPlane"] = 368211810] = "CargoPlane";
    VehicleHash[VehicleHash["Casco"] = 941800958] = "Casco";
    VehicleHash[VehicleHash["Cavalcade"] = 2006918058] = "Cavalcade";
    VehicleHash[VehicleHash["Cavalcade2"] = 3505073125] = "Cavalcade2";
    VehicleHash[VehicleHash["Cheetah"] = 2983812512] = "Cheetah";
    VehicleHash[VehicleHash["Cheetah2"] = 223240013] = "Cheetah2";
    VehicleHash[VehicleHash["Chimera"] = 6774487] = "Chimera";
    VehicleHash[VehicleHash["Chino"] = 349605904] = "Chino";
    VehicleHash[VehicleHash["Chino2"] = 2933279331] = "Chino2";
    VehicleHash[VehicleHash["Cliffhanger"] = 390201602] = "Cliffhanger";
    VehicleHash[VehicleHash["Coach"] = 2222034228] = "Coach";
    VehicleHash[VehicleHash["Cog55"] = 906642318] = "Cog55";
    VehicleHash[VehicleHash["Cog552"] = 704435172] = "Cog552";
    VehicleHash[VehicleHash["CogCabrio"] = 330661258] = "CogCabrio";
    VehicleHash[VehicleHash["Cognoscenti"] = 2264796000] = "Cognoscenti";
    VehicleHash[VehicleHash["Cognoscenti2"] = 3690124666] = "Cognoscenti2";
    VehicleHash[VehicleHash["Comet2"] = 3249425686] = "Comet2";
    VehicleHash[VehicleHash["Comet3"] = 2272483501] = "Comet3";
    VehicleHash[VehicleHash["Contender"] = 683047626] = "Contender";
    VehicleHash[VehicleHash["Coquette"] = 108773431] = "Coquette";
    VehicleHash[VehicleHash["Coquette2"] = 1011753235] = "Coquette2";
    VehicleHash[VehicleHash["Coquette3"] = 784565758] = "Coquette3";
    VehicleHash[VehicleHash["Cruiser"] = 448402357] = "Cruiser";
    VehicleHash[VehicleHash["Crusader"] = 321739290] = "Crusader";
    VehicleHash[VehicleHash["Cuban800"] = 3650256867] = "Cuban800";
    VehicleHash[VehicleHash["Cutter"] = 3288047904] = "Cutter";
    VehicleHash[VehicleHash["Daemon"] = 2006142190] = "Daemon";
    VehicleHash[VehicleHash["Daemon2"] = 2890830793] = "Daemon2";
    VehicleHash[VehicleHash["Defiler"] = 822018448] = "Defiler";
    VehicleHash[VehicleHash["Diablous"] = 4055125828] = "Diablous";
    VehicleHash[VehicleHash["Diablous2"] = 1790834270] = "Diablous2";
    VehicleHash[VehicleHash["Dilettante"] = 3164157193] = "Dilettante";
    VehicleHash[VehicleHash["Dilettante2"] = 1682114128] = "Dilettante2";
    VehicleHash[VehicleHash["Dinghy"] = 1033245328] = "Dinghy";
    VehicleHash[VehicleHash["Dinghy2"] = 276773164] = "Dinghy2";
    VehicleHash[VehicleHash["Dinghy3"] = 509498602] = "Dinghy3";
    VehicleHash[VehicleHash["Dinghy4"] = 867467158] = "Dinghy4";
    VehicleHash[VehicleHash["DLoader"] = 1770332643] = "DLoader";
    VehicleHash[VehicleHash["DockTrailer"] = 2154757102] = "DockTrailer";
    VehicleHash[VehicleHash["Docktug"] = 3410276810] = "Docktug";
    VehicleHash[VehicleHash["Dodo"] = 3393804037] = "Dodo";
    VehicleHash[VehicleHash["Dominator"] = 80636076] = "Dominator";
    VehicleHash[VehicleHash["Dominator2"] = 3379262425] = "Dominator2";
    VehicleHash[VehicleHash["Double"] = 2623969160] = "Double";
    VehicleHash[VehicleHash["Dubsta"] = 1177543287] = "Dubsta";
    VehicleHash[VehicleHash["Dubsta2"] = 3900892662] = "Dubsta2";
    VehicleHash[VehicleHash["Dubsta3"] = 3057713523] = "Dubsta3";
    VehicleHash[VehicleHash["Dukes"] = 723973206] = "Dukes";
    VehicleHash[VehicleHash["Dukes2"] = 3968823444] = "Dukes2";
    VehicleHash[VehicleHash["Dump"] = 2164484578] = "Dump";
    VehicleHash[VehicleHash["Dune"] = 2633113103] = "Dune";
    VehicleHash[VehicleHash["Dune2"] = 534258863] = "Dune2";
    VehicleHash[VehicleHash["Dune3"] = 1897744184] = "Dune3";
    VehicleHash[VehicleHash["Dune4"] = 3467805257] = "Dune4";
    VehicleHash[VehicleHash["Dune5"] = 3982671785] = "Dune5";
    VehicleHash[VehicleHash["Duster"] = 970356638] = "Duster";
    VehicleHash[VehicleHash["Elegy"] = 196747873] = "Elegy";
    VehicleHash[VehicleHash["Elegy2"] = 3728579874] = "Elegy2";
    VehicleHash[VehicleHash["Emperor"] = 3609690755] = "Emperor";
    VehicleHash[VehicleHash["Emperor2"] = 2411965148] = "Emperor2";
    VehicleHash[VehicleHash["Emperor3"] = 3053254478] = "Emperor3";
    VehicleHash[VehicleHash["Enduro"] = 1753414259] = "Enduro";
    VehicleHash[VehicleHash["EntityXF"] = 3003014393] = "EntityXF";
    VehicleHash[VehicleHash["Esskey"] = 2035069708] = "Esskey";
    VehicleHash[VehicleHash["Exemplar"] = 4289813342] = "Exemplar";
    VehicleHash[VehicleHash["F620"] = 3703357000] = "F620";
    VehicleHash[VehicleHash["Faction"] = 2175389151] = "Faction";
    VehicleHash[VehicleHash["Faction2"] = 2504420315] = "Faction2";
    VehicleHash[VehicleHash["Faction3"] = 2255212070] = "Faction3";
    VehicleHash[VehicleHash["Faggio"] = 2452219115] = "Faggio";
    VehicleHash[VehicleHash["Faggio2"] = 55628203] = "Faggio2";
    VehicleHash[VehicleHash["Faggio3"] = 3005788552] = "Faggio3";
    VehicleHash[VehicleHash["FBI"] = 1127131465] = "FBI";
    VehicleHash[VehicleHash["FBI2"] = 2647026068] = "FBI2";
    VehicleHash[VehicleHash["FCR"] = 627535535] = "FCR";
    VehicleHash[VehicleHash["FCR2"] = 3537231886] = "FCR2";
    VehicleHash[VehicleHash["Felon"] = 3903372712] = "Felon";
    VehicleHash[VehicleHash["Felon2"] = 4205676014] = "Felon2";
    VehicleHash[VehicleHash["Feltzer2"] = 2299640309] = "Feltzer2";
    VehicleHash[VehicleHash["Feltzer3"] = 2728226064] = "Feltzer3";
    VehicleHash[VehicleHash["FireTruk"] = 1938952078] = "FireTruk";
    VehicleHash[VehicleHash["Fixter"] = 3458454463] = "Fixter";
    VehicleHash[VehicleHash["Flatbed"] = 1353720154] = "Flatbed";
    VehicleHash[VehicleHash["Forklift"] = 1491375716] = "Forklift";
    VehicleHash[VehicleHash["FMJ"] = 1426219628] = "FMJ";
    VehicleHash[VehicleHash["FQ2"] = 3157435195] = "FQ2";
    VehicleHash[VehicleHash["Freight"] = 1030400667] = "Freight";
    VehicleHash[VehicleHash["FreightCar"] = 184361638] = "FreightCar";
    VehicleHash[VehicleHash["FreightCont1"] = 920453016] = "FreightCont1";
    VehicleHash[VehicleHash["FreightCont2"] = 240201337] = "FreightCont2";
    VehicleHash[VehicleHash["FreightGrain"] = 642617954] = "FreightGrain";
    VehicleHash[VehicleHash["FreightTrailer"] = 3517691494] = "FreightTrailer";
    VehicleHash[VehicleHash["Frogger"] = 744705981] = "Frogger";
    VehicleHash[VehicleHash["Frogger2"] = 1949211328] = "Frogger2";
    VehicleHash[VehicleHash["Fugitive"] = 1909141499] = "Fugitive";
    VehicleHash[VehicleHash["Furoregt"] = 3205927392] = "Furoregt";
    VehicleHash[VehicleHash["Fusilade"] = 499169875] = "Fusilade";
    VehicleHash[VehicleHash["Futo"] = 2016857647] = "Futo";
    VehicleHash[VehicleHash["Gargoyle"] = 741090084] = "Gargoyle";
    VehicleHash[VehicleHash["Gauntlet"] = 2494797253] = "Gauntlet";
    VehicleHash[VehicleHash["Gauntlet2"] = 349315417] = "Gauntlet2";
    VehicleHash[VehicleHash["GBurrito"] = 2549763894] = "GBurrito";
    VehicleHash[VehicleHash["GBurrito2"] = 296357396] = "GBurrito2";
    VehicleHash[VehicleHash["Glendale"] = 75131841] = "Glendale";
    VehicleHash[VehicleHash["GP1"] = 1234311532] = "GP1";
    VehicleHash[VehicleHash["GrainTrailer"] = 1019737494] = "GrainTrailer";
    VehicleHash[VehicleHash["Granger"] = 2519238556] = "Granger";
    VehicleHash[VehicleHash["Gresley"] = 2751205197] = "Gresley";
    VehicleHash[VehicleHash["Guardian"] = 2186977100] = "Guardian";
    VehicleHash[VehicleHash["Habanero"] = 884422927] = "Habanero";
    VehicleHash[VehicleHash["Hakuchou"] = 1265391242] = "Hakuchou";
    VehicleHash[VehicleHash["Hakuchou2"] = 4039289119] = "Hakuchou2";
    VehicleHash[VehicleHash["HalfTrack"] = 4262731174] = "HalfTrack";
    VehicleHash[VehicleHash["Handler"] = 444583674] = "Handler";
    VehicleHash[VehicleHash["Hauler"] = 1518533038] = "Hauler";
    VehicleHash[VehicleHash["Hauler2"] = 387748548] = "Hauler2";
    VehicleHash[VehicleHash["Hexer"] = 301427732] = "Hexer";
    VehicleHash[VehicleHash["Hotknife"] = 37348240] = "Hotknife";
    VehicleHash[VehicleHash["Huntley"] = 486987393] = "Huntley";
    VehicleHash[VehicleHash["Hydra"] = 970385471] = "Hydra";
    VehicleHash[VehicleHash["Infernus"] = 418536135] = "Infernus";
    VehicleHash[VehicleHash["Infernus2"] = 2889029532] = "Infernus2";
    VehicleHash[VehicleHash["Ingot"] = 3005245074] = "Ingot";
    VehicleHash[VehicleHash["Innovation"] = 4135840458] = "Innovation";
    VehicleHash[VehicleHash["Insurgent"] = 2434067162] = "Insurgent";
    VehicleHash[VehicleHash["Insurgent2"] = 2071877360] = "Insurgent2";
    VehicleHash[VehicleHash["Insurgent3"] = 2370534026] = "Insurgent3";
    VehicleHash[VehicleHash["Intruder"] = 886934177] = "Intruder";
    VehicleHash[VehicleHash["Issi2"] = 3117103977] = "Issi2";
    VehicleHash[VehicleHash["ItaliGTB"] = 2246633323] = "ItaliGTB";
    VehicleHash[VehicleHash["ItaliGTB2"] = 3812247419] = "ItaliGTB2";
    VehicleHash[VehicleHash["Jackal"] = 3670438162] = "Jackal";
    VehicleHash[VehicleHash["JB700"] = 1051415893] = "JB700";
    VehicleHash[VehicleHash["Jester"] = 2997294755] = "Jester";
    VehicleHash[VehicleHash["Jester2"] = 3188613414] = "Jester2";
    VehicleHash[VehicleHash["Jet"] = 1058115860] = "Jet";
    VehicleHash[VehicleHash["Jetmax"] = 861409633] = "Jetmax";
    VehicleHash[VehicleHash["Journey"] = 4174679674] = "Journey";
    VehicleHash[VehicleHash["Kalahari"] = 92612664] = "Kalahari";
    VehicleHash[VehicleHash["Khamelion"] = 544021352] = "Khamelion";
    VehicleHash[VehicleHash["Kuruma"] = 2922118804] = "Kuruma";
    VehicleHash[VehicleHash["Kuruma2"] = 410882957] = "Kuruma2";
    VehicleHash[VehicleHash["Landstalker"] = 1269098716] = "Landstalker";
    VehicleHash[VehicleHash["Lazer"] = 3013282534] = "Lazer";
    VehicleHash[VehicleHash["LE7B"] = 3062131285] = "LE7B";
    VehicleHash[VehicleHash["Lectro"] = 640818791] = "Lectro";
    VehicleHash[VehicleHash["Lguard"] = 469291905] = "Lguard";
    VehicleHash[VehicleHash["Limo2"] = 4180339789] = "Limo2";
    VehicleHash[VehicleHash["Lurcher"] = 2068293287] = "Lurcher";
    VehicleHash[VehicleHash["Luxor"] = 621481054] = "Luxor";
    VehicleHash[VehicleHash["Luxor2"] = 3080673438] = "Luxor2";
    VehicleHash[VehicleHash["Lynx"] = 482197771] = "Lynx";
    VehicleHash[VehicleHash["Mamba"] = 2634021974] = "Mamba";
    VehicleHash[VehicleHash["Mammatus"] = 2548391185] = "Mammatus";
    VehicleHash[VehicleHash["Manana"] = 2170765704] = "Manana";
    VehicleHash[VehicleHash["Manchez"] = 2771538552] = "Manchez";
    VehicleHash[VehicleHash["Marquis"] = 3251507587] = "Marquis";
    VehicleHash[VehicleHash["Marshall"] = 1233534620] = "Marshall";
    VehicleHash[VehicleHash["Massacro"] = 4152024626] = "Massacro";
    VehicleHash[VehicleHash["Massacro2"] = 3663206819] = "Massacro2";
    VehicleHash[VehicleHash["Maverick"] = 2634305738] = "Maverick";
    VehicleHash[VehicleHash["Mesa"] = 914654722] = "Mesa";
    VehicleHash[VehicleHash["Mesa2"] = 3546958660] = "Mesa2";
    VehicleHash[VehicleHash["Mesa3"] = 2230595153] = "Mesa3";
    VehicleHash[VehicleHash["MetroTrain"] = 868868440] = "MetroTrain";
    VehicleHash[VehicleHash["Miljet"] = 165154707] = "Miljet";
    VehicleHash[VehicleHash["Minivan"] = 3984502180] = "Minivan";
    VehicleHash[VehicleHash["Minivan2"] = 3168702960] = "Minivan2";
    VehicleHash[VehicleHash["Mixer"] = 3510150843] = "Mixer";
    VehicleHash[VehicleHash["Mixer2"] = 475220373] = "Mixer2";
    VehicleHash[VehicleHash["Monroe"] = 3861591579] = "Monroe";
    VehicleHash[VehicleHash["Monster"] = 3449006043] = "Monster";
    VehicleHash[VehicleHash["Moonbeam"] = 525509695] = "Moonbeam";
    VehicleHash[VehicleHash["Moonbeam2"] = 1896491931] = "Moonbeam2";
    VehicleHash[VehicleHash["Mower"] = 1783355638] = "Mower";
    VehicleHash[VehicleHash["Mule"] = 904750859] = "Mule";
    VehicleHash[VehicleHash["Mule2"] = 3244501995] = "Mule2";
    VehicleHash[VehicleHash["Mule3"] = 2242229361] = "Mule3";
    VehicleHash[VehicleHash["Nemesis"] = 3660088182] = "Nemesis";
    VehicleHash[VehicleHash["Nero"] = 1034187331] = "Nero";
    VehicleHash[VehicleHash["Nero2"] = 1093792632] = "Nero2";
    VehicleHash[VehicleHash["Nightblade"] = 2688780135] = "Nightblade";
    VehicleHash[VehicleHash["Nightshade"] = 2351681756] = "Nightshade";
    VehicleHash[VehicleHash["NightShark"] = 433954513] = "NightShark";
    VehicleHash[VehicleHash["Nimbus"] = 2999939664] = "Nimbus";
    VehicleHash[VehicleHash["Ninef"] = 1032823388] = "Ninef";
    VehicleHash[VehicleHash["Ninef2"] = 2833484545] = "Ninef2";
    VehicleHash[VehicleHash["Omnis"] = 3517794615] = "Omnis";
    VehicleHash[VehicleHash["Oppressor"] = 884483972] = "Oppressor";
    VehicleHash[VehicleHash["Oracle"] = 1348744438] = "Oracle";
    VehicleHash[VehicleHash["Oracle2"] = 3783366066] = "Oracle2";
    VehicleHash[VehicleHash["Osiris"] = 1987142870] = "Osiris";
    VehicleHash[VehicleHash["Packer"] = 569305213] = "Packer";
    VehicleHash[VehicleHash["Panto"] = 3863274624] = "Panto";
    VehicleHash[VehicleHash["Paradise"] = 1488164764] = "Paradise";
    VehicleHash[VehicleHash["Patriot"] = 3486509883] = "Patriot";
    VehicleHash[VehicleHash["PBus"] = 2287941233] = "PBus";
    VehicleHash[VehicleHash["PCJ"] = 3385765638] = "PCJ";
    VehicleHash[VehicleHash["Penetrator"] = 2536829930] = "Penetrator";
    VehicleHash[VehicleHash["Penumbra"] = 3917501776] = "Penumbra";
    VehicleHash[VehicleHash["Peyote"] = 1830407356] = "Peyote";
    VehicleHash[VehicleHash["Pfister811"] = 2465164804] = "Pfister811";
    VehicleHash[VehicleHash["Phantom"] = 2157618379] = "Phantom";
    VehicleHash[VehicleHash["Phantom2"] = 2645431192] = "Phantom2";
    VehicleHash[VehicleHash["Phantom3"] = 177270108] = "Phantom3";
    VehicleHash[VehicleHash["Phoenix"] = 2199527893] = "Phoenix";
    VehicleHash[VehicleHash["Picador"] = 1507916787] = "Picador";
    VehicleHash[VehicleHash["Pigalle"] = 1078682497] = "Pigalle";
    VehicleHash[VehicleHash["Police"] = 2046537925] = "Police";
    VehicleHash[VehicleHash["Police2"] = 2667966721] = "Police2";
    VehicleHash[VehicleHash["Police3"] = 1912215274] = "Police3";
    VehicleHash[VehicleHash["Police4"] = 2321795001] = "Police4";
    VehicleHash[VehicleHash["Policeb"] = 4260343491] = "Policeb";
    VehicleHash[VehicleHash["PoliceOld1"] = 2758042359] = "PoliceOld1";
    VehicleHash[VehicleHash["PoliceOld2"] = 2515846680] = "PoliceOld2";
    VehicleHash[VehicleHash["PoliceT"] = 456714581] = "PoliceT";
    VehicleHash[VehicleHash["Polmav"] = 353883353] = "Polmav";
    VehicleHash[VehicleHash["Pony"] = 4175309224] = "Pony";
    VehicleHash[VehicleHash["Pony2"] = 943752001] = "Pony2";
    VehicleHash[VehicleHash["Pounder"] = 2112052861] = "Pounder";
    VehicleHash[VehicleHash["Prairie"] = 2844316578] = "Prairie";
    VehicleHash[VehicleHash["Pranger"] = 741586030] = "Pranger";
    VehicleHash[VehicleHash["Predator"] = 3806844075] = "Predator";
    VehicleHash[VehicleHash["Premier"] = 2411098011] = "Premier";
    VehicleHash[VehicleHash["Primo"] = 3144368207] = "Primo";
    VehicleHash[VehicleHash["Primo2"] = 2254540506] = "Primo2";
    VehicleHash[VehicleHash["PropTrailer"] = 356391690] = "PropTrailer";
    VehicleHash[VehicleHash["Prototipo"] = 2123327359] = "Prototipo";
    VehicleHash[VehicleHash["Radi"] = 2643899483] = "Radi";
    VehicleHash[VehicleHash["RakeTrailer"] = 390902130] = "RakeTrailer";
    VehicleHash[VehicleHash["RancherXL"] = 1645267888] = "RancherXL";
    VehicleHash[VehicleHash["RancherXL2"] = 1933662059] = "RancherXL2";
    VehicleHash[VehicleHash["RallyTruck"] = 2191146052] = "RallyTruck";
    VehicleHash[VehicleHash["RapidGT"] = 2360515092] = "RapidGT";
    VehicleHash[VehicleHash["RapidGT2"] = 1737773231] = "RapidGT2";
    VehicleHash[VehicleHash["Raptor"] = 3620039993] = "Raptor";
    VehicleHash[VehicleHash["RatBike"] = 1873600305] = "RatBike";
    VehicleHash[VehicleHash["RatLoader"] = 3627815886] = "RatLoader";
    VehicleHash[VehicleHash["RatLoader2"] = 3705788919] = "RatLoader2";
    VehicleHash[VehicleHash["Reaper"] = 234062309] = "Reaper";
    VehicleHash[VehicleHash["Rebel"] = 3087195462] = "Rebel";
    VehicleHash[VehicleHash["Rebel2"] = 2249373259] = "Rebel2";
    VehicleHash[VehicleHash["Regina"] = 4280472072] = "Regina";
    VehicleHash[VehicleHash["RentalBus"] = 3196165219] = "RentalBus";
    VehicleHash[VehicleHash["Rhapsody"] = 841808271] = "Rhapsody";
    VehicleHash[VehicleHash["Rhino"] = 782665360] = "Rhino";
    VehicleHash[VehicleHash["Riot"] = 3089277354] = "Riot";
    VehicleHash[VehicleHash["Ripley"] = 3448987385] = "Ripley";
    VehicleHash[VehicleHash["Rocoto"] = 2136773105] = "Rocoto";
    VehicleHash[VehicleHash["Romero"] = 627094268] = "Romero";
    VehicleHash[VehicleHash["Rubble"] = 2589662668] = "Rubble";
    VehicleHash[VehicleHash["Ruffian"] = 3401388520] = "Ruffian";
    VehicleHash[VehicleHash["Ruiner"] = 4067225593] = "Ruiner";
    VehicleHash[VehicleHash["Ruiner2"] = 941494461] = "Ruiner2";
    VehicleHash[VehicleHash["Ruiner3"] = 777714999] = "Ruiner3";
    VehicleHash[VehicleHash["Rumpo"] = 1162065741] = "Rumpo";
    VehicleHash[VehicleHash["Rumpo2"] = 2518351607] = "Rumpo2";
    VehicleHash[VehicleHash["Rumpo3"] = 1475773103] = "Rumpo3";
    VehicleHash[VehicleHash["Ruston"] = 719660200] = "Ruston";
    VehicleHash[VehicleHash["SabreGT"] = 2609945748] = "SabreGT";
    VehicleHash[VehicleHash["SabreGT2"] = 223258115] = "SabreGT2";
    VehicleHash[VehicleHash["Sadler"] = 3695398481] = "Sadler";
    VehicleHash[VehicleHash["Sadler2"] = 734217681] = "Sadler2";
    VehicleHash[VehicleHash["Sanchez"] = 788045382] = "Sanchez";
    VehicleHash[VehicleHash["Sanchez2"] = 2841686334] = "Sanchez2";
    VehicleHash[VehicleHash["Sanctus"] = 1491277511] = "Sanctus";
    VehicleHash[VehicleHash["Sandking"] = 3105951696] = "Sandking";
    VehicleHash[VehicleHash["Sandking2"] = 989381445] = "Sandking2";
    VehicleHash[VehicleHash["Savage"] = 4212341271] = "Savage";
    VehicleHash[VehicleHash["Schafter2"] = 3039514899] = "Schafter2";
    VehicleHash[VehicleHash["Schafter3"] = 2809443750] = "Schafter3";
    VehicleHash[VehicleHash["Schafter4"] = 1489967196] = "Schafter4";
    VehicleHash[VehicleHash["Schafter5"] = 3406724313] = "Schafter5";
    VehicleHash[VehicleHash["Schafter6"] = 1922255844] = "Schafter6";
    VehicleHash[VehicleHash["Schwarzer"] = 3548084598] = "Schwarzer";
    VehicleHash[VehicleHash["Scorcher"] = 4108429845] = "Scorcher";
    VehicleHash[VehicleHash["Scrap"] = 2594165727] = "Scrap";
    VehicleHash[VehicleHash["Seashark"] = 3264692260] = "Seashark";
    VehicleHash[VehicleHash["Seashark2"] = 3678636260] = "Seashark2";
    VehicleHash[VehicleHash["Seashark3"] = 3983945033] = "Seashark3";
    VehicleHash[VehicleHash["Seminole"] = 1221512915] = "Seminole";
    VehicleHash[VehicleHash["Sentinel"] = 1349725314] = "Sentinel";
    VehicleHash[VehicleHash["Sentinel2"] = 873639469] = "Sentinel2";
    VehicleHash[VehicleHash["Serrano"] = 1337041428] = "Serrano";
    VehicleHash[VehicleHash["Seven70"] = 2537130571] = "Seven70";
    VehicleHash[VehicleHash["Shamal"] = 3080461301] = "Shamal";
    VehicleHash[VehicleHash["Sheava"] = 819197656] = "Sheava";
    VehicleHash[VehicleHash["Sheriff"] = 2611638396] = "Sheriff";
    VehicleHash[VehicleHash["Sheriff2"] = 1922257928] = "Sheriff2";
    VehicleHash[VehicleHash["Shotaro"] = 3889340782] = "Shotaro";
    VehicleHash[VehicleHash["Skylift"] = 1044954915] = "Skylift";
    VehicleHash[VehicleHash["SlamVan"] = 729783779] = "SlamVan";
    VehicleHash[VehicleHash["SlamVan2"] = 833469436] = "SlamVan2";
    VehicleHash[VehicleHash["SlamVan3"] = 1119641113] = "SlamVan3";
    VehicleHash[VehicleHash["Sovereign"] = 743478836] = "Sovereign";
    VehicleHash[VehicleHash["Specter"] = 1886268224] = "Specter";
    VehicleHash[VehicleHash["Specter2"] = 1074745671] = "Specter2";
    VehicleHash[VehicleHash["Speeder"] = 231083307] = "Speeder";
    VehicleHash[VehicleHash["Speeder2"] = 437538602] = "Speeder2";
    VehicleHash[VehicleHash["Speedo"] = 3484649228] = "Speedo";
    VehicleHash[VehicleHash["Speedo2"] = 728614474] = "Speedo2";
    VehicleHash[VehicleHash["Squalo"] = 400514754] = "Squalo";
    VehicleHash[VehicleHash["Stalion"] = 1923400478] = "Stalion";
    VehicleHash[VehicleHash["Stalion2"] = 3893323758] = "Stalion2";
    VehicleHash[VehicleHash["Stanier"] = 2817386317] = "Stanier";
    VehicleHash[VehicleHash["Stinger"] = 1545842587] = "Stinger";
    VehicleHash[VehicleHash["StingerGT"] = 2196019706] = "StingerGT";
    VehicleHash[VehicleHash["Stockade"] = 1747439474] = "Stockade";
    VehicleHash[VehicleHash["Stockade3"] = 4080511798] = "Stockade3";
    VehicleHash[VehicleHash["Stratum"] = 1723137093] = "Stratum";
    VehicleHash[VehicleHash["Stretch"] = 2333339779] = "Stretch";
    VehicleHash[VehicleHash["Stunt"] = 2172210288] = "Stunt";
    VehicleHash[VehicleHash["Submersible"] = 771711535] = "Submersible";
    VehicleHash[VehicleHash["Submersible2"] = 3228633070] = "Submersible2";
    VehicleHash[VehicleHash["Sultan"] = 970598228] = "Sultan";
    VehicleHash[VehicleHash["SultanRS"] = 3999278268] = "SultanRS";
    VehicleHash[VehicleHash["Suntrap"] = 4012021193] = "Suntrap";
    VehicleHash[VehicleHash["Superd"] = 1123216662] = "Superd";
    VehicleHash[VehicleHash["Supervolito"] = 710198397] = "Supervolito";
    VehicleHash[VehicleHash["Supervolito2"] = 2623428164] = "Supervolito2";
    VehicleHash[VehicleHash["Surano"] = 384071873] = "Surano";
    VehicleHash[VehicleHash["Surfer"] = 699456151] = "Surfer";
    VehicleHash[VehicleHash["Surfer2"] = 2983726598] = "Surfer2";
    VehicleHash[VehicleHash["Surge"] = 2400073108] = "Surge";
    VehicleHash[VehicleHash["Swift2"] = 1075432268] = "Swift2";
    VehicleHash[VehicleHash["Swift"] = 3955379698] = "Swift";
    VehicleHash[VehicleHash["T20"] = 1663218586] = "T20";
    VehicleHash[VehicleHash["Taco"] = 1951180813] = "Taco";
    VehicleHash[VehicleHash["Tailgater"] = 3286105550] = "Tailgater";
    VehicleHash[VehicleHash["Tampa"] = 972671128] = "Tampa";
    VehicleHash[VehicleHash["Tampa2"] = 3223586949] = "Tampa2";
    VehicleHash[VehicleHash["Tampa3"] = 3084515313] = "Tampa3";
    VehicleHash[VehicleHash["Tanker"] = 3564062519] = "Tanker";
    VehicleHash[VehicleHash["Tanker2"] = 1956216962] = "Tanker2";
    VehicleHash[VehicleHash["TankerCar"] = 586013744] = "TankerCar";
    VehicleHash[VehicleHash["Taxi"] = 3338918751] = "Taxi";
    VehicleHash[VehicleHash["Technical"] = 2198148358] = "Technical";
    VehicleHash[VehicleHash["Technical2"] = 1180875963] = "Technical2";
    VehicleHash[VehicleHash["Technical3"] = 1356124575] = "Technical3";
    VehicleHash[VehicleHash["Tempesta"] = 272929391] = "Tempesta";
    VehicleHash[VehicleHash["Thrust"] = 1836027715] = "Thrust";
    VehicleHash[VehicleHash["TipTruck"] = 48339065] = "TipTruck";
    VehicleHash[VehicleHash["TipTruck2"] = 3347205726] = "TipTruck2";
    VehicleHash[VehicleHash["Titan"] = 1981688531] = "Titan";
    VehicleHash[VehicleHash["Torero"] = 1504306544] = "Torero";
    VehicleHash[VehicleHash["Tornado"] = 464687292] = "Tornado";
    VehicleHash[VehicleHash["Tornado2"] = 1531094468] = "Tornado2";
    VehicleHash[VehicleHash["Tornado3"] = 1762279763] = "Tornado3";
    VehicleHash[VehicleHash["Tornado4"] = 2261744861] = "Tornado4";
    VehicleHash[VehicleHash["Tornado5"] = 2497353967] = "Tornado5";
    VehicleHash[VehicleHash["Tornado6"] = 2736567667] = "Tornado6";
    VehicleHash[VehicleHash["Toro"] = 1070967343] = "Toro";
    VehicleHash[VehicleHash["Toro2"] = 908897389] = "Toro2";
    VehicleHash[VehicleHash["Tourbus"] = 1941029835] = "Tourbus";
    VehicleHash[VehicleHash["TowTruck"] = 2971866336] = "TowTruck";
    VehicleHash[VehicleHash["TowTruck2"] = 3852654278] = "TowTruck2";
    VehicleHash[VehicleHash["TR2"] = 2078290630] = "TR2";
    VehicleHash[VehicleHash["TR3"] = 1784254509] = "TR3";
    VehicleHash[VehicleHash["TR4"] = 2091594960] = "TR4";
    VehicleHash[VehicleHash["Tractor"] = 1641462412] = "Tractor";
    VehicleHash[VehicleHash["Tractor2"] = 2218488798] = "Tractor2";
    VehicleHash[VehicleHash["Tractor3"] = 1445631933] = "Tractor3";
    VehicleHash[VehicleHash["TrailerLogs"] = 2016027501] = "TrailerLogs";
    VehicleHash[VehicleHash["TrailerLarge"] = 1502869817] = "TrailerLarge";
    VehicleHash[VehicleHash["Trailers"] = 3417488910] = "Trailers";
    VehicleHash[VehicleHash["Trailers2"] = 2715434129] = "Trailers2";
    VehicleHash[VehicleHash["Trailers3"] = 2236089197] = "Trailers3";
    VehicleHash[VehicleHash["Trailers4"] = 3194418602] = "Trailers4";
    VehicleHash[VehicleHash["TrailerSmall"] = 712162987] = "TrailerSmall";
    VehicleHash[VehicleHash["TrailerSmall2"] = 2413121211] = "TrailerSmall2";
    VehicleHash[VehicleHash["Trash"] = 1917016601] = "Trash";
    VehicleHash[VehicleHash["Trash2"] = 3039269212] = "Trash2";
    VehicleHash[VehicleHash["TRFlat"] = 2942498482] = "TRFlat";
    VehicleHash[VehicleHash["TriBike"] = 1127861609] = "TriBike";
    VehicleHash[VehicleHash["TriBike2"] = 3061159916] = "TriBike2";
    VehicleHash[VehicleHash["TriBike3"] = 3894672200] = "TriBike3";
    VehicleHash[VehicleHash["TrophyTruck"] = 101905590] = "TrophyTruck";
    VehicleHash[VehicleHash["TrophyTruck2"] = 3631668194] = "TrophyTruck2";
    VehicleHash[VehicleHash["Tropic"] = 290013743] = "Tropic";
    VehicleHash[VehicleHash["Tropic2"] = 1448677353] = "Tropic2";
    VehicleHash[VehicleHash["Tropos"] = 1887331236] = "Tropos";
    VehicleHash[VehicleHash["Tug"] = 2194326579] = "Tug";
    VehicleHash[VehicleHash["Turismor"] = 408192225] = "Turismor";
    VehicleHash[VehicleHash["Turismo2"] = 3312836369] = "Turismo2";
    VehicleHash[VehicleHash["TVTrailer"] = 2524324030] = "TVTrailer";
    VehicleHash[VehicleHash["Tyrus"] = 2067820283] = "Tyrus";
    VehicleHash[VehicleHash["UtilliTruck"] = 516990260] = "UtilliTruck";
    VehicleHash[VehicleHash["UtilliTruck2"] = 887537515] = "UtilliTruck2";
    VehicleHash[VehicleHash["UtilliTruck3"] = 2132890591] = "UtilliTruck3";
    VehicleHash[VehicleHash["Vacca"] = 338562499] = "Vacca";
    VehicleHash[VehicleHash["Vader"] = 4154065143] = "Vader";
    VehicleHash[VehicleHash["Vagner"] = 1939284556] = "Vagner";
    VehicleHash[VehicleHash["Valkyrie"] = 2694714877] = "Valkyrie";
    VehicleHash[VehicleHash["Valkyrie2"] = 1543134283] = "Valkyrie2";
    VehicleHash[VehicleHash["Velum"] = 2621610858] = "Velum";
    VehicleHash[VehicleHash["Velum2"] = 1077420264] = "Velum2";
    VehicleHash[VehicleHash["Verlierer2"] = 1102544804] = "Verlierer2";
    VehicleHash[VehicleHash["Vestra"] = 1341619767] = "Vestra";
    VehicleHash[VehicleHash["Vigero"] = 3469130167] = "Vigero";
    VehicleHash[VehicleHash["Vindicator"] = 2941886209] = "Vindicator";
    VehicleHash[VehicleHash["Virgo"] = 3796912450] = "Virgo";
    VehicleHash[VehicleHash["Virgo2"] = 3395457658] = "Virgo2";
    VehicleHash[VehicleHash["Virgo3"] = 16646064] = "Virgo3";
    VehicleHash[VehicleHash["Volatus"] = 2449479409] = "Volatus";
    VehicleHash[VehicleHash["Voltic"] = 2672523198] = "Voltic";
    VehicleHash[VehicleHash["Voltic2"] = 989294410] = "Voltic2";
    VehicleHash[VehicleHash["Voodoo"] = 2006667053] = "Voodoo";
    VehicleHash[VehicleHash["Voodoo2"] = 523724515] = "Voodoo2";
    VehicleHash[VehicleHash["Vortex"] = 3685342204] = "Vortex";
    VehicleHash[VehicleHash["Warrener"] = 1373123368] = "Warrener";
    VehicleHash[VehicleHash["Washington"] = 1777363799] = "Washington";
    VehicleHash[VehicleHash["Wastelander"] = 2382949506] = "Wastelander";
    VehicleHash[VehicleHash["Windsor"] = 1581459400] = "Windsor";
    VehicleHash[VehicleHash["Windsor2"] = 2364918497] = "Windsor2";
    VehicleHash[VehicleHash["Wolfsbane"] = 3676349299] = "Wolfsbane";
    VehicleHash[VehicleHash["XA21"] = 917809321] = "XA21";
    VehicleHash[VehicleHash["XLS"] = 1203490606] = "XLS";
    VehicleHash[VehicleHash["XLS2"] = 3862958888] = "XLS2";
    VehicleHash[VehicleHash["Youga"] = 65402552] = "Youga";
    VehicleHash[VehicleHash["Youga2"] = 1026149675] = "Youga2";
    VehicleHash[VehicleHash["Zentorno"] = 2891838741] = "Zentorno";
    VehicleHash[VehicleHash["Zion"] = 3172678083] = "Zion";
    VehicleHash[VehicleHash["Zion2"] = 3101863448] = "Zion2";
    VehicleHash[VehicleHash["ZombieA"] = 3285698347] = "ZombieA";
    VehicleHash[VehicleHash["ZombieB"] = 3724934023] = "ZombieB";
    VehicleHash[VehicleHash["ZType"] = 758895617] = "ZType";
})(VehicleHash = exports.VehicleHash || (exports.VehicleHash = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/hashes/WeaponHash.js":
/*!*********************************************************!*\
  !*** ../node_modules/fivem-js/lib/hashes/WeaponHash.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AmmoType = exports.VehicleWeaponHash = exports.WeaponHash = void 0;
var WeaponHash;
(function (WeaponHash) {
    WeaponHash[WeaponHash["Knife"] = 2578778090] = "Knife";
    WeaponHash[WeaponHash["Nightstick"] = 1737195953] = "Nightstick";
    WeaponHash[WeaponHash["Hammer"] = 1317494643] = "Hammer";
    WeaponHash[WeaponHash["Bat"] = 2508868239] = "Bat";
    WeaponHash[WeaponHash["GolfClub"] = 1141786504] = "GolfClub";
    WeaponHash[WeaponHash["Crowbar"] = 2227010557] = "Crowbar";
    WeaponHash[WeaponHash["Bottle"] = 4192643659] = "Bottle";
    WeaponHash[WeaponHash["SwitchBlade"] = 3756226112] = "SwitchBlade";
    WeaponHash[WeaponHash["Pistol"] = 453432689] = "Pistol";
    WeaponHash[WeaponHash["CombatPistol"] = 1593441988] = "CombatPistol";
    WeaponHash[WeaponHash["APPistol"] = 584646201] = "APPistol";
    WeaponHash[WeaponHash["Pistol50"] = 2578377531] = "Pistol50";
    WeaponHash[WeaponHash["FlareGun"] = 1198879012] = "FlareGun";
    WeaponHash[WeaponHash["MarksmanPistol"] = 3696079510] = "MarksmanPistol";
    WeaponHash[WeaponHash["Revolver"] = 3249783761] = "Revolver";
    WeaponHash[WeaponHash["MicroSMG"] = 324215364] = "MicroSMG";
    WeaponHash[WeaponHash["SMG"] = 736523883] = "SMG";
    WeaponHash[WeaponHash["AssaultSMG"] = 4024951519] = "AssaultSMG";
    WeaponHash[WeaponHash["CombatPDW"] = 171789620] = "CombatPDW";
    WeaponHash[WeaponHash["AssaultRifle"] = 3220176749] = "AssaultRifle";
    WeaponHash[WeaponHash["CarbineRifle"] = 2210333304] = "CarbineRifle";
    WeaponHash[WeaponHash["AdvancedRifle"] = 2937143193] = "AdvancedRifle";
    WeaponHash[WeaponHash["CompactRifle"] = 1649403952] = "CompactRifle";
    WeaponHash[WeaponHash["MG"] = 2634544996] = "MG";
    WeaponHash[WeaponHash["CombatMG"] = 2144741730] = "CombatMG";
    WeaponHash[WeaponHash["PumpShotgun"] = 487013001] = "PumpShotgun";
    WeaponHash[WeaponHash["SawnOffShotgun"] = 2017895192] = "SawnOffShotgun";
    WeaponHash[WeaponHash["AssaultShotgun"] = 3800352039] = "AssaultShotgun";
    WeaponHash[WeaponHash["BullpupShotgun"] = 2640438543] = "BullpupShotgun";
    WeaponHash[WeaponHash["DoubleBarrelShotgun"] = 4019527611] = "DoubleBarrelShotgun";
    WeaponHash[WeaponHash["StunGun"] = 911657153] = "StunGun";
    WeaponHash[WeaponHash["SniperRifle"] = 100416529] = "SniperRifle";
    WeaponHash[WeaponHash["HeavySniper"] = 205991906] = "HeavySniper";
    WeaponHash[WeaponHash["GrenadeLauncher"] = 2726580491] = "GrenadeLauncher";
    WeaponHash[WeaponHash["GrenadeLauncherSmoke"] = 1305664598] = "GrenadeLauncherSmoke";
    WeaponHash[WeaponHash["RPG"] = 2982836145] = "RPG";
    WeaponHash[WeaponHash["Minigun"] = 1119849093] = "Minigun";
    WeaponHash[WeaponHash["Grenade"] = 2481070269] = "Grenade";
    WeaponHash[WeaponHash["StickyBomb"] = 741814745] = "StickyBomb";
    WeaponHash[WeaponHash["SmokeGrenade"] = 4256991824] = "SmokeGrenade";
    WeaponHash[WeaponHash["BZGas"] = 2694266206] = "BZGas";
    WeaponHash[WeaponHash["Molotov"] = 615608432] = "Molotov";
    WeaponHash[WeaponHash["FireExtinguisher"] = 101631238] = "FireExtinguisher";
    WeaponHash[WeaponHash["PetrolCan"] = 883325847] = "PetrolCan";
    WeaponHash[WeaponHash["SNSPistol"] = 3218215474] = "SNSPistol";
    WeaponHash[WeaponHash["SpecialCarbine"] = 3231910285] = "SpecialCarbine";
    WeaponHash[WeaponHash["HeavyPistol"] = 3523564046] = "HeavyPistol";
    WeaponHash[WeaponHash["BullpupRifle"] = 2132975508] = "BullpupRifle";
    WeaponHash[WeaponHash["HomingLauncher"] = 1672152130] = "HomingLauncher";
    WeaponHash[WeaponHash["ProximityMine"] = 2874559379] = "ProximityMine";
    WeaponHash[WeaponHash["Snowball"] = 126349499] = "Snowball";
    WeaponHash[WeaponHash["VintagePistol"] = 137902532] = "VintagePistol";
    WeaponHash[WeaponHash["Dagger"] = 2460120199] = "Dagger";
    WeaponHash[WeaponHash["Firework"] = 2138347493] = "Firework";
    WeaponHash[WeaponHash["Musket"] = 2828843422] = "Musket";
    WeaponHash[WeaponHash["MarksmanRifle"] = 3342088282] = "MarksmanRifle";
    WeaponHash[WeaponHash["HeavyShotgun"] = 984333226] = "HeavyShotgun";
    WeaponHash[WeaponHash["Gusenberg"] = 1627465347] = "Gusenberg";
    WeaponHash[WeaponHash["Hatchet"] = 4191993645] = "Hatchet";
    WeaponHash[WeaponHash["Railgun"] = 1834241177] = "Railgun";
    WeaponHash[WeaponHash["Unarmed"] = 2725352035] = "Unarmed";
    WeaponHash[WeaponHash["KnuckleDuster"] = 3638508604] = "KnuckleDuster";
    WeaponHash[WeaponHash["Machete"] = 3713923289] = "Machete";
    WeaponHash[WeaponHash["MachinePistol"] = 3675956304] = "MachinePistol";
    WeaponHash[WeaponHash["Flashlight"] = 2343591895] = "Flashlight";
    WeaponHash[WeaponHash["Ball"] = 600439132] = "Ball";
    WeaponHash[WeaponHash["Flare"] = 1233104067] = "Flare";
    WeaponHash[WeaponHash["NightVision"] = 2803906140] = "NightVision";
    WeaponHash[WeaponHash["Parachute"] = 4222310262] = "Parachute";
    WeaponHash[WeaponHash["SweeperShotgun"] = 317205821] = "SweeperShotgun";
    WeaponHash[WeaponHash["BattleAxe"] = 3441901897] = "BattleAxe";
    WeaponHash[WeaponHash["CompactGrenadeLauncher"] = 125959754] = "CompactGrenadeLauncher";
    WeaponHash[WeaponHash["MiniSMG"] = 3173288789] = "MiniSMG";
    WeaponHash[WeaponHash["PipeBomb"] = 3125143736] = "PipeBomb";
    WeaponHash[WeaponHash["PoolCue"] = 2484171525] = "PoolCue";
    WeaponHash[WeaponHash["Wrench"] = 419712736] = "Wrench";
    WeaponHash[WeaponHash["PistolMk2"] = 3219281620] = "PistolMk2";
    WeaponHash[WeaponHash["AssaultRifleMk2"] = 961495388] = "AssaultRifleMk2";
    WeaponHash[WeaponHash["CarbineRifleMk2"] = 4208062921] = "CarbineRifleMk2";
    WeaponHash[WeaponHash["CombatMGMk2"] = 3686625920] = "CombatMGMk2";
    WeaponHash[WeaponHash["HeavySniperMk2"] = 177293209] = "HeavySniperMk2";
    WeaponHash[WeaponHash["SMGMk2"] = 2024373456] = "SMGMk2";
})(WeaponHash = exports.WeaponHash || (exports.WeaponHash = {}));
var VehicleWeaponHash;
(function (VehicleWeaponHash) {
    VehicleWeaponHash[VehicleWeaponHash["Invalid"] = -1] = "Invalid";
    VehicleWeaponHash[VehicleWeaponHash["Tank"] = 1945616459] = "Tank";
    VehicleWeaponHash[VehicleWeaponHash["SpaceRocket"] = -123497569] = "SpaceRocket";
    VehicleWeaponHash[VehicleWeaponHash["PlaneRocket"] = -821520672] = "PlaneRocket";
    VehicleWeaponHash[VehicleWeaponHash["PlayerLaser"] = -268631733] = "PlayerLaser";
    VehicleWeaponHash[VehicleWeaponHash["PlayerBullet"] = 1259576109] = "PlayerBullet";
    VehicleWeaponHash[VehicleWeaponHash["PlayerBuzzard"] = 1186503822] = "PlayerBuzzard";
    VehicleWeaponHash[VehicleWeaponHash["PlayerHunter"] = -1625648674] = "PlayerHunter";
    VehicleWeaponHash[VehicleWeaponHash["PlayerLazer"] = -494786007] = "PlayerLazer";
    VehicleWeaponHash[VehicleWeaponHash["EnemyLaser"] = 1566990507] = "EnemyLaser";
    VehicleWeaponHash[VehicleWeaponHash["SearchLight"] = -844344963] = "SearchLight";
    VehicleWeaponHash[VehicleWeaponHash["Radar"] = -764006018] = "Radar";
})(VehicleWeaponHash = exports.VehicleWeaponHash || (exports.VehicleWeaponHash = {}));
var AmmoType;
(function (AmmoType) {
    AmmoType[AmmoType["Melee"] = 0] = "Melee";
    AmmoType[AmmoType["FireExtinguisher"] = 1359393852] = "FireExtinguisher";
    AmmoType[AmmoType["Flare"] = 1808594799] = "Flare";
    AmmoType[AmmoType["FlareGun"] = 1173416293] = "FlareGun";
    AmmoType[AmmoType["PetrolCan"] = 3395492001] = "PetrolCan";
    AmmoType[AmmoType["Shotgun"] = 2416459067] = "Shotgun";
    AmmoType[AmmoType["Pistol"] = 1950175060] = "Pistol";
    AmmoType[AmmoType["Ball"] = 4287981158] = "Ball";
    AmmoType[AmmoType["Snowball"] = 2182627693] = "Snowball";
    AmmoType[AmmoType["Sniper"] = 1285032059] = "Sniper";
    AmmoType[AmmoType["AssaultRifle"] = 218444191] = "AssaultRifle";
    AmmoType[AmmoType["SMG"] = 1820140472] = "SMG";
    AmmoType[AmmoType["Molotov"] = 1446246869] = "Molotov";
    AmmoType[AmmoType["StunGun"] = 2955849184] = "StunGun";
    AmmoType[AmmoType["MG"] = 1788949567] = "MG";
    AmmoType[AmmoType["GrenadeLauncher"] = 1003267566] = "GrenadeLauncher";
    AmmoType[AmmoType["RPG"] = 1742569970] = "RPG";
    AmmoType[AmmoType["Minigun"] = 2680539266] = "Minigun";
    AmmoType[AmmoType["Firework"] = 2938367503] = "Firework";
    AmmoType[AmmoType["Railgun"] = 2034517757] = "Railgun";
    AmmoType[AmmoType["HomingLauncher"] = 2568293933] = "HomingLauncher";
    AmmoType[AmmoType["Grenade"] = 1003688881] = "Grenade";
    AmmoType[AmmoType["StickyBomb"] = 1411692055] = "StickyBomb";
    AmmoType[AmmoType["ProximityMine"] = 2938243239] = "ProximityMine";
    AmmoType[AmmoType["PipeBomb"] = 357983224] = "PipeBomb";
    AmmoType[AmmoType["SmokeGrenade"] = 3859679398] = "SmokeGrenade";
    AmmoType[AmmoType["BZGas"] = 2608103076] = "BZGas";
})(AmmoType = exports.AmmoType || (exports.AmmoType = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/hashes/WeatherTypeHash.js":
/*!**************************************************************!*\
  !*** ../node_modules/fivem-js/lib/hashes/WeatherTypeHash.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeatherTypeHash = void 0;
/**
 * Same list as Weather enum, but as hashes.
 */
var WeatherTypeHash;
(function (WeatherTypeHash) {
    WeatherTypeHash[WeatherTypeHash["Unknown"] = -1] = "Unknown";
    WeatherTypeHash[WeatherTypeHash["ExtraSunny"] = -1750463879] = "ExtraSunny";
    WeatherTypeHash[WeatherTypeHash["Clear"] = 916995460] = "Clear";
    WeatherTypeHash[WeatherTypeHash["Neutral"] = -1530260698] = "Neutral";
    WeatherTypeHash[WeatherTypeHash["Smog"] = 282916021] = "Smog";
    WeatherTypeHash[WeatherTypeHash["Foggy"] = -1368164796] = "Foggy";
    WeatherTypeHash[WeatherTypeHash["Clouds"] = 821931868] = "Clouds";
    WeatherTypeHash[WeatherTypeHash["Overcast"] = -1148613331] = "Overcast";
    WeatherTypeHash[WeatherTypeHash["Clearing"] = 1840358669] = "Clearing";
    WeatherTypeHash[WeatherTypeHash["Raining"] = 1420204096] = "Raining";
    WeatherTypeHash[WeatherTypeHash["ThunderStorm"] = -1233681761] = "ThunderStorm";
    WeatherTypeHash[WeatherTypeHash["Blizzard"] = 669657108] = "Blizzard";
    WeatherTypeHash[WeatherTypeHash["Snowing"] = -273223690] = "Snowing";
    WeatherTypeHash[WeatherTypeHash["Snowlight"] = 603685163] = "Snowlight";
    WeatherTypeHash[WeatherTypeHash["Christmas"] = -1429616491] = "Christmas";
    WeatherTypeHash[WeatherTypeHash["Halloween"] = -921030142] = "Halloween";
})(WeatherTypeHash = exports.WeatherTypeHash || (exports.WeatherTypeHash = {}));


/***/ }),

/***/ "../node_modules/fivem-js/lib/hashes/index.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/hashes/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeatherTypeHash = exports.VehicleWeaponHash = exports.WeaponHash = exports.AmmoType = exports.VehicleHash = exports.PedHash = exports.MaterialHash = void 0;
var MaterialHash_1 = __webpack_require__(/*! ./MaterialHash */ "../node_modules/fivem-js/lib/hashes/MaterialHash.js");
Object.defineProperty(exports, "MaterialHash", ({ enumerable: true, get: function () { return MaterialHash_1.MaterialHash; } }));
var PedHash_1 = __webpack_require__(/*! ./PedHash */ "../node_modules/fivem-js/lib/hashes/PedHash.js");
Object.defineProperty(exports, "PedHash", ({ enumerable: true, get: function () { return PedHash_1.PedHash; } }));
var VehicleHash_1 = __webpack_require__(/*! ./VehicleHash */ "../node_modules/fivem-js/lib/hashes/VehicleHash.js");
Object.defineProperty(exports, "VehicleHash", ({ enumerable: true, get: function () { return VehicleHash_1.VehicleHash; } }));
var WeaponHash_1 = __webpack_require__(/*! ./WeaponHash */ "../node_modules/fivem-js/lib/hashes/WeaponHash.js");
Object.defineProperty(exports, "AmmoType", ({ enumerable: true, get: function () { return WeaponHash_1.AmmoType; } }));
Object.defineProperty(exports, "WeaponHash", ({ enumerable: true, get: function () { return WeaponHash_1.WeaponHash; } }));
Object.defineProperty(exports, "VehicleWeaponHash", ({ enumerable: true, get: function () { return WeaponHash_1.VehicleWeaponHash; } }));
var WeatherTypeHash_1 = __webpack_require__(/*! ./WeatherTypeHash */ "../node_modules/fivem-js/lib/hashes/WeatherTypeHash.js");
Object.defineProperty(exports, "WeatherTypeHash", ({ enumerable: true, get: function () { return WeatherTypeHash_1.WeatherTypeHash; } }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/index.js":
/*!*********************************************!*\
  !*** ../node_modules/fivem-js/lib/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RelationshipGroup = exports.RaycastResult = exports.ParticleEffectAsset = exports.ParticleEffect = exports.GameplayCamera = exports.Checkpoint = exports.Camera = exports.Blip = exports.Audio = exports.Model = exports.World = exports.Game = void 0;
var Game_1 = __webpack_require__(/*! ./Game */ "../node_modules/fivem-js/lib/Game.js");
Object.defineProperty(exports, "Game", ({ enumerable: true, get: function () { return Game_1.Game; } }));
var World_1 = __webpack_require__(/*! ./World */ "../node_modules/fivem-js/lib/World.js");
Object.defineProperty(exports, "World", ({ enumerable: true, get: function () { return World_1.World; } }));
var Model_1 = __webpack_require__(/*! ./Model */ "../node_modules/fivem-js/lib/Model.js");
Object.defineProperty(exports, "Model", ({ enumerable: true, get: function () { return Model_1.Model; } }));
var Audio_1 = __webpack_require__(/*! ./Audio */ "../node_modules/fivem-js/lib/Audio.js");
Object.defineProperty(exports, "Audio", ({ enumerable: true, get: function () { return Audio_1.Audio; } }));
var Blip_1 = __webpack_require__(/*! ./Blip */ "../node_modules/fivem-js/lib/Blip.js");
Object.defineProperty(exports, "Blip", ({ enumerable: true, get: function () { return Blip_1.Blip; } }));
var Camera_1 = __webpack_require__(/*! ./Camera */ "../node_modules/fivem-js/lib/Camera.js");
Object.defineProperty(exports, "Camera", ({ enumerable: true, get: function () { return Camera_1.Camera; } }));
var Checkpoint_1 = __webpack_require__(/*! ./Checkpoint */ "../node_modules/fivem-js/lib/Checkpoint.js");
Object.defineProperty(exports, "Checkpoint", ({ enumerable: true, get: function () { return Checkpoint_1.Checkpoint; } }));
var GameplayCamera_1 = __webpack_require__(/*! ./GameplayCamera */ "../node_modules/fivem-js/lib/GameplayCamera.js");
Object.defineProperty(exports, "GameplayCamera", ({ enumerable: true, get: function () { return GameplayCamera_1.GameplayCamera; } }));
var ParticleEffect_1 = __webpack_require__(/*! ./ParticleEffect */ "../node_modules/fivem-js/lib/ParticleEffect.js");
Object.defineProperty(exports, "ParticleEffect", ({ enumerable: true, get: function () { return ParticleEffect_1.ParticleEffect; } }));
var ParticleEffectAsset_1 = __webpack_require__(/*! ./ParticleEffectAsset */ "../node_modules/fivem-js/lib/ParticleEffectAsset.js");
Object.defineProperty(exports, "ParticleEffectAsset", ({ enumerable: true, get: function () { return ParticleEffectAsset_1.ParticleEffectAsset; } }));
var Raycast_1 = __webpack_require__(/*! ./Raycast */ "../node_modules/fivem-js/lib/Raycast.js");
Object.defineProperty(exports, "RaycastResult", ({ enumerable: true, get: function () { return Raycast_1.RaycastResult; } }));
var RelationshipGroup_1 = __webpack_require__(/*! ./RelationshipGroup */ "../node_modules/fivem-js/lib/RelationshipGroup.js");
Object.defineProperty(exports, "RelationshipGroup", ({ enumerable: true, get: function () { return RelationshipGroup_1.RelationshipGroup; } }));
// Lets export all from folders
__exportStar(__webpack_require__(/*! ./models */ "../node_modules/fivem-js/lib/models/index.js"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "../node_modules/fivem-js/lib/utils/index.js"), exports);
__exportStar(__webpack_require__(/*! ./enums */ "../node_modules/fivem-js/lib/enums/index.js"), exports);
__exportStar(__webpack_require__(/*! ./hashes */ "../node_modules/fivem-js/lib/hashes/index.js"), exports);
__exportStar(__webpack_require__(/*! ./ui */ "../node_modules/fivem-js/lib/ui/index.js"), exports);


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/Entity.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/Entity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Entity = void 0;
const Blip_1 = __webpack_require__(/*! ../Blip */ "../node_modules/fivem-js/lib/Blip.js");
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const Game_1 = __webpack_require__(/*! ../Game */ "../node_modules/fivem-js/lib/Game.js");
const Model_1 = __webpack_require__(/*! ../Model */ "../node_modules/fivem-js/lib/Model.js");
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
class Entity {
    constructor(handle) {
        this.handle = handle;
    }
    static fromHandle(handle) {
        switch (GetEntityType(handle)) {
            case 1:
                return new _1.Ped(handle);
            case 2:
                return new _1.Vehicle(handle);
            case 3:
                return new _1.Prop(handle);
        }
        return null;
    }
    static fromNetworkId(networkId) {
        return this.fromHandle(NetworkGetEntityFromNetworkId(networkId));
    }
    get Handle() {
        return this.handle;
    }
    get NetworkId() {
        return NetworkGetNetworkIdFromEntity(this.handle);
    }
    get Health() {
        return GetEntityHealth(this.handle);
    }
    set Health(amount) {
        SetEntityHealth(this.handle, amount);
    }
    get MaxHealth() {
        return GetEntityMaxHealth(this.handle);
    }
    set MaxHealth(amount) {
        SetEntityMaxHealth(this.handle, amount);
    }
    isDead() {
        return IsEntityDead(this.handle) ? true : false;
    }
    isAlive() {
        return !this.isDead();
    }
    get Model() {
        return new Model_1.Model(GetEntityModel(this.handle));
    }
    get Position() {
        const coords = GetEntityCoords(this.handle, false);
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
    }
    set Position(position) {
        SetEntityCoords(this.handle, position.x, position.y, position.z, false, false, false, true);
    }
    set PositionNoOffset(position) {
        SetEntityCoordsNoOffset(this.handle, position.x, position.y, position.z, true, true, true);
    }
    get Rotation() {
        const rotation = GetEntityRotation(this.handle, 2);
        return new utils_1.Vector3(rotation[0], rotation[1], rotation[2]);
    }
    set Rotation(rotation) {
        SetEntityRotation(this.handle, rotation.x, rotation.y, rotation.z, 2, true);
    }
    get Quaternion() {
        const quaternion = GetEntityQuaternion(this.handle);
        return new utils_1.Quaternion(quaternion[0], quaternion[1], quaternion[2], quaternion[3]);
    }
    set Quaternion(quaternion) {
        SetEntityQuaternion(this.handle, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    }
    get Heading() {
        return GetEntityHeading(this.handle);
    }
    set Heading(heading) {
        SetEntityHeading(this.handle, heading);
    }
    set IsPositionFrozen(value) {
        FreezeEntityPosition(this.handle, value);
    }
    get Velocity() {
        const velocity = GetEntityVelocity(this.handle);
        return new utils_1.Vector3(velocity[0], velocity[1], velocity[2]);
    }
    set Velocity(velocity) {
        SetEntityVelocity(this.handle, velocity.x, velocity.y, velocity.z);
    }
    get RotationVelocity() {
        const velocity = GetEntityRotationVelocity(this.handle);
        return new utils_1.Vector3(velocity[0], velocity[1], velocity[2]);
    }
    set MaxSpeed(value) {
        SetEntityMaxSpeed(this.handle, value);
    }
    set HasGravity(value) {
        SetEntityHasGravity(this.handle, value);
    }
    get HeightAboveGround() {
        return GetEntityHeightAboveGround(this.handle);
    }
    get SubmersionLevel() {
        return GetEntitySubmergedLevel(this.handle);
    }
    get LodDistance() {
        return GetEntityLodDist(this.handle);
    }
    set LodDistance(value) {
        SetEntityLodDist(this.handle, value);
    }
    get IsVisible() {
        return !!IsEntityVisible(this.handle);
    }
    set IsVisible(value) {
        SetEntityVisible(this.handle, value, false);
    }
    get IsOccluded() {
        return !!IsEntityOccluded(this.handle);
    }
    get IsOnScreen() {
        return !!IsEntityOnScreen(this.handle);
    }
    get IsUpright() {
        return !!IsEntityUpright(this.handle, 0);
    }
    get IsUpsideDown() {
        return !!IsEntityUpsidedown(this.handle);
    }
    get IsInAir() {
        return !!IsEntityInAir(this.handle);
    }
    get IsInWater() {
        return !!IsEntityInWater(this.handle);
    }
    get IsPersistent() {
        return !!IsEntityAMissionEntity(this.handle);
    }
    set IsPersistent(value) {
        if (value) {
            SetEntityAsMissionEntity(this.handle, true, false);
        }
        else {
            this.markAsNoLongerNeeded();
        }
    }
    get IsOnFire() {
        return !!IsEntityOnFire(this.handle);
    }
    set IsInvincible(value) {
        SetEntityInvincible(this.handle, value);
    }
    set IsOnlyDamagedByPlayer(value) {
        SetEntityOnlyDamagedByPlayer(this.handle, value);
    }
    get Opacity() {
        return GetEntityAlpha(this.handle);
    }
    set Opacity(value) {
        SetEntityAlpha(this.handle, value, 0);
    }
    resetOpacity() {
        ResetEntityAlpha(this.handle);
    }
    get HasCollided() {
        return !!HasEntityCollidedWithAnything(this.handle);
    }
    get IsCollisionEnabled() {
        return !GetEntityCollisonDisabled(this.handle);
    }
    set IsCollisionEnabled(value) {
        SetEntityCollision(this.handle, value, false);
    }
    set IsRecordingCollisions(value) {
        SetEntityRecordsCollisions(this.handle, value);
    }
    get Bones() {
        if (!this.bones) {
            this.bones = new _1.EntityBoneCollection(this);
        }
        return this.bones;
    }
    get AttachedBlip() {
        const handle = GetBlipFromEntity(this.handle);
        if (DoesBlipExist(handle)) {
            return new Blip_1.Blip(handle);
        }
        return null;
    }
    attachBlip() {
        return new Blip_1.Blip(AddBlipForEntity(this.handle));
    }
    setNoCollision(entity, toggle) {
        SetEntityNoCollisionEntity(this.handle, entity.Handle, toggle);
    }
    hasClearLosToEntity(entity, traceType = 17) {
        return !!HasEntityClearLosToEntity(this.handle, entity.Handle, traceType);
    }
    hasClearLosToEntityInFront(entity) {
        return !!HasEntityClearLosToEntityInFront(this.handle, entity.Handle);
    }
    hasBeenDamagedBy(entity) {
        return !!HasEntityBeenDamagedByEntity(this.handle, entity.Handle, true);
    }
    hasBeenDamagedByWeapon(weapon) {
        return !!HasEntityBeenDamagedByWeapon(this.handle, Number(weapon), 0);
    }
    hasBeenDamagedByAnyWeapon() {
        return !!HasEntityBeenDamagedByWeapon(this.handle, 0, 2);
    }
    hasBeenDamagedByAnyMeleeWeapon() {
        return !!HasEntityBeenDamagedByWeapon(this.handle, 0, 1);
    }
    clearLastWeaponDamage() {
        ClearEntityLastWeaponDamage(this.handle);
    }
    isInArea(minBounds, maxBounds) {
        return !!IsEntityInArea(this.handle, minBounds.x, minBounds.y, minBounds.z, maxBounds.x, maxBounds.y, maxBounds.z, false, false, 0);
    }
    isInAngledArea(origin, edge, angle) {
        return !!IsEntityInAngledArea(this.handle, origin.x, origin.y, origin.z, edge.x, edge.y, edge.z, angle, false, true, 0);
    }
    isInRangeOf(position, range) {
        const v = utils_1.Vector3.subtract(this.Position, position);
        return v.dotProduct(v) < range * range;
    }
    isNearEntity(entity, bounds) {
        return !!IsEntityAtEntity(this.handle, entity.Handle, bounds.x, bounds.y, bounds.z, false, true, 0);
    }
    isTouching(entity) {
        return !!IsEntityTouchingEntity(this.handle, entity.Handle);
    }
    isTouchingModel(model) {
        return !!IsEntityTouchingModel(this.handle, model.Hash);
    }
    getOffsetPosition(offset) {
        const o = GetOffsetFromEntityInWorldCoords(this.handle, offset.x, offset.y, offset.z);
        return new utils_1.Vector3(o[0], o[1], o[2]);
    }
    getPositionOffset(worldCoords) {
        const o = GetOffsetFromEntityGivenWorldCoords(this.handle, worldCoords.x, worldCoords.y, worldCoords.z);
        return new utils_1.Vector3(o[0], o[1], o[2]);
    }
    attachTo(entity, position, rotation) {
        AttachEntityToEntity(this.handle, entity.Handle, -1, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, false, false, false, false, 2, true);
    }
    attachToBone(entityBone, position, rotation) {
        AttachEntityToEntity(this.handle, entityBone.Owner.Handle, -1, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, false, false, false, false, 2, true);
    }
    detach() {
        DetachEntity(this.handle, true, true);
    }
    isAttached() {
        return !!IsEntityAttached(this.handle);
    }
    isAttachedTo(entity) {
        return !!IsEntityAttachedToEntity(this.handle, entity.Handle);
    }
    getEntityAttachedTo() {
        return Entity.fromHandle(GetEntityAttachedTo(this.handle));
    }
    applyForce(direction, rotation, forceType = enums_1.ForceType.MaxForceRot2) {
        ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, false, true, true, false, true);
    }
    applyForceRelative(direction, rotation, forceType = enums_1.ForceType.MaxForceRot2) {
        ApplyForceToEntity(this.handle, Number(forceType), direction.x, direction.y, direction.z, rotation.x, rotation.y, rotation.z, 0, true, true, true, false, true);
    }
    removeAllParticleEffects() {
        RemoveParticleFxFromEntity(this.handle);
    }
    exists() {
        return DoesEntityExist(this.handle) ? true : false;
    }
    delete() {
        if (this.handle !== Game_1.Game.PlayerPed.Handle) {
            SetEntityAsMissionEntity(this.handle, false, true);
            DeleteEntity(this.handle);
        }
    }
    markAsNoLongerNeeded() {
        SetEntityAsMissionEntity(this.Handle, false, true);
        SetEntityAsNoLongerNeeded(this.Handle);
    }
}
exports.Entity = Entity;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/EntityBone.js":
/*!*********************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/EntityBone.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityBone = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
class EntityBone {
    constructor(owner, boneIndex, boneName) {
        this.owner = owner;
        this.index = boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName);
    }
    get Index() {
        return this.index;
    }
    get Owner() {
        return this.owner;
    }
    get Position() {
        const coords = GetWorldPositionOfEntityBone(this.owner.Handle, this.index);
        return new utils_1.Vector3(coords[0], coords[1], coords[2]);
    }
    get IsValid() {
        return this.owner.exists() && this.index !== -1;
    }
}
exports.EntityBone = EntityBone;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/EntityBoneCollection.js":
/*!*******************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/EntityBoneCollection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EntityBoneCollection = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
class EntityBoneCollection {
    constructor(owner) {
        this._currentIndex = -1;
        this.owner = owner;
    }
    hasBone(name) {
        return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
    }
    get Core() {
        return new _1.EntityBone(this.owner, -1);
    }
}
exports.EntityBoneCollection = EntityBoneCollection;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/Ped.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/Ped.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ped = void 0;
const __1 = __webpack_require__(/*! ../ */ "../node_modules/fivem-js/lib/index.js");
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
class Ped extends _1.Entity {
    constructor(handle) {
        super(handle);
        this.speechModifierNames = [
            'SPEECH_PARAMS_STANDARD',
            'SPEECH_PARAMS_ALLOW_REPEAT',
            'SPEECH_PARAMS_BEAT',
            'SPEECH_PARAMS_FORCE',
            'SPEECH_PARAMS_FORCE_FRONTEND',
            'SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND',
            'SPEECH_PARAMS_FORCE_NORMAL',
            'SPEECH_PARAMS_FORCE_NORMAL_CLEAR',
            'SPEECH_PARAMS_FORCE_NORMAL_CRITICAL',
            'SPEECH_PARAMS_FORCE_SHOUTED',
            'SPEECH_PARAMS_FORCE_SHOUTED_CLEAR',
            'SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL',
            'SPEECH_PARAMS_FORCE_PRELOAD_ONLY',
            'SPEECH_PARAMS_MEGAPHONE',
            'SPEECH_PARAMS_HELI',
            'SPEECH_PARAMS_FORCE_MEGAPHONE',
            'SPEECH_PARAMS_FORCE_HELI',
            'SPEECH_PARAMS_INTERRUPT',
            'SPEECH_PARAMS_INTERRUPT_SHOUTED',
            'SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR',
            'SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL',
            'SPEECH_PARAMS_INTERRUPT_NO_FORCE',
            'SPEECH_PARAMS_INTERRUPT_FRONTEND',
            'SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND',
            'SPEECH_PARAMS_ADD_BLIP',
            'SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT',
            'SPEECH_PARAMS_ADD_BLIP_FORCE',
            'SPEECH_PARAMS_ADD_BLIP_SHOUTED',
            'SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE',
            'SPEECH_PARAMS_ADD_BLIP_INTERRUPT',
            'SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE',
            'SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED',
            'SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR',
            'SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL',
            'SPEECH_PARAMS_SHOUTED',
            'SPEECH_PARAMS_SHOUTED_CLEAR',
            'SPEECH_PARAMS_SHOUTED_CRITICAL',
        ];
    }
    static exists(ped) {
        return typeof ped !== 'undefined' && ped.exists();
    }
    get Health() {
        return super.Health - 100;
    }
    set Health(amount) {
        super.Health = amount + 100;
    }
    get MaxHealth() {
        return super.MaxHealth - 100;
    }
    set MaxHealth(amount) {
        super.MaxHealth = amount + 100;
    }
    get CurrentVehicle() {
        const veh = new _1.Vehicle(GetVehiclePedIsIn(this.handle, false));
        return veh.exists() ? veh : null;
    }
    get LastVehicle() {
        const veh = new _1.Vehicle(GetVehiclePedIsIn(this.handle, true));
        return veh.exists() ? veh : null;
    }
    get VehicleTryingToEnter() {
        const veh = new _1.Vehicle(GetVehiclePedIsTryingToEnter(this.handle));
        return veh.exists() ? veh : null;
    }
    get IsJumpingOutOfVehicle() {
        return !!IsPedJumpingOutOfVehicle(this.handle);
    }
    set StaysInVehicleWhenJacked(value) {
        SetPedStayInVehicleWhenJacked(this.handle, value);
    }
    set MaxDrivingSpeed(value) {
        SetDriveTaskMaxCruiseSpeed(this.handle, value);
    }
    get IsHuman() {
        return !!IsPedHuman(this.handle);
    }
    set IsEnemy(value) {
        SetPedAsEnemy(this.handle, value);
    }
    set IsPriorityTargetForEnemies(value) {
        SetEntityIsTargetPriority(this.handle, value, 0);
    }
    get IsPlayer() {
        return !!IsPedAPlayer(this.handle);
    }
    get IsCuffed() {
        return !!IsPedCuffed(this.handle);
    }
    get IsWearingHelmet() {
        return !!IsPedWearingHelmet(this.handle);
    }
    get IsRagdoll() {
        return !!IsPedRagdoll(this.handle);
    }
    get IsIdle() {
        return (!this.IsInjured &&
            !this.IsRagdoll &&
            !this.IsInAir &&
            !this.IsOnFire &&
            !this.IsDucking &&
            !this.IsGettingIntoAVehicle &&
            !this.IsInCombat &&
            !this.IsInMeleeCombat &&
            (!this.isInAnyVehicle() || this.isSittingInAnyVehicle()));
    }
    get IsProne() {
        return !!IsPedProne(this.handle);
    }
    set IsDucking(value) {
        SetPedDucking(this.handle, value);
    }
    get IsDucking() {
        return !!IsPedDucking(this.handle);
    }
    get IsGettingUp() {
        return !!IsPedGettingUp(this.handle);
    }
    get IsClimbing() {
        return !!IsPedClimbing(this.handle);
    }
    get IsJumping() {
        return !!IsPedJumping(this.handle);
    }
    get IsFalling() {
        return !!IsPedFalling(this.handle);
    }
    get IsStopped() {
        return !!IsPedStopped(this.handle);
    }
    get IsWalking() {
        return !!IsPedWalking(this.handle);
    }
    get IsRunning() {
        return !!IsPedRunning(this.handle);
    }
    get IsSprinting() {
        return !!IsPedSprinting(this.handle);
    }
    get IsDiving() {
        return !!IsPedDiving(this.handle);
    }
    get IsInParachuteFreeFall() {
        return !!IsPedInParachuteFreeFall(this.handle);
    }
    get IsSwimming() {
        return !!IsPedSwimming(this.handle);
    }
    get IsSwimmingUnderWater() {
        return !!IsPedSwimmingUnderWater(this.handle);
    }
    get IsVaulting() {
        return !!IsPedVaulting(this.handle);
    }
    get IsOnBike() {
        return !!IsPedOnAnyBike(this.handle);
    }
    get IsOnFoot() {
        return !!IsPedOnFoot(this.handle);
    }
    get IsInSub() {
        return !!IsPedInAnySub(this.handle);
    }
    get IsInTaxi() {
        return !!IsPedInAnyTaxi(this.handle);
    }
    get IsInTrain() {
        return !!IsPedInAnyTrain(this.handle);
    }
    get IsInHeli() {
        return !!IsPedInAnyHeli(this.handle);
    }
    get IsInPlane() {
        return !!IsPedInAnyPlane(this.handle);
    }
    get IsInFlyingVehicle() {
        return !!IsPedInFlyingVehicle(this.handle);
    }
    get IsInBoat() {
        return !!IsPedInAnyBoat(this.handle);
    }
    get IsInPoliceVehicle() {
        return !!IsPedInAnyPoliceVehicle(this.handle);
    }
    get IsJacking() {
        return !!IsPedJacking(this.handle);
    }
    get IsBeingJacked() {
        return !!IsPedBeingJacked(this.handle);
    }
    get IsGettingIntoAVehicle() {
        return !!IsPedGettingIntoAVehicle(this.handle);
    }
    get IsTryingToEnterALockedVehicle() {
        return !!IsPedTryingToEnterALockedVehicle(this.handle);
    }
    get IsInjured() {
        return !!IsPedInjured(this.handle);
    }
    get IsFleeing() {
        return !!IsPedFleeing(this.handle);
    }
    get IsInCombat() {
        return !!IsPedInCombat(this.handle, PlayerPedId());
    }
    get IsInMeleeCombat() {
        return !!IsPedInMeleeCombat(this.handle);
    }
    get IsInStealthMode() {
        return !!GetPedStealthMovement(this.handle);
    }
    get IsAmbientSpeechPlaying() {
        return !!IsAmbientSpeechPlaying(this.handle);
    }
    get IsScriptedSpeechPlaying() {
        return !!IsScriptedSpeechPlaying(this.handle);
    }
    get IsAnySpeechPlaying() {
        return !!IsAnySpeechPlaying(this.handle);
    }
    get IsAmbientSpeechEnabled() {
        return !IsAmbientSpeechDisabled(this.handle);
    }
    set IsPainAudioEnabled(value) {
        DisablePedPainAudio(this.handle, !value);
    }
    get IsPlantingBomb() {
        return !!IsPedPlantingBomb(this.handle);
    }
    get IsShooting() {
        return !!IsPedShooting(this.handle);
    }
    get IsReloading() {
        return !!IsPedReloading(this.handle);
    }
    get IsDoingDriveby() {
        return !!IsPedDoingDriveby(this.handle);
    }
    get IsGoingIntoCover() {
        return !!IsPedGoingIntoCover(this.handle);
    }
    get IsBeingStunned() {
        return !!IsPedBeingStunned(this.handle, 0);
    }
    get IsBeingStealthKilled() {
        return !!IsPedBeingStealthKilled(this.handle);
    }
    get IsPerformingStealthKill() {
        return !!IsPedPerformingStealthKill(this.handle);
    }
    get IsAimingFromCover() {
        return !!IsPedAimingFromCover(this.handle);
    }
    isInCover(expectUseWeapon = false) {
        return !!IsPedInCover(this.handle, expectUseWeapon);
    }
    get IsInCoverFacingLeft() {
        return !!IsPedInCoverFacingLeft(this.handle);
    }
    set FiringPattern(value) {
        SetPedFiringPattern(this.handle, value);
    }
    set DropsWeaponsOnDeath(value) {
        SetPedDropsWeaponsWhenDead(this.handle, value);
    }
    set DrivingSpeed(value) {
        SetDriveTaskCruiseSpeed(this.handle, value);
    }
    set DrivingStyle(style) {
        SetDriveTaskDrivingStyle(this.handle, Number(style));
    }
    isInAnyVehicle() {
        return !!IsPedInAnyVehicle(this.handle, false);
    }
    isInVehicle(vehicle) {
        return !!IsPedInVehicle(this.handle, vehicle.Handle, false);
    }
    isSittingInAnyVehicle() {
        return !!IsPedSittingInAnyVehicle(this.handle);
    }
    isSittingInVehicle(vehicle) {
        return !!IsPedSittingInVehicle(this.handle, vehicle.Handle);
    }
    setIntoVehicle(vehicle, seat) {
        SetPedIntoVehicle(this.handle, vehicle.Handle, Number(seat));
    }
    isHeadtracking(entity) {
        return !!IsPedHeadtrackingEntity(this.handle, entity.Handle);
    }
    isInCombatAgainst(target) {
        return !!IsPedInCombat(this.handle, target.Handle);
    }
    getJacker() {
        return new Ped(GetPedsJacker(this.handle));
    }
    getJackTarget() {
        return new Ped(GetJackTarget(this.handle));
    }
    getMeleeTarget() {
        return new Ped(GetMeleeTargetForPed(this.handle));
    }
    getKiller() {
        return _1.Entity.fromHandle(GetPedSourceOfDeath(this.handle));
    }
    kill() {
        this.Health = -1;
    }
    resurrect() {
        const maxHealth = this.Health;
        const isCollisionEnabled = super.IsCollisionEnabled;
        ResurrectPed(this.handle);
        this.MaxHealth = maxHealth;
        this.Health = maxHealth;
        super.IsCollisionEnabled = isCollisionEnabled;
        ClearPedTasksImmediately(this.handle);
    }
    resetVisibleDamage() {
        ResetPedVisibleDamage(this.handle);
    }
    clearBloodDamage() {
        ClearPedBloodDamage(this.handle);
    }
    // TODO: Add RelationshipGroup
    get IsInGroup() {
        return !!IsPedInGroup(this.handle);
    }
    set NeverLeavesGroup(value) {
        SetPedNeverLeavesGroup(this.handle, value);
    }
    leaveGroup() {
        RemovePedFromGroup(this.handle);
    }
    playAmbientSpeed(speechName, voiceName = '', modifier = enums_1.SpeechModifier.Standard) {
        if (Number(modifier) >= 0 && Number(modifier) < this.speechModifierNames.length) {
            if (voiceName === '') {
                PlayAmbientSpeech1(this.handle, speechName, this.speechModifierNames[Number(modifier)]);
            }
            else {
                PlayAmbientSpeechWithVoice(this.handle, speechName, voiceName, this.speechModifierNames[Number(modifier)], false);
            }
        }
        else {
            throw new RangeError('modifier');
        }
    }
    applyDamage(damageAmount) {
        ApplyDamageToPed(this.handle, damageAmount, true);
    }
    hasBeenDamagedByWeapon(weapon) {
        return !!HasPedBeenDamagedByWeapon(this.handle, Number(weapon), 0);
    }
    hasBeenDamagedByAnyWeapon() {
        return !!HasPedBeenDamagedByWeapon(this.handle, 0, 2);
    }
    hasBeenDamagedByAnyMeleeWeapon() {
        return !!HasPedBeenDamagedByWeapon(this.handle, 0, 1);
    }
    clearLastWeaponDamage() {
        ClearPedLastWeaponDamage(this.handle);
    }
    get Bones() {
        if (this.pedBones === null) {
            this.pedBones = new _1.PedBoneCollection(this);
        }
        return this.pedBones;
    }
    giveWeapon(weapon, ammoCount = 999, isHidden = false, equipNow = true) {
        GiveWeaponToPed(this.handle, weapon, ammoCount, isHidden, equipNow);
    }
    removeWeapon(weapon) {
        RemoveWeaponFromPed(this.handle, weapon);
    }
    removeAllWeapons() {
        RemoveAllPedWeapons(this.handle, true);
    }
    getLastWeaponImpactPosition() {
        const position = GetPedLastWeaponImpactCoord(this.handle);
        return new __1.Vector3(position[0], position[1][0], position[1][1]); // Does this work?
    }
    get CanRagdoll() {
        return !!CanPedRagdoll(this.handle);
    }
    set CanRagdoll(value) {
        SetPedCanRagdoll(this.handle, value);
    }
    ragdoll(duration = -1, ragdollType = enums_1.RagdollType.Normal) {
        this.CanRagdoll = true;
        SetPedToRagdoll(this.handle, duration, duration, Number(ragdollType), false, false, false);
    }
    cancelRagdoll() {
        SetPedToRagdoll(this.handle, 1, 1, 1, false, false, false);
    }
    giveHelmet(canBeRemovedByPed, helmetType, textureIndex) {
        GivePedHelmet(this.handle, !canBeRemovedByPed, Number(helmetType), textureIndex);
    }
    removeHelmet(instantly) {
        RemovePedHelmet(this.handle, instantly);
    }
    openParachute() {
        ForcePedToOpenParachute(this.handle);
    }
    getConfigFlag(flagId) {
        return !!GetPedConfigFlag(this.handle, flagId, true);
    }
    setConfigFlag(flagId, value) {
        SetPedConfigFlag(this.handle, flagId, value);
    }
    resetConfigFlag(flagId) {
        SetPedResetFlag(this.handle, flagId, true);
    }
    clone(heading) {
        return new Ped(ClonePed(this.handle, heading, false, false));
    }
    exists(ped = null) {
        if (ped === null) {
            return super.exists() && GetEntityType(this.handle) === 1;
        }
        return ped.exists();
    }
}
exports.Ped = Ped;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/PedBone.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/PedBone.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PedBone = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
class PedBone extends _1.EntityBone {
    constructor(owner, boneId) {
        super(owner, GetPedBoneIndex(owner.Handle, Number(boneId)));
    }
    get IsValid() {
        return _1.Ped.exists(this.Owner) && this.Index !== -1;
    }
}
exports.PedBone = PedBone;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/PedBoneCollection.js":
/*!****************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/PedBoneCollection.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PedBoneCollection = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
class PedBoneCollection extends _1.EntityBoneCollection {
    constructor(owner) {
        super(owner);
    }
    get Core() {
        return new _1.PedBone(this.owner, -1);
    }
    get LastDamaged() {
        // const for now until native tested
        const outBone = 0;
        // This native may be returning an object instead (bool, outBone)
        if (GetPedLastDamageBone(this.owner.Handle, outBone)) {
            return this[outBone];
        }
    }
    clearLastDamaged() {
        ClearPedLastDamageBone(this.owner.Handle);
    }
}
exports.PedBoneCollection = PedBoneCollection;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/Player.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/Player.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
class Player {
    constructor(handle) {
        this.handle = handle;
        this.PvPEnabled = true;
    }
    get Handle() {
        return this.handle;
    }
    get Character() {
        const handle = GetPlayerPed(this.handle);
        if (typeof this.ped === 'undefined' || handle !== this.ped.Handle) {
            this.ped = new _1.Ped(handle);
        }
        return this.ped;
    }
    get Name() {
        return GetPlayerName(this.handle);
    }
    get PvPEnabled() {
        return this.pvp;
    }
    set PvPEnabled(value) {
        NetworkSetFriendlyFireOption(value);
        SetCanAttackFriendly(this.Character.Handle, value, value);
        this.pvp = value;
    }
}
exports.Player = Player;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/Prop.js":
/*!***************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/Prop.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Prop = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
class Prop extends _1.Entity {
    static exists(prop) {
        return typeof prop !== 'undefined' && prop.exists();
    }
    constructor(handle) {
        super(handle);
    }
    exists() {
        return super.exists() && GetEntityType(this.handle) === 3;
    }
    placeOnGround() {
        PlaceObjectOnGroundProperly(this.handle);
    }
}
exports.Prop = Prop;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/Vehicle.js":
/*!******************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/Vehicle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vehicle = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/models/index.js");
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const Game_1 = __webpack_require__(/*! ../Game */ "../node_modules/fivem-js/lib/Game.js");
class Vehicle extends _1.Entity {
    constructor(handle) {
        super(handle);
    }
    static getModelDisplayName(vehicleModel) {
        return GetDisplayNameFromVehicleModel(vehicleModel.Hash);
    }
    static getModelClass(vehicleModel) {
        return GetVehicleClassFromName(vehicleModel.Hash);
    }
    static getClassDisplayName(vehicleClass) {
        return `VEH_CLASS_${vehicleClass}`;
    }
    static exists(vehicle) {
        return typeof vehicle !== 'undefined' && vehicle.exists();
    }
    exists() {
        return super.exists() && GetEntityType(this.handle) === 2;
    }
    get DisplayName() {
        return Vehicle.getModelDisplayName(this.Model);
    }
    get ClassDisplayName() {
        return Vehicle.getClassDisplayName(this.ClassType);
    }
    get NumberPlate() {
        return GetVehicleNumberPlateText(this.handle);
    }
    set NumberPlate(value) {
        SetVehicleNumberPlateText(this.handle, value.substring(0, 8));
    }
    get ClassType() {
        return GetVehicleClass(this.handle);
    }
    get BodyHealth() {
        return GetVehicleBodyHealth(this.handle);
    }
    set BodyHealth(value) {
        SetVehicleBodyHealth(this.handle, value);
    }
    get EngineHealth() {
        return GetVehicleEngineHealth(this.handle);
    }
    set EngineHealth(value) {
        SetVehicleEngineHealth(this.handle, value);
    }
    get PetrolTankHealth() {
        return GetVehiclePetrolTankHealth(this.handle);
    }
    set PetrolTankHealth(value) {
        SetVehiclePetrolTankHealth(this.handle, value);
    }
    get FuelLevel() {
        return GetVehicleFuelLevel(this.handle);
    }
    set FuelLevel(value) {
        SetVehicleFuelLevel(this.handle, value);
    }
    get OilLevel() {
        return GetVehicleOilLevel(this.handle);
    }
    set OilLevel(value) {
        SetVehicleOilLevel(this.handle, value);
    }
    get Gravity() {
        return GetVehicleGravityAmount(this.handle);
    }
    set Gravity(value) {
        SetVehicleGravityAmount(this.handle, value);
    }
    get IsEngineRunning() {
        return !!GetIsVehicleEngineRunning(this.handle);
    }
    set IsEngineRunning(value) {
        SetVehicleEngineOn(this.handle, value, true, true);
    }
    get IsEngineStarting() {
        return !!IsVehicleEngineStarting(this.handle);
    }
    set IsEngineStarting(value) {
        if ((this.IsEngineStarting || this.IsEngineRunning) && value) {
            return;
        }
        SetVehicleEngineOn(this.handle, value, !value, true);
    }
    get IsRadioEnabled() {
        if (Game_1.Game.Player.Character.isInVehicle(this)) {
            return !!IsPlayerVehicleRadioEnabled();
        }
        return false;
    }
    set IsRadioEnabled(value) {
        SetVehicleRadioEnabled(this.handle, value);
    }
    set RadioStation(value) {
        this.IsRadioEnabled = true;
        SetVehRadioStation(this.handle, value);
    }
    get Speed() {
        return GetEntitySpeed(this.handle);
    }
    set Speed(value) {
        if (this.Model.IsTrain) {
            SetTrainSpeed(this.handle, value);
            SetTrainCruiseSpeed(this.handle, value);
        }
        else {
            SetVehicleForwardSpeed(this.handle, value);
        }
    }
    get WheelSpeed() {
        return GetVehicleDashboardSpeed(this.handle);
    }
    get Acceleration() {
        return GetVehicleCurrentAcceleration(this.handle);
    }
    get CurrentRPM() {
        return GetVehicleCurrentRpm(this.handle);
    }
    set CurrentRPM(value) {
        SetVehicleCurrentRpm(this.handle, value);
    }
    get HighGear() {
        return GetVehicleHighGear(this.handle);
    }
    set HighGear(value) {
        SetVehicleHighGear(this.handle, value);
    }
    get CurrentGear() {
        return GetVehicleCurrentGear(this.handle);
    }
    get SteeringAngle() {
        return GetVehicleSteeringAngle(this.handle);
    }
    set SteeringAngle(value) {
        SetVehicleSteeringAngle(this.handle, value);
    }
    get SteeringScale() {
        return GetVehicleSteeringScale(this.handle);
    }
    set SteeringScale(value) {
        SetVehicleSteeringScale(this.handle, value);
    }
    get IsAlarmSet() {
        return !!IsVehicleAlarmSet(this.handle);
    }
    set IsAlarmSet(value) {
        SetVehicleAlarm(this.handle, value);
    }
    get IsAlarmSounding() {
        return !!IsVehicleAlarmActivated(this.handle);
    }
    get AlarmTimeLeft() {
        return GetVehicleAlarmTimeLeft(this.handle);
    }
    set AlarmTimeLeft(value) {
        SetVehicleAlarmTimeLeft(this.handle, value);
    }
    startAlarm() {
        StartVehicleAlarm(this.handle);
    }
    get IsSirenActive() {
        return !!IsVehicleSirenOn(this.handle);
    }
    set IsSirenActive(value) {
        SetVehicleSiren(this.handle, value);
    }
    set IsSirenSilent(value) {
        DisableVehicleImpactExplosionActivation(this.handle, value);
    }
    soundHorn(duration) {
        StartVehicleHorn(this.handle, duration, Game_1.Game.generateHash('HELDDOWN'), false);
    }
    get IsWanted() {
        return !!IsVehicleWanted(this.handle);
    }
    set IsWanted(value) {
        SetVehicleIsWanted(this.handle, value);
    }
    set ProvidesCover(value) {
        SetVehicleProvidesCover(this.handle, value);
    }
    set DropsMoneyOnExplosion(value) {
        SetVehicleCreatesMoneyPickupsWhenExploded(this.handle, value);
    }
    get PreviouslyOwnedByPlayer() {
        return !!IsVehiclePreviouslyOwnedByPlayer(this.handle);
    }
    set PreviouslyOwnedByPlayer(value) {
        SetVehicleHasBeenOwnedByPlayer(this.handle, value);
    }
    get NeedsToBeHotwired() {
        return !!IsVehicleNeedsToBeHotwired(this.handle);
    }
    set NeedsToBeHotwired(value) {
        SetVehicleNeedsToBeHotwired(this.handle, value);
    }
    get AreLightsOn() {
        return !!GetVehicleLightsState(this.handle)[0];
    }
    set AreLightsOn(value) {
        SetVehicleLights(this.handle, value ? 3 : 4);
    }
    get AreHighBeamsOn() {
        return !!GetVehicleLightsState(this.handle)[1];
    }
    set AreHighBeamsOn(value) {
        SetVehicleFullbeam(this.handle, value);
    }
    get IsInteriorLightOn() {
        return !!IsVehicleInteriorLightOn(this.handle);
    }
    set IsInteriorLightOn(value) {
        SetVehicleInteriorlight(this.handle, value);
    }
    get IsSearchLightOn() {
        return !!IsVehicleSearchlightOn(this.handle);
    }
    set IsSearchLightOn(value) {
        SetVehicleSearchlight(this.handle, value, false);
    }
    get IsTaxiLightOn() {
        return !!IsTaxiLightOn(this.handle);
    }
    set IsTaxiLightOn(value) {
        SetTaxiLights(this.handle, value);
    }
    get IsLeftIndicatorLightOn() {
        const val = GetVehicleIndicatorLights(this.handle);
        return val === 1 || val === 3;
    }
    set IsLeftIndicatorLightOn(value) {
        SetVehicleIndicatorLights(this.handle, 1, value);
    }
    get IsRightIndicatorLightOn() {
        return GetVehicleIndicatorLights(this.handle) >= 2;
    }
    set IsRightIndicatorLightOn(value) {
        SetVehicleIndicatorLights(this.handle, 0, value);
    }
    get IsHandbrakeForcedOn() {
        return !!GetVehicleHandbrake(this.handle);
    }
    set IsHandbrakeForcedOn(value) {
        SetVehicleHandbrake(this.handle, value);
    }
    set AreBrakeLightsOn(value) {
        SetVehicleBrakeLights(this.handle, value);
    }
    set LightsMultiplier(value) {
        SetVehicleLightMultiplier(this.handle, value);
    }
    set CanBeVisiblyDamaged(value) {
        SetVehicleCanBeVisiblyDamaged(this.handle, value);
    }
    set Strong(toggle) {
        SetVehicleStrong(this.handle, toggle);
    }
    set CanBreak(toggle) {
        SetVehicleCanBreak(this.handle, toggle);
    }
    get IsDamaged() {
        return !!IsVehicleDamaged(this.handle);
    }
    get IsDriveable() {
        return !!IsVehicleDriveable(this.handle, false);
    }
    set IsDriveable(value) {
        SetVehicleUndriveable(this.handle, value);
    }
    get IsEngineOnFire() {
        return !!IsVehicleEngineOnFire(this.handle);
    }
    get HasRoof() {
        return !!DoesVehicleHaveRoof(this.handle);
    }
    get IsLeftHeadLightBroken() {
        return !!GetIsLeftVehicleHeadlightDamaged(this.handle);
    }
    get IsRightHeadLightBroken() {
        return !!GetIsRightVehicleHeadlightDamaged(this.handle);
    }
    get IsRearBumperBrokenOff() {
        return !!IsVehicleBumperBrokenOff(this.handle, false);
    }
    get IsFrontBumperBrokenOff() {
        return !!IsVehicleBumperBrokenOff(this.handle, true);
    }
    set IsAxlesStrong(value) {
        SetVehicleHasStrongAxles(this.handle, value);
    }
    set CanEngineDegrade(value) {
        SetVehicleEngineCanDegrade(this.handle, value);
    }
    set EnginePowerMultiplier(value) {
        SetVehicleEnginePowerMultiplier(this.handle, value);
    }
    set EngineTorqueMultiplier(value) {
        SetVehicleEngineTorqueMultiplier(this.handle, value);
    }
    get LandingGearState() {
        return GetLandingGearState(this.handle);
    }
    set LandingGearState(value) {
        SetVehicleLandingGear(this.handle, value);
    }
    get RoofState() {
        return GetConvertibleRoofState(this.handle);
    }
    set RoofState(value) {
        switch (value) {
            case enums_1.VehicleRoofState.Closed:
                RaiseConvertibleRoof(this.handle, true);
                RaiseConvertibleRoof(this.handle, false);
                break;
            case enums_1.VehicleRoofState.Closing:
                RaiseConvertibleRoof(this.handle, false);
                break;
            case enums_1.VehicleRoofState.Opened:
                LowerConvertibleRoof(this.handle, true);
                LowerConvertibleRoof(this.handle, false);
                break;
            case enums_1.VehicleRoofState.Opening:
                LowerConvertibleRoof(this.handle, false);
                break;
        }
    }
    get LockStatus() {
        return GetVehicleDoorLockStatus(this.handle);
    }
    set LockStatus(value) {
        SetVehicleDoorsLocked(this.handle, value);
    }
    get MaxBraking() {
        return GetVehicleMaxBraking(this.handle);
    }
    get MaxTraction() {
        return GetVehicleMaxTraction(this.handle);
    }
    get IsOnAllWheels() {
        return !!IsVehicleOnAllWheels(this.handle);
    }
    get IsStopped() {
        return !!IsVehicleStopped(this.handle);
    }
    get IsStoppedAtTrafficLights() {
        return !!IsVehicleStoppedAtTrafficLights(this.handle);
    }
    get IsStolen() {
        return !!IsVehicleStolen(this.handle);
    }
    set IsStolen(value) {
        SetVehicleIsStolen(this.handle, value);
    }
    get IsConvertible() {
        return !!IsVehicleAConvertible(this.handle, false);
    }
    set IsBurnoutForced(value) {
        SetVehicleBurnout(this.handle, value);
    }
    get IsInBurnout() {
        return !!IsVehicleInBurnout(this.handle);
    }
    get Driver() {
        return this.getPedOnSeat(enums_1.VehicleSeat.Driver);
    }
    get Occupants() {
        const driver = this.Driver;
        if (!_1.Ped.exists(driver)) {
            return this.Passengers;
        }
        return [driver, ...this.Passengers];
    }
    get Passengers() {
        const passengerCount = this.PassengerCount;
        if (passengerCount === 0) {
            return;
        }
        const result = [];
        for (let i = 0; i < this.PassengerCapacity; i++) {
            if (!this.isSeatFree(i)) {
                result.push(this.getPedOnSeat(i));
                if (result.length === passengerCount) {
                    break;
                }
            }
        }
        return result;
    }
    get Doors() {
        if (!this._doors) {
            this._doors = new _1.VehicleDoorCollection(this);
        }
        return this._doors;
    }
    get Mods() {
        if (!this._mods) {
            this._mods = new _1.VehicleModCollection(this);
        }
        return this._mods;
    }
    get Wheels() {
        if (!this._wheels) {
            this._wheels = new _1.VehicleWheelCollection(this);
        }
        return this._wheels;
    }
    get Windows() {
        if (!this._windows) {
            this._windows = new _1.VehicleWindowCollection(this);
        }
        return this._windows;
    }
    extraExists(extra) {
        return !!DoesExtraExist(this.handle, extra);
    }
    isExtraOn(extra) {
        return this.extraExists(extra) ? !!IsVehicleExtraTurnedOn(this.handle, extra) : false;
    }
    toggleExtra(extra, toggle) {
        if (this.extraExists(extra)) {
            SetVehicleExtra(this.handle, extra, !toggle);
        }
    }
    getPedOnSeat(seat) {
        return new _1.Ped(GetPedInVehicleSeat(this.handle, seat));
    }
    isSeatFree(seat) {
        return !!IsVehicleSeatFree(this.handle, seat);
    }
    wash() {
        this.DirtLevel = 0;
    }
    get DirtLevel() {
        return GetVehicleDirtLevel(this.handle);
    }
    set DirtLevel(value) {
        SetVehicleDirtLevel(this.handle, value);
    }
    placeOnGround() {
        SetVehicleOnGroundProperly(this.handle);
    }
    repair() {
        SetVehicleFixed(this.handle);
    }
    explode() {
        ExplodeVehicle(this.handle, true, false);
    }
    explodeNetworked() {
        NetworkExplodeVehicle(this.handle, true, false, false);
    }
    get CanTiresBurst() {
        return !!GetVehicleTyresCanBurst(this.handle);
    }
    set CanTiresBurst(value) {
        SetVehicleTyresCanBurst(this.handle, value);
    }
    set CanWheelsBreak(value) {
        SetVehicleWheelsCanBreak(this.handle, value);
    }
    set CanDeformWheels(value) {
        SetVehicleCanDeformWheels(this.handle, value);
    }
    get HasBombBay() {
        return this.Bones.hasBone('door_hatch_1') && this.Bones.hasBone('door_hatch_r');
    }
    openBombBay() {
        if (this.HasBombBay) {
            OpenBombBayDoors(this.handle);
        }
    }
    closeBombBay() {
        if (this.HasBombBay) {
            CloseBombBayDoors(this.handle);
        }
    }
    setHeliYawPitchRollMult(mult) {
        if (this.Model.IsHelicopter && mult >= 0 && mult <= 1) {
            SetHelicopterRollPitchYawMult(this.handle, mult);
        }
    }
    set TowingCraneRaisedAmount(value) {
        SetTowTruckCraneHeight(this.handle, value);
    }
    get TowedVehicle() {
        return new Vehicle(GetEntityAttachedToTowTruck(this.handle));
    }
    towVehicle(vehicle, rear) {
        AttachVehicleToTowTruck(this.handle, vehicle.Handle, rear, 0, 0, 0);
    }
    detachFromTowTruck() {
        DetachVehicleFromAnyTowTruck(this.handle);
    }
    detachTowedVehicle() {
        const vehicle = this.TowedVehicle;
        if (Vehicle.exists(this.TowedVehicle)) {
            DetachVehicleFromTowTruck(this.handle, vehicle.Handle);
        }
    }
    deform(position, damageAmount, radius) {
        SetVehicleDamage(this.handle, position.x, position.y, position.z, damageAmount, radius, false);
    }
    get PassengerCapacity() {
        return GetVehicleMaxNumberOfPassengers(this.handle);
    }
    get PassengerCount() {
        return GetVehicleNumberOfPassengers(this.handle);
    }
    set RespotTimer(time) {
        SetNetworkVehicleRespotTimer(this.NetworkId, time);
    }
}
exports.Vehicle = Vehicle;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleDoor.js":
/*!**********************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleDoor.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleDoor = void 0;
class VehicleDoor {
    constructor(owner, index) {
        this._owner = owner;
        this.Index = index;
    }
    get Index() {
        return this._index;
    }
    set Index(index) {
        this._index = index;
    }
    get AngleRatio() {
        return GetVehicleDoorAngleRatio(this._owner.Handle, this.Index);
    }
    set AngleRatio(value) {
        SetVehicleDoorControl(this._owner.Handle, this.Index, 1, value);
    }
    set CanBeBroken(value) {
        SetVehicleDoorBreakable(this._owner.Handle, this.Index, value);
    }
    get IsOpen() {
        return this.AngleRatio > 0;
    }
    get IsFullyOpen() {
        return !!IsVehicleDoorFullyOpen(this._owner.Handle, this.Index);
    }
    get IsBroken() {
        return !!IsVehicleDoorDamaged(this._owner.Handle, this.Index);
    }
    get Vehicle() {
        return this._owner;
    }
    open(loose = false, instantly = false) {
        SetVehicleDoorOpen(this._owner.Handle, this.Index, loose, instantly);
    }
    close(instantly = false) {
        SetVehicleDoorShut(this._owner.Handle, this.Index, instantly);
    }
    break(stayInTheWorld = true) {
        SetVehicleDoorBroken(this._owner.Handle, this.Index, stayInTheWorld);
    }
}
exports.VehicleDoor = VehicleDoor;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleDoorCollection.js":
/*!********************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleDoorCollection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleDoorCollection = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const VehicleDoor_1 = __webpack_require__(/*! ./VehicleDoor */ "../node_modules/fivem-js/lib/models/VehicleDoor.js");
class VehicleDoorCollection {
    constructor(owner) {
        this._vehicleDoors = new Map();
        this._owner = owner;
    }
    getDoors(index) {
        if (!this._vehicleDoors.has(index)) {
            this._vehicleDoors.set(index, new VehicleDoor_1.VehicleDoor(this._owner, index));
        }
        return this._vehicleDoors.get(index);
    }
    getAllDoors() {
        return Object.keys(enums_1.VehicleDoorIndex)
            .filter(key => !isNaN(Number(key)))
            .map(key => {
            const index = Number(key);
            if (this.hasDoor(index)) {
                return this.getDoors(index);
            }
            return null;
        })
            .filter(d => d);
    }
    openAllDoors(loose, instantly) {
        this.getAllDoors().forEach(door => {
            door.open(loose, instantly);
        });
    }
    closeAllDoors(instantly) {
        this.getAllDoors().forEach(door => {
            door.close(instantly);
        });
    }
    breakAllDoors(stayInTheWorld) {
        this.getAllDoors().forEach(door => {
            door.break(stayInTheWorld);
        });
    }
    hasDoor(index) {
        switch (index) {
            case enums_1.VehicleDoorIndex.FrontLeftDoor:
                return this._owner.Bones.hasBone('door_dside_f');
            case enums_1.VehicleDoorIndex.FrontRightDoor:
                return this._owner.Bones.hasBone('door_pside_f');
            case enums_1.VehicleDoorIndex.BackLeftDoor:
                return this._owner.Bones.hasBone('door_dside_r');
            case enums_1.VehicleDoorIndex.BackRightDoor:
                return this._owner.Bones.hasBone('door_pside_r');
            case enums_1.VehicleDoorIndex.Hood:
                return this._owner.Bones.hasBone('bonnet');
            case enums_1.VehicleDoorIndex.Trunk:
                return this._owner.Bones.hasBone('boot');
        }
        return false;
    }
}
exports.VehicleDoorCollection = VehicleDoorCollection;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleMod.js":
/*!*********************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleMod.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleMod = void 0;
class VehicleMod {
    constructor(owner, modType) {
        this._owner = owner;
        this.ModType = modType;
    }
    get ModType() {
        return this._modType;
    }
    set ModType(modType) {
        this._modType = modType;
    }
    get Index() {
        return GetVehicleMod(this._owner.Handle, this.ModType);
    }
    set Index(value) {
        SetVehicleMod(this._owner.Handle, this.ModType, value, this.Variation);
    }
    get Variation() {
        return !!GetVehicleModVariation(this._owner.Handle, this.ModType);
    }
    set Variation(value) {
        SetVehicleMod(this._owner.Handle, this.ModType, this.Index, value);
    }
    get ModCount() {
        return GetNumVehicleMods(this._owner.Handle, this.ModType);
    }
    get Vehicle() {
        return this._owner;
    }
    remove() {
        RemoveVehicleMod(this._owner.Handle, this.ModType);
    }
}
exports.VehicleMod = VehicleMod;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleModCollection.js":
/*!*******************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleModCollection.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleModCollection = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const VehicleMod_1 = __webpack_require__(/*! ./VehicleMod */ "../node_modules/fivem-js/lib/models/VehicleMod.js");
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const VehicleToggleMod_1 = __webpack_require__(/*! ./VehicleToggleMod */ "../node_modules/fivem-js/lib/models/VehicleToggleMod.js");
class VehicleModCollection {
    constructor(owner) {
        this._vehicleMods = new Map();
        this._vehicleToggleMods = new Map();
        this._owner = owner;
    }
    hasVehicleMod(type) {
        return GetNumVehicleMods(this._owner.Handle, type) > 0;
    }
    getMod(modType) {
        if (!this._vehicleMods.has(modType)) {
            this._vehicleMods.set(modType, new VehicleMod_1.VehicleMod(this._owner, modType));
        }
        return this._vehicleMods.get(modType);
    }
    getToggleMod(modType) {
        if (!this._vehicleToggleMods.has(modType)) {
            this._vehicleToggleMods.set(modType, new VehicleToggleMod_1.VehicleToggleMod(this._owner, modType));
        }
        return this._vehicleToggleMods.get(modType);
    }
    getAllMods() {
        return Object.keys(enums_1.VehicleModType)
            .filter(key => !isNaN(Number(key)))
            .map(key => {
            const index = Number(key);
            if (this.hasVehicleMod(index)) {
                return this.getMod(index);
            }
            return null;
        })
            .filter(m => m);
    }
    get WheelType() {
        return GetVehicleWheelType(this._owner.Handle);
    }
    set WheelType(type) {
        SetVehicleWheelType(this._owner.Handle, type);
    }
    installModKit() {
        SetVehicleModKit(this._owner.Handle, 0);
    }
    get Livery() {
        const modCount = this.getMod(enums_1.VehicleModType.Livery).ModCount;
        if (modCount > 0) {
            return this.getMod(enums_1.VehicleModType.Livery).Index;
        }
        return GetVehicleLivery(this._owner.Handle);
    }
    set Livery(value) {
        if (this.getMod(enums_1.VehicleModType.Livery).ModCount > 0) {
            this.getMod(enums_1.VehicleModType.Livery).Index = value;
        }
        else {
            SetVehicleLivery(this._owner.Handle, value);
        }
    }
    get LiveryCount() {
        const modCount = this.getMod(enums_1.VehicleModType.Livery).ModCount;
        if (modCount > 0) {
            return modCount;
        }
        return GetVehicleLiveryCount(this._owner.Handle);
    }
    get WindowTint() {
        return GetVehicleWindowTint(this._owner.Handle);
    }
    set WindowTint(tint) {
        SetVehicleWindowTint(this._owner.Handle, tint);
    }
    get PrimaryColor() {
        return GetVehicleColours(this._owner.Handle)[0];
    }
    set PrimaryColor(color) {
        SetVehicleColours(this._owner.Handle, color, this.SecondaryColor);
    }
    get SecondaryColor() {
        return GetVehicleColours(this._owner.Handle)[1];
    }
    set SecondaryColor(color) {
        SetVehicleColours(this._owner.Handle, this.PrimaryColor, color);
    }
    get RimColor() {
        return GetVehicleExtraColours(this._owner.Handle)[1];
    }
    set RimColor(color) {
        SetVehicleExtraColours(this._owner.Handle, this.PearlescentColor, color);
    }
    get PearlescentColor() {
        return GetVehicleExtraColours(this._owner.Handle)[0];
    }
    set PearlescentColor(color) {
        SetVehicleExtraColours(this._owner.Handle, color, this.RimColor);
    }
    set TrimColor(color) {
        SetVehicleInteriorColour(this._owner.Handle, color);
    }
    set DashboardColor(color) {
        SetVehicleDashboardColour(this._owner.Handle, color);
    }
    setModColor1(paintType, color) {
        SetVehicleModColor_1(this._owner.Handle, paintType, color, 0);
    }
    setModColor2(paintType, color) {
        SetVehicleModColor_2(this._owner.Handle, paintType, color);
    }
    get ColorCombination() {
        return GetVehicleColourCombination(this._owner.Handle);
    }
    set ColorCombination(value) {
        SetVehicleColourCombination(this._owner.Handle, value);
    }
    get ColorCombinationCount() {
        return GetNumberOfVehicleColours(this._owner.Handle);
    }
    get TireSmokeColor() {
        const color = GetVehicleTyreSmokeColor(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
    }
    set TireSmokeColor(color) {
        SetVehicleTyreSmokeColor(this._owner.Handle, color.r, color.g, color.b);
    }
    get NeonLightsColor() {
        const color = GetVehicleNeonLightsColour(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
    }
    set NeonLightsColor(color) {
        SetVehicleNeonLightsColour(this._owner.Handle, color.r, color.g, color.b);
    }
    isNeonLightsOn(light) {
        return !!IsVehicleNeonLightEnabled(this._owner.Handle, light);
    }
    setNeonLightsOn(light, on) {
        SetVehicleNeonLightEnabled(this._owner.Handle, light, on);
    }
    areAllNeonLightsOn() {
        if (!this.HasAllNeonLights) {
            return false;
        }
        let on = true;
        Object.keys(enums_1.VehicleNeonLight)
            .filter(key => !isNaN(Number(key)))
            .forEach(key => {
            if (!on) {
                return;
            }
            on = this.isNeonLightsOn(Number(key));
        });
        return on;
    }
    setAllNeonLightsOn(on) {
        Object.keys(enums_1.VehicleNeonLight)
            .filter(key => !isNaN(Number(key)))
            .forEach(key => {
            this.setNeonLightsOn(Number(key), on);
        });
    }
    get HasAllNeonLights() {
        return (Object.keys(enums_1.VehicleNeonLight)
            .filter(key => !isNaN(Number(key)))
            .findIndex(light => !this.hasNeonLight(Number(light))) === -1);
    }
    hasNeonLight(light) {
        switch (light) {
            case enums_1.VehicleNeonLight.Left:
                return this._owner.Bones.hasBone('neon_l');
            case enums_1.VehicleNeonLight.Right:
                return this._owner.Bones.hasBone('neon_r');
            case enums_1.VehicleNeonLight.Front:
                return this._owner.Bones.hasBone('neon_f');
            case enums_1.VehicleNeonLight.Back:
                return this._owner.Bones.hasBone('neon_b');
            default:
                return false;
        }
    }
    get CustomPrimaryColor() {
        const color = GetVehicleCustomPrimaryColour(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
    }
    set CustomPrimaryColor(color) {
        SetVehicleCustomPrimaryColour(this._owner.Handle, color.r, color.g, color.b);
    }
    get CustomSecondaryColor() {
        const color = GetVehicleCustomSecondaryColour(this._owner.Handle);
        return utils_1.Color.fromRgb(color[0], color[1], color[2]);
    }
    set CustomSecondaryColor(color) {
        SetVehicleCustomSecondaryColour(this._owner.Handle, color.r, color.g, color.b);
    }
    get IsPrimaryColorCustom() {
        return !!GetIsVehiclePrimaryColourCustom(this._owner.Handle);
    }
    get IsSecondaryColorCustom() {
        return !!GetIsVehicleSecondaryColourCustom(this._owner.Handle);
    }
    clearCustomPrimaryColor() {
        ClearVehicleCustomPrimaryColour(this._owner.Handle);
    }
    clearCustomSecondaryColor() {
        ClearVehicleCustomSecondaryColour(this._owner.Handle);
    }
    get LicensePlateStyle() {
        return GetVehicleNumberPlateTextIndex(this._owner.Handle);
    }
    set LicensePlateStyle(style) {
        SetVehicleNumberPlateTextIndex(this._owner.Handle, style);
    }
    get LicensePlateType() {
        return GetVehiclePlateType(this._owner.Handle);
    }
    get LicensePlate() {
        return GetVehicleNumberPlateText(this._owner.Handle);
    }
    set LicensePlate(text) {
        SetVehicleNumberPlateText(this._owner.Handle, text);
    }
}
exports.VehicleModCollection = VehicleModCollection;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleToggleMod.js":
/*!***************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleToggleMod.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleToggleMod = void 0;
class VehicleToggleMod {
    constructor(owner, modType) {
        this._owner = owner;
        this.ModType = modType;
    }
    get ModType() {
        return this._modType;
    }
    set ModType(modType) {
        this._modType = modType;
    }
    get IsInstalled() {
        return !!IsToggleModOn(this._owner.Handle, this.ModType);
    }
    set IsInstalled(value) {
        ToggleVehicleMod(this._owner.Handle, this.ModType, value);
    }
    get LocalizedModTypeName() {
        return GetModSlotName(this._owner.Handle, this.ModType);
    }
    get Vehicle() {
        return this._owner;
    }
    remove() {
        RemoveVehicleMod(this._owner.Handle, this.ModType);
    }
}
exports.VehicleToggleMod = VehicleToggleMod;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleWheel.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleWheel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleWheel = void 0;
class VehicleWheel {
    constructor(owner, index) {
        this._owner = owner;
        this.Index = index;
    }
    get Index() {
        return this._index;
    }
    set Index(index) {
        this._index = index;
    }
    get Vehicle() {
        return this._owner;
    }
    burst() {
        SetVehicleTyreBurst(this._owner.Handle, this.Index, true, 1000);
    }
    fix() {
        SetVehicleTyreFixed(this._owner.Handle, this.Index);
    }
}
exports.VehicleWheel = VehicleWheel;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleWheelCollection.js":
/*!*********************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleWheelCollection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleWheelCollection = void 0;
const VehicleWheel_1 = __webpack_require__(/*! ./VehicleWheel */ "../node_modules/fivem-js/lib/models/VehicleWheel.js");
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
class VehicleWheelCollection {
    constructor(owner) {
        this._vehicleWheels = new Map();
        this._owner = owner;
    }
    getWheel(index) {
        if (!this._vehicleWheels.has(index)) {
            this._vehicleWheels.set(index, new VehicleWheel_1.VehicleWheel(this._owner, index));
        }
        return this._vehicleWheels.get(index);
    }
    getAllWheels() {
        return Object.keys(enums_1.VehicleWheelIndex)
            .filter(key => !isNaN(Number(key)))
            .map(key => {
            const index = Number(key);
            if (this.hasWheel(index)) {
                return this.getWheel(index);
            }
            return null;
        })
            .filter(w => w);
    }
    burstAllWheels() {
        this.getAllWheels().forEach(wheel => {
            wheel.burst();
        });
    }
    fixAllWheels() {
        this.getAllWheels().forEach(wheel => {
            wheel.fix();
        });
    }
    hasWheel(wheel) {
        switch (wheel) {
            case enums_1.VehicleWheelIndex.FrontLeftWheel:
                return this._owner.Bones.hasBone('wheel_lf');
            case enums_1.VehicleWheelIndex.FrontRightWheel:
                return this._owner.Bones.hasBone('wheel_rf');
            case enums_1.VehicleWheelIndex.MidLeftWheel:
                return this._owner.Bones.hasBone('wheel_lm');
            case enums_1.VehicleWheelIndex.MidRightWheel:
                return this._owner.Bones.hasBone('wheel_rm');
            case enums_1.VehicleWheelIndex.RearLeftWheel:
                return this._owner.Bones.hasBone('wheel_lr');
            case enums_1.VehicleWheelIndex.RearRightWheel:
                return this._owner.Bones.hasBone('wheel_rr');
            default:
                return false;
        }
    }
}
exports.VehicleWheelCollection = VehicleWheelCollection;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleWindow.js":
/*!************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleWindow.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleWindow = void 0;
class VehicleWindow {
    constructor(owner, index) {
        this._owner = owner;
        this.Index = index;
    }
    get Index() {
        return this._index;
    }
    set Index(index) {
        this._index = index;
    }
    get IsIntact() {
        return !!IsVehicleWindowIntact(this._owner.Handle, this.Index);
    }
    get Vehicle() {
        return this._owner;
    }
    repair() {
        FixVehicleWindow(this._owner.Handle, this.Index);
    }
    smash() {
        SmashVehicleWindow(this._owner.Handle, this.Index);
    }
    rollUp() {
        RollUpWindow(this._owner.Handle, this.Index);
    }
    rollDown() {
        RollDownWindow(this._owner.Handle, this.Index);
    }
    remove() {
        RemoveVehicleWindow(this._owner.Handle, this.Index);
    }
}
exports.VehicleWindow = VehicleWindow;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/VehicleWindowCollection.js":
/*!**********************************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/VehicleWindowCollection.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleWindowCollection = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const VehicleWindow_1 = __webpack_require__(/*! ./VehicleWindow */ "../node_modules/fivem-js/lib/models/VehicleWindow.js");
class VehicleWindowCollection {
    constructor(owner) {
        this._vehicleWindows = new Map();
        this._owner = owner;
    }
    getWindow(index) {
        if (!this._vehicleWindows.has(index)) {
            this._vehicleWindows.set(index, new VehicleWindow_1.VehicleWindow(this._owner, index));
        }
        return this._vehicleWindows.get(index);
    }
    getAllWindows() {
        return Object.keys(enums_1.VehicleWindowIndex)
            .filter(key => !isNaN(Number(key)))
            .map(key => {
            const index = Number(key);
            if (this.hasWindow(index)) {
                return this.getWindow(index);
            }
            return null;
        })
            .filter(w => w);
    }
    get AreAllWindowsIntact() {
        return !!AreAllVehicleWindowsIntact(this._owner.Handle);
    }
    rollDownAllWindows() {
        this.getAllWindows().forEach(window => {
            window.rollDown();
        });
    }
    rollUpAllWindows() {
        this.getAllWindows().forEach(window => {
            window.rollUp();
        });
    }
    hasWindow(window) {
        switch (window) {
            case enums_1.VehicleWindowIndex.FrontLeftWindow:
                return this._owner.Bones.hasBone('window_lf');
            case enums_1.VehicleWindowIndex.FrontRightWindow:
                return this._owner.Bones.hasBone('window_rf');
            case enums_1.VehicleWindowIndex.BackLeftWindow:
                return this._owner.Bones.hasBone('window_lr');
            case enums_1.VehicleWindowIndex.BackRightWindow:
                return this._owner.Bones.hasBone('window_rr');
            default:
                return false;
        }
    }
}
exports.VehicleWindowCollection = VehicleWindowCollection;


/***/ }),

/***/ "../node_modules/fivem-js/lib/models/index.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/models/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleWindowCollection = exports.VehicleWindow = exports.VehicleWheelCollection = exports.VehicleWheel = exports.VehicleModCollection = exports.VehicleToggleMod = exports.VehicleMod = exports.VehicleDoorCollection = exports.VehicleDoor = exports.Vehicle = exports.Prop = exports.Player = exports.PedBoneCollection = exports.PedBone = exports.Ped = exports.EntityBoneCollection = exports.EntityBone = exports.Entity = void 0;
var Entity_1 = __webpack_require__(/*! ./Entity */ "../node_modules/fivem-js/lib/models/Entity.js");
Object.defineProperty(exports, "Entity", ({ enumerable: true, get: function () { return Entity_1.Entity; } }));
var EntityBone_1 = __webpack_require__(/*! ./EntityBone */ "../node_modules/fivem-js/lib/models/EntityBone.js");
Object.defineProperty(exports, "EntityBone", ({ enumerable: true, get: function () { return EntityBone_1.EntityBone; } }));
var EntityBoneCollection_1 = __webpack_require__(/*! ./EntityBoneCollection */ "../node_modules/fivem-js/lib/models/EntityBoneCollection.js");
Object.defineProperty(exports, "EntityBoneCollection", ({ enumerable: true, get: function () { return EntityBoneCollection_1.EntityBoneCollection; } }));
var Ped_1 = __webpack_require__(/*! ./Ped */ "../node_modules/fivem-js/lib/models/Ped.js");
Object.defineProperty(exports, "Ped", ({ enumerable: true, get: function () { return Ped_1.Ped; } }));
var PedBone_1 = __webpack_require__(/*! ./PedBone */ "../node_modules/fivem-js/lib/models/PedBone.js");
Object.defineProperty(exports, "PedBone", ({ enumerable: true, get: function () { return PedBone_1.PedBone; } }));
var PedBoneCollection_1 = __webpack_require__(/*! ./PedBoneCollection */ "../node_modules/fivem-js/lib/models/PedBoneCollection.js");
Object.defineProperty(exports, "PedBoneCollection", ({ enumerable: true, get: function () { return PedBoneCollection_1.PedBoneCollection; } }));
var Player_1 = __webpack_require__(/*! ./Player */ "../node_modules/fivem-js/lib/models/Player.js");
Object.defineProperty(exports, "Player", ({ enumerable: true, get: function () { return Player_1.Player; } }));
var Prop_1 = __webpack_require__(/*! ./Prop */ "../node_modules/fivem-js/lib/models/Prop.js");
Object.defineProperty(exports, "Prop", ({ enumerable: true, get: function () { return Prop_1.Prop; } }));
var Vehicle_1 = __webpack_require__(/*! ./Vehicle */ "../node_modules/fivem-js/lib/models/Vehicle.js");
Object.defineProperty(exports, "Vehicle", ({ enumerable: true, get: function () { return Vehicle_1.Vehicle; } }));
var VehicleDoor_1 = __webpack_require__(/*! ./VehicleDoor */ "../node_modules/fivem-js/lib/models/VehicleDoor.js");
Object.defineProperty(exports, "VehicleDoor", ({ enumerable: true, get: function () { return VehicleDoor_1.VehicleDoor; } }));
var VehicleDoorCollection_1 = __webpack_require__(/*! ./VehicleDoorCollection */ "../node_modules/fivem-js/lib/models/VehicleDoorCollection.js");
Object.defineProperty(exports, "VehicleDoorCollection", ({ enumerable: true, get: function () { return VehicleDoorCollection_1.VehicleDoorCollection; } }));
var VehicleMod_1 = __webpack_require__(/*! ./VehicleMod */ "../node_modules/fivem-js/lib/models/VehicleMod.js");
Object.defineProperty(exports, "VehicleMod", ({ enumerable: true, get: function () { return VehicleMod_1.VehicleMod; } }));
var VehicleToggleMod_1 = __webpack_require__(/*! ./VehicleToggleMod */ "../node_modules/fivem-js/lib/models/VehicleToggleMod.js");
Object.defineProperty(exports, "VehicleToggleMod", ({ enumerable: true, get: function () { return VehicleToggleMod_1.VehicleToggleMod; } }));
var VehicleModCollection_1 = __webpack_require__(/*! ./VehicleModCollection */ "../node_modules/fivem-js/lib/models/VehicleModCollection.js");
Object.defineProperty(exports, "VehicleModCollection", ({ enumerable: true, get: function () { return VehicleModCollection_1.VehicleModCollection; } }));
var VehicleWheel_1 = __webpack_require__(/*! ./VehicleWheel */ "../node_modules/fivem-js/lib/models/VehicleWheel.js");
Object.defineProperty(exports, "VehicleWheel", ({ enumerable: true, get: function () { return VehicleWheel_1.VehicleWheel; } }));
var VehicleWheelCollection_1 = __webpack_require__(/*! ./VehicleWheelCollection */ "../node_modules/fivem-js/lib/models/VehicleWheelCollection.js");
Object.defineProperty(exports, "VehicleWheelCollection", ({ enumerable: true, get: function () { return VehicleWheelCollection_1.VehicleWheelCollection; } }));
var VehicleWindow_1 = __webpack_require__(/*! ./VehicleWindow */ "../node_modules/fivem-js/lib/models/VehicleWindow.js");
Object.defineProperty(exports, "VehicleWindow", ({ enumerable: true, get: function () { return VehicleWindow_1.VehicleWindow; } }));
var VehicleWindowCollection_1 = __webpack_require__(/*! ./VehicleWindowCollection */ "../node_modules/fivem-js/lib/models/VehicleWindowCollection.js");
Object.defineProperty(exports, "VehicleWindowCollection", ({ enumerable: true, get: function () { return VehicleWindowCollection_1.VehicleWindowCollection; } }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Container.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Container.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Container = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/index.js");
class Container {
    constructor(pos, size, color) {
        this.items = [];
        this.pos = pos;
        this.size = size;
        this.color = color;
    }
    addItem(items) {
        if (!Array.isArray(items)) {
            items = [items];
        }
        this.items.push(...items);
    }
    draw(offset, resolution) {
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        offset = offset || new utils_1.Size();
        const w = this.size.width / resolution.width;
        const h = this.size.height / resolution.height;
        const x = (this.pos.X + offset.width) / resolution.width + w * 0.5;
        const y = (this.pos.Y + offset.height) / resolution.height + h * 0.5;
        DrawRect(x, y, w, h, this.color.r, this.color.g, this.color.b, this.color.a);
        for (const item of this.items) {
            item.draw(new utils_1.Size(this.pos.X + offset.width, this.pos.Y + offset.height), resolution);
        }
    }
}
exports.Container = Container;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Effects.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Effects.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Effects = void 0;
class Effects {
    static start(effectName, duration = 0, looped = false) {
        StartScreenEffect(this.effectToString(effectName), duration, looped);
    }
    static stop(screenEffect) {
        if (typeof screenEffect === 'undefined') {
            StopAllScreenEffects();
        }
        else {
            StopScreenEffect(this.effectToString(screenEffect));
        }
    }
    static isActive(screenEffect) {
        return !!GetScreenEffectIsActive(this.effectToString(screenEffect));
    }
    static effectToString(screenEffect) {
        const effect = Number(screenEffect);
        if (effect >= 0 && effect <= this.effects.length) {
            return this.effects[effect];
        }
        return 'INVALID';
    }
}
exports.Effects = Effects;
Effects.effects = [
    'SwitchHUDIn',
    'SwitchHUDOut',
    'FocusIn',
    'FocusOut',
    'MinigameEndNeutral',
    'MinigameEndTrevor',
    'MinigameEndFranklin',
    'MinigameEndMichael',
    'MinigameTransitionOut',
    'MinigameTransitionIn',
    'SwitchShortNeutralIn',
    'SwitchShortFranklinIn',
    'SwitchShortTrevorIn',
    'SwitchShortMichaelIn',
    'SwitchOpenMichaelIn',
    'SwitchOpenFranklinIn',
    'SwitchOpenTrevorIn',
    'SwitchHUDMichaelOut',
    'SwitchHUDFranklinOut',
    'SwitchHUDTrevorOut',
    'SwitchShortFranklinMid',
    'SwitchShortMichaelMid',
    'SwitchShortTrevorMid',
    'DeathFailOut',
    'CamPushInNeutral',
    'CamPushInFranklin',
    'CamPushInMichael',
    'CamPushInTrevor',
    'SwitchSceneFranklin',
    'SwitchSceneTrevor',
    'SwitchSceneMichael',
    'SwitchSceneNeutral',
    'MP_Celeb_Win',
    'MP_Celeb_Win_Out',
    'MP_Celeb_Lose',
    'MP_Celeb_Lose_Out',
    'DeathFailNeutralIn',
    'DeathFailMPDark',
    'DeathFailMPIn',
    'MP_Celeb_Preload_Fade',
    'PeyoteEndOut',
    'PeyoteEndIn',
    'PeyoteIn',
    'PeyoteOut',
    'MP_race_crash',
    'SuccessFranklin',
    'SuccessTrevor',
    'SuccessMichael',
    'DrugsMichaelAliensFightIn',
    'DrugsMichaelAliensFight',
    'DrugsMichaelAliensFightOut',
    'DrugsTrevorClownsFightIn',
    'DrugsTrevorClownsFight',
    'DrugsTrevorClownsFightOut',
    'HeistCelebPass',
    'HeistCelebPassBW',
    'HeistCelebEnd',
    'HeistCelebToast',
    'MenuMGHeistIn',
    'MenuMGTournamentIn',
    'MenuMGSelectionIn',
    'ChopVision',
    'DMT_flight_intro',
    'DMT_flight',
    'DrugsDrivingIn',
    'DrugsDrivingOut',
    'SwitchOpenNeutralFIB5',
    'HeistLocate',
    'MP_job_load',
    'RaceTurbo',
    'MP_intro_logo',
    'HeistTripSkipFade',
    'MenuMGHeistOut',
    'MP_corona_switch',
    'MenuMGSelectionTint',
    'SuccessNeutral',
    'ExplosionJosh3',
    'SniperOverlay',
    'RampageOut',
    'Rampage',
    'Dont_tazeme_bro',
];


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Fading.js":
/*!*************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Fading.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Fading = void 0;
/**
 * Static class for screen fading
 */
class Fading {
    /**
     * Gets whether the screen is faded in
     *
     * @returns True or false
     */
    static get IsFadedIn() {
        return !!IsScreenFadedIn();
    }
    /**
     * Gets whether the screen is faded out
     *
     * @returns True or false
     */
    static get IsFadedOut() {
        return !!IsScreenFadedOut();
    }
    /**
     * Gets whether the screen is currently fading in
     *
     * @returns True or false
     */
    static get IsFadingIn() {
        return !!IsScreenFadingIn();
    }
    /**
     * Gets whether the screen is currently fading out
     *
     * @returns True or false
     */
    static get IsFadingOut() {
        return !!IsScreenFadingOut();
    }
    /**
     * Fade in the screen for a certain duration.
     *
     * @param duration Time to fade in
     */
    static fadeIn(duration) {
        return new Promise(resolve => {
            DoScreenFadeIn(duration);
            const interval = setInterval(() => {
                if (this.IsFadedIn) {
                    clearInterval(interval);
                    resolve();
                }
            }, 0);
        });
    }
    /**
     * Fade out the screen for a certain duration.
     *
     * @param duration Time to fade out
     */
    static fadeOut(duration) {
        return new Promise(resolve => {
            DoScreenFadeOut(duration);
            const interval = setInterval(() => {
                if (this.IsFadedOut) {
                    clearInterval(interval);
                    resolve();
                }
            }, 0);
        });
    }
}
exports.Fading = Fading;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Hud.js":
/*!**********************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Hud.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hud = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
class Hud {
    static isComponentActive(component) {
        return !!IsHudComponentActive(Number(component));
    }
    static showComponentThisFrame(component) {
        ShowHudComponentThisFrame(Number(component));
    }
    static hideComponentThisFrame(component) {
        HideHudComponentThisFrame(Number(component));
    }
    static showCursorThisFrame() {
        ShowCursorThisFrame();
    }
    static set CursorPosition(position) {
        SetCursorLocation(position.X, position.Y);
    }
    static get CursorSprite() {
        return enums_1.CursorSprite.DownArrow;
    }
    static set CursorSprite(sprite) {
        SetCursorSprite(Number(sprite));
    }
    static get IsVisible() {
        return !(IsHudHidden() || !IsHudPreferenceSwitchedOn());
    }
    static set IsVisible(toggle) {
        DisplayHud(toggle);
    }
    static get IsRadarVisible() {
        return !(IsRadarHidden() || IsRadarPreferenceSwitchedOn());
    }
    static set IsRadarVisible(toggle) {
        DisplayRadar(toggle);
    }
    static set RadarZoom(zoomLevel) {
        SetRadarZoom(zoomLevel);
    }
}
exports.Hud = Hud;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/LoadingPrompt.js":
/*!********************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/LoadingPrompt.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadingPrompt = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
/**
 * Show and hide loading prompt on the bottom right of the screen.
 *
 * Example:
 *
 * ```typescript
 * import { LoadingPrompt } from 'fivem-js/ui';
 *
 * LoadingPrompt.show("Hello World");
 *
 * setTimeout(() => {
 *  LoadingPrompt.hide();
 * }, 10000)'
 * ```
 */
class LoadingPrompt {
    /**
     * Shows a loading prompt.
     *
     * @param loadingText Text to be displayed inside loading prompt.
     * @param spinnerType Type of spinner.
     */
    static show(loadingText = null, spinnerType = enums_1.LoadingSpinnerType.RegularClockwise) {
        if (this.IsActive) {
            this.hide();
        }
        if (loadingText === null) {
            BeginTextCommandBusyString(null);
        }
        else {
            BeginTextCommandBusyString('STRING');
            AddTextComponentSubstringPlayerName(loadingText);
        }
        EndTextCommandBusyString(Number(spinnerType));
    }
    static hide() {
        if (this.IsActive) {
            RemoveLoadingPrompt();
        }
    }
    static get IsActive() {
        return !!IsLoadingPromptBeingDisplayed();
    }
}
exports.LoadingPrompt = LoadingPrompt;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Notification.js":
/*!*******************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Notification.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Notification = void 0;
class Notification {
    constructor(handle) {
        this.handle = handle;
    }
    hide() {
        RemoveNotification(this.handle);
    }
}
exports.Notification = Notification;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Rectangle.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Rectangle.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rectangle = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/index.js");
class Rectangle {
    constructor(pos, size, color) {
        this.pos = pos;
        this.size = size;
        this.color = color;
    }
    draw(arg1, arg2, color, resolution) {
        resolution = color === undefined ? arg2 : resolution;
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        if (color === undefined) {
            if (arg1 && arg1 instanceof utils_1.Size) {
                arg1 = new utils_1.Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
            }
            else {
                arg1 = this.pos;
            }
            arg2 = this.size;
        }
        else {
            if (!arg1) {
                arg1 = this.pos;
            }
            else {
                arg1 = arg1;
            }
            arg2 = arg2 || this.size;
        }
        color = color || this.color;
        const w = arg2.width / resolution.width;
        const h = arg2.height / resolution.height;
        const x = arg1.X / resolution.width + w * 0.5;
        const y = arg1.Y / resolution.height + h * 0.5;
        DrawRect(x, y, w, h, color.r, color.g, color.b, color.a);
    }
}
exports.Rectangle = Rectangle;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Scaleform.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Scaleform.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scaleform = void 0;
/**
 * Scaleforms will automatically load when calling any of the render functions.
 *
 * Example:
 *
 * ```typescript
 * import { Scaleform } from 'fivem-js/ui';
 *
 * const scaleform = new Cfx.Scaleform("MIDSIZED_MESSAGE");
 *
 * scaleform.callFunction("SHOW_MIDSIZED_MESSAGE", ["Title", "Message"]);
 *
 * setTick(() => {
 *  await scaleform.render2D();
 * });
 * ```
 */
class Scaleform {
    constructor(name) {
        this.name = name;
        this.handle = RequestScaleformMovie(this.name);
    }
    static render2DMasked(scaleform1, scaleform2) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (scaleform1.IsLoaded && scaleform2.IsLoaded) {
                DrawScaleformMovieFullscreenMasked(scaleform1.Handle, scaleform2.Handle, 255, 255, 255, 255);
            }
            else {
                yield scaleform1.load();
                yield scaleform2.load();
            }
            resolve();
        }));
    }
    /**
     * Get the handle of the scaleform.
     */
    get Handle() {
        return this.handle;
    }
    /**
     * Get whether the handle is a valid handle.
     */
    get IsValid() {
        return this.handle !== 0;
    }
    /**
     * Get whether the scaleform is loaded.
     */
    get IsLoaded() {
        if (!this.loaded) {
            this.loaded = !!HasScaleformMovieLoaded(this.handle);
        }
        return this.loaded;
    }
    /**
     * Dispose the scaleform allowing the GTA engine to free memory when wanted.
     */
    dispose() {
        if (this.IsLoaded) {
            SetScaleformMovieAsNoLongerNeeded(this.handle);
            this.loaded = false;
        }
    }
    /**
     * Call a function on the scaleform.
     *
     * @param name Name of the function
     * @param args Additional arguments
     */
    callFunction(name, ...args) {
        BeginScaleformMovieMethod(this.handle, name);
        args.forEach(arg => {
            switch (typeof arg) {
                case 'number':
                    PushScaleformMovieFunctionParameterInt(arg);
                    break;
                case 'string':
                    PushScaleformMovieFunctionParameterString(arg);
                    break;
                case 'boolean':
                    PushScaleformMovieFunctionParameterBool(arg);
                    break;
                default:
                    throw new Error(`Unknown argument type [${typeof arg}] passed to scaleform with handle [${this.handle}]`);
            }
        });
        EndScaleformMovieMethod();
    }
    /**
     * Sets a duration the scaleform should be shown.
     * Useful for showing a scaleform for a known amount of time, such as messages.
     *
     * This only works for any scaleform using {@linkcode render2D};
     *
     * @param duration Duration in milliseconds
     */
    setDuration(duration) {
        if (duration <= 0) {
            return;
        }
        const start = GetGameTimer();
        const interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
            if (GetGameTimer() - start < duration) {
                yield this.render2D();
            }
            else {
                clearInterval(interval);
            }
        }), 0);
    }
    render2D() {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (this.IsLoaded) {
                DrawScaleformMovieFullscreen(this.handle, 255, 255, 255, 255, 0);
            }
            else {
                yield this.load();
            }
            resolve();
        }));
    }
    render2DScreenSpace(location, size) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (this.IsLoaded) {
                const x = location.x; /* UI.Screen.Width*/
                const y = location.y; /* UI.Screen.Height*/
                const width = size.x; /* UI.Screen.Width*/
                const height = size.y; /* UI.Screen.Height*/
                DrawScaleformMovie(this.handle, x + width / 2, y + height / 2, width, height, 255, 255, 255, 255, 0);
            }
            else {
                yield this.load();
            }
            resolve();
        }));
    }
    render3D(position, rotation, scale) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (this.IsLoaded) {
                DrawScaleformMovie_3dNonAdditive(this.handle, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, 2, 2, 1, scale.x, scale.y, scale.z, 2);
            }
            else {
                yield this.load();
            }
            resolve();
        }));
    }
    render3DAdditive(position, rotation, scale) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            if (this.IsLoaded) {
                DrawScaleformMovie_3d(this.handle, position.x, position.y, position.z, rotation.x, rotation.y, rotation.z, 2, 2, 1, scale.x, scale.y, scale.z, 2);
            }
            else {
                yield this.load();
            }
            resolve();
        }));
    }
    load() {
        return new Promise(resolve => {
            if (this.IsLoaded) {
                resolve(true);
            }
            else {
                const start = GetGameTimer();
                const interval = setInterval(() => {
                    if (this.IsLoaded) {
                        clearInterval(interval);
                        resolve(true);
                    }
                    else if (GetGameTimer() - start > 5000) {
                        clearInterval(interval);
                        console.log(`^1[fivem-js] Could not load scaleform ${this.name}!^7`);
                        resolve(false);
                    }
                }, 0);
            }
        });
    }
}
exports.Scaleform = Scaleform;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Screen.js":
/*!*************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Screen.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Screen = void 0;
const Audio_1 = __webpack_require__(/*! ../Audio */ "../node_modules/fivem-js/lib/Audio.js");
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/index.js");
class Screen {
    static get Resolution() {
        const [width, height] = GetScreenActiveResolution();
        return new utils_1.Size(width, height);
    }
    static get ScaledResolution() {
        const height = this.Height;
        return new utils_1.Size(height * this.AspectRatio, height);
    }
    static get Width() {
        return this.Resolution.width;
    }
    static get ScaledWidth() {
        return this.Height * this.AspectRatio;
    }
    static get Height() {
        return this.Resolution.height;
    }
    static get AspectRatio() {
        return GetAspectRatio(false);
    }
    static showSubtitle(message, duration = 2500) {
        const strings = utils_1.stringToArray(message);
        BeginTextCommandPrint('CELL_EMAIL_BCON');
        strings.forEach(element => {
            AddTextComponentSubstringPlayerName(element);
        });
        EndTextCommandPrint(duration, true);
    }
    static displayHelpTextThisFrame(message) {
        const strings = utils_1.stringToArray(message);
        BeginTextCommandDisplayHelp('CELL_EMAIL_BCON');
        strings.forEach(element => {
            AddTextComponentSubstringPlayerName(element);
        });
        EndTextCommandDisplayHelp(0, false, false, -1);
    }
    static showNotification(message, blinking = false) {
        const strings = utils_1.stringToArray(message);
        SetNotificationTextEntry('CELL_EMAIL_BCON');
        strings.forEach(element => {
            AddTextComponentSubstringPlayerName(element);
        });
        return new _1.Notification(DrawNotification(blinking, true));
    }
    static showAdvancedNotification(message, title, subtitle, iconSet, icon, bgColor = enums_1.HudColor.NONE, flashColor = utils_1.Color.empty, blinking = false, type = enums_1.NotificationType.Default, showInBrief = true, sound = true) {
        const strings = utils_1.stringToArray(message);
        SetNotificationTextEntry('CELL_EMAIL_BCON');
        strings.forEach(element => {
            AddTextComponentSubstringPlayerName(element);
        });
        if (bgColor !== enums_1.HudColor.NONE) {
            SetNotificationBackgroundColor(Number(bgColor));
        }
        if (flashColor !== utils_1.Color.empty && blinking) {
            SetNotificationFlashColor(flashColor.r, flashColor.g, flashColor.b, flashColor.a);
        }
        if (sound) {
            Audio_1.Audio.playSoundFrontEnd('DELETE', 'HUD_DEATHMATCH_SOUNDSET');
        }
        SetNotificationMessage(iconSet, icon, true, Number(type), title, subtitle);
        return new _1.Notification(DrawNotification(blinking, showInBrief));
    }
    static worldToScreen(position, scaleWidth = false) {
        const coords = GetScreenCoordFromWorldCoord(position.x, position.y, position.z);
        return new utils_1.PointF(coords[0] * (scaleWidth ? this.ScaledWidth : this.Width), coords[1] * this.Height, coords[2]);
    }
}
exports.Screen = Screen;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Sprite.js":
/*!*************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Sprite.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sprite = void 0;
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/index.js");
class Sprite {
    constructor(textureDict, textureName, pos, size, heading = 0, color = utils_1.Color.white) {
        this._textureDict = textureDict;
        this.textureName = textureName;
        this.pos = pos || new utils_1.Point();
        this.size = size || new utils_1.Size();
        this.heading = heading || 0;
        this.color = color || utils_1.Color.white;
        this.visible = true;
    }
    loadTextureDictionary() {
        RequestStreamedTextureDict(this._textureDict, true);
        const interval = setInterval(() => {
            if (this.IsTextureDictionaryLoaded) {
                clearInterval(interval);
            }
        }, 0);
    }
    set TextureDict(v) {
        this._textureDict = v;
        if (!this.IsTextureDictionaryLoaded) {
            this.loadTextureDictionary();
        }
    }
    get TextureDict() {
        return this._textureDict;
    }
    get IsTextureDictionaryLoaded() {
        return !!HasStreamedTextureDictLoaded(this._textureDict);
    }
    draw(arg1, textureName, pos, size, heading, color, loadTexture = true, resolution) {
        const textureDictionary = arg1 && typeof arg1 === 'string' ? arg1 : this.TextureDict;
        textureName = textureName || this.textureName;
        pos = pos || this.pos;
        size = size || this.size;
        heading = heading || this.heading;
        color = color || this.color;
        if (loadTexture) {
            if (!HasStreamedTextureDictLoaded(textureDictionary)) {
                RequestStreamedTextureDict(textureDictionary, false);
            }
        }
        resolution = arg1 instanceof utils_1.Size ? arg1 : resolution;
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        const w = size.width / resolution.width;
        const h = size.height / resolution.height;
        const x = pos.X / resolution.width + w * 0.5;
        const y = pos.Y / resolution.height + h * 0.5;
        DrawSprite(textureDictionary, textureName, x, y, w, h, heading, color.r, color.g, color.b, color.a);
    }
}
exports.Sprite = Sprite;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Text.js":
/*!***********************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Text.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Text = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/index.js");
class Text {
    /**
     *
     * @param caption Text to display
     * @param pos Position of text relative to alignment. In pixels.
     * @param scale Size of text. Default 1.0
     * @param color Color of text. Default black.
     * @param font Font of text. Default Chalet London.
     * @param alignment Alignment of text. Default Left.
     * @param dropShadow
     * @param outline
     * @param wordWrap
     */
    constructor(caption, pos, scale = 1, color = utils_1.Color.white, font = enums_1.Font.ChaletLondon, alignment = enums_1.Alignment.Left, dropShadow = false, outline = false, wordWrap) {
        this.caption = caption;
        this.pos = pos;
        this.scale = scale;
        this.color = color;
        this.font = font;
        this.alignment = alignment;
        this.dropShadow = dropShadow;
        this.outline = outline;
        this.wordWrap = wordWrap;
    }
    static draw(caption, pos, scale = 1, color = utils_1.Color.white, font = enums_1.Font.ChaletLondon, alignment = enums_1.Alignment.Left, dropShadow = false, outline = false, wordWrap, resolution) {
        resolution = resolution || new utils_1.Size(_1.Screen.ScaledWidth, _1.Screen.Height);
        const x = pos.X / resolution.width;
        const y = pos.Y / resolution.height;
        SetTextFont(Number(font));
        SetTextScale(1.0, scale);
        SetTextColour(color.r, color.g, color.b, color.a);
        if (dropShadow) {
            SetTextDropshadow(2, 0, 0, 0, 0);
        }
        if (outline) {
            SetTextOutline();
        }
        switch (alignment) {
            case enums_1.Alignment.Centered:
                SetTextCentre(true);
                break;
            case enums_1.Alignment.Right:
                SetTextRightJustify(true);
                if (!wordWrap) {
                    SetTextWrap(0.0, x);
                }
                break;
        }
        if (wordWrap) {
            SetTextWrap(x, (pos.X + wordWrap.width) / resolution.width);
        }
        SetTextEntry('STRING');
        Text.addLongString(caption);
        DrawText(x, y);
    }
    static addLongString(str) {
        const strLen = 99;
        for (let i = 0; i < str.length; i += strLen) {
            const substr = str.substr(i, Math.min(strLen, str.length - i));
            AddTextComponentSubstringPlayerName(substr);
        }
    }
    draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution) {
        resolution = arg2 instanceof utils_1.Size ? arg2 : resolution;
        if (scale === undefined) {
            if (arg1 && arg1 instanceof utils_1.Size) {
                arg2 = new utils_1.Point(this.pos.X + arg1.width, this.pos.Y + arg1.height);
            }
            else {
                arg2 = this.pos;
            }
            arg1 = this.caption;
            scale = this.scale;
            color = this.color;
            font = this.font;
            alignment = this.alignment;
            dropShadow = this.dropShadow;
            outline = this.outline;
            wordWrap = this.wordWrap;
        }
        else {
            arg1 = arg1 || this.caption;
            if (!arg2) {
                arg2 = this.pos;
            }
            else {
                arg2 = arg2;
            }
            scale = scale !== undefined && scale !== null ? scale : this.scale;
            color = color || this.color;
            font = font !== undefined && font !== null ? font : this.font;
            alignment = alignment !== undefined && alignment !== null ? alignment : this.alignment;
            dropShadow = typeof dropShadow === 'boolean' ? dropShadow : dropShadow;
            outline = typeof outline === 'boolean' ? outline : outline;
            wordWrap = wordWrap || this.wordWrap;
        }
        Text.draw(arg1, arg2, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution);
    }
}
exports.Text = Text;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/Timerbar.js":
/*!***************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/Timerbar.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Timerbar = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const utils_1 = __webpack_require__(/*! ../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const Hud_1 = __webpack_require__(/*! ./Hud */ "../node_modules/fivem-js/lib/ui/Hud.js");
const LoadingPrompt_1 = __webpack_require__(/*! ./LoadingPrompt */ "../node_modules/fivem-js/lib/ui/LoadingPrompt.js");
const Screen_1 = __webpack_require__(/*! ./Screen */ "../node_modules/fivem-js/lib/ui/Screen.js");
const Sprite_1 = __webpack_require__(/*! ./Sprite */ "../node_modules/fivem-js/lib/ui/Sprite.js");
/** @internal */
const activeTimerBars = [];
/** @internal */
const drawText = (text, position, options) => {
    options = Object.assign({
        align: 1,
        color: [255, 255, 255, 255],
        font: 4,
        outline: true,
        scale: 0.3,
        shadow: true,
    }, options);
    const font = options.font;
    const scale = options.scale;
    const outline = options.outline;
    const shadow = options.shadow;
    const color = options.color;
    const align = options.align;
    SetTextEntry('CELL_EMAIL_BCON');
    for (let i = 0; i < text.length; i += 99) {
        const subStringText = text.substr(i, Math.min(99, text.length - i));
        AddTextComponentSubstringPlayerName(subStringText);
    }
    SetTextFont(font);
    SetTextScale(scale, scale);
    SetTextColour(color[0], color[1], color[2], color[3]);
    if (shadow) {
        SetTextDropShadow();
    }
    if (outline) {
        SetTextOutline();
    }
    switch (align) {
        case 1: {
            SetTextCentre(true);
            break;
        }
        case 2: {
            SetTextRightJustify(true);
            SetTextWrap(0.0, position[0] || 0);
            break;
        }
    }
    DrawText(position[0] || 0, position[1] || 0);
};
/**
 * Create a Timerbar. It's automatically added to the internal Timerbar array and drawn in a FIFO (first in, first out) way.
 *
 * ```typescript
 * // Create simple Timerbar
 * const myTimerbar = new Cfx.Timerbar("Hello");
 * myTimerbar.Text = "World";
 *
 * // Disable Timerbar later on
 * myTimerbar.Visible = false;
 * ```
 */
class Timerbar {
    constructor(title, useProgressBar = false) {
        this.sprite = null;
        this.title = '';
        this.text = '';
        this.useProgressBar = false;
        this.usePlayerStyle = false;
        this.isVisible = false;
        this.pbarValue = 0.0;
        this.textColor = [240, 240, 240, 255];
        this.pbarBgColor = [155, 155, 155, 255];
        this.pbarFgColor = [255, 255, 255, 255];
        this.title = title;
        this.useProgressBar = useProgressBar;
        this.text = '';
        this.pbarValue = 0.0;
        this.textColor = [240, 240, 240, 255];
        this.pbarBgColor = [155, 155, 155, 255];
        this.pbarFgColor = [255, 255, 255, 255];
        this.usePlayerStyle = false;
        const safeZone = GetSafeZoneSize();
        const safeZoneX = (1.0 - safeZone) * 0.5;
        const safeZoneY = (1.0 - safeZone) * 0.5;
        this.sprite = new Sprite_1.Sprite('timerbars', 'all_black_bg', new utils_1.Point(Screen_1.Screen.ScaledWidth * 0.918 - safeZoneX, Screen_1.Screen.Height * 0.984 - safeZoneY), new utils_1.Size(Screen_1.Screen.ScaledWidth * 0.165, Screen_1.Screen.Height * 0.035), 0, new utils_1.Color(160, 255, 255, 255));
        if (!this.sprite.IsTextureDictionaryLoaded) {
            this.sprite.loadTextureDictionary();
        }
        this.isVisible = true;
        activeTimerBars.push(this);
    }
    get Title() {
        return this.title;
    }
    set Title(value) {
        this.title = value;
    }
    get Text() {
        return this.text;
    }
    set Text(value) {
        this.text = value;
    }
    get UseProgressBar() {
        return this.useProgressBar;
    }
    get Progress() {
        return this.pbarValue;
    }
    set Progress(value) {
        this.pbarValue = value <= 0.0 ? 0.0 : value >= 1.0 ? 1.0 : value;
    }
    get Visible() {
        return this.isVisible;
    }
    set Visible(value) {
        const idx = activeTimerBars.indexOf(this);
        if (value) {
            if (idx !== -1) {
                return;
            }
            activeTimerBars.push(this);
        }
        else {
            if (idx === -1) {
                return;
            }
            activeTimerBars.splice(idx, 1);
        }
        this.isVisible = value;
    }
    get TextColor() {
        return this.textColor;
    }
    set TextColor(value) {
        if (Array.isArray(value)) {
            this.textColor = value;
        }
        else {
            const result = GetHudColour(value);
            this.textColor = [result[0], result[1], result[2], result[3]];
        }
    }
    get ProgressbarBgColor() {
        return this.pbarBgColor;
    }
    set ProgressbarBgColor(value) {
        if (Array.isArray(value)) {
            this.pbarBgColor = value;
        }
        else {
            const result = GetHudColour(value);
            this.pbarBgColor = [result[0], result[1], result[2], result[3]];
        }
    }
    get ProgressbarFgColor() {
        return this.pbarFgColor;
    }
    set ProgressbarFgColor(value) {
        if (Array.isArray(value)) {
            this.pbarFgColor = value;
        }
        else {
            const result = GetHudColour(value);
            this.pbarFgColor = [result[0], result[1], result[2], result[3]];
        }
    }
    set PlayerStyle(value) {
        this.usePlayerStyle = value;
    }
    get PlayerStyle() {
        return this.usePlayerStyle;
    }
    get Sprite() {
        return this.sprite;
    }
}
exports.Timerbar = Timerbar;
setTick(() => {
    if (activeTimerBars.length <= 0) {
        return;
    }
    const safeZone = GetSafeZoneSize();
    const safeZoneX = (1.0 - safeZone) * 0.5;
    const safeZoneY = (1.0 - safeZone) * 0.5;
    Hud_1.Hud.hideComponentThisFrame(enums_1.HudComponent.AreaName);
    Hud_1.Hud.hideComponentThisFrame(enums_1.HudComponent.StreetName);
    let loadingPromptOffset = 0;
    if (LoadingPrompt_1.LoadingPrompt.IsActive) {
        loadingPromptOffset = 0.035 + 0.035 * 0.038 * 2;
    }
    activeTimerBars.forEach(timerbar => {
        const drawY = 0.984 - loadingPromptOffset - safeZoneY - activeTimerBars.indexOf(timerbar) * 0.038;
        DrawSprite('timerbars', 'all_black_bg', 0.918 - safeZoneX, drawY, 0.165, 0.035, 0.0, 255, 255, 255, 160);
        drawText(timerbar.Title, [0.918 - safeZoneX + 0.012, drawY - 0.009 - (timerbar.PlayerStyle ? 0.00625 : 0)], {
            align: 2,
            color: timerbar.TextColor,
            font: timerbar.PlayerStyle ? 4 : 0,
            outline: false,
            scale: timerbar.PlayerStyle ? 0.465 : 0.3,
            shadow: timerbar.PlayerStyle,
        });
        if (timerbar.UseProgressBar) {
            const pbarX = 0.918 - safeZoneX + 0.047;
            const pbarY = drawY + 0.0015;
            const width = 0.0616 * timerbar.Progress;
            DrawRect(pbarX, pbarY, 0.0616, 0.0105, timerbar.ProgressbarBgColor[0], timerbar.ProgressbarBgColor[1], timerbar.ProgressbarBgColor[2], timerbar.ProgressbarBgColor[3]);
            DrawRect(pbarX - 0.0616 / 2 + width / 2, pbarY, width, 0.0105, timerbar.ProgressbarFgColor[0], timerbar.ProgressbarFgColor[1], timerbar.ProgressbarFgColor[2], timerbar.ProgressbarFgColor[3]);
        }
        else {
            drawText(timerbar.Text, [0.918 - safeZoneX + 0.0785, drawY + -0.0165], {
                align: 2,
                color: timerbar.TextColor,
                font: 0,
                outline: false,
                scale: 0.425,
                shadow: false,
            });
        }
    });
});


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/index.js":
/*!************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Timerbar = exports.Text = exports.Sprite = exports.Screen = exports.Scaleform = exports.Notification = exports.LoadingPrompt = exports.Hud = exports.Fading = exports.Effects = exports.Container = exports.Rectangle = void 0;
__exportStar(__webpack_require__(/*! ./interfaces */ "../node_modules/fivem-js/lib/ui/interfaces/index.js"), exports);
var Rectangle_1 = __webpack_require__(/*! ./Rectangle */ "../node_modules/fivem-js/lib/ui/Rectangle.js");
Object.defineProperty(exports, "Rectangle", ({ enumerable: true, get: function () { return Rectangle_1.Rectangle; } }));
var Container_1 = __webpack_require__(/*! ./Container */ "../node_modules/fivem-js/lib/ui/Container.js");
Object.defineProperty(exports, "Container", ({ enumerable: true, get: function () { return Container_1.Container; } }));
var Effects_1 = __webpack_require__(/*! ./Effects */ "../node_modules/fivem-js/lib/ui/Effects.js");
Object.defineProperty(exports, "Effects", ({ enumerable: true, get: function () { return Effects_1.Effects; } }));
var Fading_1 = __webpack_require__(/*! ./Fading */ "../node_modules/fivem-js/lib/ui/Fading.js");
Object.defineProperty(exports, "Fading", ({ enumerable: true, get: function () { return Fading_1.Fading; } }));
var Hud_1 = __webpack_require__(/*! ./Hud */ "../node_modules/fivem-js/lib/ui/Hud.js");
Object.defineProperty(exports, "Hud", ({ enumerable: true, get: function () { return Hud_1.Hud; } }));
var LoadingPrompt_1 = __webpack_require__(/*! ./LoadingPrompt */ "../node_modules/fivem-js/lib/ui/LoadingPrompt.js");
Object.defineProperty(exports, "LoadingPrompt", ({ enumerable: true, get: function () { return LoadingPrompt_1.LoadingPrompt; } }));
var Notification_1 = __webpack_require__(/*! ./Notification */ "../node_modules/fivem-js/lib/ui/Notification.js");
Object.defineProperty(exports, "Notification", ({ enumerable: true, get: function () { return Notification_1.Notification; } }));
var Scaleform_1 = __webpack_require__(/*! ./Scaleform */ "../node_modules/fivem-js/lib/ui/Scaleform.js");
Object.defineProperty(exports, "Scaleform", ({ enumerable: true, get: function () { return Scaleform_1.Scaleform; } }));
var Screen_1 = __webpack_require__(/*! ./Screen */ "../node_modules/fivem-js/lib/ui/Screen.js");
Object.defineProperty(exports, "Screen", ({ enumerable: true, get: function () { return Screen_1.Screen; } }));
var Sprite_1 = __webpack_require__(/*! ./Sprite */ "../node_modules/fivem-js/lib/ui/Sprite.js");
Object.defineProperty(exports, "Sprite", ({ enumerable: true, get: function () { return Sprite_1.Sprite; } }));
var Text_1 = __webpack_require__(/*! ./Text */ "../node_modules/fivem-js/lib/ui/Text.js");
Object.defineProperty(exports, "Text", ({ enumerable: true, get: function () { return Text_1.Text; } }));
var Timerbar_1 = __webpack_require__(/*! ./Timerbar */ "../node_modules/fivem-js/lib/ui/Timerbar.js");
Object.defineProperty(exports, "Timerbar", ({ enumerable: true, get: function () { return Timerbar_1.Timerbar; } }));
__exportStar(__webpack_require__(/*! ./menu */ "../node_modules/fivem-js/lib/ui/menu/index.js"), exports);


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/interfaces/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/interfaces/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/Menu.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/Menu.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Menu = void 0;
const __1 = __webpack_require__(/*! ../ */ "../node_modules/fivem-js/lib/ui/index.js");
const __2 = __webpack_require__(/*! ../../ */ "../node_modules/fivem-js/lib/index.js");
const enums_1 = __webpack_require__(/*! ../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const utils_1 = __webpack_require__(/*! ../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const items_1 = __webpack_require__(/*! ./items */ "../node_modules/fivem-js/lib/ui/menu/items/index.js");
class Menu {
    constructor(title, subtitle, offset = new utils_1.Point(), spriteLibrary = 'commonmenu', spriteName = 'interaction_bgd') {
        this.id = utils_1.uuidv4();
        this.visible = false;
        this.items = [];
        this.children = new Map();
        this.menuOpen = new utils_1.LiteEvent();
        this.menuClose = new utils_1.LiteEvent();
        this.menuChange = new utils_1.LiteEvent();
        this.indexChange = new utils_1.LiteEvent();
        this.listChange = new utils_1.LiteEvent();
        this.sliderChange = new utils_1.LiteEvent();
        this.checkboxChange = new utils_1.LiteEvent();
        this.listSelect = new utils_1.LiteEvent();
        this.sliderSelect = new utils_1.LiteEvent();
        this.itemSelect = new utils_1.LiteEvent();
        this.panelActivated = new utils_1.LiteEvent();
        this._counterPretext = '';
        this._navigationDelay = 140;
        this._lastUpDownNavigation = 0;
        this._lastLeftRightNavigation = 0;
        this._activeItem = 1000;
        this._widthOffset = 0;
        this._drawOffset = new utils_1.Point();
        this._justOpened = true;
        this._mousePressed = false;
        this._minItem = 0;
        this._maxItem = 9;
        this._maxItemsOnScreen = this._maxItem;
        this._controls = new __1.MenuControls();
        this._settings = new __1.MenuSettings();
        this._offset = offset;
        // Create everything
        this._mainMenu = new __1.Container(new utils_1.Point(), new utils_1.Size(700, 500), utils_1.Color.transparent);
        this._logo = new __1.Sprite(spriteLibrary || '', spriteName || '', new utils_1.Point(this._offset.X, this._offset.Y), new utils_1.Size(431, 107));
        this._mainMenu.addItem([
            (this._title = new __1.Text(title || '', new utils_1.Point(431 / 2 + this._offset.X, 20 + this._offset.Y), 1.15, utils_1.Color.white, 1, enums_1.Alignment.Centered)),
            (this._subtitleResRectangle = new __1.Rectangle(new utils_1.Point(this._offset.X, 107 + this._offset.Y), new utils_1.Size(431, 37), utils_1.Color.black)),
            (this._subtitle = new __1.Text(subtitle || '', new utils_1.Point(8 + this._offset.X, 110 + this._offset.Y), 0.35, utils_1.Color.white, 0, enums_1.Alignment.Left)),
        ]);
        if (this._subtitle.caption.startsWith('~')) {
            this._counterPretext = this._subtitle.caption.substr(0, 3);
        }
        this._counterText = new __1.Text('', new utils_1.Point(425 + this._offset.X, 110 + this._offset.Y), 0.35, utils_1.Color.white, 0, enums_1.Alignment.Right);
        this._upAndDownSprite = new __1.Sprite('commonmenu', 'shop_arrows_upanddown', new utils_1.Point(), new utils_1.Size(50, 50));
        const extraRectanglePos = new utils_1.Point(this._offset.X);
        const extraRectangleSize = new utils_1.Size(431, 18);
        const extraRectangleColor = new utils_1.Color(200, 0, 0, 0);
        this._extraRectangleUp = new __1.Rectangle(extraRectanglePos, extraRectangleSize, extraRectangleColor);
        this._extraRectangleDown = new __1.Rectangle(Object.assign({}, extraRectanglePos), Object.assign({}, extraRectangleSize), Object.assign({}, extraRectangleColor));
        this._descriptionBar = new __1.Rectangle(new utils_1.Point(this._offset.X), new utils_1.Size(431, 4), utils_1.Color.black);
        this._descriptionRectangle = new __1.Sprite('commonmenu', 'gradient_bgd', new utils_1.Point(this._offset.X), new utils_1.Size(431, 30));
        this._descriptionText = new __1.Text('Description', new utils_1.Point(this._offset.X + 8), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Left);
        this._background = new __1.Sprite('commonmenu', 'gradient_bgd', new utils_1.Point(this._offset.X, 144 + this._offset.Y), new utils_1.Size(290, 25));
        setTick(() => {
            this._render();
        });
    }
    set Title(text) {
        this._title.caption = text;
    }
    get Title() {
        return this._title.caption;
    }
    set Subtitle(text) {
        this._subtitle.caption = text;
    }
    get Subtitle() {
        return this._subtitle.caption;
    }
    set SubtitleForeColor(color) {
        this._subtitle.color = color;
    }
    get SubtitleForeColor() {
        return this._subtitle.color;
    }
    set SubtitleBackColor(color) {
        this._subtitleResRectangle.color = color;
    }
    get SubtitleBackColor() {
        return this._subtitleResRectangle.color;
    }
    get CurrentItem() {
        return this.items[this._activeItem % this.items.length];
    }
    set CurrentItem(value) {
        const index = this.items.findIndex(i => i.id === value.id);
        if (index !== -1) {
            this.CurrentSelection = index;
        }
    }
    get CurrentSelection() {
        return this._activeItem % this.items.length;
    }
    set CurrentSelection(v) {
        this.CurrentItem.selected = false;
        this._activeItem = 1000 - (1000 % this.items.length) + v;
        const currentSelection = this.CurrentSelection;
        if (currentSelection > this._maxItem) {
            this._maxItem = currentSelection;
            this._minItem = currentSelection - this._maxItemsOnScreen;
        }
        else if (currentSelection < this._minItem) {
            this._maxItem = this._maxItemsOnScreen + currentSelection;
            this._minItem = currentSelection;
        }
    }
    get WidthOffset() {
        return this._widthOffset;
    }
    set WidthOffset(widthOffset) {
        this._widthOffset = widthOffset;
        const width = 431 + widthOffset;
        if (this._logo) {
            this._logo.size.width = width;
        }
        this._mainMenu.items[0].pos.X = width / 2 + this._offset.X;
        if (this._counterText) {
            this._counterText.pos.X = 425 + this._offset.X + widthOffset;
        }
        if (this._subtitleResRectangle) {
            this._subtitleResRectangle.size.width = width;
        }
        this._extraRectangleUp.size.width = width;
        this._extraRectangleDown.size.width = width;
        this._upAndDownSprite.pos.X = 190 + this._offset.X + widthOffset / 2;
        this._descriptionBar.size.width = width;
        this._descriptionRectangle.size.width = width;
        this.items.forEach(item => {
            item.formatDescription();
        });
    }
    get DrawOffset() {
        return this.Settings.scaleWithSafezone ? this._drawOffset : new utils_1.Point();
    }
    get Controls() {
        return this._controls;
    }
    get Settings() {
        return this._settings;
    }
    addNewSubMenu(text, description, inherit = true) {
        let menu;
        if (inherit) {
            menu = new Menu(this._title.caption, text, this._offset, this._logo.TextureDict, this._logo.textureName);
            menu.WidthOffset = this.WidthOffset;
            menu._settings = this._settings;
        }
        else {
            menu = new Menu(this._title.caption, text);
        }
        const item = new items_1.UIMenuItem(text, description);
        this.addItem(item);
        this.bindMenuToItem(menu, item);
        return menu;
    }
    addSubMenu(subMenuToAdd, text, description, inherit = true) {
        if (inherit) {
            subMenuToAdd.WidthOffset = this.WidthOffset;
            subMenuToAdd._settings = this._settings;
        }
        const item = new items_1.UIMenuItem(text, description);
        this.addItem(item);
        this.bindMenuToItem(subMenuToAdd, item);
        return subMenuToAdd;
    }
    addItem(items) {
        if (!Array.isArray(items)) {
            items = [items];
        }
        items.forEach(item => {
            item.offset = this._offset;
            item.parent = this;
            item.formatDescription();
        });
        this.items.push(...items);
        this.refreshIndex();
    }
    removeItem(itemOrIndex) {
        if (typeof itemOrIndex === 'number') {
            this.items = this.items.filter((i, index) => index !== itemOrIndex);
        }
        else {
            this.items = this.items.filter(i => i.id !== itemOrIndex.id);
        }
        this.refreshIndex();
    }
    bindMenuToItem(menuToBind, itemToBindTo) {
        menuToBind.parentMenu = this;
        menuToBind.parentItem = itemToBindTo;
        this.children.set(itemToBindTo.id, menuToBind);
    }
    releaseMenuFromItem(releaseFrom) {
        if (!this.children.has(releaseFrom.id)) {
            return false;
        }
        const menu = this.children.get(releaseFrom.id);
        menu.parentItem = null;
        menu.parentMenu = null;
        this.children.delete(releaseFrom.id);
        return true;
    }
    refreshIndex() {
        if (this.items.length === 0) {
            this._activeItem = 1000;
            this._maxItem = this._maxItemsOnScreen;
            this._minItem = 0;
            return;
        }
        for (const item of this.items) {
            item.selected = false;
        }
        this._activeItem = 1000 - (1000 % this.items.length);
        this._maxItem = this._maxItemsOnScreen;
        this._minItem = 0;
        if (this.CurrentItem instanceof __1.UIMenuSeparatorItem &&
            this._isThereAnyItemExcludingSeparators()) {
            this.goDown();
        }
    }
    clear() {
        this.items = [];
        this._recalculateUpAndDown();
        this._recalculateDescriptionPosition();
    }
    open() {
        this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
        this.visible = true;
        this._justOpened = true;
        if (!this.parentMenu && this.Settings.resetCursorOnOpen) {
            __1.Hud.CursorPosition = new utils_1.Point(0.5, 0.5);
            __1.Hud.CursorSprite = __2.CursorSprite.Normal;
        }
        this.menuOpen.emit();
    }
    close() {
        this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
        this.visible = false;
        this.refreshIndex();
        this.menuClose.emit();
    }
    goLeft() {
        const item = this.CurrentItem;
        if (item instanceof items_1.UIMenuListItem) {
            if (!item.Items.length) {
                return;
            }
            item.Index -= 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.listChange.emit(item, item.Index, item.SelectedItem);
            item.listChanged.emit(item.Index, item.SelectedItem);
        }
        else if (item instanceof items_1.UIMenuSliderItem) {
            if (!item.Items.length) {
                return;
            }
            item.Index -= 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
            item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
        }
    }
    goRight() {
        const item = this.CurrentItem;
        if (item instanceof items_1.UIMenuListItem) {
            if (item.Items.length === 0) {
                return;
            }
            item.Index += 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.listChange.emit(item, item.Index, item.SelectedItem);
            item.listChanged.emit(item.Index, item.SelectedItem);
        }
        else if (item instanceof items_1.UIMenuSliderItem) {
            item.Index += 1;
            this._playSoundAndReleaseId(this.Settings.audio.leftRight, this.Settings.audio.library);
            this.sliderChange.emit(item, item.Index, item.indexToItem(item.Index));
            item.sliderChanged.emit(item.Index, item.indexToItem(item.Index));
        }
    }
    selectItem() {
        const item = this.CurrentItem;
        if (!item.enabled) {
            this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
            return;
        }
        this._playSoundAndReleaseId(this.Settings.audio.select, this.Settings.audio.library);
        if (item instanceof items_1.UIMenuCheckboxItem) {
            item.Checked = !item.Checked;
            this.checkboxChange.emit(item, item.Checked);
            item.checkboxChanged.emit(item.Checked);
        }
        else if (item instanceof items_1.UIMenuListItem) {
            this.listSelect.emit(item, item.Index, item.SelectedItem);
            item.listSelected.emit(item.Index, item.SelectedItem);
        }
        else if (item instanceof items_1.UIMenuSliderItem) {
            this.sliderSelect.emit(item, item.Index, item.indexToItem(item.Index));
            item.sliderSelected.emit(item.Index, item.indexToItem(item.Index));
        }
        else {
            this.itemSelect.emit(item, this.CurrentSelection);
            item.activated.emit();
            if (this.children.has(item.id)) {
                const subMenu = this.children.get(item.id);
                this.visible = false;
                subMenu.visible = true;
                subMenu._justOpened = true;
                subMenu.menuOpen.emit();
                this.menuChange.emit(subMenu, true);
            }
        }
        item.fireEvent();
    }
    isMouseInBounds(pos, size, drawOffset = true) {
        const resolution = Menu.screenResolution;
        const cX = (GetControlNormal(0, enums_1.Control.CursorX) * resolution.width) / resolution.width;
        const cY = (GetControlNormal(0, enums_1.Control.CursorY) * resolution.height) / resolution.height;
        let x = pos.X / resolution.width;
        let y = pos.Y / resolution.height;
        const w = size.width / resolution.width;
        const h = size.height / resolution.height;
        if (drawOffset) {
            x += this._drawOffset.X;
            y += this._drawOffset.Y;
        }
        return cX >= x && cX <= x + w && cY > y && cY < y + h;
    }
    goUp() {
        this.CurrentItem.selected = false;
        if (this.items.length > this._maxItemsOnScreen + 1) {
            if (this.CurrentSelection <= this._minItem) {
                if (this.CurrentSelection === 0) {
                    this._minItem = this.items.length - this._maxItemsOnScreen - 1;
                    this._maxItem = this.items.length - 1;
                    this._activeItem = 1000 - (1000 % this.items.length);
                    this._activeItem += this.items.length - 1;
                }
                else {
                    this._minItem--;
                    this._maxItem--;
                    this._activeItem--;
                }
            }
            else {
                this._activeItem--;
            }
        }
        else {
            this._activeItem--;
        }
        // Skip separator items
        if (this.CurrentItem instanceof __1.UIMenuSeparatorItem &&
            this._isThereAnyItemExcludingSeparators()) {
            this.goUp();
        }
        else {
            this.CurrentItem.selected = true;
            this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
            this.indexChange.emit(this.CurrentSelection);
        }
    }
    goDown() {
        this.CurrentItem.selected = false;
        if (this.items.length > this._maxItemsOnScreen + 1) {
            if (this.CurrentSelection >= this._maxItem) {
                if (this.CurrentSelection === this.items.length - 1) {
                    this._minItem = 0;
                    this._maxItem = this._maxItemsOnScreen;
                    this._activeItem = 1000 - (1000 % this.items.length);
                }
                else {
                    this._minItem++;
                    this._maxItem++;
                    this._activeItem++;
                }
            }
            else {
                this._activeItem++;
            }
        }
        else {
            this._activeItem++;
        }
        // Skip separator items
        if (this.CurrentItem instanceof __1.UIMenuSeparatorItem &&
            this._isThereAnyItemExcludingSeparators()) {
            this.goDown();
        }
        else {
            this.CurrentItem.selected = true;
            this._playSoundAndReleaseId(this.Settings.audio.upDown, this.Settings.audio.library);
            this.indexChange.emit(this.CurrentSelection);
        }
    }
    goBack() {
        this._playSoundAndReleaseId(this.Settings.audio.back, this.Settings.audio.library);
        this.visible = false;
        if (this.parentMenu != null) {
            this.parentMenu.visible = true;
            this.parentMenu._justOpened = true;
            this.parentMenu.menuOpen.emit();
            this.menuChange.emit(this.parentMenu, false);
        }
        this.menuClose.emit();
    }
    _processMouse() {
        if (!this.visible ||
            this._justOpened ||
            !this.items.length ||
            __2.Game.CurrentInputMode === __2.InputMode.GamePad ||
            !this.Settings.mouseControlsEnabled) {
            __2.Game.enableControlThisFrame(0, enums_1.Control.LookUp);
            __2.Game.enableControlThisFrame(0, enums_1.Control.LookDown);
            __2.Game.enableControlThisFrame(0, enums_1.Control.Attack);
            __2.Game.enableControlThisFrame(0, enums_1.Control.Aim);
            return;
        }
        __1.Hud.showCursorThisFrame();
        if (this.Settings.mouseEdgeEnabled) {
            if (this.isMouseInBounds(new utils_1.Point(), new utils_1.Size(30, Menu.screenHeight), false)) {
                __2.GameplayCamera.RelativeHeading += 1;
                __1.Hud.CursorSprite = __2.CursorSprite.LeftArrow;
            }
            else if (this.isMouseInBounds(new utils_1.Point(Menu.screenWidth - 30), new utils_1.Size(30, Menu.screenHeight), false)) {
                __2.GameplayCamera.RelativeHeading -= 1;
                __1.Hud.CursorSprite = __2.CursorSprite.RightArrow;
            }
            else {
                __1.Hud.CursorSprite = __2.CursorSprite.Normal;
            }
        }
        if (this._mousePressed) {
            return;
        }
        let hoveredItem, hoveredItemIndex;
        const limit = this.items.length > this._maxItemsOnScreen + 1 ? this._maxItem : this.items.length - 1;
        for (let i = this._minItem; i <= limit; i++) {
            const item = this.items[i];
            if (item instanceof __1.UIMenuSeparatorItem) {
                continue;
            }
            if (!hoveredItem && item.IsMouseInBounds) {
                item.hovered = true;
                hoveredItem = item;
                hoveredItemIndex = i;
            }
            else {
                item.hovered = false;
            }
        }
        if (hoveredItem && __2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
            (() => __awaiter(this, void 0, void 0, function* () {
                this._mousePressed = true;
                if (hoveredItem.selected) {
                    if (hoveredItem.enabled) {
                        if (hoveredItem instanceof items_1.UIMenuListItem || hoveredItem instanceof items_1.UIMenuSliderItem) {
                            if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                                this.goLeft();
                            }
                            else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                                this.goRight();
                            }
                            else {
                                this.selectItem();
                            }
                        }
                        else {
                            this.selectItem();
                        }
                    }
                    else {
                        this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                    }
                }
                else {
                    this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                    this.CurrentSelection = hoveredItemIndex;
                    this.indexChange.emit(this.CurrentSelection);
                }
                yield new Promise(resolve => setTimeout(resolve, this._navigationDelay));
                while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack) && hoveredItem.IsMouseInBounds) {
                    if (hoveredItem.selected) {
                        if (hoveredItem.enabled) {
                            if (hoveredItem instanceof items_1.UIMenuListItem ||
                                hoveredItem instanceof items_1.UIMenuSliderItem) {
                                if (hoveredItem.IsMouseInBoundsOfLeftArrow) {
                                    this.goLeft();
                                }
                                else if (hoveredItem.IsMouseInBoundsOfRightArrow) {
                                    this.goRight();
                                }
                            }
                        }
                        else {
                            this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                        }
                    }
                    else {
                        this._playSoundAndReleaseId(this.Settings.audio.error, this.Settings.audio.library);
                        this.CurrentSelection = hoveredItemIndex;
                        this.indexChange.emit(this.CurrentSelection);
                    }
                    yield new Promise(resolve => setTimeout(resolve, 125));
                }
                this._mousePressed = false;
            }))();
        }
        if (this.items.length <= this._maxItemsOnScreen + 1 || this._mousePressed) {
            return;
        }
        if (this.isMouseInBounds(this._extraRectangleUp.pos, this._extraRectangleUp.size)) {
            this._extraRectangleUp.color = utils_1.Color.fromRgb(30, 30, 30);
            if (__2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
                (() => __awaiter(this, void 0, void 0, function* () {
                    this._mousePressed = true;
                    this.goUp();
                    yield new Promise(resolve => setTimeout(resolve, this._navigationDelay));
                    while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                        this.goUp();
                        yield new Promise(resolve => setTimeout(resolve, 125));
                    }
                    this._mousePressed = false;
                }))();
            }
        }
        else {
            this._extraRectangleUp.color = new utils_1.Color(200, 0, 0, 0);
        }
        if (this._mousePressed) {
            return;
        }
        if (this.isMouseInBounds(this._extraRectangleDown.pos, this._extraRectangleDown.size)) {
            this._extraRectangleDown.color = utils_1.Color.fromRgb(30, 30, 30);
            if (__2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
                (() => __awaiter(this, void 0, void 0, function* () {
                    this._mousePressed = true;
                    this.goDown();
                    yield new Promise(resolve => setTimeout(resolve, this._navigationDelay));
                    while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                        this.goDown();
                        yield new Promise(resolve => setTimeout(resolve, 125));
                    }
                    this._mousePressed = false;
                }))();
            }
        }
        else {
            this._extraRectangleDown.color = new utils_1.Color(200, 0, 0, 0);
        }
    }
    _processControl() {
        if (!this.visible) {
            return;
        }
        if (this._justOpened) {
            this._justOpened = false;
            return;
        }
        // Back
        if (this.Controls.back.Enabled && __2.Game.isDisabledControlJustReleased(0, enums_1.Control.PhoneCancel)) {
            this.goBack();
        }
        if (this.items.length === 0) {
            return;
        }
        // Up
        if (this.Controls.up.Enabled &&
            (__2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneUp) ||
                __2.Game.isDisabledControlPressed(0, enums_1.Control.CursorScrollUp)) &&
            this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
            this._lastUpDownNavigation = Date.now();
            this.goUp();
        }
        // Down
        if (this.Controls.down.Enabled &&
            (__2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneDown) ||
                __2.Game.isDisabledControlPressed(0, enums_1.Control.CursorScrollDown)) &&
            this._lastUpDownNavigation + this._navigationDelay < Date.now()) {
            this._lastUpDownNavigation = Date.now();
            this.goDown();
        }
        // Left
        if (this.Controls.left.Enabled &&
            __2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneLeft) &&
            this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
            this._lastLeftRightNavigation = Date.now();
            this.goLeft();
        }
        // Right
        if (this.Controls.right.Enabled &&
            __2.Game.isDisabledControlPressed(0, enums_1.Control.PhoneRight) &&
            this._lastLeftRightNavigation + this._navigationDelay < Date.now()) {
            this._lastLeftRightNavigation = Date.now();
            this.goRight();
        }
        // Select
        if (this.Controls.select.Enabled &&
            __2.Game.isDisabledControlJustPressed(0, enums_1.Control.FrontendAccept)) {
            this.selectItem();
        }
    }
    _isThereAnyItemExcludingSeparators() {
        return !!this.items.filter(item => !(item instanceof __1.UIMenuSeparatorItem)).length;
    }
    _playSoundAndReleaseId(sound, set) {
        const soundId = __2.Audio.playSoundFrontEnd(sound, set);
        __2.Audio.releaseSound(soundId);
    }
    _disEnableControls() {
        __2.Game.disableAllControlsThisFrame(__2.InputMode.GamePad);
        for (const control of this._settings.enabledControls[__2.Game.CurrentInputMode]) {
            __2.Game.enableControlThisFrame(0, control);
        }
    }
    _recalculateUpAndDown() {
        const y = this._offset.Y;
        this._extraRectangleUp.pos.Y = 144 + 38 * (this._maxItemsOnScreen + 1) + y;
        this._extraRectangleDown.pos.Y = 144 + 18 + 38 * (this._maxItemsOnScreen + 1) + y;
        this._upAndDownSprite.pos.Y = 147 + 37 * (this._maxItemsOnScreen + 1) + y;
    }
    _recalculateDescriptionPosition() {
        let y = 149 + this._offset.Y;
        let count = this.items.length;
        if (count > this._maxItemsOnScreen + 1) {
            count = this._maxItemsOnScreen + 2;
        }
        y += 38 * count;
        this._descriptionBar.pos.Y = y;
        this._descriptionRectangle.pos.Y = y;
        this._descriptionText.pos.Y = y + 6;
    }
    _calculateItemHeight() {
        const y = 149 + this._offset.Y;
        let count = this.items.length;
        if (count > this._maxItemsOnScreen + 1) {
            count = this._maxItemsOnScreen + 2;
        }
        return y + 38 * count;
    }
    _calculatePanelPosition(hasDescription) {
        let height = 0;
        if (hasDescription) {
            height += this._descriptionRectangle.size.height + 5;
        }
        return this._calculateItemHeight() + height;
    }
    _render() {
        if (!this.visible || __2.Game.IsPaused) {
            return;
        }
        if (this._justOpened) {
            if (this._logo != null && !this._logo.IsTextureDictionaryLoaded) {
                this._logo.loadTextureDictionary();
            }
            if (!this._background.IsTextureDictionaryLoaded) {
                this._background.loadTextureDictionary();
            }
            if (!this._descriptionRectangle.IsTextureDictionaryLoaded) {
                this._descriptionRectangle.loadTextureDictionary();
            }
            if (!this._upAndDownSprite.IsTextureDictionaryLoaded) {
                this._upAndDownSprite.loadTextureDictionary();
            }
        }
        if (this.Settings.scaleWithSafezone) {
            ScreenDrawPositionBegin(76, 84);
            ScreenDrawPositionRatio(0, 0, 0, 0);
            const pos = GetScriptGfxPosition(0, 0);
            this._drawOffset.X = pos[0];
            this._drawOffset.Y = pos[1];
        }
        this._mainMenu.draw(undefined, Menu.screenResolution);
        this._processControl();
        this._processMouse();
        if (this.Settings.controlDisablingEnabled) {
            this._disEnableControls();
        }
        this._background.size =
            this.items.length > this._maxItemsOnScreen + 1
                ? new utils_1.Size(431 + this._widthOffset, 38 * (this._maxItemsOnScreen + 1))
                : new utils_1.Size(431 + this._widthOffset, 38 * this.items.length);
        this._background.draw(Menu.screenResolution);
        if (this.items.length > 0) {
            const hasDescription = this.CurrentItem.Description && this.CurrentItem.Description !== '';
            this.CurrentItem.selected = true;
            if (hasDescription) {
                this._recalculateDescriptionPosition();
                this._descriptionText.caption = this.CurrentItem.FormattedDescription;
                const numLines = this._descriptionText.caption.split('\n').length;
                this._descriptionRectangle.size = new utils_1.Size(431 + this._widthOffset, numLines * 25 + 15);
                this._descriptionBar.draw(undefined, Menu.screenResolution);
                this._descriptionRectangle.draw(Menu.screenResolution);
                this._descriptionText.draw(undefined, Menu.screenResolution);
            }
            if (this.CurrentItem.Panels && this.CurrentItem.Panels.length) {
                let offset = this._calculatePanelPosition(hasDescription);
                for (let i = 0; i < this.CurrentItem.Panels.length; i++) {
                    if (i > 0) {
                        offset += this.CurrentItem.Panels[i - 1].Height + 5;
                    }
                    this.CurrentItem.Panels[i].setVerticalPosition(offset);
                    this.CurrentItem.Panels[i].draw();
                }
            }
        }
        if (this.items.length <= this._maxItemsOnScreen + 1) {
            let count = 0;
            for (const menuItem of this.items) {
                menuItem.setVerticalPosition(count * 38);
                menuItem.draw();
                count += 1;
            }
            if (this._counterText && this._counterOverride) {
                this._counterText.caption = this._counterPretext + this._counterOverride;
                this._counterText.draw(undefined, Menu.screenResolution);
            }
        }
        else {
            let count = 0;
            for (let index = this._minItem; index <= this._maxItem; index++) {
                const item = this.items[index];
                item.setVerticalPosition(count * 38);
                item.draw();
                count++;
            }
            this._recalculateUpAndDown();
            this._extraRectangleUp.draw(undefined, Menu.screenResolution);
            this._extraRectangleDown.draw(undefined, Menu.screenResolution);
            this._upAndDownSprite.draw(Menu.screenResolution);
            if (this._counterText) {
                if (!this._counterOverride) {
                    const cap = `${this.CurrentSelection + 1} / ${this.items.length}`;
                    this._counterText.caption = this._counterPretext + cap;
                }
                else {
                    this._counterText.caption = this._counterPretext + this._counterOverride;
                }
                this._counterText.draw(undefined, Menu.screenResolution);
            }
        }
        this._logo.draw(Menu.screenResolution);
        if (this.Settings.scaleWithSafezone) {
            ScreenDrawPositionEnd();
        }
    }
}
exports.Menu = Menu;
Menu.screenAspectRatio = IsDuplicityVersion() ? 0 : __1.Screen.AspectRatio;
Menu.screenHeight = 1080;
Menu.screenWidth = Menu.screenHeight * Menu.screenAspectRatio;
Menu.screenResolution = new utils_1.Size(Menu.screenWidth, Menu.screenHeight);


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/MenuControl.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/MenuControl.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuControl = void 0;
class MenuControl {
    constructor(enabled = true) {
        this._enabled = enabled;
    }
    get Enabled() {
        return this._enabled;
    }
    set Enabled(value) {
        this._enabled = value;
    }
}
exports.MenuControl = MenuControl;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/MenuControls.js":
/*!************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/MenuControls.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuControls = void 0;
const MenuControl_1 = __webpack_require__(/*! ./MenuControl */ "../node_modules/fivem-js/lib/ui/menu/MenuControl.js");
class MenuControls {
    constructor() {
        this.back = new MenuControl_1.MenuControl();
        this.select = new MenuControl_1.MenuControl();
        this.left = new MenuControl_1.MenuControl();
        this.right = new MenuControl_1.MenuControl();
        this.up = new MenuControl_1.MenuControl();
        this.down = new MenuControl_1.MenuControl();
    }
}
exports.MenuControls = MenuControls;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/MenuSettings.js":
/*!************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/MenuSettings.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuSettings = void 0;
const index_1 = __webpack_require__(/*! ../../index */ "../node_modules/fivem-js/lib/index.js");
const enums_1 = __webpack_require__(/*! ../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
class MenuSettings {
    constructor() {
        this.scaleWithSafezone = true;
        this.resetCursorOnOpen = true;
        this.mouseControlsEnabled = true;
        this.mouseEdgeEnabled = true;
        this.controlDisablingEnabled = true;
        this.audio = {
            library: 'HUD_FRONTEND_DEFAULT_SOUNDSET',
            upDown: 'NAV_UP_DOWN',
            leftRight: 'NAV_LEFT_RIGHT',
            select: 'SELECT',
            back: 'BACK',
            error: 'ERROR',
        };
        this.enabledControls = {
            [index_1.InputMode.GamePad]: [enums_1.Control.LookUpDown, enums_1.Control.LookLeftRight, enums_1.Control.Aim, enums_1.Control.Attack],
            [index_1.InputMode.MouseAndKeyboard]: [
                enums_1.Control.FrontendAccept,
                enums_1.Control.FrontendAxisX,
                enums_1.Control.FrontendAxisY,
                enums_1.Control.FrontendDown,
                enums_1.Control.FrontendUp,
                enums_1.Control.FrontendLeft,
                enums_1.Control.FrontendRight,
                enums_1.Control.FrontendCancel,
                enums_1.Control.FrontendSelect,
                enums_1.Control.CursorScrollDown,
                enums_1.Control.CursorScrollUp,
                enums_1.Control.CursorX,
                enums_1.Control.CursorY,
                enums_1.Control.MoveUpDown,
                enums_1.Control.MoveLeftRight,
                enums_1.Control.Sprint,
                enums_1.Control.Jump,
                enums_1.Control.Enter,
                enums_1.Control.VehicleExit,
                enums_1.Control.VehicleAccelerate,
                enums_1.Control.VehicleBrake,
                enums_1.Control.VehicleHandbrake,
                enums_1.Control.VehicleMoveLeftRight,
                enums_1.Control.VehicleFlyYawLeft,
                enums_1.Control.VehicleFlyYawRight,
                enums_1.Control.FlyLeftRight,
                enums_1.Control.FlyUpDown,
            ],
        };
    }
}
exports.MenuSettings = MenuSettings;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuSettings = exports.MenuControls = exports.MenuControl = exports.Menu = void 0;
__exportStar(__webpack_require__(/*! ./items */ "../node_modules/fivem-js/lib/ui/menu/items/index.js"), exports);
__exportStar(__webpack_require__(/*! ./modules */ "../node_modules/fivem-js/lib/ui/menu/modules/index.js"), exports);
var Menu_1 = __webpack_require__(/*! ./Menu */ "../node_modules/fivem-js/lib/ui/menu/Menu.js");
Object.defineProperty(exports, "Menu", ({ enumerable: true, get: function () { return Menu_1.Menu; } }));
var MenuControl_1 = __webpack_require__(/*! ./MenuControl */ "../node_modules/fivem-js/lib/ui/menu/MenuControl.js");
Object.defineProperty(exports, "MenuControl", ({ enumerable: true, get: function () { return MenuControl_1.MenuControl; } }));
var MenuControls_1 = __webpack_require__(/*! ./MenuControls */ "../node_modules/fivem-js/lib/ui/menu/MenuControls.js");
Object.defineProperty(exports, "MenuControls", ({ enumerable: true, get: function () { return MenuControls_1.MenuControls; } }));
var MenuSettings_1 = __webpack_require__(/*! ./MenuSettings */ "../node_modules/fivem-js/lib/ui/menu/MenuSettings.js");
Object.defineProperty(exports, "MenuSettings", ({ enumerable: true, get: function () { return MenuSettings_1.MenuSettings; } }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuCheckboxItem.js":
/*!************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/UIMenuCheckboxItem.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuCheckboxItem = void 0;
const __1 = __webpack_require__(/*! ../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const utils_1 = __webpack_require__(/*! ../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/index.js");
const enums_1 = __webpack_require__(/*! ../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
class UIMenuCheckboxItem extends _1.UIMenuItem {
    constructor(text, checked = false, description, style = null) {
        super(text, description);
        this.checkboxChanged = new utils_1.LiteEvent();
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this._checked = false;
        this._style = enums_1.CheckboxStyle.Tick;
        this._checkboxSprite = new __1.Sprite('commonmenu', '', new utils_1.Point(410, 95), new utils_1.Size(50, 50));
        this.Checked = checked;
        this.Style = style;
    }
    get Checked() {
        return this._checked;
    }
    set Checked(value) {
        this._checked = value || false;
    }
    get Style() {
        return this._style;
    }
    set Style(value) {
        this._style = Number(value);
    }
    setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._checkboxSprite.pos.Y = y + 138 + this.offset.Y;
    }
    draw() {
        super.draw();
        this._checkboxSprite.pos.X = 380 + this.offset.X + this.parent.WidthOffset;
        this._checkboxSprite.textureName = this._getSpriteName();
        this._checkboxSprite.color = this._getSpriteColor();
        this._checkboxSprite.draw(__1.Menu.screenResolution);
    }
    _getSpriteName() {
        let name = 'blank';
        if (this._checked) {
            switch (this._style) {
                case enums_1.CheckboxStyle.Tick:
                    name = 'tick';
                    break;
                case enums_1.CheckboxStyle.Cross:
                    name = 'cross';
                    break;
            }
        }
        return `shop_box_${name}${this.selected ? 'b' : ''}`;
    }
    _getSpriteColor() {
        return this.enabled ? utils_1.Color.white : utils_1.Color.fromRgb(109, 109, 109);
    }
}
exports.UIMenuCheckboxItem = UIMenuCheckboxItem;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuItem.js":
/*!****************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/UIMenuItem.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuItem = void 0;
const __1 = __webpack_require__(/*! ../ */ "../node_modules/fivem-js/lib/ui/menu/index.js");
const __2 = __webpack_require__(/*! ../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const enums_1 = __webpack_require__(/*! ../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const utils_1 = __webpack_require__(/*! ../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
class UIMenuItem {
    constructor(text, description) {
        this.id = utils_1.uuidv4();
        this.enabled = true;
        this.activated = new utils_1.LiteEvent();
        this.panelActivated = new utils_1.LiteEvent();
        this.supportsDescription = true;
        this.supportsPanels = true;
        this.supportsLeftBadge = true;
        this.supportsRightBadge = true;
        this.supportsRightLabel = true;
        this._backColor = UIMenuItem.defaultBackColor;
        this._highlightedBackColor = UIMenuItem.defaultHighlightedBackColor;
        this._foreColor = UIMenuItem.defaultForeColor;
        this._highlightedForeColor = UIMenuItem.defaultHighlightedForeColor;
        this._leftBadge = enums_1.BadgeStyle.None;
        this._rightBadge = enums_1.BadgeStyle.None;
        this._panels = [];
        this.rectangle = new __2.Rectangle(new utils_1.Point(), new utils_1.Size(431, 38), this._backColor);
        this.text = new __2.Text('', new utils_1.Point(), 0.33, this._foreColor, enums_1.Font.ChaletLondon, enums_1.Alignment.Left);
        this.selectedSprite = new __2.Sprite('commonmenu', 'gradient_nav', new utils_1.Point(), new utils_1.Size(431, 38), 0, this._highlightedBackColor);
        this.badgeLeft = new __2.Sprite('', '');
        this.badgeRight = new __2.Sprite('', '');
        this.labelText = new __2.Text('', new utils_1.Point(), 0.35, this._foreColor, 0, enums_1.Alignment.Right);
        this.Text = text;
        this.Description = description;
    }
    static badgeToTextureDict(badge) {
        switch (badge) {
            case enums_1.BadgeStyle.Male:
            case enums_1.BadgeStyle.Female:
            case enums_1.BadgeStyle.AudioMute:
            case enums_1.BadgeStyle.AudioInactive:
            case enums_1.BadgeStyle.AudioVol1:
            case enums_1.BadgeStyle.AudioVol2:
            case enums_1.BadgeStyle.AudioVol3:
                return 'mpleaderboard';
            case enums_1.BadgeStyle.InvArmWrestling:
            case enums_1.BadgeStyle.InvBasejump:
            case enums_1.BadgeStyle.InvMission:
            case enums_1.BadgeStyle.InvDarts:
            case enums_1.BadgeStyle.InvDeathmatch:
            case enums_1.BadgeStyle.InvDrug:
            case enums_1.BadgeStyle.InvCastle:
            case enums_1.BadgeStyle.InvGolf:
            case enums_1.BadgeStyle.InvBike:
            case enums_1.BadgeStyle.InvBoat:
            case enums_1.BadgeStyle.InvAnchor:
            case enums_1.BadgeStyle.InvCar:
            case enums_1.BadgeStyle.InvDollar:
            case enums_1.BadgeStyle.InvCoke:
            case enums_1.BadgeStyle.InvKey:
            case enums_1.BadgeStyle.InvData:
            case enums_1.BadgeStyle.InvHeli:
            case enums_1.BadgeStyle.InvHeorin:
            case enums_1.BadgeStyle.InvKeycard:
            case enums_1.BadgeStyle.InvMeth:
            case enums_1.BadgeStyle.InvBriefcase:
            case enums_1.BadgeStyle.InvLink:
            case enums_1.BadgeStyle.InvPerson:
            case enums_1.BadgeStyle.InvPlane:
            case enums_1.BadgeStyle.InvPlane2:
            case enums_1.BadgeStyle.InvQuestionmark:
            case enums_1.BadgeStyle.InvRemote:
            case enums_1.BadgeStyle.InvSafe:
            case enums_1.BadgeStyle.InvSteerWheel:
            case enums_1.BadgeStyle.InvWeapon:
            case enums_1.BadgeStyle.InvWeed:
            case enums_1.BadgeStyle.InvRaceFlagPlane:
            case enums_1.BadgeStyle.InvRaceFlagBicycle:
            case enums_1.BadgeStyle.InvRaceFlagBoatAnchor:
            case enums_1.BadgeStyle.InvRaceFlagPerson:
            case enums_1.BadgeStyle.InvRaceFlagCar:
            case enums_1.BadgeStyle.InvRaceFlagHelmet:
            case enums_1.BadgeStyle.InvShootingRange:
            case enums_1.BadgeStyle.InvSurvival:
            case enums_1.BadgeStyle.InvTeamDeathmatch:
            case enums_1.BadgeStyle.InvTennis:
            case enums_1.BadgeStyle.InvVehicleDeathmatch:
                return 'mpinventory';
            case enums_1.BadgeStyle.Adversary:
            case enums_1.BadgeStyle.BaseJumping:
            case enums_1.BadgeStyle.Briefcase:
            case enums_1.BadgeStyle.MissionStar:
            case enums_1.BadgeStyle.Deathmatch:
            case enums_1.BadgeStyle.Castle:
            case enums_1.BadgeStyle.Trophy:
            case enums_1.BadgeStyle.RaceFlag:
            case enums_1.BadgeStyle.RaceFlagPlane:
            case enums_1.BadgeStyle.RaceFlagBicycle:
            case enums_1.BadgeStyle.RaceFlagPerson:
            case enums_1.BadgeStyle.RaceFlagCar:
            case enums_1.BadgeStyle.RaceFlagBoatAnchor:
            case enums_1.BadgeStyle.Rockstar:
            case enums_1.BadgeStyle.Stunt:
            case enums_1.BadgeStyle.StuntPremium:
            case enums_1.BadgeStyle.RaceFlagStuntJump:
            case enums_1.BadgeStyle.Shield:
            case enums_1.BadgeStyle.TeamDeathmatch:
            case enums_1.BadgeStyle.VehicleDeathmatch:
                return 'commonmenutu';
            case enums_1.BadgeStyle.MpAmmoPickup:
            case enums_1.BadgeStyle.MpAmmo:
            case enums_1.BadgeStyle.MpCash:
            case enums_1.BadgeStyle.MpRp:
            case enums_1.BadgeStyle.MpSpectating:
                return 'mphud';
            case enums_1.BadgeStyle.Sale:
                return 'mpshopsale';
            case enums_1.BadgeStyle.GlobeWhite:
            case enums_1.BadgeStyle.GlobeRed:
            case enums_1.BadgeStyle.GlobeBlue:
            case enums_1.BadgeStyle.GlobeYellow:
            case enums_1.BadgeStyle.GlobeGreen:
            case enums_1.BadgeStyle.GlobeOrange:
                return 'mprankbadge';
            case enums_1.BadgeStyle.CountryUsa:
            case enums_1.BadgeStyle.CountryUk:
            case enums_1.BadgeStyle.CountrySweden:
            case enums_1.BadgeStyle.CountryKorea:
            case enums_1.BadgeStyle.CountryJapan:
            case enums_1.BadgeStyle.CountryItaly:
            case enums_1.BadgeStyle.CountryGermany:
            case enums_1.BadgeStyle.CountryFrance:
            case enums_1.BadgeStyle.BrandAlbany:
            case enums_1.BadgeStyle.BrandAnnis:
            case enums_1.BadgeStyle.BrandBanshee:
            case enums_1.BadgeStyle.BrandBenefactor:
            case enums_1.BadgeStyle.BrandBf:
            case enums_1.BadgeStyle.BrandBollokan:
            case enums_1.BadgeStyle.BrandBravado:
            case enums_1.BadgeStyle.BrandBrute:
            case enums_1.BadgeStyle.BrandBuckingham:
            case enums_1.BadgeStyle.BrandCanis:
            case enums_1.BadgeStyle.BrandChariot:
            case enums_1.BadgeStyle.BrandCheval:
            case enums_1.BadgeStyle.BrandClassique:
            case enums_1.BadgeStyle.BrandCoil:
            case enums_1.BadgeStyle.BrandDeclasse:
            case enums_1.BadgeStyle.BrandDewbauchee:
            case enums_1.BadgeStyle.BrandDilettante:
            case enums_1.BadgeStyle.BrandDinka:
            case enums_1.BadgeStyle.BrandDundreary:
            case enums_1.BadgeStyle.BrandEmporer:
            case enums_1.BadgeStyle.BrandEnus:
            case enums_1.BadgeStyle.BrandFathom:
            case enums_1.BadgeStyle.BrandGalivanter:
            case enums_1.BadgeStyle.BrandGrotti:
            case enums_1.BadgeStyle.BrandHijak:
            case enums_1.BadgeStyle.BrandHvy:
            case enums_1.BadgeStyle.BrandImponte:
            case enums_1.BadgeStyle.BrandInvetero:
            case enums_1.BadgeStyle.BrandJacksheepe:
            case enums_1.BadgeStyle.BrandJobuilt:
            case enums_1.BadgeStyle.BrandKarin:
            case enums_1.BadgeStyle.BrandLampadati:
            case enums_1.BadgeStyle.BrandMaibatsu:
            case enums_1.BadgeStyle.BrandMammoth:
            case enums_1.BadgeStyle.BrandMtl:
            case enums_1.BadgeStyle.BrandNagasaki:
            case enums_1.BadgeStyle.BrandObey:
            case enums_1.BadgeStyle.BrandOcelot:
            case enums_1.BadgeStyle.BrandOverflod:
            case enums_1.BadgeStyle.BrandPed:
            case enums_1.BadgeStyle.BrandPegassi:
            case enums_1.BadgeStyle.BrandPfister:
            case enums_1.BadgeStyle.BrandPrincipe:
            case enums_1.BadgeStyle.BrandProgen:
            case enums_1.BadgeStyle.BrandSchyster:
            case enums_1.BadgeStyle.BrandShitzu:
            case enums_1.BadgeStyle.BrandSpeedophile:
            case enums_1.BadgeStyle.BrandStanley:
            case enums_1.BadgeStyle.BrandTruffade:
            case enums_1.BadgeStyle.BrandUbermacht:
            case enums_1.BadgeStyle.BrandVapid:
            case enums_1.BadgeStyle.BrandVulcar:
            case enums_1.BadgeStyle.BrandWeeny:
            case enums_1.BadgeStyle.BrandWestern:
            case enums_1.BadgeStyle.BrandWesternmotorcycle:
            case enums_1.BadgeStyle.BrandWillard:
            case enums_1.BadgeStyle.BrandZirconium:
                return 'mpcarhud';
            case enums_1.BadgeStyle.BrandGrotti2:
            case enums_1.BadgeStyle.BrandLcc:
            case enums_1.BadgeStyle.BrandProgen2:
            case enums_1.BadgeStyle.BrandRune:
                return 'mpcarhud2';
            case enums_1.BadgeStyle.Info:
                return 'shared';
            default:
                return 'commonmenu';
        }
    }
    static getBadgeSpriteWidthOffset(sprite) {
        return (40 - sprite.size.width) / 2;
    }
    static getBadgeSpriteHeightOffset(sprite) {
        return (40 - sprite.size.height) / 2;
    }
    static getBadgeSize(badge) {
        switch (badge) {
            case enums_1.BadgeStyle.Cash:
            case enums_1.BadgeStyle.Coke:
            case enums_1.BadgeStyle.Crown:
            case enums_1.BadgeStyle.Heroin:
            case enums_1.BadgeStyle.Meth:
            case enums_1.BadgeStyle.Weed:
            case enums_1.BadgeStyle.Adversary:
            case enums_1.BadgeStyle.BaseJumping:
            case enums_1.BadgeStyle.Briefcase:
            case enums_1.BadgeStyle.MissionStar:
            case enums_1.BadgeStyle.Deathmatch:
            case enums_1.BadgeStyle.Castle:
            case enums_1.BadgeStyle.Trophy:
            case enums_1.BadgeStyle.RaceFlag:
            case enums_1.BadgeStyle.RaceFlagPlane:
            case enums_1.BadgeStyle.RaceFlagBicycle:
            case enums_1.BadgeStyle.RaceFlagPerson:
            case enums_1.BadgeStyle.RaceFlagCar:
            case enums_1.BadgeStyle.RaceFlagBoatAnchor:
            case enums_1.BadgeStyle.Rockstar:
            case enums_1.BadgeStyle.Stunt:
            case enums_1.BadgeStyle.StuntPremium:
            case enums_1.BadgeStyle.RaceFlagStuntJump:
            case enums_1.BadgeStyle.Shield:
            case enums_1.BadgeStyle.TeamDeathmatch:
            case enums_1.BadgeStyle.VehicleDeathmatch:
            case enums_1.BadgeStyle.AudioMute:
            case enums_1.BadgeStyle.AudioInactive:
            case enums_1.BadgeStyle.AudioVol1:
            case enums_1.BadgeStyle.AudioVol2:
            case enums_1.BadgeStyle.AudioVol3:
            case enums_1.BadgeStyle.BrandAlbany:
            case enums_1.BadgeStyle.BrandAnnis:
            case enums_1.BadgeStyle.BrandBanshee:
            case enums_1.BadgeStyle.BrandBenefactor:
            case enums_1.BadgeStyle.BrandBf:
            case enums_1.BadgeStyle.BrandBollokan:
            case enums_1.BadgeStyle.BrandBravado:
            case enums_1.BadgeStyle.BrandBrute:
            case enums_1.BadgeStyle.BrandBuckingham:
            case enums_1.BadgeStyle.BrandCanis:
            case enums_1.BadgeStyle.BrandChariot:
            case enums_1.BadgeStyle.BrandCheval:
            case enums_1.BadgeStyle.BrandClassique:
            case enums_1.BadgeStyle.BrandCoil:
            case enums_1.BadgeStyle.BrandDeclasse:
            case enums_1.BadgeStyle.BrandDewbauchee:
            case enums_1.BadgeStyle.BrandDilettante:
            case enums_1.BadgeStyle.BrandDinka:
            case enums_1.BadgeStyle.BrandDundreary:
            case enums_1.BadgeStyle.BrandEmporer:
            case enums_1.BadgeStyle.BrandEnus:
            case enums_1.BadgeStyle.BrandFathom:
            case enums_1.BadgeStyle.BrandGalivanter:
            case enums_1.BadgeStyle.BrandGrotti:
            case enums_1.BadgeStyle.BrandHijak:
            case enums_1.BadgeStyle.BrandHvy:
            case enums_1.BadgeStyle.BrandImponte:
            case enums_1.BadgeStyle.BrandInvetero:
            case enums_1.BadgeStyle.BrandJacksheepe:
            case enums_1.BadgeStyle.BrandJobuilt:
            case enums_1.BadgeStyle.BrandKarin:
            case enums_1.BadgeStyle.BrandLampadati:
            case enums_1.BadgeStyle.BrandMaibatsu:
            case enums_1.BadgeStyle.BrandMammoth:
            case enums_1.BadgeStyle.BrandMtl:
            case enums_1.BadgeStyle.BrandNagasaki:
            case enums_1.BadgeStyle.BrandObey:
            case enums_1.BadgeStyle.BrandOcelot:
            case enums_1.BadgeStyle.BrandOverflod:
            case enums_1.BadgeStyle.BrandPed:
            case enums_1.BadgeStyle.BrandPegassi:
            case enums_1.BadgeStyle.BrandPfister:
            case enums_1.BadgeStyle.BrandPrincipe:
            case enums_1.BadgeStyle.BrandProgen:
            case enums_1.BadgeStyle.BrandSchyster:
            case enums_1.BadgeStyle.BrandShitzu:
            case enums_1.BadgeStyle.BrandSpeedophile:
            case enums_1.BadgeStyle.BrandStanley:
            case enums_1.BadgeStyle.BrandTruffade:
            case enums_1.BadgeStyle.BrandUbermacht:
            case enums_1.BadgeStyle.BrandVapid:
            case enums_1.BadgeStyle.BrandVulcar:
            case enums_1.BadgeStyle.BrandWeeny:
            case enums_1.BadgeStyle.BrandWestern:
            case enums_1.BadgeStyle.BrandWesternmotorcycle:
            case enums_1.BadgeStyle.BrandWillard:
            case enums_1.BadgeStyle.BrandZirconium:
            case enums_1.BadgeStyle.BrandGrotti2:
            case enums_1.BadgeStyle.BrandLcc:
            case enums_1.BadgeStyle.BrandProgen2:
            case enums_1.BadgeStyle.BrandRune:
            case enums_1.BadgeStyle.CountryUsa:
            case enums_1.BadgeStyle.CountryUk:
            case enums_1.BadgeStyle.CountrySweden:
            case enums_1.BadgeStyle.CountryKorea:
            case enums_1.BadgeStyle.CountryJapan:
            case enums_1.BadgeStyle.CountryItaly:
            case enums_1.BadgeStyle.CountryGermany:
            case enums_1.BadgeStyle.CountryFrance:
                return new utils_1.Size(30, 30);
            case enums_1.BadgeStyle.MedalSilver:
            case enums_1.BadgeStyle.MpAmmoPickup:
            case enums_1.BadgeStyle.MpAmmo:
            case enums_1.BadgeStyle.MpCash:
            case enums_1.BadgeStyle.MpRp:
            case enums_1.BadgeStyle.GlobeWhite:
            case enums_1.BadgeStyle.GlobeBlue:
            case enums_1.BadgeStyle.GlobeGreen:
            case enums_1.BadgeStyle.GlobeOrange:
            case enums_1.BadgeStyle.GlobeRed:
            case enums_1.BadgeStyle.GlobeYellow:
            case enums_1.BadgeStyle.InvArmWrestling:
            case enums_1.BadgeStyle.InvBasejump:
            case enums_1.BadgeStyle.InvMission:
            case enums_1.BadgeStyle.InvDarts:
            case enums_1.BadgeStyle.InvDeathmatch:
            case enums_1.BadgeStyle.InvDrug:
            case enums_1.BadgeStyle.InvCastle:
            case enums_1.BadgeStyle.InvGolf:
            case enums_1.BadgeStyle.InvBike:
            case enums_1.BadgeStyle.InvBoat:
            case enums_1.BadgeStyle.InvAnchor:
            case enums_1.BadgeStyle.InvCar:
            case enums_1.BadgeStyle.InvDollar:
            case enums_1.BadgeStyle.InvCoke:
            case enums_1.BadgeStyle.InvKey:
            case enums_1.BadgeStyle.InvData:
            case enums_1.BadgeStyle.InvHeli:
            case enums_1.BadgeStyle.InvHeorin:
            case enums_1.BadgeStyle.InvKeycard:
            case enums_1.BadgeStyle.InvMeth:
            case enums_1.BadgeStyle.InvBriefcase:
            case enums_1.BadgeStyle.InvLink:
            case enums_1.BadgeStyle.InvPerson:
            case enums_1.BadgeStyle.InvPlane:
            case enums_1.BadgeStyle.InvPlane2:
            case enums_1.BadgeStyle.InvQuestionmark:
            case enums_1.BadgeStyle.InvRemote:
            case enums_1.BadgeStyle.InvSafe:
            case enums_1.BadgeStyle.InvSteerWheel:
            case enums_1.BadgeStyle.InvWeapon:
            case enums_1.BadgeStyle.InvWeed:
            case enums_1.BadgeStyle.InvRaceFlagPlane:
            case enums_1.BadgeStyle.InvRaceFlagBicycle:
            case enums_1.BadgeStyle.InvRaceFlagBoatAnchor:
            case enums_1.BadgeStyle.InvRaceFlagPerson:
            case enums_1.BadgeStyle.InvRaceFlagCar:
            case enums_1.BadgeStyle.InvRaceFlagHelmet:
            case enums_1.BadgeStyle.InvShootingRange:
            case enums_1.BadgeStyle.InvSurvival:
            case enums_1.BadgeStyle.InvTeamDeathmatch:
            case enums_1.BadgeStyle.InvTennis:
            case enums_1.BadgeStyle.InvVehicleDeathmatch:
                return new utils_1.Size(25, 25);
            default:
                return new utils_1.Size(40, 40);
        }
    }
    get Text() {
        return this.text.caption;
    }
    set Text(value) {
        this.text.caption = value ? value.trim() : '';
    }
    get Description() {
        if (!this.supportsDescription) {
            return null;
        }
        return this._description;
    }
    set Description(value) {
        if (!this.supportsDescription) {
            throw new Error('This item does not support description');
        }
        this._description = value ? value.trim() : '';
        this.formatDescription();
    }
    get FormattedDescription() {
        return this._formattedDescription;
    }
    get BackColor() {
        return this._backColor;
    }
    set BackColor(value) {
        value = value || this._backColor;
        this._backColor = value;
        this.rectangle.color = value;
    }
    get HighlightedBackColor() {
        return this._highlightedBackColor;
    }
    set HighlightedBackColor(value) {
        value = value || this._highlightedBackColor;
        this._highlightedBackColor = value;
        this.selectedSprite.color = value;
    }
    get ForeColor() {
        return this._foreColor;
    }
    set ForeColor(value) {
        value = value || this._foreColor;
        this._foreColor = value;
        this.text.color = value;
    }
    get HighlightedForeColor() {
        return this._highlightedForeColor;
    }
    set HighlightedForeColor(value) {
        this._highlightedForeColor = value || this._highlightedForeColor;
    }
    get LeftBadge() {
        if (!this.supportsLeftBadge) {
            return null;
        }
        return this._leftBadge;
    }
    set LeftBadge(value) {
        if (!this.supportsLeftBadge) {
            throw new Error('This item does not support left badge');
        }
        value = Number(value);
        this._leftBadge = value;
        this.badgeLeft.TextureDict = UIMenuItem.badgeToTextureDict(value);
        this.badgeLeft.size = UIMenuItem.getBadgeSize(value);
    }
    get RightBadge() {
        if (!this.supportsRightBadge) {
            return null;
        }
        return this._rightBadge;
    }
    set RightBadge(value) {
        if (!this.supportsRightBadge) {
            throw new Error('This item does not support right badge');
        }
        value = Number(value);
        this._rightBadge = value;
        this.badgeRight.TextureDict = UIMenuItem.badgeToTextureDict(value);
        this.badgeRight.size = UIMenuItem.getBadgeSize(value);
    }
    get RightLabel() {
        if (!this.supportsRightLabel) {
            return null;
        }
        return this.labelText.caption;
    }
    set RightLabel(value) {
        if (!this.supportsRightLabel) {
            throw new Error('This item does not support right label');
        }
        this.labelText.caption = value ? value.trim() : '';
    }
    get IsMouseInBounds() {
        return this.parent.isMouseInBounds(this.rectangle.pos, this.rectangle.size);
    }
    get Panels() {
        if (!this.supportsPanels) {
            return null;
        }
        return this._panels;
    }
    set Panels(value) {
        if (!this.supportsPanels) {
            throw new Error('This item does not support panels');
        }
        this._panels = value;
    }
    addPanel(panel) {
        if (!this.supportsPanels) {
            throw new Error('This item does not support panels');
        }
        const panels = Array.isArray(panel) ? panel : [panel];
        panels.forEach(p => {
            p.ParentItem = this;
        });
        this._panels.push(...panels);
    }
    findPanelIndex(panel) {
        if (!this.supportsPanels) {
            throw new Error('This item does not support panels');
        }
        const index = this._panels.findIndex(p => p.id === panel.id);
        return index !== -1 ? index : null;
    }
    removePanel(panelOrIndex) {
        if (!this.supportsPanels) {
            throw new Error('This item does not support panels');
        }
        if (typeof panelOrIndex === 'number') {
            this._panels = this._panels.filter((p, index) => index !== panelOrIndex);
        }
        else {
            this._panels = this._panels.filter(p => p.id !== panelOrIndex.id);
        }
    }
    addEvent(event, ...args) {
        this._event = { event, args };
    }
    fireEvent() {
        if (this._event) {
            TriggerEvent(this._event.event, ...this._event.args);
        }
    }
    formatDescription() {
        if (!this.parent) {
            return;
        }
        let input = this._description;
        if (input.length > 99) {
            input = input.slice(0, 99);
        }
        const maxPixelsPerLine = 425 + this.parent.WidthOffset;
        let aggregatePixels = 0;
        let output = '';
        const words = input.split(' ');
        const spaceWidth = utils_1.measureString(' ', enums_1.Font.ChaletLondon, 0.33, __1.Menu.screenWidth);
        for (const word of words) {
            const offset = utils_1.measureString(word, enums_1.Font.ChaletLondon, 0.33, __1.Menu.screenWidth);
            aggregatePixels += offset;
            if (aggregatePixels > maxPixelsPerLine) {
                output = `${output} \n${word} `;
                aggregatePixels = offset + spaceWidth;
            }
            else {
                output = `${output}${word} `;
                aggregatePixels += spaceWidth;
            }
        }
        this._formattedDescription = output;
    }
    badgeToTextureName(badge) {
        const selected = this.selected;
        switch (badge) {
            case enums_1.BadgeStyle.None:
                return '';
            case enums_1.BadgeStyle.Ammo:
                return selected ? 'shop_ammo_icon_b' : 'shop_ammo_icon_a';
            case enums_1.BadgeStyle.Armor:
                return selected ? 'shop_armour_icon_b' : 'shop_armour_icon_a';
            case enums_1.BadgeStyle.Barber:
                return selected ? 'shop_barber_icon_b' : 'shop_barber_icon_a';
            case enums_1.BadgeStyle.Bike:
                return selected ? 'shop_garage_bike_icon_b' : 'shop_garage_bike_icon_a';
            case enums_1.BadgeStyle.Car:
                return selected ? 'shop_garage_icon_b' : 'shop_garage_icon_a';
            case enums_1.BadgeStyle.Cash:
                return 'mp_specitem_cash';
            case enums_1.BadgeStyle.Clothing:
                return selected ? 'shop_clothing_icon_b' : 'shop_clothing_icon_a';
            case enums_1.BadgeStyle.Coke:
                return 'mp_specitem_coke';
            case enums_1.BadgeStyle.Crown:
                return 'mp_hostcrown';
            case enums_1.BadgeStyle.Franklin:
                return selected ? 'shop_franklin_icon_b' : 'shop_franklin_icon_a';
            case enums_1.BadgeStyle.Gun:
                return selected ? 'shop_gunclub_icon_b' : 'shop_gunclub_icon_a';
            case enums_1.BadgeStyle.HealthHeart:
                return selected ? 'shop_health_icon_b' : 'shop_health_icon_a';
            case enums_1.BadgeStyle.Heroin:
                return 'mp_specitem_heroin';
            case enums_1.BadgeStyle.Lock:
                return 'shop_lock';
            case enums_1.BadgeStyle.MakeupBrush:
                return selected ? 'shop_makeup_icon_b' : 'shop_makeup_icon_a';
            case enums_1.BadgeStyle.Mask:
                return selected ? 'shop_mask_icon_b' : 'shop_mask_icon_a';
            case enums_1.BadgeStyle.MedalBronze:
                return 'mp_medal_bronze';
            case enums_1.BadgeStyle.MedalGold:
                return 'mp_medal_gold';
            case enums_1.BadgeStyle.MedalSilver:
                return 'mp_medal_silver';
            case enums_1.BadgeStyle.Meth:
                return 'mp_specitem_meth';
            case enums_1.BadgeStyle.Michael:
                return selected ? 'shop_michael_icon_b' : 'shop_michael_icon_a';
            case enums_1.BadgeStyle.Star:
                return 'shop_new_star';
            case enums_1.BadgeStyle.Tattoo:
                return selected ? 'shop_tattoos_icon_b' : 'shop_tattoos_icon_a';
            case enums_1.BadgeStyle.Tick:
                return 'shop_tick_icon';
            case enums_1.BadgeStyle.Trevor:
                return selected ? 'shop_trevor_icon_b' : 'shop_trevor_icon_a';
            case enums_1.BadgeStyle.Warning:
                return 'mp_alerttriangle';
            case enums_1.BadgeStyle.Weed:
                return 'mp_specitem_weed';
            case enums_1.BadgeStyle.Male:
                return 'leaderboard_male_icon';
            case enums_1.BadgeStyle.Female:
                return 'leaderboard_female_icon';
            case enums_1.BadgeStyle.LockArena:
                return 'shop_lock_arena';
            case enums_1.BadgeStyle.Adversary:
                return 'adversary';
            case enums_1.BadgeStyle.BaseJumping:
                return 'base_jumping';
            case enums_1.BadgeStyle.Briefcase:
                return 'capture_the_flag';
            case enums_1.BadgeStyle.MissionStar:
                return 'custom_mission';
            case enums_1.BadgeStyle.Deathmatch:
                return 'deathmatch';
            case enums_1.BadgeStyle.Castle:
                return 'gang_attack';
            case enums_1.BadgeStyle.Trophy:
                return 'last_team_standing';
            case enums_1.BadgeStyle.RaceFlag:
                return 'race';
            case enums_1.BadgeStyle.RaceFlagPlane:
                return 'race_air';
            case enums_1.BadgeStyle.RaceFlagBicycle:
                return 'race_bicycle';
            case enums_1.BadgeStyle.RaceFlagPerson:
                return 'race_foot';
            case enums_1.BadgeStyle.RaceFlagCar:
                return 'race_land';
            case enums_1.BadgeStyle.RaceFlagBoatAnchor:
                return 'race_water';
            case enums_1.BadgeStyle.Rockstar:
                return 'rockstar';
            case enums_1.BadgeStyle.Stunt:
                return 'stunt';
            case enums_1.BadgeStyle.StuntPremium:
                return 'stunt_premium';
            case enums_1.BadgeStyle.RaceFlagStuntJump:
                return 'stunt_race';
            case enums_1.BadgeStyle.Shield:
                return 'survival';
            case enums_1.BadgeStyle.TeamDeathmatch:
                return 'team_deathmatch';
            case enums_1.BadgeStyle.VehicleDeathmatch:
                return 'vehicle_deathmatch';
            case enums_1.BadgeStyle.MpAmmoPickup:
                return 'ammo_pickup';
            case enums_1.BadgeStyle.MpAmmo:
                return 'mp_anim_ammo';
            case enums_1.BadgeStyle.MpCash:
                return 'mp_anim_cash';
            case enums_1.BadgeStyle.MpRp:
                return 'mp_anim_rp';
            case enums_1.BadgeStyle.MpSpectating:
                return 'spectating';
            case enums_1.BadgeStyle.Sale:
                return 'saleicon';
            case enums_1.BadgeStyle.GlobeWhite:
            case enums_1.BadgeStyle.GlobeRed:
            case enums_1.BadgeStyle.GlobeBlue:
            case enums_1.BadgeStyle.GlobeYellow:
            case enums_1.BadgeStyle.GlobeGreen:
            case enums_1.BadgeStyle.GlobeOrange:
                return 'globe';
            case enums_1.BadgeStyle.InvArmWrestling:
                return 'arm_wrestling';
            case enums_1.BadgeStyle.InvBasejump:
                return 'basejump';
            case enums_1.BadgeStyle.InvMission:
                return 'custom_mission';
            case enums_1.BadgeStyle.InvDarts:
                return 'darts';
            case enums_1.BadgeStyle.InvDeathmatch:
                return 'deathmatch';
            case enums_1.BadgeStyle.InvDrug:
                return 'drug_trafficking';
            case enums_1.BadgeStyle.InvCastle:
                return 'gang_attack';
            case enums_1.BadgeStyle.InvGolf:
                return 'golf';
            case enums_1.BadgeStyle.InvBike:
                return 'mp_specitem_bike';
            case enums_1.BadgeStyle.InvBoat:
                return 'mp_specitem_boat';
            case enums_1.BadgeStyle.InvAnchor:
                return 'mp_specitem_boatpickup';
            case enums_1.BadgeStyle.InvCar:
                return 'mp_specitem_car';
            case enums_1.BadgeStyle.InvDollar:
                return 'mp_specitem_cash';
            case enums_1.BadgeStyle.InvCoke:
                return 'mp_specitem_coke';
            case enums_1.BadgeStyle.InvKey:
                return 'mp_specitem_cuffkeys';
            case enums_1.BadgeStyle.InvData:
                return 'mp_specitem_data';
            case enums_1.BadgeStyle.InvHeli:
                return 'mp_specitem_heli';
            case enums_1.BadgeStyle.InvHeorin:
                return 'mp_specitem_heroin';
            case enums_1.BadgeStyle.InvKeycard:
                return 'mp_specitem_keycard';
            case enums_1.BadgeStyle.InvMeth:
                return 'mp_specitem_meth';
            case enums_1.BadgeStyle.InvBriefcase:
                return 'mp_specitem_package';
            case enums_1.BadgeStyle.InvLink:
                return 'mp_specitem_partnericon';
            case enums_1.BadgeStyle.InvPerson:
                return 'mp_specitem_ped';
            case enums_1.BadgeStyle.InvPlane:
                return 'mp_specitem_plane';
            case enums_1.BadgeStyle.InvPlane2:
                return 'mp_specitem_plane2';
            case enums_1.BadgeStyle.InvQuestionmark:
                return 'mp_specitem_randomobject';
            case enums_1.BadgeStyle.InvRemote:
                return 'mp_specitem_remote';
            case enums_1.BadgeStyle.InvSafe:
                return 'mp_specitem_safe';
            case enums_1.BadgeStyle.InvSteerWheel:
                return 'mp_specitem_steer_wheel';
            case enums_1.BadgeStyle.InvWeapon:
                return 'mp_specitem_weapons';
            case enums_1.BadgeStyle.InvWeed:
                return 'mp_specitem_weed';
            case enums_1.BadgeStyle.InvRaceFlagPlane:
                return 'race_air';
            case enums_1.BadgeStyle.InvRaceFlagBicycle:
                return 'race_bike';
            case enums_1.BadgeStyle.InvRaceFlagBoatAnchor:
                return 'race_boat';
            case enums_1.BadgeStyle.InvRaceFlagPerson:
                return 'race_foot';
            case enums_1.BadgeStyle.InvRaceFlagCar:
                return 'race_land';
            case enums_1.BadgeStyle.InvRaceFlagHelmet:
                return 'race_offroad';
            case enums_1.BadgeStyle.InvShootingRange:
                return 'shooting_range';
            case enums_1.BadgeStyle.InvSurvival:
                return 'survival';
            case enums_1.BadgeStyle.InvTeamDeathmatch:
                return 'team_deathmatch';
            case enums_1.BadgeStyle.InvTennis:
                return 'tennis';
            case enums_1.BadgeStyle.InvVehicleDeathmatch:
                return 'vehicle_deathmatch';
            case enums_1.BadgeStyle.AudioMute:
                return 'leaderboard_audio_mute';
            case enums_1.BadgeStyle.AudioInactive:
                return 'leaderboard_audio_inactive';
            case enums_1.BadgeStyle.AudioVol1:
                return 'leaderboard_audio_1';
            case enums_1.BadgeStyle.AudioVol2:
                return 'leaderboard_audio_2';
            case enums_1.BadgeStyle.AudioVol3:
                return 'leaderboard_audio_3';
            case enums_1.BadgeStyle.CountryUsa:
                return 'vehicle_card_icons_flag_usa';
            case enums_1.BadgeStyle.CountryUk:
                return 'vehicle_card_icons_flag_uk';
            case enums_1.BadgeStyle.CountrySweden:
                return 'vehicle_card_icons_flag_sweden';
            case enums_1.BadgeStyle.CountryKorea:
                return 'vehicle_card_icons_flag_korea';
            case enums_1.BadgeStyle.CountryJapan:
                return 'vehicle_card_icons_flag_japan';
            case enums_1.BadgeStyle.CountryItaly:
                return 'vehicle_card_icons_flag_italy';
            case enums_1.BadgeStyle.CountryGermany:
                return 'vehicle_card_icons_flag_germany';
            case enums_1.BadgeStyle.CountryFrance:
                return 'vehicle_card_icons_flag_france';
            case enums_1.BadgeStyle.BrandAlbany:
                return 'albany';
            case enums_1.BadgeStyle.BrandAnnis:
                return 'annis';
            case enums_1.BadgeStyle.BrandBanshee:
                return 'banshee';
            case enums_1.BadgeStyle.BrandBenefactor:
                return 'benefactor';
            case enums_1.BadgeStyle.BrandBf:
                return 'bf';
            case enums_1.BadgeStyle.BrandBollokan:
                return 'bollokan';
            case enums_1.BadgeStyle.BrandBravado:
                return 'bravado';
            case enums_1.BadgeStyle.BrandBrute:
                return 'brute';
            case enums_1.BadgeStyle.BrandBuckingham:
                return 'buckingham';
            case enums_1.BadgeStyle.BrandCanis:
                return 'canis';
            case enums_1.BadgeStyle.BrandChariot:
                return 'chariot';
            case enums_1.BadgeStyle.BrandCheval:
                return 'cheval';
            case enums_1.BadgeStyle.BrandClassique:
                return 'classique';
            case enums_1.BadgeStyle.BrandCoil:
                return 'coil';
            case enums_1.BadgeStyle.BrandDeclasse:
                return 'declasse';
            case enums_1.BadgeStyle.BrandDewbauchee:
                return 'dewbauchee';
            case enums_1.BadgeStyle.BrandDilettante:
                return 'dilettante';
            case enums_1.BadgeStyle.BrandDinka:
                return 'dinka';
            case enums_1.BadgeStyle.BrandDundreary:
                return 'dundreary';
            case enums_1.BadgeStyle.BrandEmporer:
                return 'emporer';
            case enums_1.BadgeStyle.BrandEnus:
                return 'enus';
            case enums_1.BadgeStyle.BrandFathom:
                return 'fathom';
            case enums_1.BadgeStyle.BrandGalivanter:
                return 'galivanter';
            case enums_1.BadgeStyle.BrandGrotti:
                return 'grotti';
            case enums_1.BadgeStyle.BrandHijak:
                return 'hijak';
            case enums_1.BadgeStyle.BrandHvy:
                return 'hvy';
            case enums_1.BadgeStyle.BrandImponte:
                return 'imponte';
            case enums_1.BadgeStyle.BrandInvetero:
                return 'invetero';
            case enums_1.BadgeStyle.BrandJacksheepe:
                return 'jacksheepe';
            case enums_1.BadgeStyle.BrandJobuilt:
                return 'jobuilt';
            case enums_1.BadgeStyle.BrandKarin:
                return 'karin';
            case enums_1.BadgeStyle.BrandLampadati:
                return 'lampadati';
            case enums_1.BadgeStyle.BrandMaibatsu:
                return 'maibatsu';
            case enums_1.BadgeStyle.BrandMammoth:
                return 'mammoth';
            case enums_1.BadgeStyle.BrandMtl:
                return 'mtl';
            case enums_1.BadgeStyle.BrandNagasaki:
                return 'nagasaki';
            case enums_1.BadgeStyle.BrandObey:
                return 'obey';
            case enums_1.BadgeStyle.BrandOcelot:
                return 'ocelot';
            case enums_1.BadgeStyle.BrandOverflod:
                return 'overflod';
            case enums_1.BadgeStyle.BrandPed:
                return 'ped';
            case enums_1.BadgeStyle.BrandPegassi:
                return 'pegassi';
            case enums_1.BadgeStyle.BrandPfister:
                return 'pfister';
            case enums_1.BadgeStyle.BrandPrincipe:
                return 'principe';
            case enums_1.BadgeStyle.BrandProgen:
                return 'progen';
            case enums_1.BadgeStyle.BrandSchyster:
                return 'schyster';
            case enums_1.BadgeStyle.BrandShitzu:
                return 'shitzu';
            case enums_1.BadgeStyle.BrandSpeedophile:
                return 'speedophile';
            case enums_1.BadgeStyle.BrandStanley:
                return 'stanley';
            case enums_1.BadgeStyle.BrandTruffade:
                return 'truffade';
            case enums_1.BadgeStyle.BrandUbermacht:
                return 'ubermacht';
            case enums_1.BadgeStyle.BrandVapid:
                return 'vapid';
            case enums_1.BadgeStyle.BrandVulcar:
                return 'vulcar';
            case enums_1.BadgeStyle.BrandWeeny:
                return 'weeny';
            case enums_1.BadgeStyle.BrandWestern:
                return 'western';
            case enums_1.BadgeStyle.BrandWesternmotorcycle:
                return 'westernmotorcycle';
            case enums_1.BadgeStyle.BrandWillard:
                return 'willard';
            case enums_1.BadgeStyle.BrandZirconium:
                return 'zirconium';
            case enums_1.BadgeStyle.BrandGrotti2:
                return 'grotti_2';
            case enums_1.BadgeStyle.BrandLcc:
                return 'lcc';
            case enums_1.BadgeStyle.BrandProgen2:
                return 'progen';
            case enums_1.BadgeStyle.BrandRune:
                return 'rune';
            case enums_1.BadgeStyle.Info:
                return 'info_icon_32';
            default:
                break;
        }
    }
    badgeToColor(badge) {
        const selected = this.selected;
        const enabled = this.enabled;
        switch (badge) {
            case enums_1.BadgeStyle.Crown:
            case enums_1.BadgeStyle.Tick:
            case enums_1.BadgeStyle.Male:
            case enums_1.BadgeStyle.Female:
            case enums_1.BadgeStyle.Lock:
            case enums_1.BadgeStyle.LockArena:
            case enums_1.BadgeStyle.Adversary:
            case enums_1.BadgeStyle.BaseJumping:
            case enums_1.BadgeStyle.Briefcase:
            case enums_1.BadgeStyle.MissionStar:
            case enums_1.BadgeStyle.Deathmatch:
            case enums_1.BadgeStyle.Castle:
            case enums_1.BadgeStyle.Trophy:
            case enums_1.BadgeStyle.RaceFlag:
            case enums_1.BadgeStyle.RaceFlagPlane:
            case enums_1.BadgeStyle.RaceFlagBicycle:
            case enums_1.BadgeStyle.RaceFlagPerson:
            case enums_1.BadgeStyle.RaceFlagCar:
            case enums_1.BadgeStyle.RaceFlagBoatAnchor:
            case enums_1.BadgeStyle.Rockstar:
            case enums_1.BadgeStyle.Stunt:
            case enums_1.BadgeStyle.StuntPremium:
            case enums_1.BadgeStyle.RaceFlagStuntJump:
            case enums_1.BadgeStyle.Shield:
            case enums_1.BadgeStyle.TeamDeathmatch:
            case enums_1.BadgeStyle.VehicleDeathmatch:
            case enums_1.BadgeStyle.MpSpectating:
            case enums_1.BadgeStyle.GlobeWhite:
            case enums_1.BadgeStyle.AudioMute:
            case enums_1.BadgeStyle.AudioInactive:
            case enums_1.BadgeStyle.AudioVol1:
            case enums_1.BadgeStyle.AudioVol2:
            case enums_1.BadgeStyle.AudioVol3:
            case enums_1.BadgeStyle.BrandAlbany:
            case enums_1.BadgeStyle.BrandAnnis:
            case enums_1.BadgeStyle.BrandBanshee:
            case enums_1.BadgeStyle.BrandBenefactor:
            case enums_1.BadgeStyle.BrandBf:
            case enums_1.BadgeStyle.BrandBollokan:
            case enums_1.BadgeStyle.BrandBravado:
            case enums_1.BadgeStyle.BrandBrute:
            case enums_1.BadgeStyle.BrandBuckingham:
            case enums_1.BadgeStyle.BrandCanis:
            case enums_1.BadgeStyle.BrandChariot:
            case enums_1.BadgeStyle.BrandCheval:
            case enums_1.BadgeStyle.BrandClassique:
            case enums_1.BadgeStyle.BrandCoil:
            case enums_1.BadgeStyle.BrandDeclasse:
            case enums_1.BadgeStyle.BrandDewbauchee:
            case enums_1.BadgeStyle.BrandDilettante:
            case enums_1.BadgeStyle.BrandDinka:
            case enums_1.BadgeStyle.BrandDundreary:
            case enums_1.BadgeStyle.BrandEmporer:
            case enums_1.BadgeStyle.BrandEnus:
            case enums_1.BadgeStyle.BrandFathom:
            case enums_1.BadgeStyle.BrandGalivanter:
            case enums_1.BadgeStyle.BrandGrotti:
            case enums_1.BadgeStyle.BrandHijak:
            case enums_1.BadgeStyle.BrandHvy:
            case enums_1.BadgeStyle.BrandImponte:
            case enums_1.BadgeStyle.BrandInvetero:
            case enums_1.BadgeStyle.BrandJacksheepe:
            case enums_1.BadgeStyle.BrandJobuilt:
            case enums_1.BadgeStyle.BrandKarin:
            case enums_1.BadgeStyle.BrandLampadati:
            case enums_1.BadgeStyle.BrandMaibatsu:
            case enums_1.BadgeStyle.BrandMammoth:
            case enums_1.BadgeStyle.BrandMtl:
            case enums_1.BadgeStyle.BrandNagasaki:
            case enums_1.BadgeStyle.BrandObey:
            case enums_1.BadgeStyle.BrandOcelot:
            case enums_1.BadgeStyle.BrandOverflod:
            case enums_1.BadgeStyle.BrandPed:
            case enums_1.BadgeStyle.BrandPegassi:
            case enums_1.BadgeStyle.BrandPfister:
            case enums_1.BadgeStyle.BrandPrincipe:
            case enums_1.BadgeStyle.BrandProgen:
            case enums_1.BadgeStyle.BrandSchyster:
            case enums_1.BadgeStyle.BrandShitzu:
            case enums_1.BadgeStyle.BrandSpeedophile:
            case enums_1.BadgeStyle.BrandStanley:
            case enums_1.BadgeStyle.BrandTruffade:
            case enums_1.BadgeStyle.BrandUbermacht:
            case enums_1.BadgeStyle.BrandVapid:
            case enums_1.BadgeStyle.BrandVulcar:
            case enums_1.BadgeStyle.BrandWeeny:
            case enums_1.BadgeStyle.BrandWestern:
            case enums_1.BadgeStyle.BrandWesternmotorcycle:
            case enums_1.BadgeStyle.BrandWillard:
            case enums_1.BadgeStyle.BrandZirconium:
            case enums_1.BadgeStyle.BrandGrotti2:
            case enums_1.BadgeStyle.BrandLcc:
            case enums_1.BadgeStyle.BrandProgen2:
            case enums_1.BadgeStyle.BrandRune:
                return selected
                    ? enabled
                        ? utils_1.Color.black
                        : utils_1.Color.fromRgb(50, 50, 50)
                    : enabled
                        ? utils_1.Color.white
                        : utils_1.Color.fromRgb(109, 109, 109);
            case enums_1.BadgeStyle.GlobeBlue:
                return enabled ? utils_1.Color.fromRgb(10, 103, 166) : utils_1.Color.fromRgb(11, 62, 117);
            case enums_1.BadgeStyle.GlobeGreen:
                return enabled ? utils_1.Color.fromRgb(10, 166, 85) : utils_1.Color.fromRgb(5, 71, 22);
            case enums_1.BadgeStyle.GlobeOrange:
                return enabled ? utils_1.Color.fromRgb(232, 145, 14) : utils_1.Color.fromRgb(133, 77, 12);
            case enums_1.BadgeStyle.GlobeRed:
                return enabled ? utils_1.Color.fromRgb(207, 43, 31) : utils_1.Color.fromRgb(110, 7, 7);
            case enums_1.BadgeStyle.GlobeYellow:
                return enabled ? utils_1.Color.fromRgb(232, 207, 14) : utils_1.Color.fromRgb(131, 133, 12);
            default:
                return enabled ? utils_1.Color.white : utils_1.Color.fromRgb(109, 109, 109);
        }
    }
    setVerticalPosition(y) {
        const yOffset = y + this.offset.Y;
        this.rectangle.pos.Y = yOffset + 144;
        this.selectedSprite.pos.Y = yOffset + 144;
        this.text.pos.Y = yOffset + 147;
        this.badgeLeft.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this.badgeLeft);
        this.badgeRight.pos.Y = yOffset + 142 + UIMenuItem.getBadgeSpriteHeightOffset(this.badgeRight);
        this.labelText.pos.Y = yOffset + 148;
    }
    draw() {
        if (this.selected) {
            this.selectedSprite.size.width = 431 + this.parent.WidthOffset;
            this.selectedSprite.pos.X = this.offset.X;
            this.selectedSprite.draw(__1.Menu.screenResolution);
        }
        else {
            this.rectangle.size.width = 431 + this.parent.WidthOffset;
            this.rectangle.pos.X = this.offset.X;
            this.rectangle.color = this.hovered ? UIMenuItem.defaultHoveredBackColor : this._backColor;
            this.rectangle.draw(undefined, __1.Menu.screenResolution);
        }
        this.text.color = this.enabled
            ? this.selected
                ? this._highlightedForeColor
                : this.hovered
                    ? UIMenuItem.defaultHoveredForeColor
                    : this._foreColor
            : new utils_1.Color(255, 163, 159, 148);
        if (this.supportsLeftBadge && this._leftBadge !== enums_1.BadgeStyle.None) {
            const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this.badgeLeft);
            this.badgeLeft.pos.X = this.offset.X + widthOffset;
            this.text.pos.X = this.offset.X + 40;
            this.badgeLeft.textureName = this.badgeToTextureName(this._leftBadge);
            this.badgeLeft.color = this.badgeToColor(this._leftBadge);
            this.badgeLeft.draw(__1.Menu.screenResolution);
        }
        else {
            this.text.pos.X = this.offset.X + 8;
        }
        if (this.supportsRightBadge && this._rightBadge !== enums_1.BadgeStyle.None) {
            this.labelText.pos.X = -40;
            const widthOffset = UIMenuItem.getBadgeSpriteWidthOffset(this.badgeRight);
            this.badgeRight.pos.X = 431 + this.offset.X + this.parent.WidthOffset;
            this.badgeRight.pos.X -= this.badgeRight.size.width + widthOffset;
            this.badgeRight.textureName = this.badgeToTextureName(this._rightBadge);
            this.badgeRight.color = this.badgeToColor(this._rightBadge);
            this.badgeRight.draw(__1.Menu.screenResolution);
        }
        else {
            this.labelText.pos.X = -11;
        }
        if (this.supportsRightLabel && this.labelText.caption !== '') {
            this.labelText.pos.X += 431 + this.offset.X + this.parent.WidthOffset;
            this.labelText.color = this.text.color;
            this.labelText.draw(undefined, __1.Menu.screenResolution);
        }
        this.text.draw(undefined, __1.Menu.screenResolution);
    }
}
exports.UIMenuItem = UIMenuItem;
UIMenuItem.defaultBackColor = utils_1.Color.empty;
UIMenuItem.defaultHighlightedBackColor = utils_1.Color.white;
UIMenuItem.defaultHoveredBackColor = new utils_1.Color(20, 255, 255, 255);
UIMenuItem.defaultForeColor = utils_1.Color.whiteSmoke;
UIMenuItem.defaultHoveredForeColor = UIMenuItem.defaultForeColor;
UIMenuItem.defaultHighlightedForeColor = utils_1.Color.black;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuListItem.js":
/*!********************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/UIMenuListItem.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuListItem = void 0;
const __1 = __webpack_require__(/*! ../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const enums_1 = __webpack_require__(/*! ../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const utils_1 = __webpack_require__(/*! ../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/index.js");
class UIMenuListItem extends _1.UIMenuItem {
    constructor(text, items, startIndex = 0, description, arrowOnlyOnSelected = true) {
        super(text, description);
        this.listChanged = new utils_1.LiteEvent();
        this.listSelected = new utils_1.LiteEvent();
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this._index = 0;
        this._items = [];
        this._leftArrow = new __1.Sprite('commonmenu', 'arrowleft', new utils_1.Point(), new utils_1.Size(30, 30));
        this._rightArrow = new __1.Sprite('commonmenu', 'arrowright', new utils_1.Point(), new utils_1.Size(30, 30));
        this._itemText = new __1.Text('', new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Right);
        this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
        this.Items = items;
        this.Index = startIndex;
    }
    get Items() {
        return this._items;
    }
    set Items(value) {
        if (!value) {
            throw new Error("Items can't be null");
        }
        this._items = value;
    }
    get SelectedItem() {
        return this.Items[this.Index];
    }
    set SelectedItem(value) {
        const index = this.Items.findIndex(i => i.id === value.id);
        if (index >= 0) {
            this.Index = index;
        }
    }
    get SelectedValue() {
        const item = this.SelectedItem;
        return item ? item.value : null;
    }
    get Index() {
        return this._index % this.Items.length;
    }
    set Index(value) {
        if (!this._items.length) {
            return;
        }
        value = value < 0 ? this._items.length - 1 : value > this._items.length - 1 ? 0 : value;
        this._index = value;
        delete this._textWidth;
    }
    get ArrowOnlyOnSelected() {
        return this._arrowOnlyOnSelected;
    }
    set ArrowOnlyOnSelected(value) {
        this._arrowOnlyOnSelected = value;
    }
    get IsMouseInBoundsOfLeftArrow() {
        return this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size);
    }
    get IsMouseInBoundsOfRightArrow() {
        return this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size);
    }
    setVerticalPosition(y) {
        const yOffset = y + this.offset.Y + 147;
        this._leftArrow.pos.Y = yOffset;
        this._rightArrow.pos.Y = yOffset;
        this._itemText.pos.Y = yOffset;
        super.setVerticalPosition(y);
    }
    draw() {
        super.draw();
        if (this._textWidth === undefined) {
            const caption = this._getSelectedItemCaption();
            this._itemText.caption = caption;
            this._textWidth = utils_1.measureString(caption, this._itemText.font, this._itemText.scale, __1.Menu.screenWidth);
        }
        this._rightArrow.pos.X = this.offset.X + this.parent.WidthOffset + 400;
        this._itemText.pos.X = this._rightArrow.pos.X + 5;
        this._itemText.color = this.enabled
            ? this.selected
                ? this.HighlightedForeColor
                : this.ForeColor
            : new utils_1.Color(255, 163, 159, 148);
        if (this._arrowOnlyOnSelected && !this.selected) {
            this._itemText.pos.X += this._rightArrow.size.width / 2;
        }
        else {
            this._leftArrow.color = this._itemText.color;
            this._rightArrow.color = this._itemText.color;
            this._leftArrow.pos.X =
                this._itemText.pos.X - this._textWidth - this._leftArrow.size.width + 5;
            this._leftArrow.draw(__1.Menu.screenResolution);
            this._rightArrow.draw(__1.Menu.screenResolution);
        }
        this._itemText.draw(undefined, __1.Menu.screenResolution);
    }
    _getSelectedItemCaption() {
        const item = this.SelectedItem;
        return item ? item.name : '';
    }
}
exports.UIMenuListItem = UIMenuListItem;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuSeparatorItem.js":
/*!*************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/UIMenuSeparatorItem.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuSeparatorItem = void 0;
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/index.js");
const enums_1 = __webpack_require__(/*! ../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const __1 = __webpack_require__(/*! ../ */ "../node_modules/fivem-js/lib/ui/menu/index.js");
class UIMenuSeparatorItem extends _1.UIMenuItem {
    constructor(text) {
        super(text);
        this.supportsDescription = false;
        this.supportsPanels = false;
        this.supportsLeftBadge = false;
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this.text.alignment = enums_1.Alignment.Centered;
    }
    setVerticalPosition(y) {
        const yOffset = y + this.offset.Y;
        this.rectangle.pos.Y = yOffset + 144;
        this.text.pos.Y = yOffset + 147;
    }
    draw() {
        const width = 431 + this.parent.WidthOffset;
        this.rectangle.size.width = width;
        this.rectangle.pos.X = this.offset.X;
        this.rectangle.draw(undefined, __1.Menu.screenResolution);
        if (this.text.caption !== '') {
            this.text.pos.X = this.offset.X + width / 2;
            this.text.draw(undefined, __1.Menu.screenResolution);
        }
    }
}
exports.UIMenuSeparatorItem = UIMenuSeparatorItem;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuSliderItem.js":
/*!**********************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/UIMenuSliderItem.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuSliderItem = void 0;
const __1 = __webpack_require__(/*! ../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/index.js");
const utils_1 = __webpack_require__(/*! ../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const enums_1 = __webpack_require__(/*! ../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
class UIMenuSliderItem extends _1.UIMenuItem {
    constructor(text, items, startIndex = 0, description, showDivider = false, arrowOnlyOnSelected = false) {
        super(text, description);
        this.sliderChanged = new utils_1.LiteEvent();
        this.sliderSelected = new utils_1.LiteEvent();
        this.supportsRightBadge = false;
        this.supportsRightLabel = false;
        this._leftSliderBadge = enums_1.BadgeStyle.None;
        this._rightSliderBadge = enums_1.BadgeStyle.None;
        this._background = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(150, 9), new utils_1.Color(255, 4, 32, 57));
        this._slider = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(75, 9), new utils_1.Color(255, 57, 116, 200));
        this._divider = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(2.5, 20), utils_1.Color.whiteSmoke);
        this._leftArrow = new __1.Sprite('commonmenutu', 'arrowleft', new utils_1.Point(), new utils_1.Size(15, 15));
        this._rightArrow = new __1.Sprite('commonmenutu', 'arrowright', new utils_1.Point(), new utils_1.Size(15, 15));
        this._leftSliderBadgeSprite = new __1.Sprite('', '');
        this._rightSliderBadgeSprite = new __1.Sprite('', '');
        this.ArrowOnlyOnSelected = arrowOnlyOnSelected;
        this.ShowDivider = showDivider;
        this.Items = items;
        this.Index = startIndex;
    }
    get Index() {
        return this._index % this._items.length;
    }
    set Index(value) {
        this._index = 100000000 - (100000000 % this._items.length) + value;
    }
    get Item() {
        return this._items[this.Index];
    }
    get Items() {
        return this._items;
    }
    set Items(value) {
        this._items = value || [];
    }
    get ShowDivider() {
        return this._showDivider;
    }
    set ShowDivider(value) {
        this._showDivider = value;
    }
    get ArrowOnlyOnSelected() {
        return this._arrowOnlyOnSelected;
    }
    set ArrowOnlyOnSelected(value) {
        this._arrowOnlyOnSelected = value;
    }
    get BackgroundColor() {
        return this._background.color;
    }
    set BackgroundColor(value) {
        this._background.color = value || new utils_1.Color(255, 4, 32, 57);
    }
    get SliderColor() {
        return this._slider.color;
    }
    set SliderColor(value) {
        this._slider.color = value || new utils_1.Color(255, 57, 116, 200);
    }
    get DividerColor() {
        return this._divider.color;
    }
    set DividerColor(value) {
        this._divider.color = value || utils_1.Color.whiteSmoke;
    }
    get LeftSliderBadge() {
        return this._leftSliderBadge;
    }
    set LeftSliderBadge(value) {
        value = Number(value);
        this._leftSliderBadge = value;
        this._leftSliderBadgeSprite.TextureDict = _1.UIMenuItem.badgeToTextureDict(value);
        this._leftSliderBadgeSprite.size = _1.UIMenuItem.getBadgeSize(value);
    }
    get RightSliderBadge() {
        return this._rightSliderBadge;
    }
    set RightSliderBadge(value) {
        value = Number(value);
        this._rightSliderBadge = value;
        this._rightSliderBadgeSprite.TextureDict = _1.UIMenuItem.badgeToTextureDict(value);
        this._rightSliderBadgeSprite.size = _1.UIMenuItem.getBadgeSize(value);
    }
    get IsMouseInBoundsOfLeftArrow() {
        return this.parent.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size);
    }
    get IsMouseInBoundsOfRightArrow() {
        return this.parent.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size);
    }
    indexToItem(index) {
        return this._items[index];
    }
    setVerticalPosition(y) {
        const yOffset = y + this.offset.Y;
        this._background.pos.Y = yOffset + 158.5;
        this._slider.pos.Y = yOffset + 158.5;
        this._divider.pos.Y = yOffset + 153;
        this._leftArrow.pos.Y = yOffset + 155.5;
        this._rightArrow.pos.Y = yOffset + 155.5;
        this._leftSliderBadgeSprite.pos.Y =
            yOffset + 142 + _1.UIMenuItem.getBadgeSpriteHeightOffset(this._leftSliderBadgeSprite);
        this._rightSliderBadgeSprite.pos.Y =
            yOffset + 142 + _1.UIMenuItem.getBadgeSpriteHeightOffset(this._rightSliderBadgeSprite);
        super.setVerticalPosition(y);
    }
    draw() {
        super.draw();
        const showArrows = !this._arrowOnlyOnSelected || this.selected;
        const x = this.offset.X + this.parent.WidthOffset;
        this._background.pos.X = 431 + x - this._background.size.width;
        if (showArrows) {
            this._background.pos.X -= this._rightArrow.size.width / 2;
            this._leftSliderBadgeSprite.pos.X = -this._leftArrow.size.width / 2;
        }
        else {
            this._leftSliderBadgeSprite.pos.X = 0;
        }
        if (this._rightSliderBadge !== enums_1.BadgeStyle.None) {
            const widthOffset = _1.UIMenuItem.getBadgeSpriteWidthOffset(this._rightSliderBadgeSprite);
            this._background.pos.X -= 40;
            this._rightSliderBadgeSprite.pos.X = 431 + x;
            this._rightSliderBadgeSprite.pos.X -= this._rightSliderBadgeSprite.size.width + widthOffset;
            this._rightSliderBadgeSprite.textureName = this.badgeToTextureName(this._rightSliderBadge);
            this._rightSliderBadgeSprite.color = this.badgeToColor(this._rightSliderBadge);
            this._rightSliderBadgeSprite.draw(__1.Menu.screenResolution);
        }
        else {
            this._background.pos.X -= this._rightArrow.size.width / 2;
        }
        if (this._leftSliderBadge !== enums_1.BadgeStyle.None) {
            const widthOffset = _1.UIMenuItem.getBadgeSpriteWidthOffset(this._leftSliderBadgeSprite);
            this._leftSliderBadgeSprite.pos.X -= this._leftSliderBadgeSprite.size.width + widthOffset;
            this._leftSliderBadgeSprite.pos.X += this._background.pos.X;
            this._leftSliderBadgeSprite.textureName = this.badgeToTextureName(this._leftSliderBadge);
            this._leftSliderBadgeSprite.color = this.badgeToColor(this._leftSliderBadge);
            this._leftSliderBadgeSprite.draw(__1.Menu.screenResolution);
        }
        const sliderXOffset = ((this._background.size.width - this._slider.size.width) / (this._items.length - 1)) *
            this.Index;
        this._slider.pos.X = this._background.pos.X + sliderXOffset;
        this._leftArrow.color = this.enabled
            ? this.selected
                ? utils_1.Color.black
                : utils_1.Color.whiteSmoke
            : new utils_1.Color(255, 163, 159, 148);
        this._rightArrow.color = this._leftArrow.color;
        this._background.draw(undefined, __1.Menu.screenResolution);
        this._slider.draw(undefined, __1.Menu.screenResolution);
        if (showArrows) {
            this._leftArrow.pos.X = this._background.pos.X - 15;
            this._rightArrow.pos.X = this._background.pos.X + this._background.size.width;
            this._leftArrow.draw(__1.Menu.screenResolution);
            this._rightArrow.draw(__1.Menu.screenResolution);
        }
        if (this._showDivider) {
            this._divider.pos.X = this._background.pos.X + this._background.size.width / 2;
            this._divider.draw(undefined, __1.Menu.screenResolution);
        }
    }
}
exports.UIMenuSliderItem = UIMenuSliderItem;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuSliderItem = exports.UIMenuSeparatorItem = exports.UIMenuListItem = exports.UIMenuCheckboxItem = exports.UIMenuItem = void 0;
__exportStar(__webpack_require__(/*! ./panels */ "../node_modules/fivem-js/lib/ui/menu/items/panels/index.js"), exports);
var UIMenuItem_1 = __webpack_require__(/*! ./UIMenuItem */ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuItem.js");
Object.defineProperty(exports, "UIMenuItem", ({ enumerable: true, get: function () { return UIMenuItem_1.UIMenuItem; } }));
var UIMenuCheckboxItem_1 = __webpack_require__(/*! ./UIMenuCheckboxItem */ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuCheckboxItem.js");
Object.defineProperty(exports, "UIMenuCheckboxItem", ({ enumerable: true, get: function () { return UIMenuCheckboxItem_1.UIMenuCheckboxItem; } }));
var UIMenuListItem_1 = __webpack_require__(/*! ./UIMenuListItem */ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuListItem.js");
Object.defineProperty(exports, "UIMenuListItem", ({ enumerable: true, get: function () { return UIMenuListItem_1.UIMenuListItem; } }));
var UIMenuSeparatorItem_1 = __webpack_require__(/*! ./UIMenuSeparatorItem */ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuSeparatorItem.js");
Object.defineProperty(exports, "UIMenuSeparatorItem", ({ enumerable: true, get: function () { return UIMenuSeparatorItem_1.UIMenuSeparatorItem; } }));
var UIMenuSliderItem_1 = __webpack_require__(/*! ./UIMenuSliderItem */ "../node_modules/fivem-js/lib/ui/menu/items/UIMenuSliderItem.js");
Object.defineProperty(exports, "UIMenuSliderItem", ({ enumerable: true, get: function () { return UIMenuSliderItem_1.UIMenuSliderItem; } }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/panels/AbstractUIMenuPanel.js":
/*!********************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/panels/AbstractUIMenuPanel.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractUIMenuPanel = void 0;
const utils_1 = __webpack_require__(/*! ../../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const __1 = __webpack_require__(/*! ../../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const __2 = __webpack_require__(/*! ../../ */ "../node_modules/fivem-js/lib/ui/menu/index.js");
class AbstractUIMenuPanel {
    constructor() {
        this.id = utils_1.uuidv4();
        this.enabled = true;
    }
    get ParentMenu() {
        return this.parentItem.parent;
    }
    get ParentItem() {
        return this.parentItem;
    }
    set ParentItem(value) {
        this.parentItem = value;
    }
    get Enabled() {
        return this.enabled;
    }
    set Enabled(value) {
        this.enabled = value;
    }
    get Height() {
        return this.background.size.height;
    }
    setVerticalPosition(y) {
        this.background.pos.Y = y;
    }
    draw() {
        this.background.size.width = 431 + this.ParentMenu.WidthOffset;
        this.background.pos.X = this.parentItem.offset.X;
        if (this.background instanceof __1.Sprite) {
            this.background.draw(__2.Menu.screenResolution);
        }
        else {
            this.background.draw(undefined, __2.Menu.screenResolution);
        }
    }
}
exports.AbstractUIMenuPanel = AbstractUIMenuPanel;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuColorPanel.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuColorPanel.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuColorPanel = void 0;
const utils_1 = __webpack_require__(/*! ../../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/panels/index.js");
const __1 = __webpack_require__(/*! ../../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const enums_1 = __webpack_require__(/*! ../../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const __2 = __webpack_require__(/*! ../../../../ */ "../node_modules/fivem-js/lib/index.js");
class UIMenuColorPanel extends _1.AbstractUIMenuPanel {
    constructor(title, colors) {
        super();
        this._colors = [];
        this._bar = [];
        // Pagination
        this._min = 0;
        this._max = 8;
        this._total = 9;
        this._index = 0;
        this.background = new __1.Sprite('commonmenu', 'gradient_bgd', new utils_1.Point(), new utils_1.Size(431, 112));
        this._leftArrow = new __1.Sprite('commonmenu', 'arrowleft', new utils_1.Point(), new utils_1.Size(30, 30));
        this._rightArrow = new __1.Sprite('commonmenu', 'arrowright', new utils_1.Point(), new utils_1.Size(30, 30));
        this._selectedRectangle = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(44.5, 8), utils_1.Color.white);
        this._text = new __1.Text('', new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this.Title = title;
        this.Colors = colors;
    }
    get Title() {
        return this._title;
    }
    set Title(value) {
        this._title = value ? value.trim() : '';
        this._updateText();
    }
    get Colors() {
        return this._colors;
    }
    set Colors(value) {
        if (!value) {
            value = [];
        }
        this._colors = value;
        this._bar = [];
        const colorRectangles = value.slice(0, this._total).map(color => {
            return new __1.Rectangle(new utils_1.Point(0, 0), new utils_1.Size(44.5, 44.5), color);
        });
        this._bar.push(...colorRectangles);
        this._refreshIndex();
        this._updateSelection(true);
    }
    get Color() {
        return this._colors[this.Index];
    }
    set Color(value) {
        const index = this._colors.findIndex(c => {
            return c.a === value.a && c.r === value.r && c.g === value.g && c.b === value.b;
        });
        if (index !== -1) {
            this.Index = index;
        }
    }
    get Index() {
        return this._index % this._colors.length;
    }
    set Index(value) {
        value = 1000000 - (1000000 % this._colors.length) + value;
        if (this.Index === value % this._colors.length) {
            return;
        }
        this._index = value;
        const currentSelection = this.Index;
        if (currentSelection > this._max) {
            this._min = currentSelection - this._total + 1;
            this._max = currentSelection;
        }
        else if (currentSelection < this._min) {
            this._min = currentSelection;
            this._max = currentSelection + this._total - 1;
        }
        this._updateSelection();
    }
    updateParentItem() {
        const last = this._lastColor;
        const current = this.Color;
        if (!last ||
            last.a !== current.a ||
            last.r !== current.r ||
            last.g !== current.g ||
            last.b !== current.b) {
            this._lastColor = current;
            this.ParentMenu.panelActivated.emit(this.parentItem, this, this.Index, current);
            this.parentItem.panelActivated.emit(this, this.Index, current);
        }
    }
    setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._selectedRectangle.pos.Y = y + 47;
        this._leftArrow.pos.Y = y + 15;
        this._rightArrow.pos.Y = y + 15;
        this._text.pos.Y = y + 15;
        this._bar.forEach((colorRect) => __awaiter(this, void 0, void 0, function* () {
            colorRect.pos.Y = y + 55;
        }));
    }
    draw() {
        if (this.enabled) {
            super.draw();
            const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
            this._selectedRectangle.pos.X = x + 15 + 44.5 * (this.Index - this._min);
            this._leftArrow.pos.X = x + 7.5;
            this._rightArrow.pos.X = x + 393.5;
            this._text.pos.X = x + 215.5;
            this._leftArrow.draw(__2.Menu.screenResolution);
            this._rightArrow.draw(__2.Menu.screenResolution);
            this._text.draw(undefined, __2.Menu.screenResolution);
            this._selectedRectangle.draw(undefined, __2.Menu.screenResolution);
            this._bar.forEach((colorRect, index) => __awaiter(this, void 0, void 0, function* () {
                colorRect.pos.X = x + 15 + 44.5 * index;
                colorRect.draw(undefined, __2.Menu.screenResolution);
            }));
            this._processControls();
        }
    }
    _refreshIndex() {
        if (!this._colors.length) {
            this._index = 1000;
        }
        else {
            this._index = 1000 - (1000 % this._colors.length);
        }
        this._max = this._total - 1;
        this._min = 0;
    }
    _updateSelection(preventUpdate = false) {
        if (!preventUpdate) {
            this.updateParentItem();
        }
        this._bar.forEach((colorRect, index) => __awaiter(this, void 0, void 0, function* () {
            colorRect.color = this._colors[this._min + index];
        }));
        this._updateText();
    }
    _updateText() {
        this._text.caption = `${this._title} [${this.Index + 1 || 0} / ${this._colors.length}]`;
    }
    _goLeft() {
        if (this._colors.length > this._total) {
            if (this.Index <= this._min) {
                if (this.Index === 0) {
                    this._min = this._colors.length - this._total;
                    this._max = this._colors.length - 1;
                    this._index = 1000 - (1000 % this._colors.length);
                    this._index += this._colors.length - 1;
                }
                else {
                    this._min--;
                    this._max--;
                    this._index--;
                }
            }
            else {
                this._index--;
            }
        }
        else {
            this._index--;
        }
        this._updateSelection();
    }
    _goRight() {
        if (this._colors.length > this._total) {
            if (this.Index >= this._max) {
                if (this.Index === this._colors.length - 1) {
                    this._min = 0;
                    this._max = this._total - 1;
                    this._index = 1000 - (1000 % this._colors.length);
                }
                else {
                    this._min++;
                    this._max++;
                    this._index++;
                }
            }
            else {
                this._index++;
            }
        }
        else {
            this._index++;
        }
        this._updateSelection();
    }
    _processControls() {
        if (__2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack)) {
            if (this.ParentMenu.isMouseInBounds(this._leftArrow.pos, this._leftArrow.size)) {
                this._goLeft();
            }
            else if (this.ParentMenu.isMouseInBounds(this._rightArrow.pos, this._rightArrow.size)) {
                this._goRight();
            }
            this._bar.forEach((colorRect, index) => __awaiter(this, void 0, void 0, function* () {
                if (this.ParentMenu.isMouseInBounds(colorRect.pos, colorRect.size)) {
                    this.Index = this._min + index;
                }
            }));
        }
    }
}
exports.UIMenuColorPanel = UIMenuColorPanel;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuGridPanel.js":
/*!****************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuGridPanel.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuGridPanel = void 0;
const utils_1 = __webpack_require__(/*! ../../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/panels/index.js");
const __1 = __webpack_require__(/*! ../../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const enums_1 = __webpack_require__(/*! ../../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const Game_1 = __webpack_require__(/*! ../../../../Game */ "../node_modules/fivem-js/lib/Game.js");
class UIMenuGridPanel extends _1.AbstractUIMenuPanel {
    constructor(topText, leftText, rightText, bottomText, circlePosition) {
        super();
        this._isCircleLocked = false;
        this._pressed = false;
        this._lockXAxis = false;
        this._lockYAxis = false;
        this._setCirclePosition = circlePosition || new utils_1.Point(0.5, 0.5);
        this.background = new __1.Sprite('commonmenu', 'gradient_bgd', new utils_1.Point(), new utils_1.Size(431, 275));
        this._grid = new __1.Sprite('pause_menu_pages_char_mom_dad', 'nose_grid', new utils_1.Point(), new utils_1.Size(200, 200));
        this._circle = new __1.Sprite('mpinventory', 'in_world_circle', new utils_1.Point(), new utils_1.Size(20, 20));
        this.TopText = topText;
        this.LeftText = leftText;
        this.RightText = rightText;
        this.BottomText = bottomText;
    }
    get TopText() {
        return this._topText ? this._topText.caption : null;
    }
    set TopText(value) {
        this._setText('_topText', value);
    }
    get LeftText() {
        return this._leftText ? this._leftText.caption : null;
    }
    set LeftText(value) {
        this._setText('_leftText', value);
    }
    get RightText() {
        return this._rightText ? this._rightText.caption : null;
    }
    set RightText(value) {
        this._setText('_rightText', value);
    }
    get BottomText() {
        return this._bottomText ? this._bottomText.caption : null;
    }
    set BottomText(value) {
        this._setText('_bottomText', value);
    }
    get CirclePosition() {
        return new utils_1.Point(Math.round(((this._circle.pos.X - (this._grid.pos.X + 20) + this._circle.size.width / 2) /
            (this._grid.size.width - 40)) *
            100) / 100, Math.round(((this._circle.pos.Y - (this._grid.pos.Y + 20) + this._circle.size.height / 2) /
            (this._grid.size.height - 40)) *
            100) / 100);
    }
    set CirclePosition(position) {
        this.CirclePositionX = position.X;
        this.CirclePositionY = position.Y;
    }
    set CirclePositionX(x) {
        if (this._isCircleLocked && this._lockXAxis) {
            return;
        }
        x = x >= 0 && x <= 1 ? x : 0;
        this._setCirclePosition.X = x;
        this._circle.pos.X =
            this._grid.pos.X + 20 + (this._grid.size.width - 40) * x - this._circle.size.width / 2;
    }
    set CirclePositionY(y) {
        if (this._isCircleLocked && this._lockYAxis) {
            return;
        }
        y = y >= 0 && y <= 1 ? y : 0;
        this._setCirclePosition.Y = y;
        this._circle.pos.Y =
            this._grid.pos.Y + 20 + (this._grid.size.height - 40) * y - this._circle.size.height / 2;
    }
    get LockXAxis() {
        return this._lockXAxis;
    }
    set LockXAxis(value) {
        this._lockXAxis = value;
        if (value) {
            if (this._lockYAxis) {
                this._lockYAxis = false;
            }
            this.CirclePositionX = 0.5;
        }
    }
    get LockYAxis() {
        return this._lockYAxis;
    }
    set LockYAxis(value) {
        this._lockYAxis = value;
        if (value) {
            if (this._lockXAxis) {
                this._lockXAxis = false;
            }
            this.CirclePositionY = 0.5;
        }
    }
    updateParentItem() {
        const last = this._lastCirclePosition;
        const current = this.CirclePosition;
        if (!last || last.X !== current.X || last.Y !== current.Y) {
            this._lastCirclePosition = current;
            this.ParentMenu.panelActivated.emit(this.parentItem, this, current);
            this.parentItem.panelActivated.emit(this, current);
        }
    }
    setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._grid.pos.Y = y + 37.5;
        if (this._topText) {
            this._topText.pos.Y = y + 5;
        }
        if (this._leftText) {
            this._leftText.pos.Y = y + 120;
        }
        if (this._rightText) {
            this._rightText.pos.Y = y + 120;
        }
        if (this._bottomText) {
            this._bottomText.pos.Y = y + 240;
        }
    }
    draw() {
        if (this.enabled) {
            super.draw();
            const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
            this._grid.pos.X = x + 115.5;
            if (!this._isCircleLocked) {
                this.CirclePosition = this._setCirclePosition;
                this._isCircleLocked = true;
            }
            this._grid.draw(__1.Menu.screenResolution);
            this._circle.draw(__1.Menu.screenResolution);
            if (this._topText) {
                this._topText.pos.X = x + 215.5;
                this._topText.draw(undefined, __1.Menu.screenResolution);
            }
            if (this._leftText) {
                this._leftText.pos.X = x + 57.75;
                this._leftText.draw(undefined, __1.Menu.screenResolution);
            }
            if (this._rightText) {
                this._rightText.pos.X = x + 373.25;
                this._rightText.draw(undefined, __1.Menu.screenResolution);
            }
            if (this._bottomText) {
                this._bottomText.pos.X = x + 215.5;
                this._bottomText.draw(undefined, __1.Menu.screenResolution);
            }
            this._processControls();
        }
    }
    _setText(name, value) {
        if (value && value.trim() !== '') {
            if (!this[name]) {
                this[name] = new __1.Text(value, new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
            }
            else {
                this[name].caption = value;
            }
        }
        else if (this[name]) {
            delete this[name];
        }
    }
    _processControls() {
        if (!this._pressed &&
            Game_1.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack) &&
            this.ParentMenu.isMouseInBounds(this._grid.pos, this._grid.size)) {
            this._pressed = true;
            (() => __awaiter(this, void 0, void 0, function* () {
                const drawOffset = this.ParentMenu.DrawOffset;
                while (Game_1.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                    yield new Promise(resolve => setTimeout(resolve, 0));
                    let cX = (GetControlNormal(0, enums_1.Control.CursorX) - drawOffset.X) * __1.Menu.screenWidth;
                    let cY = (GetControlNormal(0, enums_1.Control.CursorY) - drawOffset.Y) * __1.Menu.screenHeight;
                    cX -= this._circle.size.width / 2;
                    cY -= this._circle.size.height / 2;
                    this._circle.pos.X =
                        cX > this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40)
                            ? this._grid.pos.X + 10 + this._grid.size.width - (this._lockXAxis ? 120 : 40)
                            : cX < this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2
                                ? this._grid.pos.X + (this._lockXAxis ? 100 : 20) - this._circle.size.width / 2
                                : cX;
                    this._circle.pos.Y =
                        cY > this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40)
                            ? this._grid.pos.Y + 10 + this._grid.size.height - (this._lockYAxis ? 120 : 40)
                            : cY < this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2
                                ? this._grid.pos.Y + (this._lockYAxis ? 100 : 20) - this._circle.size.height / 2
                                : cY;
                }
                this.updateParentItem();
                this._pressed = false;
            }))();
            const interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                if (Game_1.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                    this.updateParentItem();
                }
                else {
                    clearInterval(interval);
                }
            }), 75);
        }
    }
}
exports.UIMenuGridPanel = UIMenuGridPanel;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuPercentagePanel.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuPercentagePanel.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuPercentagePanel = void 0;
const utils_1 = __webpack_require__(/*! ../../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/panels/index.js");
const __1 = __webpack_require__(/*! ../../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const enums_1 = __webpack_require__(/*! ../../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
const __2 = __webpack_require__(/*! ../../../../ */ "../node_modules/fivem-js/lib/index.js");
class UIMenuPercentagePanel extends _1.AbstractUIMenuPanel {
    constructor(title, percentage = 0, minText, maxText) {
        super();
        this._pressed = false;
        this.background = new __1.Sprite('commonmenu', 'gradient_bgd', new utils_1.Point(), new utils_1.Size(431, 76));
        const barSize = new utils_1.Size(413, 10);
        this._activeBar = new __1.Rectangle(new utils_1.Point(), barSize, utils_1.Color.fromRgb(245, 245, 245));
        this._backgroundBar = new __1.Rectangle(new utils_1.Point(), Object.assign({}, barSize), utils_1.Color.fromRgb(87, 87, 87));
        this._title = new __1.Text('', new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this._minText = new __1.Text('', new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this._maxText = new __1.Text('', new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Centered);
        this.Title = title;
        this.MinText = minText || '0%';
        this.MaxText = maxText || '100%';
        this.Percentage = percentage;
    }
    get Title() {
        return this._title.caption;
    }
    set Title(value) {
        this._title.caption = value ? value.trim() : '';
    }
    get MinText() {
        return this._minText.caption;
    }
    set MinText(value) {
        this._minText.caption = value ? value.trim() : '';
    }
    get MaxText() {
        return this._maxText.caption;
    }
    set MaxText(value) {
        this._maxText.caption = value ? value.trim() : '';
    }
    get Percentage() {
        const progress = this._activeBar.size.width / this._backgroundBar.size.width;
        return Math.round(progress * 100) / 100;
    }
    set Percentage(value) {
        value = value || 0;
        value = value < 0 ? 0 : value > 1 ? 1 : value;
        this._activeBar.size.width = this._backgroundBar.size.width * value;
    }
    updateParentItem() {
        const last = this._lastPercentage;
        const current = this.Percentage;
        if (last !== current) {
            this._lastPercentage = current;
            this.ParentMenu.panelActivated.emit(this.parentItem, this, current);
            this.parentItem.panelActivated.emit(this, current);
        }
    }
    setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._activeBar.pos.Y = y + 50;
        this._backgroundBar.pos.Y = y + 50;
        y += 15;
        this._minText.pos.Y = y;
        this._title.pos.Y = y;
        this._maxText.pos.Y = y;
    }
    draw() {
        if (this.enabled) {
            super.draw();
            const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
            this._activeBar.pos.X = x + 9;
            this._backgroundBar.pos.X = x + 9;
            this._minText.pos.X = x + 25;
            this._title.pos.X = x + 215.5;
            this._maxText.pos.X = x + 398;
            this._backgroundBar.draw(undefined, __1.Menu.screenResolution);
            this._activeBar.draw(undefined, __1.Menu.screenResolution);
            this._minText.draw(undefined, __1.Menu.screenResolution);
            this._title.draw(undefined, __1.Menu.screenResolution);
            this._maxText.draw(undefined, __1.Menu.screenResolution);
            this._processControls();
        }
    }
    _processControls() {
        if (!this._pressed &&
            __2.Game.isDisabledControlJustPressed(0, enums_1.Control.Attack) &&
            this.ParentMenu.isMouseInBounds(new utils_1.Point(this._backgroundBar.pos.X, this._backgroundBar.pos.Y - 4), new utils_1.Size(this._backgroundBar.size.width, this._backgroundBar.size.height + 8))) {
            this._pressed = true;
            (() => __awaiter(this, void 0, void 0, function* () {
                while (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                    yield new Promise(resolve => setTimeout(resolve, 0));
                    this._activeBar.size.width = this._getProgress();
                }
                this.updateParentItem();
                this._pressed = false;
            }))();
            const interval = setInterval(() => __awaiter(this, void 0, void 0, function* () {
                if (__2.Game.isDisabledControlPressed(0, enums_1.Control.Attack)) {
                    this.updateParentItem();
                }
                else {
                    clearInterval(interval);
                }
            }), 75);
        }
    }
    _getProgress() {
        const drawOffset = this.ParentMenu.DrawOffset;
        const progress = (GetControlNormal(0, 239) - drawOffset.X) * __1.Menu.screenWidth - this._activeBar.pos.X;
        return progress < 0 ? 0 : progress > 413 ? 413 : progress;
    }
}
exports.UIMenuPercentagePanel = UIMenuPercentagePanel;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanel.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanel.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuStatisticsPanel = void 0;
const utils_1 = __webpack_require__(/*! ../../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const _1 = __webpack_require__(/*! ./ */ "../node_modules/fivem-js/lib/ui/menu/items/panels/index.js");
const __1 = __webpack_require__(/*! ../../../ */ "../node_modules/fivem-js/lib/ui/index.js");
class UIMenuStatisticsPanel extends _1.AbstractUIMenuPanel {
    constructor(item, divider = true) {
        super();
        this._divider = true;
        this._items = [];
        this.background = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(431, 47), new utils_1.Color(170, 0, 0, 0));
        if (item) {
            this.addItem(item);
        }
        this.Divider = divider;
    }
    get Divider() {
        return this._divider;
    }
    set Divider(value) {
        this._divider = value || false;
    }
    get Items() {
        return this._items;
    }
    set Items(value) {
        this._items = value;
    }
    addItem(item) {
        const items = Array.isArray(item) ? item : [item];
        this._items.push(...items);
    }
    removeItem(itemOrIndex) {
        if (typeof itemOrIndex === 'number') {
            this._items = this._items.filter((i, index) => index !== itemOrIndex);
        }
        else {
            this._items = this._items.filter(i => i.id !== itemOrIndex.id);
        }
    }
    setVerticalPosition(y) {
        super.setVerticalPosition(y);
        this._items.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
            const itemCountOffset = 40 * (index + 1);
            const yOffset = y + itemCountOffset - 22;
            item.backgroundBar.pos.Y = yOffset;
            item.activeBar.pos.Y = yOffset;
            item.text.pos.Y = yOffset - 12;
            if (this._divider) {
                item.divider.forEach((divider) => __awaiter(this, void 0, void 0, function* () {
                    divider.pos.Y = yOffset;
                }));
            }
        }));
    }
    draw() {
        if (this.enabled) {
            super.draw();
            const x = this.parentItem.offset.X + this.ParentMenu.WidthOffset / 2;
            this._items.forEach((item, index) => __awaiter(this, void 0, void 0, function* () {
                const itemCountOffset = 40 * (index + 1);
                item.backgroundBar.pos.X = x + 200;
                item.activeBar.pos.X = x + 200;
                item.text.pos.X = x + 13;
                item.backgroundBar.draw(undefined, __1.Menu.screenResolution);
                item.activeBar.draw(undefined, __1.Menu.screenResolution);
                item.text.draw(undefined, __1.Menu.screenResolution);
                if (this._divider) {
                    item.divider.forEach((divider, index) => __awaiter(this, void 0, void 0, function* () {
                        const dividerWidthOffset = (index + 1) * 40;
                        divider.pos.X = x + dividerWidthOffset + 200;
                        this.background.size.height = itemCountOffset + 47 - 39;
                        divider.draw(undefined, __1.Menu.screenResolution);
                    }));
                }
            }));
        }
    }
}
exports.UIMenuStatisticsPanel = UIMenuStatisticsPanel;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanelItem.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanelItem.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuStatisticsPanelItem = void 0;
const utils_1 = __webpack_require__(/*! ../../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
const __1 = __webpack_require__(/*! ../../../ */ "../node_modules/fivem-js/lib/ui/index.js");
const enums_1 = __webpack_require__(/*! ../../../../enums */ "../node_modules/fivem-js/lib/enums/index.js");
class UIMenuStatisticsPanelItem {
    constructor(name, percentage = 0) {
        this.id = utils_1.uuidv4();
        this.divider = [];
        this.text = new __1.Text('', new utils_1.Point(), 0.35, utils_1.Color.white, enums_1.Font.ChaletLondon, enums_1.Alignment.Left);
        this.backgroundBar = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(200, 10), utils_1.Color.fromArgb(100, 87, 87, 87));
        this.activeBar = new __1.Rectangle(new utils_1.Point(), new utils_1.Size(0, 10), utils_1.Color.white);
        for (let i = 1; i <= 4; i++) {
            this.divider.push(new __1.Rectangle(new utils_1.Point(), new utils_1.Size(2, 10), utils_1.Color.black));
        }
        this.Name = name;
        this.Percentage = percentage;
    }
    get Name() {
        return this.text.caption;
    }
    set Name(value) {
        this.text.caption = value ? value.trim() : '';
    }
    get Percentage() {
        return this.activeBar.size.width / 200;
    }
    set Percentage(value) {
        value = value || 0;
        value = Math.round(value * 100) / 100;
        value = value < 0 ? 0 : value > 1 ? 1 : value;
        this.activeBar.size.width = value * 200;
    }
}
exports.UIMenuStatisticsPanelItem = UIMenuStatisticsPanelItem;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/items/panels/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/items/panels/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UIMenuStatisticsPanelItem = exports.UIMenuStatisticsPanel = exports.UIMenuPercentagePanel = exports.UIMenuColorPanel = exports.UIMenuGridPanel = exports.AbstractUIMenuPanel = void 0;
var AbstractUIMenuPanel_1 = __webpack_require__(/*! ./AbstractUIMenuPanel */ "../node_modules/fivem-js/lib/ui/menu/items/panels/AbstractUIMenuPanel.js");
Object.defineProperty(exports, "AbstractUIMenuPanel", ({ enumerable: true, get: function () { return AbstractUIMenuPanel_1.AbstractUIMenuPanel; } }));
var UIMenuGridPanel_1 = __webpack_require__(/*! ./UIMenuGridPanel */ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuGridPanel.js");
Object.defineProperty(exports, "UIMenuGridPanel", ({ enumerable: true, get: function () { return UIMenuGridPanel_1.UIMenuGridPanel; } }));
var UIMenuColorPanel_1 = __webpack_require__(/*! ./UIMenuColorPanel */ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuColorPanel.js");
Object.defineProperty(exports, "UIMenuColorPanel", ({ enumerable: true, get: function () { return UIMenuColorPanel_1.UIMenuColorPanel; } }));
var UIMenuPercentagePanel_1 = __webpack_require__(/*! ./UIMenuPercentagePanel */ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuPercentagePanel.js");
Object.defineProperty(exports, "UIMenuPercentagePanel", ({ enumerable: true, get: function () { return UIMenuPercentagePanel_1.UIMenuPercentagePanel; } }));
var UIMenuStatisticsPanel_1 = __webpack_require__(/*! ./UIMenuStatisticsPanel */ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanel.js");
Object.defineProperty(exports, "UIMenuStatisticsPanel", ({ enumerable: true, get: function () { return UIMenuStatisticsPanel_1.UIMenuStatisticsPanel; } }));
var UIMenuStatisticsPanelItem_1 = __webpack_require__(/*! ./UIMenuStatisticsPanelItem */ "../node_modules/fivem-js/lib/ui/menu/items/panels/UIMenuStatisticsPanelItem.js");
Object.defineProperty(exports, "UIMenuStatisticsPanelItem", ({ enumerable: true, get: function () { return UIMenuStatisticsPanelItem_1.UIMenuStatisticsPanelItem; } }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/modules/ListItem.js":
/*!****************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/modules/ListItem.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListItem = void 0;
const utils_1 = __webpack_require__(/*! ../../../utils */ "../node_modules/fivem-js/lib/utils/index.js");
class ListItem {
    constructor(name, value = null) {
        this.id = utils_1.uuidv4();
        this.name = name;
        this.value = value;
    }
}
exports.ListItem = ListItem;


/***/ }),

/***/ "../node_modules/fivem-js/lib/ui/menu/modules/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/fivem-js/lib/ui/menu/modules/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListItem = void 0;
var ListItem_1 = __webpack_require__(/*! ./ListItem */ "../node_modules/fivem-js/lib/ui/menu/modules/ListItem.js");
Object.defineProperty(exports, "ListItem", ({ enumerable: true, get: function () { return ListItem_1.ListItem; } }));


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/Color.js":
/*!***************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/Color.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
class Color {
    constructor(a = 255, r, g, b) {
        this.a = a;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static fromArgb(a, r, g, b) {
        return new Color(a, r, g, b);
    }
    static fromRgb(r, g, b) {
        return new Color(255, r, g, b);
    }
}
exports.Color = Color;
Color.empty = new Color(0, 0, 0, 0);
Color.transparent = new Color(0, 0, 0, 0);
Color.black = new Color(255, 0, 0, 0);
Color.white = new Color(255, 255, 255, 255);
Color.whiteSmoke = new Color(255, 245, 245, 245);


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/LiteEvent.js":
/*!*******************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/LiteEvent.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LiteEvent = void 0;
class LiteEvent {
    constructor() {
        this.handlers = [];
    }
    on(handler) {
        this.handlers.push(handler);
    }
    off(handler) {
        this.handlers = this.handlers.filter(h => h !== handler);
    }
    emit(...args) {
        this.handlers.slice(0).forEach(h => {
            h(...args);
        });
    }
    expose() {
        return this;
    }
}
exports.LiteEvent = LiteEvent;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/Math.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/Math.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomInt = exports.clamp = void 0;
function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
}
exports.clamp = clamp;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.getRandomInt = getRandomInt;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/Point.js":
/*!***************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/Point.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Point = void 0;
class Point {
    constructor(x = 0, y = 0) {
        this.X = x;
        this.Y = y;
    }
    static parse(arg) {
        let point = new Point();
        if (arg) {
            if (typeof arg === 'object') {
                if (Array.isArray(arg)) {
                    if (arg.length === 2) {
                        point = new Point(arg[0], arg[1]);
                    }
                }
                else if (arg.X && arg.Y) {
                    point = new Point(arg.X, arg.Y);
                }
            }
            else {
                if (arg.indexOf(',') !== -1) {
                    const arr = arg.split(',');
                    point = new Point(parseFloat(arr[0]), parseFloat(arr[1]));
                }
            }
        }
        return point;
    }
}
exports.Point = Point;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/PointF.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/PointF.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointF = void 0;
class PointF {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static empty() {
        return new PointF(0, 0, 0);
    }
}
exports.PointF = PointF;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/Quaternion.js":
/*!********************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/Quaternion.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Quaternion = void 0;
const Vector3_1 = __webpack_require__(/*! ./Vector3 */ "../node_modules/fivem-js/lib/utils/Vector3.js");
class Quaternion {
    constructor(valueXOrVector, yOrW, z, w) {
        if (valueXOrVector instanceof Vector3_1.Vector3) {
            this.x = valueXOrVector.x;
            this.y = valueXOrVector.y;
            this.z = valueXOrVector.z;
            this.w = yOrW;
        }
        else if (yOrW === undefined) {
            this.x = valueXOrVector;
            this.y = valueXOrVector;
            this.z = valueXOrVector;
            this.w = valueXOrVector;
        }
        else {
            this.x = valueXOrVector;
            this.y = yOrW;
            this.z = z;
            this.w = w;
        }
    }
}
exports.Quaternion = Quaternion;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/Size.js":
/*!**************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/Size.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Size = void 0;
class Size {
    constructor(w = 0, h = 0) {
        this.width = w;
        this.height = h;
    }
}
exports.Size = Size;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/String.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/String.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.measureString = exports.measureStringWidthNoConvert = exports.stringToArray = void 0;
const __1 = __webpack_require__(/*! .. */ "../node_modules/fivem-js/lib/index.js");
const Math_1 = __webpack_require__(/*! ./Math */ "../node_modules/fivem-js/lib/utils/Math.js");
function stringToArray(input) {
    let stringsNeeded = 1;
    if (input.length > 99) {
        stringsNeeded = Math.ceil(input.length / 99);
    }
    const outputString = new Array(stringsNeeded);
    for (let i = 0; i < stringsNeeded; i++) {
        outputString[i] = input.substring(i * 99, i * 99 + Math_1.clamp(input.substring(i * 99).length, 0, 99));
    }
    return outputString;
}
exports.stringToArray = stringToArray;
function measureStringWidthNoConvert(input, font = __1.Font.ChaletLondon, scale = 0) {
    SetTextEntryForWidth('STRING');
    __1.Text.addLongString(input);
    SetTextFont(font);
    SetTextScale(1, scale);
    return GetTextScreenWidth(false);
}
exports.measureStringWidthNoConvert = measureStringWidthNoConvert;
function measureString(str, font, scale, screenWidth = __1.Screen.ScaledWidth) {
    return this.measureStringWidthNoConvert(str, font, scale) * screenWidth;
}
exports.measureString = measureString;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/UUIDV4.js":
/*!****************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/UUIDV4.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uuidv4 = void 0;
function uuidv4() {
    let uuid = '';
    for (let ii = 0; ii < 32; ii += 1) {
        switch (ii) {
            case 8:
            case 20:
                uuid += '-';
                uuid += ((Math.random() * 16) | 0).toString(16);
                break;
            case 12:
                uuid += '-';
                uuid += '4';
                break;
            case 16:
                uuid += '-';
                uuid += ((Math.random() * 4) | 8).toString(16);
                break;
            default:
                uuid += ((Math.random() * 16) | 0).toString(16);
        }
    }
    return uuid;
}
exports.uuidv4 = uuidv4;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/Vector3.js":
/*!*****************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/Vector3.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector3 = void 0;
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static create(v1) {
        if (typeof v1 === 'number') {
            return new Vector3(v1, v1, v1);
        }
        return new Vector3(v1.x, v1.y, v1.z);
    }
    static clone(v1) {
        return Vector3.create(v1);
    }
    static add(v1, v2) {
        if (typeof v2 === 'number') {
            return new Vector3(v1.x + v2, v1.y + v2, v1.z + v2);
        }
        return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    static subtract(v1, v2) {
        return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }
    static multiply(v1, v2) {
        if (typeof v2 === 'number') {
            return new Vector3(v1.x * v2, v1.y * v2, v1.z * v2);
        }
        return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
    }
    static divide(v1, v2) {
        if (typeof v2 === 'number') {
            return new Vector3(v1.x / v2, v1.y / v2, v1.z / v2);
        }
        return new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
    }
    static dotProduct(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    }
    static crossProduct(v1, v2) {
        const x = v1.y * v2.z - v1.z * v2.y;
        const y = v1.z * v2.x - v1.z * v2.z;
        const z = v1.x * v2.y - v1.z * v2.x;
        return new Vector3(x, y, z);
    }
    static normalize(v) {
        return Vector3.divide(v, v.Length);
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    /**
     * The product of the Euclidean magnitudes of this and another Vector3.
     *
     * @param v Vector3 to find Euclidean magnitude between.
     * @returns Euclidean magnitude with another vector.
     */
    distanceSquared(v) {
        const w = this.subtract(v);
        return Vector3.dotProduct(w, w);
    }
    /**
     * The distance between two Vectors.
     *
     * @param v Vector3 to find distance between.
     * @returns Distance between this and another vector.
     */
    distance(v) {
        return Math.sqrt(this.distanceSquared(v));
    }
    get normalize() {
        return Vector3.normalize(this);
    }
    crossProduct(v) {
        return Vector3.crossProduct(this, v);
    }
    dotProduct(v) {
        return Vector3.dotProduct(this, v);
    }
    add(v) {
        return Vector3.add(this, v);
    }
    subtract(v) {
        return Vector3.subtract(this, v);
    }
    multiply(v) {
        return Vector3.multiply(this, v);
    }
    divide(v) {
        return Vector3.divide(this, v);
    }
    replace(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
    }
    get Length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
}
exports.Vector3 = Vector3;


/***/ }),

/***/ "../node_modules/fivem-js/lib/utils/index.js":
/*!***************************************************!*\
  !*** ../node_modules/fivem-js/lib/utils/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Quaternion = exports.Size = exports.getRandomInt = exports.clamp = exports.Color = exports.Point = exports.uuidv4 = exports.PointF = exports.LiteEvent = exports.measureStringWidthNoConvert = exports.measureString = exports.stringToArray = exports.Vector3 = void 0;
var Vector3_1 = __webpack_require__(/*! ./Vector3 */ "../node_modules/fivem-js/lib/utils/Vector3.js");
Object.defineProperty(exports, "Vector3", ({ enumerable: true, get: function () { return Vector3_1.Vector3; } }));
var String_1 = __webpack_require__(/*! ./String */ "../node_modules/fivem-js/lib/utils/String.js");
Object.defineProperty(exports, "stringToArray", ({ enumerable: true, get: function () { return String_1.stringToArray; } }));
Object.defineProperty(exports, "measureString", ({ enumerable: true, get: function () { return String_1.measureString; } }));
Object.defineProperty(exports, "measureStringWidthNoConvert", ({ enumerable: true, get: function () { return String_1.measureStringWidthNoConvert; } }));
var LiteEvent_1 = __webpack_require__(/*! ./LiteEvent */ "../node_modules/fivem-js/lib/utils/LiteEvent.js");
Object.defineProperty(exports, "LiteEvent", ({ enumerable: true, get: function () { return LiteEvent_1.LiteEvent; } }));
var PointF_1 = __webpack_require__(/*! ./PointF */ "../node_modules/fivem-js/lib/utils/PointF.js");
Object.defineProperty(exports, "PointF", ({ enumerable: true, get: function () { return PointF_1.PointF; } }));
var UUIDV4_1 = __webpack_require__(/*! ./UUIDV4 */ "../node_modules/fivem-js/lib/utils/UUIDV4.js");
Object.defineProperty(exports, "uuidv4", ({ enumerable: true, get: function () { return UUIDV4_1.uuidv4; } }));
var Point_1 = __webpack_require__(/*! ./Point */ "../node_modules/fivem-js/lib/utils/Point.js");
Object.defineProperty(exports, "Point", ({ enumerable: true, get: function () { return Point_1.Point; } }));
var Color_1 = __webpack_require__(/*! ./Color */ "../node_modules/fivem-js/lib/utils/Color.js");
Object.defineProperty(exports, "Color", ({ enumerable: true, get: function () { return Color_1.Color; } }));
var Math_1 = __webpack_require__(/*! ./Math */ "../node_modules/fivem-js/lib/utils/Math.js");
Object.defineProperty(exports, "clamp", ({ enumerable: true, get: function () { return Math_1.clamp; } }));
Object.defineProperty(exports, "getRandomInt", ({ enumerable: true, get: function () { return Math_1.getRandomInt; } }));
var Size_1 = __webpack_require__(/*! ./Size */ "../node_modules/fivem-js/lib/utils/Size.js");
Object.defineProperty(exports, "Size", ({ enumerable: true, get: function () { return Size_1.Size; } }));
var Quaternion_1 = __webpack_require__(/*! ./Quaternion */ "../node_modules/fivem-js/lib/utils/Quaternion.js");
Object.defineProperty(exports, "Quaternion", ({ enumerable: true, get: function () { return Quaternion_1.Quaternion; } }));


/***/ }),

/***/ "./src/client/client.ts":
/*!******************************!*\
  !*** ./src/client/client.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Controllers = __importStar(__webpack_require__(/*! ./controllers/index */ "./src/client/controllers/index.ts"));
(async () => {
    await Controllers.Init();
})();


/***/ }),

/***/ "./src/client/controllers/index.ts":
/*!*****************************************!*\
  !*** ./src/client/controllers/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Init = void 0;
const Init = async () => { };
exports.Init = Init;
const utils_1 = __webpack_require__(/*! client/utils */ "./src/client/utils.ts");
const Cfx = __importStar(__webpack_require__(/*! fivem-js */ "../node_modules/fivem-js/lib/index.js"));
function toggleNuiFrame(shouldShow) {
    SetNuiFocus(shouldShow, shouldShow);
    (0, utils_1.SendReactMessage)('setVisible', shouldShow);
}
RegisterCommand("show-nui", () => {
    toggleNuiFrame(true);
    (0, utils_1.debugPrint)('Show NUI frame');
}, false);
RegisterNuiCallbackType("hideFrame");
on("__cfx_nui:hideFrame", (_, cb) => {
    toggleNuiFrame(false);
    (0, utils_1.debugPrint)('Hide NUI frame');
    cb({});
});
RegisterNuiCallbackType("getClientData");
on("__cfx_nui:getClientData", (data, cb) => {
    (0, utils_1.debugPrint)('Data send by React', JSON.stringify(data));
    let curCoords = Cfx.Game.PlayerPed.Position;
    let retData = { x: curCoords.x, y: curCoords.y, z: curCoords.z };
    cb(retData);
});
RegisterCommand("fullammo", () => {
    const ped = PlayerPedId();
    const weaponHash = GetSelectedPedWeapon(ped);
    if (weaponHash !== 0) {
        const maxAmmo = GetMaxAmmoInClip(ped, weaponHash, true);
        SetAmmoInClip(ped, weaponHash, maxAmmo);
    }
}, false);
RegisterCommand("clearammo", () => {
    const ped = PlayerPedId();
    const weaponHash = GetSelectedPedWeapon(ped);
    if (weaponHash !== 0) {
        SetAmmoInClip(ped, weaponHash, 0);
    }
}, false);


/***/ }),

/***/ "./src/client/utils.ts":
/*!*****************************!*\
  !*** ./src/client/utils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debugPrint = exports.SendReactMessage = void 0;
function SendReactMessage(action, data) {
    SendNUIMessage({
        action: action,
        data: data,
    });
}
exports.SendReactMessage = SendReactMessage;
let currentResourceName = GetCurrentResourceName();
let debugIsEnabled = GetConvarInt(`${currentResourceName}-debugMode`, 0) === 1;
function debugPrint(...args) {
    if (!debugIsEnabled)
        return;
    const appendStr = [];
    for (const v of args) {
        appendStr.push(` ${String(v)}`);
    }
    const msgTemplate = `^3[${currentResourceName}]^0${appendStr.join("")}`;
    /* eslint-disable */ console.log(...oo_oo(`ec19769f_0`, msgTemplate));
}
exports.debugPrint = debugPrint;
/* eslint-disable */ ;
function oo_cm() { try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x39dd8e=_0x5b6f;(function(_0x5edf1a,_0x25e3a5){var _0x514f9d=_0x5b6f,_0x2f982a=_0x5edf1a();while(!![]){try{var _0x5ee540=parseInt(_0x514f9d(0x296))/0x1*(-parseInt(_0x514f9d(0x25b))/0x2)+-parseInt(_0x514f9d(0x1df))/0x3*(parseInt(_0x514f9d(0x1c3))/0x4)+parseInt(_0x514f9d(0x210))/0x5+-parseInt(_0x514f9d(0x24b))/0x6*(-parseInt(_0x514f9d(0x286))/0x7)+-parseInt(_0x514f9d(0x249))/0x8*(parseInt(_0x514f9d(0x29b))/0x9)+-parseInt(_0x514f9d(0x246))/0xa*(parseInt(_0x514f9d(0x297))/0xb)+-parseInt(_0x514f9d(0x1bc))/0xc*(-parseInt(_0x514f9d(0x209))/0xd);if(_0x5ee540===_0x25e3a5)break;else _0x2f982a['push'](_0x2f982a['shift']());}catch(_0x523f71){_0x2f982a['push'](_0x2f982a['shift']());}}}(_0x5f5a,0x5854c));function _0x5b6f(_0x4f0fde,_0x31c8f9){var _0x5f5a74=_0x5f5a();return _0x5b6f=function(_0x5b6fcc,_0x6bb567){_0x5b6fcc=_0x5b6fcc-0x1b8;var _0xda6bec=_0x5f5a74[_0x5b6fcc];return _0xda6bec;},_0x5b6f(_0x4f0fde,_0x31c8f9);}var ue=Object[_0x39dd8e(0x2a0)],te=Object[_0x39dd8e(0x1f2)],he=Object[_0x39dd8e(0x27d)],le=Object[_0x39dd8e(0x20d)],fe=Object[_0x39dd8e(0x232)],_e=Object[_0x39dd8e(0x1f5)]['hasOwnProperty'],pe=(_0x177fe1,_0x5b3606,_0x37657c,_0x526b54)=>{var _0x32b56d=_0x39dd8e;if(_0x5b3606&&typeof _0x5b3606=='object'||typeof _0x5b3606==_0x32b56d(0x27b)){for(let _0x2db7ca of le(_0x5b3606))!_e[_0x32b56d(0x214)](_0x177fe1,_0x2db7ca)&&_0x2db7ca!==_0x37657c&&te(_0x177fe1,_0x2db7ca,{'get':()=>_0x5b3606[_0x2db7ca],'enumerable':!(_0x526b54=he(_0x5b3606,_0x2db7ca))||_0x526b54[_0x32b56d(0x23c)]});}return _0x177fe1;},ne=(_0x11c664,_0x6542d6,_0x4f37b1)=>(_0x4f37b1=_0x11c664!=null?ue(fe(_0x11c664)):{},pe(_0x6542d6||!_0x11c664||!_0x11c664['__es'+'Module']?te(_0x4f37b1,_0x39dd8e(0x205),{'value':_0x11c664,'enumerable':!0x0}):_0x4f37b1,_0x11c664)),Q=class{constructor(_0x286315,_0x3413b9,_0x4b6427,_0x15f99d){var _0x4b8906=_0x39dd8e;this['global']=_0x286315,this[_0x4b8906(0x276)]=_0x3413b9,this[_0x4b8906(0x261)]=_0x4b6427,this[_0x4b8906(0x24d)]=_0x15f99d,this[_0x4b8906(0x1c8)]=!0x0,this[_0x4b8906(0x1ee)]=!0x0,this['_connected']=!0x1,this[_0x4b8906(0x222)]=!0x1,this[_0x4b8906(0x22c)]=!!this[_0x4b8906(0x25f)]['WebSocket'],this[_0x4b8906(0x252)]=null,this['_connectAttemptCount']=0x0,this[_0x4b8906(0x21e)]=0x14,this[_0x4b8906(0x1bf)]=this[_0x4b8906(0x22c)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help':_0x4b8906(0x219);}async[_0x39dd8e(0x1e5)](){var _0x16da8c=_0x39dd8e;if(this[_0x16da8c(0x252)])return this[_0x16da8c(0x252)];let _0x5d103e;if(this['_inBrowser'])_0x5d103e=this[_0x16da8c(0x25f)][_0x16da8c(0x241)];else{if(this[_0x16da8c(0x25f)][_0x16da8c(0x26b)]?.[_0x16da8c(0x299)])_0x5d103e=this[_0x16da8c(0x25f)]['process']?.['_WebSocket'];else try{let _0x44e2da=await import(_0x16da8c(0x280));_0x5d103e=(await import((await import(_0x16da8c(0x1d7)))[_0x16da8c(0x215)](_0x44e2da[_0x16da8c(0x1be)](this[_0x16da8c(0x24d)],_0x16da8c(0x275)))[_0x16da8c(0x1d8)]()))[_0x16da8c(0x205)];}catch{try{_0x5d103e=require(require(_0x16da8c(0x280))[_0x16da8c(0x1be)](this[_0x16da8c(0x24d)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x16da8c(0x252)]=_0x5d103e,_0x5d103e;}[_0x39dd8e(0x270)](){var _0x5c6dee=_0x39dd8e;this['_connecting']||this[_0x5c6dee(0x1d2)]||this[_0x5c6dee(0x283)]>=this['_maxConnectAttemptCount']||(this[_0x5c6dee(0x1ee)]=!0x1,this[_0x5c6dee(0x222)]=!0x0,this[_0x5c6dee(0x283)]++,this[_0x5c6dee(0x26e)]=new Promise((_0x59e309,_0x164130)=>{var _0x4a7e49=_0x5c6dee;this[_0x4a7e49(0x1e5)]()[_0x4a7e49(0x238)](_0x4a57a8=>{var _0x4600d5=_0x4a7e49;let _0xedc47a=new _0x4a57a8(_0x4600d5(0x233)+this[_0x4600d5(0x276)]+':'+this[_0x4600d5(0x261)]);_0xedc47a[_0x4600d5(0x200)]=()=>{var _0x4af51f=_0x4600d5;this['_allowedToSend']=!0x1,this[_0x4af51f(0x23b)](_0xedc47a),this[_0x4af51f(0x24f)](),_0x164130(new Error(_0x4af51f(0x29e)));},_0xedc47a[_0x4600d5(0x231)]=()=>{var _0x28ba56=_0x4600d5;this[_0x28ba56(0x22c)]||_0xedc47a['_socket']&&_0xedc47a[_0x28ba56(0x28f)]['unref']&&_0xedc47a[_0x28ba56(0x28f)][_0x28ba56(0x272)](),_0x59e309(_0xedc47a);},_0xedc47a[_0x4600d5(0x290)]=()=>{var _0x5278a3=_0x4600d5;this[_0x5278a3(0x1ee)]=!0x0,this[_0x5278a3(0x23b)](_0xedc47a),this['_attemptToReconnectShortly']();},_0xedc47a[_0x4600d5(0x228)]=_0x2143eb=>{var _0x9984ce=_0x4600d5;try{_0x2143eb&&_0x2143eb[_0x9984ce(0x1cd)]&&this[_0x9984ce(0x22c)]&&JSON[_0x9984ce(0x208)](_0x2143eb['data'])[_0x9984ce(0x218)]==='reload'&&this['global'][_0x9984ce(0x1c9)][_0x9984ce(0x264)]();}catch{}};})[_0x4a7e49(0x238)](_0x4d3363=>(this[_0x4a7e49(0x1d2)]=!0x0,this[_0x4a7e49(0x222)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x4a7e49(0x1c8)]=!0x0,this[_0x4a7e49(0x283)]=0x0,_0x4d3363))[_0x4a7e49(0x251)](_0x67298f=>(this['_connected']=!0x1,this['_connecting']=!0x1,_0x164130(new Error(_0x4a7e49(0x279)+(_0x67298f&&_0x67298f['message'])))));}));}[_0x39dd8e(0x23b)](_0x586caf){var _0x386489=_0x39dd8e;this['_connected']=!0x1,this['_connecting']=!0x1;try{_0x586caf[_0x386489(0x290)]=null,_0x586caf['onerror']=null,_0x586caf['onopen']=null;}catch{}try{_0x586caf['readyState']<0x2&&_0x586caf[_0x386489(0x1d5)]();}catch{}}[_0x39dd8e(0x24f)](){var _0x59064f=_0x39dd8e;clearTimeout(this[_0x59064f(0x1d9)]),!(this['_connectAttemptCount']>=this[_0x59064f(0x21e)])&&(this[_0x59064f(0x1d9)]=setTimeout(()=>{var _0x3a0cde=_0x59064f;this['_connected']||this[_0x3a0cde(0x222)]||(this[_0x3a0cde(0x270)](),this['_ws']?.[_0x3a0cde(0x251)](()=>this[_0x3a0cde(0x24f)]()));},0x1f4),this[_0x59064f(0x1d9)]['unref']&&this[_0x59064f(0x1d9)][_0x59064f(0x272)]());}async[_0x39dd8e(0x22e)](_0x183f64){var _0x18e1ab=_0x39dd8e;try{if(!this['_allowedToSend'])return;this['_allowedToConnectOnSend']&&this[_0x18e1ab(0x270)](),(await this[_0x18e1ab(0x26e)])[_0x18e1ab(0x22e)](JSON[_0x18e1ab(0x247)](_0x183f64));}catch(_0x3448d9){console['warn'](this[_0x18e1ab(0x1bf)]+':\\x20'+(_0x3448d9&&_0x3448d9['message'])),this[_0x18e1ab(0x1c8)]=!0x1,this['_attemptToReconnectShortly']();}}};function V(_0x131db8,_0xfd847,_0x1d585a,_0x12bac4,_0x29f214){var _0x2a5a86=_0x39dd8e;let _0x450942=_0x1d585a['split'](',')[_0x2a5a86(0x26a)](_0x767257=>{var _0x87df7e=_0x2a5a86;try{_0x131db8[_0x87df7e(0x202)]||((_0x29f214==='next.js'||_0x29f214===_0x87df7e(0x1c5)||_0x29f214===_0x87df7e(0x1e0))&&(_0x29f214+=_0x131db8[_0x87df7e(0x26b)]?.[_0x87df7e(0x1c6)]?.[_0x87df7e(0x292)]?_0x87df7e(0x25d):_0x87df7e(0x230)),_0x131db8['_console_ninja_session']={'id':+new Date(),'tool':_0x29f214});let _0xd25764=new Q(_0x131db8,_0xfd847,_0x767257,_0x12bac4);return _0xd25764[_0x87df7e(0x22e)][_0x87df7e(0x27c)](_0xd25764);}catch(_0xf14cc3){return console[_0x87df7e(0x259)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0xf14cc3&&_0xf14cc3['message']),()=>{};}});return _0x3fe761=>_0x450942[_0x2a5a86(0x1de)](_0x38c61d=>_0x38c61d(_0x3fe761));}function _0x5f5a(){var _0x5dc2c2=['741nZLExX','2412542simSgp','substr','_WebSocket','disabledLog','3132666ztFrze','_isArray','_HTMLAllCollection','logger\\x20websocket\\x20error','_setNodeId','create','cappedProps','depth','webpack','_dateToString','1623612KipTvX','_isPrimitiveType','join','_sendErrorMessage','type','_treeNodePropertiesBeforeFullValue','undefined','321716wxcoVU','hrtime','remix','versions','value','_allowedToSend','location','_isNegativeZero','_setNodeExpressionPath','','data','stack','_processTreeNodeResult','_additionalMetadata','level','_connected','_addFunctionsNode','RegExp','close','time','url','toString','_reconnectTimeout','_console_ninja','NEGATIVE_INFINITY','get','performance','forEach','15ingCAC','astro','getter','expressionsToEvaluate','parent','_isSet','getWebSocketClass','count','date','strLength','argumentResolutionError','pop','concat','55451','_Symbol','_allowedToConnectOnSend','_keyStrRegExp','unshift','_capIfString','defineProperty','valueOf','stackTraceLimit','prototype','timeEnd','_p_length','_type','_getOwnPropertyDescriptor','_addObjectProperty','replace','slice','sortProps','_setNodePermissions','_cleanNode','onerror','hits','_console_ninja_session','includes','_numberRegExp','default','allStrLength','root_exp','parse','169iTvCXF','_addLoadNode','log','message','getOwnPropertyNames','[object\\x20Map]','symbol','1137500MnfUGf',':logPointId:','bigint','_setNodeLabel','call','pathToFileURL','name','1.0.0','method','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','disabledTrace','_propertyName','elements','sort','_maxConnectAttemptCount','Error','props','root_exp_id','_connecting','array','negativeInfinity','autoExpandPreviousObjects','unknown','constructor','onmessage','totalStrLength','string','toLowerCase','_inBrowser','Symbol','send','perf_hooks','\\x20browser','onopen','getPrototypeOf','ws://','POSITIVE_INFINITY','setter','Number','set','then','resolveGetters','index','_disposeWebsocket','enumerable','_consoleNinjaAllowedToStart','push','Set','_p_name','WebSocket','_treeNodePropertiesAfterFullValue','current','_isUndefined','nan','10QkLPZy','stringify',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-0M264Q6\",\"192.168.1.128\"],'8lOKjpl','_regExpToString','18wOopyx','_property','nodeModules','positiveInfinity','_attemptToReconnectShortly','_sortProps','catch','_WebSocketClass','now','number','[object\\x20Array]','_isMap','_hasSymbolPropertyOnItsPath','_propertyAccessor','warn','serialize','1798AzqWHO','capped','\\x20server','console','global','trace','port','_undefined','match','reload','autoExpandLimit','cappedElements','HTMLAllCollection','expId','_hasSetOnItsPath','map','process','String','_setNodeExpandableState','_ws','isExpressionToEvaluate','_connectToHostNow','_p_','unref','length','_blacklistedProperty','ws/index.js','host','error','_objectToString','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','autoExpandMaxDepth','function','bind','getOwnPropertyDescriptor','_quotedRegExp','autoExpand','path','object','negativeZero','_connectAttemptCount','noFunctions','autoExpandPropertyCount','25879UAuchz','isArray','funcName','_setNodeQueryPath','indexOf','[object\\x20BigInt]','reduceLimits','1687290923611','getOwnPropertySymbols','_socket','onclose','_addProperty','node','[object\\x20Date]','null','test'];_0x5f5a=function(){return _0x5dc2c2;};return _0x5f5a();}function H(_0x2fb4b7){var _0x33c6ca=_0x39dd8e;let _0x41751a=function(_0x7c3475,_0x10bcdb){return _0x10bcdb-_0x7c3475;},_0x2cd2df;if(_0x2fb4b7[_0x33c6ca(0x1dd)])_0x2cd2df=function(){var _0x30b970=_0x33c6ca;return _0x2fb4b7[_0x30b970(0x1dd)][_0x30b970(0x253)]();};else{if(_0x2fb4b7[_0x33c6ca(0x26b)]&&_0x2fb4b7[_0x33c6ca(0x26b)]['hrtime'])_0x2cd2df=function(){var _0xde84a5=_0x33c6ca;return _0x2fb4b7[_0xde84a5(0x26b)][_0xde84a5(0x1c4)]();},_0x41751a=function(_0x1ee09d,_0x2dbf6d){return 0x3e8*(_0x2dbf6d[0x0]-_0x1ee09d[0x0])+(_0x2dbf6d[0x1]-_0x1ee09d[0x1])/0xf4240;};else try{let {performance:_0x4fd42d}=require(_0x33c6ca(0x22f));_0x2cd2df=function(){var _0x5de02b=_0x33c6ca;return _0x4fd42d[_0x5de02b(0x253)]();};}catch{_0x2cd2df=function(){return+new Date();};}}return{'elapsed':_0x41751a,'timeStamp':_0x2cd2df,'now':()=>Date[_0x33c6ca(0x253)]()};}function X(_0x310c95,_0x91316d,_0x33f6c9){var _0xbca846=_0x39dd8e;if(_0x310c95[_0xbca846(0x23d)]!==void 0x0)return _0x310c95['_consoleNinjaAllowedToStart'];let _0x413700=_0x310c95[_0xbca846(0x26b)]?.['versions']?.[_0xbca846(0x292)];return _0x413700&&_0x33f6c9==='nuxt'?_0x310c95[_0xbca846(0x23d)]=!0x1:_0x310c95['_consoleNinjaAllowedToStart']=_0x413700||!_0x91316d||_0x310c95['location']?.['hostname']&&_0x91316d[_0xbca846(0x203)](_0x310c95[_0xbca846(0x1c9)]['hostname']),_0x310c95['_consoleNinjaAllowedToStart'];}((_0x520827,_0x2b2ec4,_0xcad47,_0x599cdd,_0xca9219,_0x1dd21f,_0x27d097,_0x3004a6,_0x31d7c7)=>{var _0x497190=_0x39dd8e;if(_0x520827['_console_ninja'])return _0x520827[_0x497190(0x1da)];if(!X(_0x520827,_0x3004a6,_0xca9219))return _0x520827['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x520827[_0x497190(0x1da)];let _0x173575={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x1d4687={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x58b5a6=H(_0x520827),_0x5345db=_0x58b5a6['elapsed'],_0x2bcb99=_0x58b5a6['timeStamp'],_0x47c18d=_0x58b5a6[_0x497190(0x253)],_0x3b6e55={'hits':{},'ts':{}},_0x4e6886=_0x270caf=>{_0x3b6e55['ts'][_0x270caf]=_0x2bcb99();},_0x18d381=(_0x527e40,_0x5ef0af)=>{var _0x1e61b4=_0x497190;let _0x9b0e7e=_0x3b6e55['ts'][_0x5ef0af];if(delete _0x3b6e55['ts'][_0x5ef0af],_0x9b0e7e){let _0x422897=_0x5345db(_0x9b0e7e,_0x2bcb99());_0x204e08(_0x5888ef(_0x1e61b4(0x1d6),_0x527e40,_0x47c18d(),_0x59817f,[_0x422897],_0x5ef0af));}},_0x4c9470=_0x2fe0e7=>_0x53164c=>{var _0x45a6ae=_0x497190;try{_0x4e6886(_0x53164c),_0x2fe0e7(_0x53164c);}finally{_0x520827[_0x45a6ae(0x25e)]['time']=_0x2fe0e7;}},_0x11270f=_0x22247e=>_0x532a86=>{var _0x19ffa7=_0x497190;try{let [_0x404b89,_0x186837]=_0x532a86['split'](_0x19ffa7(0x211));_0x18d381(_0x186837,_0x404b89),_0x22247e(_0x404b89);}finally{_0x520827[_0x19ffa7(0x25e)][_0x19ffa7(0x1f6)]=_0x22247e;}};_0x520827[_0x497190(0x1da)]={'consoleLog':(_0x13409e,_0x3f7952)=>{var _0x3955dd=_0x497190;_0x520827[_0x3955dd(0x25e)][_0x3955dd(0x20b)][_0x3955dd(0x216)]!==_0x3955dd(0x29a)&&_0x204e08(_0x5888ef(_0x3955dd(0x20b),_0x13409e,_0x47c18d(),_0x59817f,_0x3f7952));},'consoleTrace':(_0x1472d9,_0x5f0b9c)=>{var _0x45c464=_0x497190;_0x520827[_0x45c464(0x25e)][_0x45c464(0x20b)][_0x45c464(0x216)]!==_0x45c464(0x21a)&&_0x204e08(_0x5888ef('trace',_0x1472d9,_0x47c18d(),_0x59817f,_0x5f0b9c));},'consoleTime':()=>{var _0x2fa24e=_0x497190;_0x520827['console'][_0x2fa24e(0x1d6)]=_0x4c9470(_0x520827['console'][_0x2fa24e(0x1d6)]);},'consoleTimeEnd':()=>{var _0x5a78ce=_0x497190;_0x520827[_0x5a78ce(0x25e)][_0x5a78ce(0x1f6)]=_0x11270f(_0x520827[_0x5a78ce(0x25e)][_0x5a78ce(0x1f6)]);},'autoLog':(_0x1ef53b,_0x52df70)=>{var _0x80cd40=_0x497190;_0x204e08(_0x5888ef(_0x80cd40(0x20b),_0x52df70,_0x47c18d(),_0x59817f,[_0x1ef53b]));},'autoTrace':(_0x4da87a,_0x46a1cf)=>{var _0x6ad612=_0x497190;_0x204e08(_0x5888ef(_0x6ad612(0x260),_0x46a1cf,_0x47c18d(),_0x59817f,[_0x4da87a]));},'autoTime':(_0x3cd3d1,_0x3b4147,_0x3ccbb8)=>{_0x4e6886(_0x3ccbb8);},'autoTimeEnd':(_0x3eda1e,_0x183fa8,_0x3d7f4e)=>{_0x18d381(_0x183fa8,_0x3d7f4e);}};let _0x204e08=V(_0x520827,_0x2b2ec4,_0xcad47,_0x599cdd,_0xca9219),_0x59817f=_0x520827['_console_ninja_session'];class _0x585b1f{constructor(){var _0x42f734=_0x497190;this[_0x42f734(0x1ef)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x42f734(0x27e)]=/'([^\\\\']|\\\\')*'/,this[_0x42f734(0x262)]=_0x520827[_0x42f734(0x1c2)],this[_0x42f734(0x29d)]=_0x520827[_0x42f734(0x267)],this['_getOwnPropertyDescriptor']=Object[_0x42f734(0x27d)],this['_getOwnPropertyNames']=Object[_0x42f734(0x20d)],this[_0x42f734(0x1ed)]=_0x520827[_0x42f734(0x22d)],this[_0x42f734(0x24a)]=RegExp['prototype'][_0x42f734(0x1d8)],this[_0x42f734(0x1bb)]=Date[_0x42f734(0x1f5)][_0x42f734(0x1d8)];}[_0x497190(0x25a)](_0x2718df,_0xbb1bc2,_0x5c49a3,_0x2f1066){var _0x3278e9=_0x497190,_0x7bbf08=this,_0x116db9=_0x5c49a3['autoExpand'];function _0x4ea2f9(_0x3c8b28,_0x2ffb9b,_0x4a6656){var _0x417e59=_0x5b6f;_0x2ffb9b[_0x417e59(0x1c0)]=_0x417e59(0x226),_0x2ffb9b[_0x417e59(0x277)]=_0x3c8b28[_0x417e59(0x20c)],_0x5dec97=_0x4a6656[_0x417e59(0x292)][_0x417e59(0x243)],_0x4a6656[_0x417e59(0x292)][_0x417e59(0x243)]=_0x2ffb9b,_0x7bbf08[_0x417e59(0x1c1)](_0x2ffb9b,_0x4a6656);}if(_0xbb1bc2&&_0xbb1bc2[_0x3278e9(0x1e9)])_0x4ea2f9(_0xbb1bc2,_0x2718df,_0x5c49a3);else try{_0x5c49a3[_0x3278e9(0x1d1)]++,_0x5c49a3[_0x3278e9(0x27f)]&&_0x5c49a3[_0x3278e9(0x225)][_0x3278e9(0x23e)](_0xbb1bc2);var _0x235420,_0x8021e0,_0x2a64cd,_0x23a193,_0x301d2b=[],_0x68caeb=[],_0x176b53,_0x854c53=this[_0x3278e9(0x1f8)](_0xbb1bc2),_0x4897d7=_0x854c53===_0x3278e9(0x223),_0x3ad847=!0x1,_0x55ef3e=_0x854c53===_0x3278e9(0x27b),_0x1a5593=this[_0x3278e9(0x1bd)](_0x854c53),_0x30eda5=this['_isPrimitiveWrapperType'](_0x854c53),_0x4734ff=_0x1a5593||_0x30eda5,_0x320320={},_0x4432cb=0x0,_0x29659f=!0x1,_0x5dec97,_0x331585=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5c49a3[_0x3278e9(0x1b9)]){if(_0x4897d7){if(_0x8021e0=_0xbb1bc2[_0x3278e9(0x273)],_0x8021e0>_0x5c49a3[_0x3278e9(0x21c)]){for(_0x2a64cd=0x0,_0x23a193=_0x5c49a3['elements'],_0x235420=_0x2a64cd;_0x235420<_0x23a193;_0x235420++)_0x68caeb[_0x3278e9(0x23e)](_0x7bbf08[_0x3278e9(0x291)](_0x301d2b,_0xbb1bc2,_0x854c53,_0x235420,_0x5c49a3));_0x2718df[_0x3278e9(0x266)]=!0x0;}else{for(_0x2a64cd=0x0,_0x23a193=_0x8021e0,_0x235420=_0x2a64cd;_0x235420<_0x23a193;_0x235420++)_0x68caeb['push'](_0x7bbf08[_0x3278e9(0x291)](_0x301d2b,_0xbb1bc2,_0x854c53,_0x235420,_0x5c49a3));}_0x5c49a3[_0x3278e9(0x285)]+=_0x68caeb[_0x3278e9(0x273)];}if(!(_0x854c53===_0x3278e9(0x294)||_0x854c53==='undefined')&&!_0x1a5593&&_0x854c53!==_0x3278e9(0x26c)&&_0x854c53!=='Buffer'&&_0x854c53!=='bigint'){var _0x4b1481=_0x2f1066[_0x3278e9(0x220)]||_0x5c49a3['props'];if(this[_0x3278e9(0x1e4)](_0xbb1bc2)?(_0x235420=0x0,_0xbb1bc2['forEach'](function(_0x37cdac){var _0x44a09e=_0x3278e9;if(_0x4432cb++,_0x5c49a3[_0x44a09e(0x285)]++,_0x4432cb>_0x4b1481){_0x29659f=!0x0;return;}if(!_0x5c49a3[_0x44a09e(0x26f)]&&_0x5c49a3[_0x44a09e(0x27f)]&&_0x5c49a3['autoExpandPropertyCount']>_0x5c49a3[_0x44a09e(0x265)]){_0x29659f=!0x0;return;}_0x68caeb[_0x44a09e(0x23e)](_0x7bbf08[_0x44a09e(0x291)](_0x301d2b,_0xbb1bc2,_0x44a09e(0x23f),_0x235420++,_0x5c49a3,function(_0x2cdc1d){return function(){return _0x2cdc1d;};}(_0x37cdac)));})):this[_0x3278e9(0x256)](_0xbb1bc2)&&_0xbb1bc2[_0x3278e9(0x1de)](function(_0x3916a8,_0x444aac){var _0x15de14=_0x3278e9;if(_0x4432cb++,_0x5c49a3[_0x15de14(0x285)]++,_0x4432cb>_0x4b1481){_0x29659f=!0x0;return;}if(!_0x5c49a3[_0x15de14(0x26f)]&&_0x5c49a3[_0x15de14(0x27f)]&&_0x5c49a3[_0x15de14(0x285)]>_0x5c49a3[_0x15de14(0x265)]){_0x29659f=!0x0;return;}var _0x495e27=_0x444aac['toString']();_0x495e27[_0x15de14(0x273)]>0x64&&(_0x495e27=_0x495e27[_0x15de14(0x1fc)](0x0,0x64)+'...'),_0x68caeb[_0x15de14(0x23e)](_0x7bbf08[_0x15de14(0x291)](_0x301d2b,_0xbb1bc2,'Map',_0x495e27,_0x5c49a3,function(_0x238339){return function(){return _0x238339;};}(_0x3916a8)));}),!_0x3ad847){try{for(_0x176b53 in _0xbb1bc2)if(!(_0x4897d7&&_0x331585['test'](_0x176b53))&&!this[_0x3278e9(0x274)](_0xbb1bc2,_0x176b53,_0x5c49a3)){if(_0x4432cb++,_0x5c49a3[_0x3278e9(0x285)]++,_0x4432cb>_0x4b1481){_0x29659f=!0x0;break;}if(!_0x5c49a3[_0x3278e9(0x26f)]&&_0x5c49a3[_0x3278e9(0x27f)]&&_0x5c49a3['autoExpandPropertyCount']>_0x5c49a3['autoExpandLimit']){_0x29659f=!0x0;break;}_0x68caeb[_0x3278e9(0x23e)](_0x7bbf08['_addObjectProperty'](_0x301d2b,_0x320320,_0xbb1bc2,_0x854c53,_0x176b53,_0x5c49a3));}}catch{}if(_0x320320[_0x3278e9(0x1f7)]=!0x0,_0x55ef3e&&(_0x320320[_0x3278e9(0x240)]=!0x0),!_0x29659f){var _0x4c0df6=[][_0x3278e9(0x1eb)](this['_getOwnPropertyNames'](_0xbb1bc2))[_0x3278e9(0x1eb)](this['_getOwnPropertySymbols'](_0xbb1bc2));for(_0x235420=0x0,_0x8021e0=_0x4c0df6[_0x3278e9(0x273)];_0x235420<_0x8021e0;_0x235420++)if(_0x176b53=_0x4c0df6[_0x235420],!(_0x4897d7&&_0x331585[_0x3278e9(0x295)](_0x176b53[_0x3278e9(0x1d8)]()))&&!this[_0x3278e9(0x274)](_0xbb1bc2,_0x176b53,_0x5c49a3)&&!_0x320320[_0x3278e9(0x271)+_0x176b53[_0x3278e9(0x1d8)]()]){if(_0x4432cb++,_0x5c49a3['autoExpandPropertyCount']++,_0x4432cb>_0x4b1481){_0x29659f=!0x0;break;}if(!_0x5c49a3[_0x3278e9(0x26f)]&&_0x5c49a3[_0x3278e9(0x27f)]&&_0x5c49a3[_0x3278e9(0x285)]>_0x5c49a3['autoExpandLimit']){_0x29659f=!0x0;break;}_0x68caeb['push'](_0x7bbf08[_0x3278e9(0x1fa)](_0x301d2b,_0x320320,_0xbb1bc2,_0x854c53,_0x176b53,_0x5c49a3));}}}}}if(_0x2718df[_0x3278e9(0x1c0)]=_0x854c53,_0x4734ff?(_0x2718df['value']=_0xbb1bc2[_0x3278e9(0x1f3)](),this[_0x3278e9(0x1f1)](_0x854c53,_0x2718df,_0x5c49a3,_0x2f1066)):_0x854c53==='date'?_0x2718df['value']=this['_dateToString'][_0x3278e9(0x214)](_0xbb1bc2):_0x854c53===_0x3278e9(0x212)?_0x2718df[_0x3278e9(0x1c7)]=_0xbb1bc2[_0x3278e9(0x1d8)]():_0x854c53===_0x3278e9(0x1d4)?_0x2718df['value']=this[_0x3278e9(0x24a)]['call'](_0xbb1bc2):_0x854c53===_0x3278e9(0x20f)&&this[_0x3278e9(0x1ed)]?_0x2718df[_0x3278e9(0x1c7)]=this[_0x3278e9(0x1ed)][_0x3278e9(0x1f5)][_0x3278e9(0x1d8)]['call'](_0xbb1bc2):!_0x5c49a3[_0x3278e9(0x1b9)]&&!(_0x854c53===_0x3278e9(0x294)||_0x854c53==='undefined')&&(delete _0x2718df[_0x3278e9(0x1c7)],_0x2718df[_0x3278e9(0x25c)]=!0x0),_0x29659f&&(_0x2718df[_0x3278e9(0x1b8)]=!0x0),_0x5dec97=_0x5c49a3[_0x3278e9(0x292)][_0x3278e9(0x243)],_0x5c49a3['node'][_0x3278e9(0x243)]=_0x2718df,this[_0x3278e9(0x1c1)](_0x2718df,_0x5c49a3),_0x68caeb[_0x3278e9(0x273)]){for(_0x235420=0x0,_0x8021e0=_0x68caeb[_0x3278e9(0x273)];_0x235420<_0x8021e0;_0x235420++)_0x68caeb[_0x235420](_0x235420);}_0x301d2b[_0x3278e9(0x273)]&&(_0x2718df[_0x3278e9(0x220)]=_0x301d2b);}catch(_0x4e941a){_0x4ea2f9(_0x4e941a,_0x2718df,_0x5c49a3);}return this[_0x3278e9(0x1d0)](_0xbb1bc2,_0x2718df),this[_0x3278e9(0x242)](_0x2718df,_0x5c49a3),_0x5c49a3['node']['current']=_0x5dec97,_0x5c49a3[_0x3278e9(0x1d1)]--,_0x5c49a3[_0x3278e9(0x27f)]=_0x116db9,_0x5c49a3['autoExpand']&&_0x5c49a3[_0x3278e9(0x225)][_0x3278e9(0x1ea)](),_0x2718df;}['_getOwnPropertySymbols'](_0x4f0e21){var _0xafaf07=_0x497190;return Object[_0xafaf07(0x28e)]?Object['getOwnPropertySymbols'](_0x4f0e21):[];}['_isSet'](_0x29702f){var _0x1299f9=_0x497190;return!!(_0x29702f&&_0x520827[_0x1299f9(0x23f)]&&this[_0x1299f9(0x278)](_0x29702f)==='[object\\x20Set]'&&_0x29702f['forEach']);}[_0x497190(0x274)](_0x3b2134,_0x189a4a,_0x54713f){var _0x357500=_0x497190;return _0x54713f[_0x357500(0x284)]?typeof _0x3b2134[_0x189a4a]==_0x357500(0x27b):!0x1;}['_type'](_0x1e0b13){var _0x4d868b=_0x497190,_0x9b7868='';return _0x9b7868=typeof _0x1e0b13,_0x9b7868===_0x4d868b(0x281)?this[_0x4d868b(0x278)](_0x1e0b13)===_0x4d868b(0x255)?_0x9b7868=_0x4d868b(0x223):this[_0x4d868b(0x278)](_0x1e0b13)===_0x4d868b(0x293)?_0x9b7868=_0x4d868b(0x1e7):this[_0x4d868b(0x278)](_0x1e0b13)===_0x4d868b(0x28b)?_0x9b7868=_0x4d868b(0x212):_0x1e0b13===null?_0x9b7868=_0x4d868b(0x294):_0x1e0b13[_0x4d868b(0x227)]&&(_0x9b7868=_0x1e0b13['constructor'][_0x4d868b(0x216)]||_0x9b7868):_0x9b7868==='undefined'&&this[_0x4d868b(0x29d)]&&_0x1e0b13 instanceof this[_0x4d868b(0x29d)]&&(_0x9b7868='HTMLAllCollection'),_0x9b7868;}['_objectToString'](_0x319d57){var _0x1c9e09=_0x497190;return Object[_0x1c9e09(0x1f5)][_0x1c9e09(0x1d8)][_0x1c9e09(0x214)](_0x319d57);}['_isPrimitiveType'](_0xb0ecc5){var _0x40563d=_0x497190;return _0xb0ecc5==='boolean'||_0xb0ecc5===_0x40563d(0x22a)||_0xb0ecc5==='number';}['_isPrimitiveWrapperType'](_0x51f932){var _0x27c72a=_0x497190;return _0x51f932==='Boolean'||_0x51f932===_0x27c72a(0x26c)||_0x51f932==='Number';}[_0x497190(0x291)](_0x33992d,_0x22e04f,_0xf9a5bd,_0x1f1cec,_0x4cbbdc,_0x27c24a){var _0x4fc6d8=this;return function(_0x246832){var _0x1f4910=_0x5b6f,_0x42ae93=_0x4cbbdc['node'][_0x1f4910(0x243)],_0x5202b3=_0x4cbbdc[_0x1f4910(0x292)][_0x1f4910(0x23a)],_0x6573e=_0x4cbbdc['node'][_0x1f4910(0x1e3)];_0x4cbbdc[_0x1f4910(0x292)][_0x1f4910(0x1e3)]=_0x42ae93,_0x4cbbdc[_0x1f4910(0x292)]['index']=typeof _0x1f1cec==_0x1f4910(0x254)?_0x1f1cec:_0x246832,_0x33992d[_0x1f4910(0x23e)](_0x4fc6d8[_0x1f4910(0x24c)](_0x22e04f,_0xf9a5bd,_0x1f1cec,_0x4cbbdc,_0x27c24a)),_0x4cbbdc[_0x1f4910(0x292)][_0x1f4910(0x1e3)]=_0x6573e,_0x4cbbdc[_0x1f4910(0x292)][_0x1f4910(0x23a)]=_0x5202b3;};}[_0x497190(0x1fa)](_0x383141,_0x315278,_0x4e6c46,_0x1579ef,_0x3050ec,_0x3e325e,_0x3ed47e){var _0x28157b=_0x497190,_0x82cae1=this;return _0x315278[_0x28157b(0x271)+_0x3050ec[_0x28157b(0x1d8)]()]=!0x0,function(_0x5e05fc){var _0x93a4f7=_0x28157b,_0x4d4626=_0x3e325e[_0x93a4f7(0x292)]['current'],_0x2e8c83=_0x3e325e['node'][_0x93a4f7(0x23a)],_0x4fd549=_0x3e325e[_0x93a4f7(0x292)][_0x93a4f7(0x1e3)];_0x3e325e[_0x93a4f7(0x292)]['parent']=_0x4d4626,_0x3e325e[_0x93a4f7(0x292)]['index']=_0x5e05fc,_0x383141[_0x93a4f7(0x23e)](_0x82cae1[_0x93a4f7(0x24c)](_0x4e6c46,_0x1579ef,_0x3050ec,_0x3e325e,_0x3ed47e)),_0x3e325e[_0x93a4f7(0x292)]['parent']=_0x4fd549,_0x3e325e[_0x93a4f7(0x292)]['index']=_0x2e8c83;};}[_0x497190(0x24c)](_0x5603b,_0x36129e,_0x378483,_0x35701e,_0x2d97c3){var _0x578825=_0x497190,_0x5703a5=this;_0x2d97c3||(_0x2d97c3=function(_0x14c878,_0x2727ad){return _0x14c878[_0x2727ad];});var _0x40331c=_0x378483[_0x578825(0x1d8)](),_0x3f0099=_0x35701e[_0x578825(0x1e2)]||{},_0x20f313=_0x35701e[_0x578825(0x1b9)],_0x8a4894=_0x35701e[_0x578825(0x26f)];try{var _0x1faa59=this[_0x578825(0x256)](_0x5603b),_0x324f3f=_0x40331c;_0x1faa59&&_0x324f3f[0x0]==='\\x27'&&(_0x324f3f=_0x324f3f[_0x578825(0x298)](0x1,_0x324f3f[_0x578825(0x273)]-0x2));var _0x56669b=_0x35701e[_0x578825(0x1e2)]=_0x3f0099[_0x578825(0x271)+_0x324f3f];_0x56669b&&(_0x35701e[_0x578825(0x1b9)]=_0x35701e[_0x578825(0x1b9)]+0x1),_0x35701e[_0x578825(0x26f)]=!!_0x56669b;var _0x2b0e0f=typeof _0x378483==_0x578825(0x20f),_0x4160d4={'name':_0x2b0e0f||_0x1faa59?_0x40331c:this['_propertyName'](_0x40331c)};if(_0x2b0e0f&&(_0x4160d4[_0x578825(0x20f)]=!0x0),!(_0x36129e===_0x578825(0x223)||_0x36129e===_0x578825(0x21f))){var _0x14829a=this[_0x578825(0x1f9)](_0x5603b,_0x378483);if(_0x14829a&&(_0x14829a[_0x578825(0x237)]&&(_0x4160d4[_0x578825(0x235)]=!0x0),_0x14829a[_0x578825(0x1dc)]&&!_0x56669b&&!_0x35701e[_0x578825(0x239)]))return _0x4160d4[_0x578825(0x1e1)]=!0x0,this[_0x578825(0x1cf)](_0x4160d4,_0x35701e),_0x4160d4;}var _0x421568;try{_0x421568=_0x2d97c3(_0x5603b,_0x378483);}catch(_0x38e589){return _0x4160d4={'name':_0x40331c,'type':'unknown','error':_0x38e589[_0x578825(0x20c)]},this[_0x578825(0x1cf)](_0x4160d4,_0x35701e),_0x4160d4;}var _0x6cb4a2=this['_type'](_0x421568),_0x5eb72a=this[_0x578825(0x1bd)](_0x6cb4a2);if(_0x4160d4['type']=_0x6cb4a2,_0x5eb72a)this[_0x578825(0x1cf)](_0x4160d4,_0x35701e,_0x421568,function(){var _0xbb1a1c=_0x578825;_0x4160d4['value']=_0x421568['valueOf'](),!_0x56669b&&_0x5703a5[_0xbb1a1c(0x1f1)](_0x6cb4a2,_0x4160d4,_0x35701e,{});});else{var _0x207753=_0x35701e[_0x578825(0x27f)]&&_0x35701e[_0x578825(0x1d1)]<_0x35701e['autoExpandMaxDepth']&&_0x35701e[_0x578825(0x225)][_0x578825(0x28a)](_0x421568)<0x0&&_0x6cb4a2!=='function'&&_0x35701e[_0x578825(0x285)]<_0x35701e[_0x578825(0x265)];_0x207753||_0x35701e['level']<_0x20f313||_0x56669b?(this[_0x578825(0x25a)](_0x4160d4,_0x421568,_0x35701e,_0x56669b||{}),this[_0x578825(0x1d0)](_0x421568,_0x4160d4)):this[_0x578825(0x1cf)](_0x4160d4,_0x35701e,_0x421568,function(){var _0x25a69f=_0x578825;_0x6cb4a2===_0x25a69f(0x294)||_0x6cb4a2==='undefined'||(delete _0x4160d4[_0x25a69f(0x1c7)],_0x4160d4[_0x25a69f(0x25c)]=!0x0);});}return _0x4160d4;}finally{_0x35701e[_0x578825(0x1e2)]=_0x3f0099,_0x35701e[_0x578825(0x1b9)]=_0x20f313,_0x35701e['isExpressionToEvaluate']=_0x8a4894;}}[_0x497190(0x1f1)](_0x383034,_0x2bac95,_0x3c4b47,_0x391693){var _0x3d9c81=_0x497190,_0xf6a594=_0x391693[_0x3d9c81(0x1e8)]||_0x3c4b47['strLength'];if((_0x383034===_0x3d9c81(0x22a)||_0x383034===_0x3d9c81(0x26c))&&_0x2bac95[_0x3d9c81(0x1c7)]){let _0x3f4c2c=_0x2bac95[_0x3d9c81(0x1c7)][_0x3d9c81(0x273)];_0x3c4b47[_0x3d9c81(0x206)]+=_0x3f4c2c,_0x3c4b47[_0x3d9c81(0x206)]>_0x3c4b47['totalStrLength']?(_0x2bac95['capped']='',delete _0x2bac95['value']):_0x3f4c2c>_0xf6a594&&(_0x2bac95['capped']=_0x2bac95[_0x3d9c81(0x1c7)]['substr'](0x0,_0xf6a594),delete _0x2bac95['value']);}}[_0x497190(0x256)](_0x4ed1a1){var _0x20f122=_0x497190;return!!(_0x4ed1a1&&_0x520827['Map']&&this[_0x20f122(0x278)](_0x4ed1a1)===_0x20f122(0x20e)&&_0x4ed1a1[_0x20f122(0x1de)]);}[_0x497190(0x21b)](_0x2e3654){var _0x5d16f2=_0x497190;if(_0x2e3654[_0x5d16f2(0x263)](/^\\d+$/))return _0x2e3654;var _0x2332bb;try{_0x2332bb=JSON[_0x5d16f2(0x247)](''+_0x2e3654);}catch{_0x2332bb='\\x22'+this[_0x5d16f2(0x278)](_0x2e3654)+'\\x22';}return _0x2332bb[_0x5d16f2(0x263)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2332bb=_0x2332bb[_0x5d16f2(0x298)](0x1,_0x2332bb[_0x5d16f2(0x273)]-0x2):_0x2332bb=_0x2332bb[_0x5d16f2(0x1fb)](/'/g,'\\x5c\\x27')[_0x5d16f2(0x1fb)](/\\\\\"/g,'\\x22')[_0x5d16f2(0x1fb)](/(^\"|\"$)/g,'\\x27'),_0x2332bb;}[_0x497190(0x1cf)](_0x4f849b,_0x18ff33,_0x5c9f5d,_0x3570e5){var _0x345494=_0x497190;this['_treeNodePropertiesBeforeFullValue'](_0x4f849b,_0x18ff33),_0x3570e5&&_0x3570e5(),this[_0x345494(0x1d0)](_0x5c9f5d,_0x4f849b),this[_0x345494(0x242)](_0x4f849b,_0x18ff33);}[_0x497190(0x1c1)](_0xe00747,_0x4a4d16){var _0x1b870a=_0x497190;this[_0x1b870a(0x29f)](_0xe00747,_0x4a4d16),this[_0x1b870a(0x289)](_0xe00747,_0x4a4d16),this[_0x1b870a(0x1cb)](_0xe00747,_0x4a4d16),this[_0x1b870a(0x1fe)](_0xe00747,_0x4a4d16);}['_setNodeId'](_0x50e02d,_0x568fd4){}[_0x497190(0x289)](_0x11a0bd,_0x222723){}[_0x497190(0x213)](_0x25fe69,_0x2373fa){}[_0x497190(0x244)](_0x282753){var _0x29cd20=_0x497190;return _0x282753===this[_0x29cd20(0x262)];}[_0x497190(0x242)](_0xa8bfff,_0x32f524){var _0x2b738f=_0x497190;this[_0x2b738f(0x213)](_0xa8bfff,_0x32f524),this[_0x2b738f(0x26d)](_0xa8bfff),_0x32f524['sortProps']&&this[_0x2b738f(0x250)](_0xa8bfff),this['_addFunctionsNode'](_0xa8bfff,_0x32f524),this[_0x2b738f(0x20a)](_0xa8bfff,_0x32f524),this[_0x2b738f(0x1ff)](_0xa8bfff);}['_additionalMetadata'](_0x1658cc,_0x33137b){var _0xa34bad=_0x497190;try{_0x1658cc&&typeof _0x1658cc[_0xa34bad(0x273)]==_0xa34bad(0x254)&&(_0x33137b['length']=_0x1658cc[_0xa34bad(0x273)]);}catch{}if(_0x33137b[_0xa34bad(0x1c0)]===_0xa34bad(0x254)||_0x33137b[_0xa34bad(0x1c0)]===_0xa34bad(0x236)){if(isNaN(_0x33137b[_0xa34bad(0x1c7)]))_0x33137b[_0xa34bad(0x245)]=!0x0,delete _0x33137b['value'];else switch(_0x33137b[_0xa34bad(0x1c7)]){case Number[_0xa34bad(0x234)]:_0x33137b[_0xa34bad(0x24e)]=!0x0,delete _0x33137b['value'];break;case Number[_0xa34bad(0x1db)]:_0x33137b[_0xa34bad(0x224)]=!0x0,delete _0x33137b[_0xa34bad(0x1c7)];break;case 0x0:this['_isNegativeZero'](_0x33137b['value'])&&(_0x33137b[_0xa34bad(0x282)]=!0x0);break;}}else _0x33137b['type']===_0xa34bad(0x27b)&&typeof _0x1658cc[_0xa34bad(0x216)]==_0xa34bad(0x22a)&&_0x1658cc[_0xa34bad(0x216)]&&_0x33137b['name']&&_0x1658cc[_0xa34bad(0x216)]!==_0x33137b[_0xa34bad(0x216)]&&(_0x33137b[_0xa34bad(0x288)]=_0x1658cc[_0xa34bad(0x216)]);}[_0x497190(0x1ca)](_0x5b8c1d){var _0x1440ea=_0x497190;return 0x1/_0x5b8c1d===Number[_0x1440ea(0x1db)];}['_sortProps'](_0x42f6a2){var _0x5a9795=_0x497190;!_0x42f6a2[_0x5a9795(0x220)]||!_0x42f6a2[_0x5a9795(0x220)][_0x5a9795(0x273)]||_0x42f6a2[_0x5a9795(0x1c0)]==='array'||_0x42f6a2[_0x5a9795(0x1c0)]==='Map'||_0x42f6a2[_0x5a9795(0x1c0)]==='Set'||_0x42f6a2[_0x5a9795(0x220)][_0x5a9795(0x21d)](function(_0x1dfdb6,_0x5539f8){var _0x58c729=_0x5a9795,_0x162fca=_0x1dfdb6[_0x58c729(0x216)]['toLowerCase'](),_0x284cb5=_0x5539f8[_0x58c729(0x216)][_0x58c729(0x22b)]();return _0x162fca<_0x284cb5?-0x1:_0x162fca>_0x284cb5?0x1:0x0;});}[_0x497190(0x1d3)](_0x247f12,_0x161ecd){var _0x20b6e3=_0x497190;if(!(_0x161ecd[_0x20b6e3(0x284)]||!_0x247f12['props']||!_0x247f12[_0x20b6e3(0x220)][_0x20b6e3(0x273)])){for(var _0x19142c=[],_0x5ae314=[],_0x35a97b=0x0,_0x34cb3b=_0x247f12[_0x20b6e3(0x220)][_0x20b6e3(0x273)];_0x35a97b<_0x34cb3b;_0x35a97b++){var _0x407a29=_0x247f12[_0x20b6e3(0x220)][_0x35a97b];_0x407a29[_0x20b6e3(0x1c0)]===_0x20b6e3(0x27b)?_0x19142c[_0x20b6e3(0x23e)](_0x407a29):_0x5ae314[_0x20b6e3(0x23e)](_0x407a29);}if(!(!_0x5ae314[_0x20b6e3(0x273)]||_0x19142c[_0x20b6e3(0x273)]<=0x1)){_0x247f12[_0x20b6e3(0x220)]=_0x5ae314;var _0x5db8da={'functionsNode':!0x0,'props':_0x19142c};this['_setNodeId'](_0x5db8da,_0x161ecd),this[_0x20b6e3(0x213)](_0x5db8da,_0x161ecd),this['_setNodeExpandableState'](_0x5db8da),this[_0x20b6e3(0x1fe)](_0x5db8da,_0x161ecd),_0x5db8da['id']+='\\x20f',_0x247f12['props'][_0x20b6e3(0x1f0)](_0x5db8da);}}}[_0x497190(0x20a)](_0x382ef0,_0x1d8840){}[_0x497190(0x26d)](_0x54b14a){}[_0x497190(0x29c)](_0x47bc00){var _0x40ebc0=_0x497190;return Array[_0x40ebc0(0x287)](_0x47bc00)||typeof _0x47bc00=='object'&&this[_0x40ebc0(0x278)](_0x47bc00)==='[object\\x20Array]';}['_setNodePermissions'](_0x564807,_0x5c6386){}[_0x497190(0x1ff)](_0x83f79d){var _0x128e4d=_0x497190;delete _0x83f79d[_0x128e4d(0x257)],delete _0x83f79d[_0x128e4d(0x269)],delete _0x83f79d['_hasMapOnItsPath'];}[_0x497190(0x1cb)](_0x3b73cf,_0x441d89){}[_0x497190(0x258)](_0x2ec3c5){var _0x3981ea=_0x497190;return _0x2ec3c5?_0x2ec3c5['match'](this[_0x3981ea(0x204)])?'['+_0x2ec3c5+']':_0x2ec3c5[_0x3981ea(0x263)](this[_0x3981ea(0x1ef)])?'.'+_0x2ec3c5:_0x2ec3c5[_0x3981ea(0x263)](this[_0x3981ea(0x27e)])?'['+_0x2ec3c5+']':'[\\x27'+_0x2ec3c5+'\\x27]':'';}}let _0x7e30a3=new _0x585b1f();function _0x5888ef(_0x3c2c8a,_0x164f59,_0x2da2cb,_0x4bb1dd,_0x965ae1,_0x303ae2){var _0x198a80=_0x497190;let _0x5a1db8,_0x49227f;try{_0x49227f=_0x2bcb99(),_0x5a1db8=_0x3b6e55[_0x164f59],!_0x5a1db8||_0x49227f-_0x5a1db8['ts']>0x1f4&&_0x5a1db8[_0x198a80(0x1e6)]&&_0x5a1db8['time']/_0x5a1db8['count']<0x64?(_0x3b6e55[_0x164f59]=_0x5a1db8={'count':0x0,'time':0x0,'ts':_0x49227f},_0x3b6e55['hits']={}):_0x49227f-_0x3b6e55[_0x198a80(0x201)]['ts']>0x32&&_0x3b6e55[_0x198a80(0x201)][_0x198a80(0x1e6)]&&_0x3b6e55[_0x198a80(0x201)][_0x198a80(0x1d6)]/_0x3b6e55[_0x198a80(0x201)][_0x198a80(0x1e6)]<0x64&&(_0x3b6e55[_0x198a80(0x201)]={});let _0x1003e9=[],_0x2ddcfc=_0x5a1db8[_0x198a80(0x28c)]||_0x3b6e55[_0x198a80(0x201)][_0x198a80(0x28c)]?_0x1d4687:_0x173575,_0x3bd483=_0x192caf=>{var _0x55f45b=_0x198a80;let _0x43b0a0={};return _0x43b0a0[_0x55f45b(0x220)]=_0x192caf[_0x55f45b(0x220)],_0x43b0a0['elements']=_0x192caf[_0x55f45b(0x21c)],_0x43b0a0[_0x55f45b(0x1e8)]=_0x192caf[_0x55f45b(0x1e8)],_0x43b0a0[_0x55f45b(0x229)]=_0x192caf[_0x55f45b(0x229)],_0x43b0a0['autoExpandLimit']=_0x192caf[_0x55f45b(0x265)],_0x43b0a0[_0x55f45b(0x27a)]=_0x192caf[_0x55f45b(0x27a)],_0x43b0a0[_0x55f45b(0x1fd)]=!0x1,_0x43b0a0[_0x55f45b(0x284)]=!_0x31d7c7,_0x43b0a0[_0x55f45b(0x1b9)]=0x1,_0x43b0a0['level']=0x0,_0x43b0a0[_0x55f45b(0x268)]=_0x55f45b(0x221),_0x43b0a0['rootExpression']=_0x55f45b(0x207),_0x43b0a0[_0x55f45b(0x27f)]=!0x0,_0x43b0a0[_0x55f45b(0x225)]=[],_0x43b0a0[_0x55f45b(0x285)]=0x0,_0x43b0a0[_0x55f45b(0x239)]=!0x0,_0x43b0a0[_0x55f45b(0x206)]=0x0,_0x43b0a0[_0x55f45b(0x292)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x43b0a0;};for(var _0x579544=0x0;_0x579544<_0x965ae1[_0x198a80(0x273)];_0x579544++)_0x1003e9[_0x198a80(0x23e)](_0x7e30a3[_0x198a80(0x25a)]({'timeNode':_0x3c2c8a==='time'||void 0x0},_0x965ae1[_0x579544],_0x3bd483(_0x2ddcfc),{}));if(_0x3c2c8a===_0x198a80(0x260)){let _0x2f2551=Error[_0x198a80(0x1f4)];try{Error[_0x198a80(0x1f4)]=0x1/0x0,_0x1003e9[_0x198a80(0x23e)](_0x7e30a3[_0x198a80(0x25a)]({'stackNode':!0x0},new Error()[_0x198a80(0x1ce)],_0x3bd483(_0x2ddcfc),{'strLength':0x1/0x0}));}finally{Error[_0x198a80(0x1f4)]=_0x2f2551;}}return{'method':_0x198a80(0x20b),'version':_0x1dd21f,'args':[{'ts':_0x2da2cb,'session':_0x4bb1dd,'args':_0x1003e9,'id':_0x164f59,'context':_0x303ae2}]};}catch(_0x245a88){return{'method':_0x198a80(0x20b),'version':_0x1dd21f,'args':[{'ts':_0x2da2cb,'session':_0x4bb1dd,'args':[{'type':_0x198a80(0x226),'error':_0x245a88&&_0x245a88[_0x198a80(0x20c)]}],'id':_0x164f59,'context':_0x303ae2}]};}finally{try{if(_0x5a1db8&&_0x49227f){let _0x690d71=_0x2bcb99();_0x5a1db8[_0x198a80(0x1e6)]++,_0x5a1db8['time']+=_0x5345db(_0x49227f,_0x690d71),_0x5a1db8['ts']=_0x690d71,_0x3b6e55[_0x198a80(0x201)][_0x198a80(0x1e6)]++,_0x3b6e55['hits'][_0x198a80(0x1d6)]+=_0x5345db(_0x49227f,_0x690d71),_0x3b6e55[_0x198a80(0x201)]['ts']=_0x690d71,(_0x5a1db8[_0x198a80(0x1e6)]>0x32||_0x5a1db8[_0x198a80(0x1d6)]>0x64)&&(_0x5a1db8[_0x198a80(0x28c)]=!0x0),(_0x3b6e55[_0x198a80(0x201)][_0x198a80(0x1e6)]>0x3e8||_0x3b6e55[_0x198a80(0x201)][_0x198a80(0x1d6)]>0x12c)&&(_0x3b6e55[_0x198a80(0x201)]['reduceLimits']=!0x0);}}catch{}}}return _0x520827[_0x497190(0x1da)];})(globalThis,'127.0.0.1',_0x39dd8e(0x1ec),\"c:\\\\Users\\\\jordi\\\\.vscode-insiders\\\\extensions\\\\wallabyjs.console-ninja-0.0.156\\\\node_modules\",_0x39dd8e(0x1ba),_0x39dd8e(0x217),_0x39dd8e(0x28d),_0x39dd8e(0x248),_0x39dd8e(0x1cc));");
}
catch (e) { } }
;
function oo_oo(i, ...v) { try {
    oo_cm().consoleLog(i, v);
}
catch (e) { } return v; }
;
oo_oo;
function oo_tr(i, ...v) { try {
    oo_cm().consoleTrace(i, v);
}
catch (e) { } return v; }
;
oo_tr;
function oo_ts() { try {
    oo_cm().consoleTime();
}
catch (e) { } }
;
oo_ts;
function oo_te() { try {
    oo_cm().consoleTimeEnd();
}
catch (e) { } }
;
oo_te; /*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/client.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=client.js.map