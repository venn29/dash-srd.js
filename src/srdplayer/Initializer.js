/* 
 * Copyright (c) 2015, jorritvandenberg
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

// Global variables
var SRDPlayer,
    videoContainer,
    bannerbox,
    frameRate,
    frontBackLayer,
    zoomLayer1,
    zoomLayer2,
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    zoomLayer1VideoElements,
    zoomLayer2VideoElements,
    visibleElement,
    zoomLayer1PlayerObjects,
    zoomLayer2PlayerObjects,
    playbackControls,
    getClickPositionEnabled,
    mpdURL,
    inMPD,
    currentZoomLevel,
    maxZoomLevel,
    zoomLayer1Status,
    fullScreenFlag,
    timeUpdateIntervals,
    contentAspectRatio,
    contentWidth,
    contentHeight,
    screenAspectRatio;
    
$(document).ready(function() {
    SRDPlayer = document.getElementById("SRDPlayer");
    videoContainer = document.getElementById("videoContainer");
    bannerbox = document.getElementById("bannerbox");
    frontBackLayer = document.getElementById("frontBackLayer");
    zoomLayer1 = document.getElementById("zoomLayer1");
    zoomLayer2 = document.getElementById("zoomLayer2");
    video1 = document.getElementById("video1");
    video2 = document.getElementById("video2");
    video3 = document.getElementById("video3");
    video4 = document.getElementById("video4");
    video5 = document.getElementById("video5");
    video6 = document.getElementById("video6");
    video7 = document.getElementById("video7");
    video8 = document.getElementById("video8");
    playbackControls = document.getElementById("playbackControls");

    zoomLayer1VideoElements = [video1, video2, video3, video4];
    zoomLayer2VideoElements = [video5, video6, video7, video8];  
    zoomLayer1PlayerObjects = [];
    zoomLayer2PlayerObjects = [];
    
    frontBackLayer.style.visibility = 'visible';
    zoomLayer1.style.visibility = 'hidden';
    zoomLayer2.style.visibility = 'hidden';    
    
    video1.muted = true;
    video2.muted = true;
    video3.muted = true;
    video4.muted = true;
    video5.muted = true;
    video6.muted = true;
    video7.muted = true;
    video8.muted = true;
    getClickPositionEnabled = false;
    zoomLayer1Status = null;
    fullScreenFlag = false;
    timeUpdateIntervals = {Firefox: 250, Chrome:250, Safari:250, Opera: 250, IE:250};
    screenAspectRatio = screen.width / screen.height;
    
    SynchroniseVideos();
});