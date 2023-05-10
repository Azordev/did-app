
package org.azordev.did.app;
import static android.content.ContentValues.TAG;

import android.net.http.SslError;
import android.util.Log;
import android.webkit.SslErrorHandler;
import android.webkit.WebView;
import com.getcapacitor.Bridge;
import com.getcapacitor.BridgeWebViewClient;

public class EnableHttpsSelfSigned {
  public static void enable(Bridge bridge) {
    bridge.getWebView().setWebViewClient(new BridgeWebViewClient(bridge) {
      @Override
      public void onReceivedSslError(WebView view, final SslErrorHandler handler, SslError error) {
        String message = "SSL Certificate error.";
        switch (error.getPrimaryError()) {
          case SslError.SSL_UNTRUSTED:
            message = "The certificate authority is not trusted.";
            break;
          case SslError.SSL_EXPIRED:
            message = "The certificate has expired.";
            break;
          case SslError.SSL_IDMISMATCH:
            message = "The certificate Hostname mismatch.";
            break;
          case SslError.SSL_NOTYETVALID:
            message = "The certificate is not yet valid.";
            break;
        }
        message += "\"SSL Certificate Error\" Do you want to continue anyway?.. YES";

        handler.proceed();

        String onReceivedSslError = "+ message";
        Log.e(TAG, onReceivedSslError);
      }
    });
  }
}
