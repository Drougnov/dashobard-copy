<?php
/**
 * Template part: Dashboard: Messages page
 *linkdiscussion
 * These parameters are declared before calling the template:
 * @param string $fansocial_role The role associated with the social fan.
 * @param int    $user_id        The ID of the user.
 */
?>
<link rel="stylesheet" href="https://fs.codelinden.com/wp-content/plugins/fansocial/assets/css/chatStyles.css" />
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css?family=Montserrat"
/>
<!-- Section outer wrapper -->
<section class="unq_lwRah YEFiA gsCWf zaSgn KIZab">

	<!-- Inner container -->
	<div class="eLfwd uOVQT">
    <div data-uid="125" class="chatContainer">
        <section class="discussions" id="discussions">
          <div class="discussion search">
            <div class="searchbar">
              <i class="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Search..." class="search-input" />
            </div>
          </div>
          <div class="archiveChats">
            <div class="archiveSpan">
              <span  onclick="showHideArchiveChats()">Show Archive Chats</span>
            </div>
            <div class="archiveDiscussions" style="display: none;">
            </div>
          </div>
          <div class="normalChats"></div>
          <!-- ------ -->

          <!-- ------ -->
        </section>
        <section hidden class="chat">
          <div class="header-chat">
            <i
              onclick="back()"
              class="back-icon icon fa fa-arrow-left"
              aria-hidden="true"
            ></i>
            <i class="icon fa fa-user-o" aria-hidden="true"></i>
            <div class="chat-info">
              <p id="chat-user" class="chat-name name"></p>
              <div class="chat-info__middle">
                <span id="chat-info__timer" class="chat-info__timer"></span>
                <p id="chat-info__title" class="chat-info__title"></p>
              </div>
            </div>
          </div>
          <div id="header__tags" class="header-tags tags"></div>

          <div class="messages-chat" id="messages-chat">
            <!-- ------ -->

            <!-- ------ -->
          </div>
          <p class="tpying-staus" hidden></p>
          <form class="footer-chat">
            <div class="emoji-btn-container">
              <div class="emoji-btn" aria-hidden="true" id="emoji-button"></div> <!-- emoji picker default icon container -->
              <div class="emoji-wrapper"> <!-- custom emoji icon container -->
                <i
                  class="icon fa fa-smile-o clickable"
                  style="font-size: 22pt"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            
            <input
              type="text"
              id="message-text"
              class="write-message emoji-input"
              placeholder="Type your message here"
            />
            <div class="send-btn" onclick="sendMessage(true)" aria-hidden="true">
              <div class="svg-wrapper">
              <svg class="icon-send" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-name="Layer 1" viewBox="0 0 24 24" role="img">
                <polygon fill="none" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" points="21 12 3 3.5 7 12 3 20.5 21 12"></polygon>
                <line x1="21" x2="7" y1="12" y2="12" fill="none" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></line>
              </svg>
              </div>
            </div>
            <!-- <button class="send-btn" onclick="sendMessage(true)">
              <i class="icon send fa fa-paper-plane-o clickablet" aria-hidden="true"></i>
              <span>send</span>
            </button> -->
          </form>
        </section>
      </div>

    </div>
  </div>

</section>

<script src="https://fs.codelinden.com/wp-content/plugins/fansocial/assets/js/socket.js"></script>
<script src="https://fs.codelinden.com/wp-content/plugins/fansocial/assets/js/chatScripts.js"></script>
<!-- emoji picker script -->
<script src="https://cdn.jsdelivr.net/npm/emoji-button@0.6.0/dist/index.min.js"></script>



<!-- /opt/lampp/htdocs/chat-app$ sudo cp /home/jit5/Desktop/chat-app/chatStyles.css ./ -->