$(() => {
  $(".show-full-peer-id").click(event => {
    $(".show-full-peer-id").text($(".show-full-peer-id").first().text() == "»" ? "«" : "»");
    $(".short-peer-id, .peer-id").toggle();
    event.preventDefault();
  });
  $(".toggle-rps-details").click(event => {
    $(".toggle-rps-details").text($(".toggle-rps-details").first().text() == "»" ? "«" : "»");
    $(".rps-details").toggle();
    event.preventDefault();
  });

  $(".explain-public-name").click(event => {
    alert(
      "Important Notice:\n\n" +
      "⚠️ Servers with offensive names or links to inappropriate/illegal content will be banned."
    );

    event.preventDefault();
  });
  $(".explain-compute-rps").click(event => {
    alert(
      'Compute throughput, measured in tokens/sec per block. ' +
      'Used for routing requests and load balancing servers between blocks.'
    );
    event.preventDefault();
  });
  $(".explain-network-rps").click(event => {
    alert(
      'Network throughput, measured in tokens/sec. ' +
      'Used for routing requests and load balancing servers between blocks.'
    );
    event.preventDefault();
  });
  $(".explain-precision").click(event => {
    alert(
      'This column displays the Torch data type utilized for computation and ' +
      'the quantization mode employed for storing compressed weights.'

       
    );
    event.preventDefault();
  });
  $(".explain-adapters").click(event => {
    alert(
      'This column shows LoRA adapters pre-loaded by the server. ' +
      'A client may use one of these adapters if it wants to.\n\n'
    );
    event.preventDefault();
  });
  $(".explain-cache").click(event => {
    alert(
      "This column displays the number of available attention cache tokens (per block).\n\n " +
      "If the count is low, inference requests may experience delays or be rejected."
    );    
    event.preventDefault();
  });
  $(".explain-avl").click(event => {
    alert(
      'This column shows whether a server is reachable directly or ' +
      'we need to use libp2p relays to traverse NAT/firewalls and reach it. ' +
      'Servers available through relays are usually slower, ' +
      'so we don\'t store DHT keys on them.'
    );
    event.preventDefault();
  });
  $(".explain-pings").click(event => {
    alert(
      'Press show to see round trip times (pings) from this server to next ones ' +
      'in a potential chain. This is used to find the fastest chain for inference.'
    );
    event.preventDefault();
  });

  $('.ping .show').click(function (e) {
    e.preventDefault();

    $('.ping .show').hide();
    $(this).siblings('.hide').show();
    $(`.ping .rtt[data-source-id=${$(this).parent().data("peer-id")}]`).show();
  });
  $('.ping .hide').click(function (e) {
    e.preventDefault();

    $('.ping .hide, .ping .rtt').hide();
    $('.ping .show').show();
  });
});
