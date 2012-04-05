# 概要
遅いテストを発見するためのQUnitアドオンです。  
ChromeとFirefoxでしか動作確認していません。

# 使い方
QUnitのロード後、テストの開始前のタイミングでqunit-measure.jsをロードして下さい。  
テスト完了後、実行に時間がかかった順ランキングがConsole APIで出力されます。
